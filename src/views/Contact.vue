<template>
  <div class="contact-page site-shell">
    <div class="page-intro">
      <p class="eyebrow">{{ $t('ui.contact.eyebrow') }}</p>
      <h1>{{ $t('ui.contact.title') }}</h1>
      <p>{{ $t('ui.contact.description') }}</p>
    </div>
    <div class="contact-layout">
      <aside class="contact-aside">
        <h2>{{ $t('ui.contact.direct') }}</h2>
        <a class="contact-direct" href="mailto:contact@victoraurelio.com"
          >contact@victoraurelio.com<AppIcon name="external"
        /></a>
        <p class="contact-location">
          <AppIcon name="pin" />{{ $t('infos.location') }}
        </p>
        <div class="meeting-note">
          <h2>{{ $t('ui.contact.meeting') }}</h2>
          <p>{{ $t('ui.contact.meetingDescription') }}</p>
          <RouterLink class="button button-outline" to="/calendar"
            >{{ $t('scheduleMeeting') }}<AppIcon name="external"
          /></RouterLink>
        </div>
      </aside>
      <form
        class="contact-form"
        @submit.prevent="submitForm"
        @input="validationErrorKey = null">
        <p class="form-hint">{{ $t('ui.contact.hint') }}</p>
        <fieldset :disabled="isSubmitting">
          <div class="form-row">
            <div class="form-group">
              <label for="name">{{ $t('contact.form.name') }}</label
              ><input
                id="name"
                v-model="formData.name"
                name="name"
                type="text"
                autocomplete="name"
                :placeholder="$t('contact.form.namePlaceholder')"
                :aria-invalid="validationField === 'name'"
                :aria-describedby="
                  validationField === 'name' ? 'field-error' : undefined
                "
                required />
              <p
                v-if="validationField === 'name'"
                id="field-error"
                class="field-error"
                role="alert">
                {{ $t('ui.contact.validation.' + validationErrorKey) }}
              </p>
            </div>
            <div class="form-group">
              <label for="phone">{{ $t('contact.form.phone') }}</label
              ><input
                id="phone"
                v-model="formData.phone"
                name="phone"
                type="tel"
                autocomplete="tel"
                :placeholder="$t('contact.form.phonePlaceholder')"
                :aria-invalid="validationField === 'phone'"
                :aria-describedby="
                  validationField === 'phone' ? 'field-error' : undefined
                "
                required />
              <p
                v-if="validationField === 'phone'"
                id="field-error"
                class="field-error"
                role="alert">
                {{ $t('ui.contact.validation.' + validationErrorKey) }}
              </p>
            </div>
          </div>
          <div class="form-group">
            <label for="email">{{ $t('contact.form.email') }}</label
            ><input
              id="email"
              v-model="formData.email"
              name="email"
              type="email"
              autocomplete="email"
              :placeholder="$t('contact.form.emailPlaceholder')"
              :aria-invalid="validationField === 'email'"
              :aria-describedby="
                validationField === 'email' ? 'field-error' : undefined
              "
              required />
            <p
              v-if="validationField === 'email'"
              id="field-error"
              class="field-error"
              role="alert">
              {{ $t('ui.contact.validation.' + validationErrorKey) }}
            </p>
          </div>
          <div class="form-group">
            <label for="message">{{ $t('contact.form.message') }}</label
            ><textarea
              id="message"
              v-model="formData.message"
              name="message"
              rows="5"
              :placeholder="$t('contact.form.messagePlaceholder')"
              :aria-invalid="validationField === 'message'"
              :aria-describedby="
                validationField === 'message' ? 'field-error' : undefined
              "
              required></textarea>
            <p
              v-if="validationField === 'message'"
              id="field-error"
              class="field-error"
              role="alert">
              {{ $t('ui.contact.validation.' + validationErrorKey) }}
            </p>
          </div>
          <div class="form-submit">
            <button class="button" type="submit" :disabled="isSubmitting">
              {{
                $t(
                  isSubmitting ? 'contact.form.sending' : 'contact.form.submit'
                )
              }}<AppIcon name="arrow" />
            </button>
            <p>
              {{ $t('ui.contact.privacy') }}
              <RouterLink to="/privacy">{{ $t('footer.privacy') }}</RouterLink>
            </p>
          </div>
        </fieldset>
        <div
          v-if="formStatus"
          class="form-status"
          :class="formStatus.type"
          :role="formStatus.type === 'error' ? 'alert' : 'status'">
          {{ formStatus.message }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { detectBrowser, getDeviceInfo } from '../services/tracking'
import AppIcon from '../components/AppIcon.vue'

const REQUEST_TIMEOUT_MS = 8000
const FIELD_LIMITS = {
  name: 120,
  phone: 40,
  email: 120,
  message: 2000
}

const CONTACT_WEBHOOK =
  import.meta.env.VITE_CONTACT_WEBHOOK ||
  'https://victoraurelio-736449130143.us-central1.run.app/webhooks/contact-message'

const sanitizeText = (value = '', maxLength = 2000) =>
  `${value || ''}`
    .trim()
    .replace(/[ \t]+/g, ' ')
    .slice(0, maxLength)

const isLikelyEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value || '')

