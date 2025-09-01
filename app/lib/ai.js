//import Anthropic from "@anthropic-ai/sdk";
import { InferenceClient } from "@huggingface/inference";
//const apiKey = import.meta.env.VITE_HUG_AI_RECIPE_KEY;
/// anthropic IA add 5 dollar to use the app
// hugface free IA
//npm install @huggingface/inference
import profile from "../lib/profile.json";

const SYSTEM_PROMPT = `
You are an intelligent assistant that receives two inputs:
1. A JSON string containing profile-related data.
2. A question about that profile.

Your task is to respond to the question in a helpful and informative way, using a third-person perspective. 
Assume the question is being asked by someone who wants to learn about the person described in the profile.
You do *not* need to use the JSON data to answer the question directly, but you may reference it if relevant.

Always format your response using Markdown to ensure it renders cleanly on a web page. 
Use headings, bullet points, and emphasis where appropriate to improve readability.
The question will always be related to the profile data provided.
`;

// const anthropic = new Anthropic({
//   // Make sure you set an environment variable in Scrimba
//   // for ANTHROPIC_API_KEY
//   apiKey: process.env.ANTHROPIC_API_KEY,

//   dangerouslyAllowBrowser: true,
// });

// export async function getRecipeFromChefClaude(ingredientsArr) {
//   const ingredientsString = ingredientsArr.join(", ");

//   const msg = await anthropic.messages.create({
//     model: "claude-3-haiku-20240307",
//     max_tokens: 1024,
//     system: SYSTEM_PROMPT,
//     messages: [
//       {
//         role: "user",
//         content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
//       },
//     ],
//   });
//   return msg.content[0].text;
// }

//const hf = new InferenceClient(import.meta.env.VITE_HUG_AI_RECIPE_KEY); //for vite
const hf = new InferenceClient(process.env.NEXT_PUBLIC_HUG_AI_RECIPE_KEY);
export async function getResponseAi(question) {
  const profileString = JSON.stringify(profile);
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `This is my profile "${profileString}", and I have the following question "${question}". 
          Please respond base on my profile info.`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
