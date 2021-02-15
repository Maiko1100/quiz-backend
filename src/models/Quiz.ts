import * as mongoose from 'mongoose';

export interface IQuiz extends Document {
  _id: { type: mongoose.Schema.Types.ObjectId; ref: 'Quiz' } | string;
  userName: string;
}

export const QuizSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    questions: { type: Array, required: true },
  }
);

export const Quiz: mongoose.Model<IQuiz & mongoose.Document> = mongoose.model<IQuiz & mongoose.Document>(
  'Quiz',
  QuizSchema
);
