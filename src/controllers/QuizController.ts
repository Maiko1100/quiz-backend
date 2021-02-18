import { Application, NextFunction, Request, Response } from "express";
import { IQuestion } from "../models/Quiz";
import { QuizRepository } from "../repositories/QuizRepository";

export default (app: Application): void => {
  app.get(
    `/quiz/:quizId/`,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const quiz = await QuizRepository.getQuizById(req.params.quizId);
        res.json(quiz);
      } catch (err) {
        next(err);
      }
    }
  );
  app.post(
    `/quiz/save-quiz/`,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { questions, name } = req.body;
        const correctAnswers = questions.filter(
          (question: IQuestion) => question.answer === question.correctAnswer
        );
        const savedQuiz = await QuizRepository.saveQuiz({
          questions,
          name,
          correctAnswers: correctAnswers.length,
        });

        res.json(savedQuiz);
      } catch (err) {
        next(err);
      }
    }
  );
  app.get(`/saved-quiz/`, async (req: Request, res: Response, next: NextFunction) => {
    try {
      const savedQuizzes = await QuizRepository.getAllSavedQuizzes();
      res.json(savedQuizzes);
    } catch (err) {
      next(err);
    }
  });
  app.get(
    `/saved-quiz/:id`,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const savedQuiz = await QuizRepository.getSavedQuiz(
          req.params.quizId
        );
        res.json(savedQuiz);
      } catch (err) {
        next(err);
      }
    }
  );
};
