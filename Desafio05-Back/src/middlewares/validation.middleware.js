export const validate = (schema) => async (req, res, next) => {
    try {
      console.log("✅ Middleware de validação rodando com:", req.body);
      schema.parse(req.body); 
      next();
    } catch (error) {
      console.log("❌ Erro de validação:", error.errors);
      return res.status(400).json({ error: error.errors });
    }
  };