# rira-boilerplate


## Packages 

```
  "dependencies": {
    "@nuxt/content": "^1.14.0",
    "core-js": "^3.15.1",
    "nuxt": "^2.15.7",
    "sass": "^1.37.5",
    "sass-loader": "10.1.1",
    "vue-vimeo-player": "^0.2.2", // if vimeo 
    "@nuxtjs/sanity": "^0.10.0", // if sanity 
    "@sanity/client": "^2.16.0", // if sanity 
    "@sanity/image-url": "^0.140.22", // if sanity 
    "sanity-blocks-vue-component": "0.1.0",
  },
  "devDependencies": {
    "@nuxtjs/google-fonts": "^1.3.0",
    "@nuxtjs/style-resources": "^1.2.1",
    "nuxt-gsap-module": "^1.5.0"
  }
```

## Nuxt Config

```
export default {
    target: 'static',
    head: {
        titleTemplate: "%s | Site Name",
        title: 'Site Name',
        htmlAttrs: {
        lang: 'en'
        },
        meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        {
            hid: 'og:image',
            property: 'og:image',
            content: '',
        },
        {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: '',
        }
        ],
        link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    css: ['~/assets/sass/main.scss'],
    plugins: ['~/plugins/router-actions.client', '~/plugins/vimeo.client'],
    components: true,
    buildModules: [
        '@nuxtjs/google-fonts', 'nuxt-gsap-module',
    ],
    modules: [
        '@nuxtjs/style-resources',
        '@nuxt/content',
    ],
    gsap: {
        extraPlugins: {
        scrollTo: true,
        scrollTrigger: true
        }
    },
    googleFonts: {
        prefetch: true,
        preconnect: true,
        families: {
            'Atkinson+Hyperlegible': true,
        },
        display: 'swap'
    },
    styleResources: {
        scss: [
            '~/assets/sass/system/_colors.scss',
            '~/assets/sass/system/_typography.scss',
            '~/assets/sass/system/_layout.scss',
            '~/assets/sass/system/_buttons.scss'
        ],
        hoistUseStatements: true  
    },
    build: {
        extractCSS: true,
        loaders: {
        limit: 0,
        }
    },
}

```
