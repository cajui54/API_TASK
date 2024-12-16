import { body } from "express-validator";

export const taskCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título é obrigatório.")
      .isLength({ min: 5 })
      .withMessage("O título deve conter ao menos 3 caracteres"),
    body("description")
      .isString()
      .withMessage("Descrição é obrigatório.")
      .isLength({ min: 5 })
      .withMessage("À descrição deve conter ao menos 3 caracteres"),
    body("isCompleted").isString().withMessage("isCompleted é obrigatório."),
  ];
};
