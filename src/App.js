import { useEffect, useState } from 'react';
import Card from './Card';
import './App.css';
import Add from './Add';

function App() {
  const [list, setList] = useState([14891719])
  const [cards, setCards] = useState([])
  useEffect(() => {
    setCards(list.map((p, i) =>
      <Card key={i} profile={p} />
    ))
  }, [list])

  const handleProfiles = p => {
    list.push(p)
    setList(list)
    setCards(list.map((p, i) =>
      <Card key={i} profile={p} />
    ))
  }

  return (
    <div>
      <Add action={handleProfiles} />
      <div className="App">
        {cards}
      </div>
    </div>
  );
}

export default App;
