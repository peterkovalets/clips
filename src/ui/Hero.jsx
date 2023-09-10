import Heading from './Heading';
import BgVideo from '../assets/hero-bg.mp4';

function Hero() {
  return (
    <section className="relative py-72">
      <video
        src={BgVideo}
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-indigo-900/60" />

      <div className="absolute inset-0">
        <div className="mx-auto flex h-full w-full max-w-4xl flex-col justify-center gap-2 text-center">
          <Heading className="uppercase tracking-wide">
            Clip it and ship it!
          </Heading>
          <p>
            The #1 app to watch, clip, and share your awesome gaming moments
            with your friends and the world! With our world-class tools, we make
            it incredibly easy to share your videos. Get started today!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
