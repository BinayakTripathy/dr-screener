import { useState, DragEvent } from "react";

interface FileDropProps {
  onFileSelect: (file: File) => void;
}

export default function FileDrop({ onFileSelect }: FileDropProps) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center ${
        dragging ? "border-blue-500 bg-blue-50 dark:bg-gray-800" : "border-gray-400"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <p className="text-gray-600 dark:text-gray-300">
        Drag & drop an image here, or click to select
      </p>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="fileInput"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            onFileSelect(e.target.files[0]);
          }
        }}
      />
      <label
        htmlFor="fileInput"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
      >
        Choose File
      </label>
    </div>
  );
}
