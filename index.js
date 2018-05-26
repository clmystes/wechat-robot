const Koa = require("koa")
const Router = require("koa-router")
const koaBody = require("koa-body")

const queries = require("./db/queries/records.js")

const app = new Koa()
const router = new Router()

/**
 * {
 *    name: "lee",
 *    record: "打卡记录"
 * }
 *
 * curl -d '{"name": "lee", "record": "a msg"}' --header "Content-Type: application/json"  localhost:3000/api/readingGroup/records
 */
router.post("/api/readingGroup/records", async (ctx, next) => {
  try {
    const record = await queries.addRecord(ctx.request.body)
    if(record.length) {
      ctx.status = 200
      ctx.body = {
        status: "success",
        data: record,
      }
    } else {
      ctx.status = 400
      ctx.body = {
        status: "error",
        message: "Something went wrong.",
      }
    }
  } catch (err) {
    ctx.status = 400
    ctx.body = {
      status: "error",
      message: err.message || "Sorry, an error has occurred.",
    }
  }
})

app
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log("Server listening on port: 3000")
})
