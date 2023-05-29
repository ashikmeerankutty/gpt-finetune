import { OpenAIApi } from "openai";

export const getFineTunedModel = async (openAIClient: OpenAIApi) => {
  const model = await openAIClient.listFineTunes();
  console.log("Model", model);
  return model;
};
