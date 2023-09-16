import Container from '../ui/Container';
import Heading from '../ui/Heading';

function About() {
  return (
    <section className="py-12">
      <Container>
        <Heading tag="h2" className="mb-4">
          About
        </Heading>
        <p>
          The #1 app to watch, clip, and share your awesome gaming moments with
          your friends and the world! With our world-class tools, we make it
          incredibly easy to share your videos. Get started today!
        </p>
      </Container>
    </section>
  );
}

export default About;
