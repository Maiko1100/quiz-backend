import * as mongoose from "mongoose";
import { IQuestion } from "./Quiz";

export interface ISavedQuiz extends Document {
  _id: { type: mongoose.Schema.Types.ObjectId; ref: "SavedQuiz" } | string;
  userName: string;
  questions: IQuestion[];
  correctAnswers: number;
}

export const SavedQuizSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    questions: { type: Array, required: true },
    correctAnswers: { type: Number, required: true },
  },
  { versionKey: false, timestamps: { createdAt: "created_at" } }
);

export const SavedQuiz: mongoose.Model<
  ISavedQuiz & mongoose.Document
> = mongoose.model<ISavedQuiz & mongoose.Document>(
  "SavedQuiz",
  SavedQuizSchema
);
