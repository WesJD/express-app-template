import express from "express"
import { getDebugger } from "./utils/debugutil"
import routes from "./routes/registry"

const config = require("../config.json")
const debug = getDebugger("server")
const clientDirectory = getViewsDirectory()

export const server = express()

server.set("view engine", "pug")
server.set("views", clientDirectory)

server.use(express.static(clientDirectory))

server.use(routes)

server.listen(config.port, () => debug("Started on port", config.port))

function getViewsDirectory() {
    let base = __dirname + "/../../client/"
    if (process.env.NODE_ENV == "production") {
        base += "bin"
    } else {
        base += "src"
    }
    return base
}