import React, { useState } from "react";
import ReactDOM from "react-dom";


const StatisticLine = ({ text, value }) => (
  <div>
    <p>{text} {value} </p>  
  </div>
);


const Button = ({ className, onClick, children }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all == 0) {
    return <p>No feedback given.</p>;
  } else {
    return (    
        <div>
          <StatisticLine text="Good: " value={good} />
          <StatisticLine text="Neutral: " value={neutral} />
          <StatisticLine text="Bad: " value={bad} />
          <StatisticLine text="All: " value={all} />
          <StatisticLine  text="Averge: " value={average} />
          <StatisticLine text="Positive: " value={positive} />
        </div>
    );
  }
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good+neutral+bad;
  const average = ((good * 1 + neutral * 0 + bad * -1) / all);
  const positive =((good / all) * 100);

  return (
    <main class>
      <header>
      <h1>Give feedback</h1>
      </header>
      <div class>
        <Button
          className="button"
          onClick={() => setGood(good + 1)}
        >Good
        </Button>

        <Button
          className="button"
          onClick={() => setNeutral(neutral + 1)}
        >
          Neutral
        </Button>

        <Button
          className="button"
          onClick={() => setBad(bad + 1)}
        >
          Bad
        </Button>
      </div>
      <header>
       <h1>Statistics</h1> 
        </header>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));