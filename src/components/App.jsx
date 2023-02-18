import { useState } from 'react';

import Section from './Feedback/Section/Section.jsx';
import Statistics from './Feedback/Statistics/Statisstics.jsx';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Notification from './shared/Notification/Notification';

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const feedbackOptions = Object.keys(votes);

  const persentPositive = () => {
    const { good } = votes;
    const totalPositiveVotes = (good * 100) / totalVotes;
    return totalPositiveVotes;
  };

  const counterVotes = voteName => {
    setVotes(prevState => {
      const value = prevState[voteName];
      return { ...prevState, [voteName]: value + 1 };
    });
  };

  return (
    <div className="wrapper">
      <Section title="Please, leave your feedback!" />
      <FeedbackOptions
        options={feedbackOptions}
        onLeaveFeedback={counterVotes}
      />

      {totalVotes === 0 && <Notification message="There is no feedback" />}

      {totalVotes !== 0 && (
        <Statistics
          good={votes.good}
          neutral={votes.neutral}
          bad={votes.bad}
          total={totalVotes}
          positivePercentage={persentPositive}
        />
      )}
    </div>
  );
};

export default App;

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   totalVotes = () => {
//     const { good, neutral, bad } = this.state;
//     const totalVotes = good + neutral + bad;
//     return totalVotes;
//   };

//   feedbackOptions = Object.keys(this.state);

//   persentPositive = () => {
//     const { good } = this.state;
//     const totalPositiveVotes = (good * 100) / this.totalVotes();
//     return totalPositiveVotes;
//   };

//   counterVotes = voteName => {
//     this.setState(prevState => {
//       return {
//         [voteName]: prevState[voteName] + 1,
//       };
//     });
//   };

//   render() {
//     return (
//       <div className="wrapper">
//         <Section title="Please, leave your feedback!" />
//         <FeedbackOptions
//           options={this.feedbackOptions}
//           onLeaveFeedback={this.counterVotes}
//         />

//         {this.totalVotes() === 0 && (
//           <Notification message="There is no feedback" />
//         )}

//         {this.totalVotes() !== 0 && (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.totalVotes}
//             positivePercentage={this.persentPositive}
//           />
//         )}

//         {/* <Feedback /> */}
//       </div>
//     );
//   }
// }
