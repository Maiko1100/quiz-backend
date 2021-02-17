import * as mongoose from "mongoose";

export const getConnectionStringAndOption = () => {
  let mongoOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
  } as mongoose.ConnectionOptions;

  let ssl = false;
  //@ts-ignore
  mongoOptions = {
    ...mongoOptions,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    authSource: "admin",
    useUnifiedTopology: false,
    ssl,
  };

  let connectionString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  return { connectionString, mongoOptions };
};
