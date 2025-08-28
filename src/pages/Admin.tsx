import { useState } from "react";

export default function Admin() {
  const [demoMode, setDemoMode] = useState(true);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Tools</h1>
      <div className="mb-4">
        <label className="mr-4 font-semibold">Demo Mode:</label>
        <input
          type="checkbox"
          checked={demoMode}
          onChange={() => setDemoMode(!demoMode)}
          className="w-5 h-5"
        />
      </div>
      <p className="text-gray-500 text-sm">
        Demo mode uses a mock AI response. Disable this when you integrate your real model.
      </p>
    </div>
  );
}
