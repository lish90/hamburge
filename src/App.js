import React from 'react';
import './App.css';
import FoodCard from './component/FoodCard';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <FoodCard
              header="Hello world"
              title="Tasty burger"
              image="https://source.unsplash.com/400x300/?burger" >
      It's a good burger 
      </FoodCard>
      <Counter></Counter>
     
    </div>
  );
}

export default App;
