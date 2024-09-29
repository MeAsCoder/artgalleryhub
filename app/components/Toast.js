import { useEffect, useState } from "react";

const Toast = ({ message, duration = 3000, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Decrease progress over time
    const interval = setInterval(() => {
      setProgress((prev) => prev - 1);
    }, duration / 100); // Adjust the duration to match the animation time

    // Close toast after the duration ends
    const timeout = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded shadow-lg max-w-sm">
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 bg-white text-green-500 px-2 py-1 rounded"
        >
          Close
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-green-600 mt-2 h-1 rounded-full">
        <div
          className="bg-white h-full rounded-full"
          style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
        />
      </div>
    </div>
  );
};

export default Toast;
