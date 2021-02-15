import { Application, NextFunction, Request, Response } from "express";
import { Quiz } from "../models/Quiz";

export default (app: Application): void => {
  app.get(`/`, async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quiz = await Quiz.find({});
      const newQuiz = new Quiz({ userName: "tester" }).save();
      res.json(quiz);
    } catch (err) {
      next(err);
    }
  });
};
