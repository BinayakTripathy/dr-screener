export type SeverityLevel =
  | 'No DR'
  | 'Mild'
  | 'Moderate'
  | 'Severe'
  | 'Proliferative';

export const severityLevels: SeverityLevel[] = [
  'No DR',
  'Mild',
  'Moderate',
  'Severe',
  'Proliferative',
];

export function getSeverity(score: number): SeverityLevel {
  if (score < 0.2) return 'No DR';
  if (score < 0.4) return 'Mild';
  if (score < 0.6) return 'Moderate';
  if (score < 0.8) return 'Severe';
  return 'Proliferative';
}
