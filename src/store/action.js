// 接受两个参数，第一个是当前上下文，第二个是传递的参数
export default {
  changeCity (ctx, city) {
    ctx.commit('changeCity', city)
    try {
      if (localStorage.city) {
        localStorage.city = city
      }
    } catch (e) {}
  }
}
