const tags = {
  h1: 'text-5xl font-bold',
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
