const { getAllUsers, getAllBlogs, blockUnblockUserAccount, publishUnpublishBlog } = require("../controllers/admin.controller")

const router = require("express").Router()

router
    .get("/get-user", getAllUsers)
    .get("/blogs", getAllBlogs)
    .patch("/block-unblock-user/:uid", blockUnblockUserAccount)
    .patch("/publish-unplish-blog/:bid", publishUnpublishBlog)

module.exports = router