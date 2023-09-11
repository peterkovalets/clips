import Button from './Button';
import Heading from './Heading';

function ErrorFallback({ resetErrorBoundary }) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <Heading tag="h2">Something went wrong</Heading>
        <Button onClick={resetErrorBoundary}>Try again!</Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
