
const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-xl font-semibold text-slate-500 animate-pulse">
        Loading News...
      </p>
    </div>
  );
}

export default LoadingPage
