import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import { uploadTrainingFile } from "./helpers/uploadTrainingFile";
import { fineTune } from "./helpers/fineTune";
import { getFineTunedModel } from "./helpers/getFineTunedModel";
import { delay } from "./helpers/utils";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAIClient = new OpenAIApi(configuration);

export const trainModel = async () => {
  const trainingFile = await uploadTrainingFile(openAIClient);
  if (!trainingFile) {
    console.error("Error: No training file");
    return;
  }
  await delay(5000);
  await fineTune(openAIClient, trainingFile);
  await delay(5000);
  const fineTunedModel = await getFineTunedModel(openAIClient);
  console.log("Trained model: ", fineTunedModel?.data);
};
try {
  trainModel();
} catch (err) {
  console.log(err);
}
