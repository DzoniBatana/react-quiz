function StartScrean({ numQuestion }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestion} Question to test your React mastery</h3>
      <button className="btn btn-ui">Lets start</button>
    </div>
  );
}

export default StartScrean;
