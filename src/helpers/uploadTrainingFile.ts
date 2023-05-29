import fs from "fs";
import { OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const filePath = process.env.TRAINING_FILE;

export const uploadTrainingFile = async (openAIClient: OpenAIApi) => {
  if (!filePath) {
    throw new Error("Error: Add training file path to .env");
  }
  const trainingFile = await openAIClient.createFile(
    fs.createReadStream(filePath) as any,
    "fine-tune"
  );
  console.log("Training file: ", trainingFile.data);
  return trainingFile.data;
};
