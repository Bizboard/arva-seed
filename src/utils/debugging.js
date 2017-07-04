/**
 * Created by lundfall on 27/06/2017.
 */

window.$this = () => {
  for (let i = 10; i > 0; i--) {
    if (eval('typeof _this' + i) === 'object') {
      return eval('_this' + i)
    }
  }
}