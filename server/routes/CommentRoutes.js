const express = require("express");
const router = express.Router();
// destructuring so require("<controller route path>") doesn't have to be repeated
const {list, show, create, update, remove} = require(
   "../controllers/CommentController");

router.get("/comments", list);
router.get("/comments/:id", show);
router.post("/comments", create);
router.put("/comments/:id", update);
router.delete("/comments/:id", remove);

module.exports = router;