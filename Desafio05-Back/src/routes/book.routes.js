import { Router } from "express";
import bookController from "../controller/book.controller.js";

const router = Router();

router.post("/livros", bookController.createBookController);
router.get("/livros", bookController.findAllBooksController);
router.get("/livros/:id", bookController.findBookByIdController);
router.put("/livros/:id", bookController.updatedBookController);
router.delete("/livros/:id", bookController.deleteBookController);

export default router;
