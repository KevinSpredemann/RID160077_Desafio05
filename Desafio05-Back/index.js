import express from "express";
import cors from "cors";
import router from "./src/routes/book.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


const PORT = 3000;

app.listen(PORT, () => {
  try {
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
