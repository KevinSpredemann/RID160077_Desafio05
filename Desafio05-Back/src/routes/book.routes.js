import { Router } from "express";
import bookController from "../controller/book.controller.js";
import { validate } from "../middlewares/validation.middleware.js";
import { bookSchema } from "../schema/book.schema.js";

const router = Router();

router.post("/livros", validate(bookSchema), bookController.createBookController);
router.get("/livros", bookController.findAllBooksController);
router.get("/livros/:id", bookController.findBookByIdController);
router.put("/livros/:id", bookController.updatedBookController);
router.delete("/livros/:id", bookController.deleteBookController);

export default router;
