import webfontloader from 'webfontloader'
import 'modern-normalize'
import './base/index.styl'
import './utils/animation.styl'

webfontloader.load({
  google: {
    families: ['Inconsolata:400,700:vietnamese']
  }
})
