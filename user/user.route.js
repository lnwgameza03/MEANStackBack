const express = require("express")
const router = express.Router()
const user = require("./user.controller")

router.post("/", user.create )

router.get("/", user.getAll )

router.get("/:lastname" , user.get )

router.post("/check", user.check)

router.post("/checkuser", user.checkUser)

router.put("/update", user.update)

module.exports = router;