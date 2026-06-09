
interface ErrorStateProps {
  message?: string;
  title?: string;
}

export default function ErrorState({ title = 'Oops! Failed to Load Data', message  = `We couldn&apos;t load the movie list right now. Please check your internet connection or try refreshing the page.`}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="font-display font-semibold text-text-primary text-xl mb-2">
        {title}
      </h3>
      <p className="text-text-secondary text-base max-w-md">
        {message}
      </p>
    </div>
  );
}