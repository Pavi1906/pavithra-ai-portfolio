import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

/**
 * ARCHITECTURAL NOTE:
 * 
 * In a production environment, this service would interact with a backend proxy 
 * (e.g., Node.js/Express or Next.js API Route) to secure the API Key.
 * 
 * For this portable portfolio demo, we are initializing the client directly 
 * to allow for easy deployment without complex backend infrastructure.
 * 
 * Production Path: Client -> Backend Proxy (Rate Limiting + Auth) -> Gemini API
 * Current Path:    Client -> Gemini API
 */

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model'; text: string }[]): Promise<string> => {
  try {
    const modelId = 'gemini-3-flash-preview'; 
    
    const formattedHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: formattedHistory
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "I processed that, but couldn't generate a text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please check the console for details or try again later.";
  }
};
