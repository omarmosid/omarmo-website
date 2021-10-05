module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Omar Mohammad', // Navigation and Site Title
  titleAlt: 'Gatsby Prismic.io', // Title for JSONLD
  description: 'Full-Stack Developer passionate about building performant and accessible web apps that make life easier.',
  headline: 'Writing and publishing content for LekoArts', // Headline for schema.org JSONLD
  url: 'https://omarmo.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/banner.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/images/favicon.png', // Used for manifest favicon generation
  shortName: 'Mohammad Omar', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Mohammad Omar', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@omarmosid', // Twitter Username
  facebook: 'omarmosid', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}