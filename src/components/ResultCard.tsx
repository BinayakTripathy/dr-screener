interface ResultCardProps {
  result: {
    severity: string;
    score: number;
    heatmap?: string;
  };
  imageUrl: string;
}

export default function ResultCard({ result, imageUrl }: ResultCardProps) {
  return (
    <div className="border rounded-xl shadow-md p-4 flex flex-col items-center gap-4">
      <img
        src={imageUrl}
        alt="Analyzed"
        className="w-48 h-48 object-cover rounded-lg"
      />
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          {result.severity}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Confidence: {(result.score * 100).toFixed(1)}%
        </p>
      </div>
    </div>
  );
}
