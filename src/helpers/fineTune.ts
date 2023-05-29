import { OpenAIApi, OpenAIFile } from "openai";

export const fineTune = async (
  openAIClient: OpenAIApi,
  trainingFile: OpenAIFile
) => {
  const fineTuneResponse = await openAIClient.createFineTune({
    training_file: trainingFile.id,
    model: "davinci",
  });
  return fineTuneResponse;
};
