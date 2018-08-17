import { Router } from "express"
import index from "./index"

const router = Router()

router.use("/", index)

export default router