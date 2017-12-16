

const express = require("express")
const router = express.Router()
const replie = require("./reply.controller")

router.post("/", replie.create )

router.get("/", replie.getAll )

router.get("/:topic", replie.getReply )

router.get("/delete/:reply", replie.delete )

module.exports = router;