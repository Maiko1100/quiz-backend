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
    `/quiz/saveQuiz/`,
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
        console.log(savedQuiz);
        res.json(savedQuiz);
      } catch (err) {
        next(err);
      }
    }
  );
};
