import siteInfo from './siteInfo.aot'
const config = {
  navigation: [
    {
      text: '#Facebook',
      url: process.env.VUE_APP_FACEBOOK_USERNAME
    },
    {
      text: '@twitter',
      url: process.env.VUE_APP_TWITTER_USERNAME
    }
  ],
  siteInfo: siteInfo
}
export default config
