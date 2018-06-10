import siteInfo from './siteInfo.aot'
const config = {
  navigation: [
    {
      text: '#Facebook',
      url: process.env.VUE_APP_FACEBOOK_URL
    },
    {
      text: '@twitter',
      url: process.env.VUE_APP_TWITTER_URL
    }
  ],
  sectionIntro: {
    title: process.env.VUE_APP_INTRO_TITLE,
    content: process.env.VUE_APP_INTRO_CONTENT
  },
  siteInfo: siteInfo
}
export default config
