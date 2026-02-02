
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export async function getCarInsight(carName: string, model: string) {
  if (!API_KEY) return "AI insights are currently unavailable.";
  
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a 2-sentence expert car reviewer's "secret take" on the ${carName} ${model}. Why is it a top choice for luxury enthusiasts in 2025?`,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });
    return response.text || "No insight available.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error fetching AI insight.";
  }
}
