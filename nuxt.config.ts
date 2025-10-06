export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  $development: {
    devtools: { enabled: false }
  },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['/public/assets/main.scss'],
  app: {
    head: {
      charset: 'utf-8',
      title: 'Горнолыжная школа «Скиинг» — тренировки и туры',
      meta: [
        {
          name: 'description',
          content:
            'Горнолыжные туры и курсы: тренировки в Домбае, Красной Поляне и Шерегеше, индивидуальные и групповые программы для новичков и продвинутых райдеров.'
        },
        {
          name: 'keywords',
          content:
            'горнолыжная школа, обучение катанию на лыжах, курсы сноуборда, горнолыжные туры, Домбай, Красная Поляна, Шерегеш'
        },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Горнолыжная школа «Скиинг»' },
        {
          property: 'og:description',
          content:
            'Организуем горнолыжные туры и обучающие программы с сертифицированными инструкторами. Безопасность, прогресс и впечатления на склонах.'
        },
        { property: 'og:image', content: '/img/favicon.png' },
        { property: 'og:url', content: 'https://your-site.com' }
      ],
      link: [
        { rel: 'icon', href: '/img/favicon.ico?v=1' },
        { rel: 'apple-touch-icon', href: '/img/favicon.png' },
        { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }
      ]
    }
  },
  sitemap: {
    hostname: 'https://your-site.com',
    routes: ['/MagazinePage', '/SkiPage', '/SnowboardPage']
  }
})
