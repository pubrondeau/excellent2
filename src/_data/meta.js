module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Eleventy Excellent',
  siteDescription:
    'Eleventy starter based on the workflow suggested by buildexcellentwebsit.es.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Emmanuel Rondeau', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'emmanuelrondeau@gmail.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https.://www.jekife.fr', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#E54848', //  Manifest: defines the default theme color for the application
  themeBgColor: '#FFFDF5', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'My great Web Development Blog',
    description:
      'Tell the word what you are writing about in your blog! It will show up on feed readers.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Organization name',
    street: '123 Main St.',
    city: 'Ciudad',
    state: 'Estado',
    zip: '12345',
    mobileDisplay: '+34 1234567',
    mobileCall: ' +341234567',
    email: 'emmanuelrondeau@gmail.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
