import express from "express"
import { getDebugger } from "./utils/debugutil"
import routes from "./routes/registry"

const config = require("../config.json")
const debug = getDebugger("server")
const clientDirectory = __dirname + "/../../client/bin"

export const server = express()

server.set("view engine", "pug")
server.set("views", clientDirectory)

server.use(express.static(clientDirectory))

server.use(routes)

server.listen(config.port, () => debug("Started on port", config.port))