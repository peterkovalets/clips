import ClipsList from '../features/clips/ClipsList';
import Container from './Container';
import Heading from './Heading';

function LatestClips() {
  return (
    <section className="py-12">
      <Container>
        <div className="mb-12 flex items-center gap-8">
          <div className="h-0.5 w-full bg-gray-50"></div>
          <Heading tag="h2" className="uppercase tracking-wider">
            Latest
          </Heading>
          <div className="h-0.5 w-full bg-gray-50"></div>
        </div>

        <ClipsList />
      </Container>
    </section>
  );
}

export default LatestClips;
