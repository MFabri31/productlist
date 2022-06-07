import "./Title.css";

const Title = ({ children, align, transorm = "capitalize", heading }) => {
  const validHeadings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const Heading = validHeadings.includes(heading) ? heading : "h1";

  return (
    <Heading className={`title text-${align} text-${transorm}`}>
      {children}
    </Heading>
  );
};

export default Title;
