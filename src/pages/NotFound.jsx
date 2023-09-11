import BackButton from '../ui/BackButton';
import Heading from '../ui/Heading';

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <Heading tag="h2">
          The page you&apos;re looking for wasn&apos;t found!
        </Heading>
        <BackButton />
      </div>
    </main>
  );
}

export default NotFound;
