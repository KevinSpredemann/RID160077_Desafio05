import { z } from "zod";

export const bookSchema = z.object({
  isbn: z
    .string({
      required_error: "O ISBN é obrigatório",
    })
    .regex(/^\d{13}$/, "O ISBN deve conter exatamente 13 dígitos numéricos"),

  num_paginas: z
    .number({
      required_error: "Número de páginas é obrigatório",
    })
    .int("Número de páginas deve ser inteiro")
    .positive("Número de páginas deve ser positivo"),

  editora: z
    .string({
      required_error: "A editora é obrigatória",
    })
    .min(1, "A editora não pode estar vazia"),

  titulo: z
    .string({
      required_error: "O título é obrigatório",
    })
    .min(1, "O título não pode estar vazio"),
});
