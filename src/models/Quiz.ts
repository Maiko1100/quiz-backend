import * as mongoose from "mongoose";

export interface IAnswerOption {
  text: string;
}

export interface IQuestion {
  id: string;
  text: string;
  correctAnswer: number;
  answer?: number;
  answerOptions: IAnswerOption[];
}

export interface IQuiz extends Document {
  _id: { type: mongoose.Schema.Types.ObjectId; ref: "Quiz" } | string;
  questions: IQuestion[];
}

export const QuizSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    questions: { type: Array, required: true },
  },
  { versionKey: false }
);

export const Quiz: mongoose.Model<IQuiz & mongoose.Document> = mongoose.model<
  IQuiz & mongoose.Document
>("Quiz", QuizSchema);
