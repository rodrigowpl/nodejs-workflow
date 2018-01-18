export default (router) => {
  router.get('/', (ctx) => {
    ctx.body = 'Hi todo app'
  })
}