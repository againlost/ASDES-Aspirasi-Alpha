import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Ensure environment variable is available
if (!process.env.GOOGLE_GENAI_API_KEY) {
  console.warn('GOOGLE_GENAI_API_KEY environment variable is not set. AI features may not work properly.');
}

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
  // Add error handling configuration
  telemetry: {
    instrumentation: 'genkit',
    logger: 'genkit',
  },
});
