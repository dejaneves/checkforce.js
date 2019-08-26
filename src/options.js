import { extendDefaults } from './core/utils'

class OptionsDefault {
  constructor (input, options) {
    this.options = options
    this.defaults = {
      scores: 0,
      width: 0,
      text: '',
      content: '',
      passIndex: 2,
      BootstrapTheme: false,
      MaterializeTheme: false,
      minimumChars: 8,
      maximumChars: 12,
      elementRender: null,
      locale: 'en',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      number: '0123456789',
      characters: '!@#$%^&*?_~',
      colors: ['#500', '#800', '#f60', '#050', '#5cb85c'],
      charsSpecialCheck: { haveChars: false, lengthChars: 0 },
      numberCheck: { haveNumber: false, lengthNumber: 0 },
      uppercaseCheck: { haveUppercase: false, lengthUppercase: 0 },
      lowercaseCheck: { haveLowercase: false, lengthLowercase: 0 },
      trigger: {
        selector: input || '.field-checkforce',
        eventListener: 'keyup'
      }
    }
  }

  // Create options by extending defaults with the passed in arugments
  getOptions () {
    return typeof this.options === 'object' ? extendDefaults(this.defaults, this.options) : this.defaults
  }

  getVerdicts () {
    return {
      'en': ['Weak', 'Normal', 'Medium', 'Strong'],
      'pt-br': ['Fraca', 'Normal', 'Média', 'Forte']
    }
  }
}

module.exports = OptionsDefault
