import { AnalysisResult } from './model';

const KEY = 'dr-history';

export interface HistoryItem {
  id: string;
  fileName: string;
  timestamp: number;
  result: AnalysisResult;
  imageData: string; // base64 for preview
}

export function getHistory(): HistoryItem[] {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveToHistory(item: HistoryItem) {
  const history = getHistory();
  history.unshift(item);
  localStorage.setItem(KEY, JSON.stringify(history));
}

export function clearHistory() {
  localStorage.removeItem(KEY);
}

export function deleteHistoryItem(id: string) {
  const history = getHistory().filter((h) => h.id !== id);
  localStorage.setItem(KEY, JSON.stringify(history));
}
