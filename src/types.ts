export interface AnalysisResult {
  id: string;           // unique identifier for the analysis
  imageUrl: string;     // URL or Base64 of the analyzed image
  severity: Severity;   // classification result
  confidence: number;   // confidence score (0-1)
  timestamp: number;    // when it was analyzed
  heatmapUrl?: string;  // optional heatmap or visualization
}

export type Severity =
  | 'No DR'
  | 'Mild'
  | 'Moderate'
  | 'Severe'
  | 'Proliferative';

export interface ModelPrediction {
  severity: Severity;
  score: number;       // model confidence
  heatmap?: string;    // optional heatmap image
}

export interface Model {
  name: string;
  version: string;
  predict: (file: File) => Promise<ModelPrediction>;
}
