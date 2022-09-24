const express = require('express');
const router = express.Router();
const routesController = require('./controller.js')

router.delete("/:bookId", routesController.removeBook);
router.put("/:bookId", routesController.updateBook)
router.get("/:bookId",routesController.getOneBook);
router.post("/",routesController.addNewBook);
router.delete("/",routesController.removeAllBooks);
router.get("/", routesController.gettAllBooks);


//export this router to use in our index.js
module.exports = router;