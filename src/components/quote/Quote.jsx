

const Quote = (props) => {
  return (
    <div className="text-center p-5">
      <blockquote className="blockquote">
        <p className="mb-0">{props.text}</p>
        <footer className="blockquote-footer mt-2">{props.author}</footer>
      </blockquote>
    </div>
  );
};

export default Quote;


