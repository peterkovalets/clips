const tags = {
  h1: 'text-5xl font-bold',
  h2: 'text-4xl font-normal',
  h3: 'text-2xl font-normal',
};

function Heading({ children, className, tag = 'h1' }) {
  const HeadingComponent = tag;

  return (
    <HeadingComponent className={`${tags[tag]} ${className}`}>
      {children}
    </HeadingComponent>
  );
}

export default Heading;
