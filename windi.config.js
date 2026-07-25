module.exports = {
  separator: '_',
  theme: {
    extend: {
      // System-blue scale (liquid glass redesign) - a more vivid, modern
      // blue in the spirit of Apple's iOS/macOS system blue, replacing the
      // older institutional blue (#2563eb) from the previous polish pass.
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#b8dcff',
          300: '#85c4ff',
          400: '#4aa3ff',
          500: '#0a84ff',
          600: '#0066e0',
          700: '#0052b3',
          800: '#003d85',
          900: '#002a5c'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'Helvetica', 'Arial', 'sans-serif']
      },
      // Softer, more editorial shadows than Windi/Tailwind's default
      // shadow-sm/md/lg scale - low-contrast and diffuse at rest (`soft`),
      // slightly more present on hover/elevation (`elegant`). Used in place
      // of shadow-sm/md/lg across cards and buttons.
      boxShadow: {
        soft: '0 2px 20px -4px rgba(15, 23, 42, 0.08)',
        elegant: '0 12px 32px -8px rgba(15, 23, 42, 0.14)',
        // Liquid-glass shadow: a diffuse ambient shadow tinted with the new
        // system blue, plus an inset highlight along the top edge that
        // simulates light catching the rim of a glass panel. Used on every
        // translucent/backdrop-blur surface across the site so they read as
        // one coherent "glass" system instead of one-off cards.
        glass:
          '0 8px 32px -8px rgba(10, 132, 255, 0.16), 0 1px 1px 0 rgba(15, 23, 42, 0.04), inset 0 1px 0 0 rgba(255, 255, 255, 0.7)'
      }
    }
  }
}
