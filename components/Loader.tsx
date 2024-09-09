export function Loader({ className = '' }: { className?: string }) {
  return (
    <div role="status" className={`w-full max-w-sm animate-pulse ${className}`}>
      <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-400"></div>
      <div className="mb-2.5 h-2 max-w-[22.5rem] rounded-full bg-gray-200 dark:bg-gray-400"></div>
      <div className="mb-2.5 h-2 max-w-[15rem] rounded-full bg-gray-200 dark:bg-gray-400"></div>
      <div className="mb-2.5 h-2 max-w-[20.625rem] rounded-full bg-gray-200 dark:bg-gray-400"></div>
      <div className="mb-2.5 h-2 max-w-[18.75rem] rounded-full bg-gray-200 dark:bg-gray-400"></div>
    </div>
  );
}

