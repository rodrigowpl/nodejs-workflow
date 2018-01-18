import Koa from 'koa'
import middleware from './middleware'
import routes from './routes'

const app = new Koa()

app.use(middleware())
app.use(routes())
app.use(ctx => ctx.status = 404)

export default app
