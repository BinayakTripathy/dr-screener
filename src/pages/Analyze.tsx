import React, { useState } from "react";
import { demoPredict } from "../lib/model";
import ResultCard from "../components/ResultCard";

export default function Analyze() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const res = await demoPredict(file); // ✅ uses exported function
      setResult(res);
    } catch (err) {
      console.error("Error analyzing:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Analyze Fundus Image</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        onClick={handleAnalyze}
        disabled={!file || loading}
        className={`px-4 py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {result && file && (
        <div className="mt-6">
          <ResultCard result={result} imageUrl={URL.createObjectURL(file)} />
        </div>
      )}
    </div>
  );
}
