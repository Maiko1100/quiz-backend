import { IQuestion, Quiz } from "../models/Quiz";
import { SavedQuiz } from "../models/SavedQuiz";

export const QuizRepository = {
  getQuizById: async (id: string) => {
    const quiz = await Quiz.findOne({ _id: id });
    return quiz;
  },
  saveQuiz: async ({
    questions,
    name,
    correctAnswers,
  }: {
    questions: IQuestion;
    name: string;
    correctAnswers: number;
  }) => {
    const quiz = await new SavedQuiz({ name, questions, correctAnswers });
    return quiz;
  },
};
