export default function LoadingDots() {
  return (
    <div className="flex flex-row gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-transparent pulse" />
      <div className="w-1.5 h-1.5 rounded-full bg-transparent pulse" style={{ animationDelay: '100ms' }} />
      <div className="w-1.5 h-1.5 rounded-full bg-transparent pulse" style={{ animationDelay: '200ms' }} />
      <div className="w-1.5 h-1.5 rounded-full bg-transparent pulse" style={{ animationDelay: '300ms' }} />
      <div className="w-1.5 h-1.5 rounded-full bg-transparent pulse" style={{ animationDelay: '400ms' }} />
    </div>
  );
}
