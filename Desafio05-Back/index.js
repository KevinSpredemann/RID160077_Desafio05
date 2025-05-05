import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


const PORT = 3000;

app.listen(PORT, () => {
  try {
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
