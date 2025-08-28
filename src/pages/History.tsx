import { useEffect, useState } from "react";
import { getHistory, clearHistory } from "../lib/storage";

export default function History() {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analysis History</h1>
      {history.length === 0 ? (
        <p>No previous analyses found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {history.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <img src={item.image} alt="fundus" className="w-full h-32 object-cover rounded-md mb-2" />
                <p className="text-gray-700 dark:text-gray-300">Severity: {item.result.severity}</p>
                <p className="text-gray-500 text-sm">{new Date(item.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              clearHistory();
              setHistory([]);
            }}
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-500"
          >
            Clear History
          </button>
        </>
      )}
    </div>
  );
}
