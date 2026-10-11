<template>
  <svg
    class="app-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true">
    <path :d="paths[name] || paths.arrow" />
  </svg>
</template>

<script>
const paths = {
  arrow: 'M4 12h16m-6-6 6 6-6 6',
  external: 'M6 18 18 6M6 6h12v12',
  down: 'm6 9 6 6 6-6',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'm6 6 12 12M6 18 18 6',
  globe:
    'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z',
  pin: 'M19 10c0 6-7 11-7 11S5 16 5 10a7 7 0 1 1 14 0Zm-4 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  clock: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 7v5l3 2',
  mail: 'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm-1 1 9 7 9-7',
  layers: 'm12 3 10 6-10 6L2 9l10-6ZM2 13l10 6 10-6M2 17l10 6 10-6',
  cloud: 'M7 18h11a4 4 0 1 0-.6-8A6 6 0 0 0 6 8a5 5 0 0 0 1 10Z',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18',
  spark: 'm12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8L12 2Z',
  check: 'm5 12 4 4L19 6'
}

export default {
  props: { name: { type: String, default: 'arrow' } },
  data: () => ({ paths })
}
</script>
