<template lang="pug">
button.transition-all.duration-200.disabled_opacity-60.disabled_cursor-not-allowed(:class="variantClasses")
  slot
</template>

<script>
// Unified button component. Owns only color/variant + shared interactive
// states (hover/disabled). Sizing, padding, radius and typography stay with
// each call site via passthrough classes so we never fight utility-class
// specificity between this component and its consumers.
export default {
  name: 'UiButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'neutral'].includes(value)
    }
  },
  computed: {
    variantClasses() {
      const variants = {
        // System blue - for action CTAs (Agendar reunião / Enviar). Pill
        // shape + the new liquid-glass shadow (ambient blue glow + inset
        // top highlight, see boxShadow.glass in windi.config.js) on hover.
        // The `btn-glass-primary` class (below) layers a subtle top-to-
        // transparent white highlight over the solid color so the button
        // itself reads as glossy/glass rather than a flat fill.
        primary:
          'btn-glass-primary text-white bg-primary-600 hover_bg-primary-700 rounded-full shadow-soft hover_shadow-glass',
        // Neutral - for secondary/navigation actions (Voltar, etc.). Real
        // glass: translucent white + backdrop blur + a light rim border,
        // with dark text for legibility. Less rounded than primary so the
        // hierarchy between "do the action" and "go somewhere else" stays
        // visually clear.
        neutral:
          'text-gray-800 bg-white/60 backdrop-filter backdrop-blur-md backdrop-saturate-150 border border-white/70 hover_bg-white/80 rounded-xl shadow-soft hover_shadow-glass'
      }
      return variants[this.variant] || variants.primary
    }
  }
}
</script>

<style scoped>
/*
 * Glass highlight for the primary button: a soft white-to-transparent
 * sheen across the top third, layered over the solid primary-600/700
 * background set via Windi utilities above. Mirrors the inset highlight in
 * boxShadow.glass so solid and translucent surfaces feel like the same
 * material.
 */
.btn-glass-primary {
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0) 60%
  );
  background-blend-mode: overlay;
}
</style>
