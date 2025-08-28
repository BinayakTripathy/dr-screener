import { getSeverity } from "../utils/severity";

export interface AnalysisResult {
  severity: string;
  score: number;
  heatmap?: string; // optional base64 or URL
}

export const registeredModels: Record<string, any> = {
  demo: {
    name: "Demo Model",
    predict: async (file: File): Promise<AnalysisResult> => {
      return demoPredict(file);
    },
  },
};

export function getModel(name: string) {
  return registeredModels[name] || registeredModels.demo;
}

// ✅ Export the demoPredict function
export async function demoPredict(file: File): Promise<AnalysisResult> {
  await new Promise((r) => setTimeout(r, 1000)); // simulate latency
  const score = Math.random();
  return {
    severity: getSeverity(score),
    score,
    heatmap: undefined,
  };
}
