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
  siteInfo: siteInfo
}
export default config
