

const express = require("express")
const router = express.Router()
const replie = require("./reply.controller")

router.post("/", replie.create )

router.get("/", replie.getAll )

module.exports = router;