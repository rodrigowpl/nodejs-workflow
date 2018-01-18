import Router from 'koa-router'
import compose from 'koa-compose'
import importDir from 'import-dir'

const routerConfigs = { folder: 'api', prefix: '/api' }

export default function routes() {
  const routes = importDir('./' + routerConfigs.folder)
  const router = new Router({
    prefix: routerConfigs.prefix
  })

  Object.keys(routes).map(name => {
    routes[name](router)
  })

  return compose([router.routes(), router.allowedMethods()])
}
