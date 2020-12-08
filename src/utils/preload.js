/*
 * @Author: your name
 * @Date: 2020-11-22 13:33:41
 * @LastEditTime: 2020-11-29 20:25:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \self_fraem\src\utils\preload.js
 */
export const preloaderFinished = () => {
  const body = document.querySelector('body')
  const preloader = document.querySelector('.preloader')
  console.log(body)
  if (!body) {
    return
  }
  body.style.overflow = 'hidden'
  const remove = () => {
    if (!preloader) {
      return
    }
    preloader.addEventListener('transitionend', () => {
      preloader.className = 'preloader-hidden'
    })

    preloader.className += ' preloader-hidden-add preloader-hidden-add-active'
  }
  setTimeout(() => {
    remove()
    body.style.overflow = ''
  }, 100)
}
