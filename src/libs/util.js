const util = {}

util.title = function (title) {
  title = title || '商业门户'
  window.document.title = title
}

export default util
