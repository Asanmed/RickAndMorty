import { useState } from 'react';
import './App.css';
import CardSet from './components/CardSet/CardSet';
import ReloadButton from './components/ReloadButton/ReloadButton';

const getRandomIds = () => {
  let output = [];
  for (let index = 0; index < 6; index++) {
    output.push(Math.floor(Math.random() * (671 - 1)) + 1);
  }
  return output;
};

function App() {
  const [cardList, setCardList] = useState(getRandomIds());
  return (
    <div className="App">
      <ReloadButton clickHandler={() => setCardList(getRandomIds())} />
      <CardSet idList={cardList} />
    </div>
  );
}

export default App;
