module.exports = {
  title: ' ',
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://github.com/observablehq/inspector/blob/master/src/style.css"
      }
    ]
  ],
  scss: { // this configuration required for color preset using in theme
    data: '@import "@theme/styles/global-variables.scss";'
  },
  theme: '@vuepress/blog',
  themeConfig: {
    logo: 'http://datamonkey.org/assets/img/header-logo.svg',
    search: false,
    nav: [ // setting global header nav items
      {
        text: 'COVID-19', // display context on menu
        link: '/' // link
      }, // if want more, add like this
      {
        text: 'Datamonkey', // display context on menu
        link: 'http://datamonkey.org' // link
      }, // if want more, add like this
      {
        text: 'HyPhy', // display context on menu
        link: 'http://hyphy.org' // link
      }, // if want more, add like this
    ],
     directories:[
       {
         id: 'post',
         dirname: '_posts',
         path: '/',
         itemPermalink: '/:year/:month/:day/:slug',
       }
     ],
    github: 'github.com/veg/', // if want add github icon, write username or repository id(example, mAKEkr or mAKEkr/vuepress-theme-typewriter)
    comment: { // support utteranc.es comment service based on github issue. if this value(comment) dosen't exists, theme is considered unavailable for comment service.
      // support repo, issue-term and theme setting.
      'repo': 'veg/hyphy'
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/veg/',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/hyphy_software',
        },
      ],
    },
  }
}
