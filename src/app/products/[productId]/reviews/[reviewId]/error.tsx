"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-red-600">
      {error.message}{" "}
      <button onClick={reset} className="bg-orange-300 py-3 px-8 rounded-lg">
        try again
      </button>
    </div>
  );
}