const getValidationError = (formData) => {
  if (!formData.name || !formData.name.trim()) {
    return 'nameRequired'
  }

  if (formData.name.length > FIELD_LIMITS.name) {
    return 'nameTooLong'
  }

  if (!formData.phone || !formData.phone.trim()) {
    return 'phoneRequired'
  }

  if (formData.phone.length > FIELD_LIMITS.phone) {
    return 'phoneTooLong'
  }

  if (!formData.email || !formData.email.trim()) {
    return 'emailRequired'
  }

  if (!isLikelyEmail(formData.email)) {
    return 'emailInvalid'
  }

  if (formData.email.length > FIELD_LIMITS.email) {
    return 'emailTooLong'
  }

  if (!formData.message || !formData.message.trim()) {
    return 'messageRequired'
  }

  if (formData.message.length > FIELD_LIMITS.message) {
    return 'messageTooLong'
  }

  return null
}

const buildRequestBody = (formData, deviceInfo) => ({
  name: sanitizeText(formData.name, FIELD_LIMITS.name),
  phone: sanitizeText(formData.phone, FIELD_LIMITS.phone),
  email: sanitizeText(formData.email, FIELD_LIMITS.email),
  message: sanitizeText(formData.message, FIELD_LIMITS.message),
  timestamp: new Date().toISOString(),
  device: deviceInfo.device,
  browser: deviceInfo.browser,
  currentPage:
    (typeof window !== 'undefined' && window.location?.pathname) || '/',
  screen: deviceInfo.screen
})

const postJSON = async (url, body) => {
  const controller = new AbortController()
  const timeout = setTimeout(() => {
    controller.abort()
  }, REQUEST_TIMEOUT_MS)

  try {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      credentials: 'omit',
      signal: controller.signal,
      body: JSON.stringify(body)
    })
  } finally {
    clearTimeout(timeout)
  }
}

export default {
  name: 'Contact',
  components: { AppIcon },
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      formStatus: null,
      validationErrorKey: null
    }
  },
  computed: {
    validationField() {
      return (
        Object.keys(FIELD_LIMITS).find((field) =>
          this.validationErrorKey?.startsWith(field)
        ) || null
      )
    }
  },
  methods: {
    async submitForm() {
      if (this.isSubmitting) return
      this.formStatus = null
      this.validationErrorKey = getValidationError(this.formData)
      if (this.validationErrorKey) {
        this.$nextTick(() =>
          document.getElementById(this.validationField)?.focus()
        )
        return
      }
      this.isSubmitting = true
      for (const field of Object.keys(FIELD_LIMITS)) {
        this.formData[field] = sanitizeText(
          this.formData[field],
          FIELD_LIMITS[field]
        )
      }

      const deviceInfo = getDeviceInfo()
      const payload = buildRequestBody(this.formData, {
        ...deviceInfo,
        browser: detectBrowser()
      })

      try {
        const response = await postJSON(CONTACT_WEBHOOK, payload)
        const responseBody = await response.json().catch(() => null)
        const hasSucceeded = response?.ok

        if (hasSucceeded) {
          this.formStatus = {
            type: 'success',
            message: this.$t('contact.form.successMessage')
          }
          this.formData = {
            name: '',
            phone: '',
            email: '',
            message: ''
          }
        } else {
          this.formStatus = {
            type: 'error',
            message:
              responseBody?.message || this.$t('contact.form.errorMessage')
          }
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        this.formStatus = {
          type: 'error',
          message: this.$t('contact.form.errorMessage')
        }
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>
