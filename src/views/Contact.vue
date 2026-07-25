<template lang="pug">
.contact-page.height-minus-footer.flex.flex-col
  .container.mx-auto.px-4.py-16.flex-grow
    .max-w-2xl.mx-auto
      h1.text-4xl.font-bold.mb-8.text-center.mt-8 {{ $t('contact.title') }}
      div(class="bg-white/65 backdrop-filter backdrop-blur-xl backdrop-saturate-150 rounded-3xl shadow-glass border border-white/70 p-8 mb-8")
        form.space-y-6(@submit.prevent="submitForm")
          // Nome
          .form-group
            label.block.text-gray-700.font-medium.mb-2(for="name") {{ $t('contact.form.name') }}
            input#name.w-full.px-4.py-2.border.border-gray-200.rounded-xl.transition-shadow.focus_border-primary-500.focus_ring-2.focus_ring-primary-200.focus_outline-none(
              type="text"
              v-model="formData.name"
              :placeholder="$t('contact.form.namePlaceholder')"
              required
            )

          // Telefone
          .form-group
            label.block.text-gray-700.font-medium.mb-2(for="phone") {{ $t('contact.form.phone') }}
            input#phone.w-full.px-4.py-2.border.border-gray-200.rounded-xl.transition-shadow.focus_border-primary-500.focus_ring-2.focus_ring-primary-200.focus_outline-none(
              type="tel"
              v-model="formData.phone"
              :placeholder="$t('contact.form.phonePlaceholder')"
              required
            )

          // Email
          .form-group
            label.block.text-gray-700.font-medium.mb-2(for="email") {{ $t('contact.form.email') }}
            input#email.w-full.px-4.py-2.border.border-gray-200.rounded-xl.transition-shadow.focus_border-primary-500.focus_ring-2.focus_ring-primary-200.focus_outline-none(
              type="email"
              v-model="formData.email"
              :placeholder="$t('contact.form.emailPlaceholder')"
              required
            )

          // Mensagem
          .form-group
            label.block.text-gray-700.font-medium.mb-2(for="message") {{ $t('contact.form.message') }}
            textarea#message.w-full.px-4.py-2.border.border-gray-200.rounded-xl.transition-shadow.focus_border-primary-500.focus_ring-2.focus_ring-primary-200.focus_outline-none(class="min-h-[150px]"
              v-model="formData.message"
              :placeholder="$t('contact.form.messagePlaceholder')"
              required
            )

          // Botão de envio
          .form-group.text-center
            Button.px-6.py-3.text-lg.font-medium.w-full.md_w-auto(
              variant="primary"
              type="submit"
              :disabled="isSubmitting"
            )
              | {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.submit') }}
        
        // Mensagem de sucesso ou erro
        .mt-6.text-center(v-if="formStatus")
          .p-4.rounded-lg(
            :class="formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
          ) {{ formStatus.message }}
</template>

<script>
import { detectBrowser, getDeviceInfo } from '../services/tracking'
import Button from '@/components/ui/Button.vue'

export default {
  name: 'Contact',
  components: {
    Button
  },
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      formStatus: null
    }
  },
  methods: {
    // Método para obter informações do dispositivo
    getDeviceInfo(...args) {
      return getDeviceInfo.call(this, ...args)
    },

    // Método para detectar o navegador
    detectBrowser(...args) {
      return detectBrowser.call(this, ...args)
    },

    async submitForm() {
      this.isSubmitting = true
      this.formStatus = null

      try {
        // Adicionar timestamp e informações adicionais ao envio
        const deviceInfo = this.getDeviceInfo()
        const payload = {
          ...this.formData,
          timestamp: new Date().toISOString(),
          device: deviceInfo.device,
          browser: deviceInfo.browser,
          currentPage: this.$route.path
        }

        const response = await fetch(
          'https://victoraurelio-736449130143.us-central1.run.app/webhooks/contact-message',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }
        )

        if (response.ok) {
          this.formStatus = {
            type: 'success',
            message: this.$t('contact.form.successMessage')
          }
          // Limpar o formulário após envio bem-sucedido
          this.formData = {
            name: '',
            phone: '',
            email: '',
            message: ''
          }
        } else {
          this.formStatus = {
            type: 'error',
            message: this.$t('contact.form.errorMessage')
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

<style scoped>
.form-group {
  margin-bottom: 1.5rem;
}

/*
 * Focus styling now lives entirely in the template as Windi utilities
 * (focus_border-primary-500 focus_ring-2 focus_ring-primary-200) so the
 * soft ring matches the rest of the "primary" institutional blue scale -
 * no ad hoc focus CSS needed here anymore.
 */
</style>
