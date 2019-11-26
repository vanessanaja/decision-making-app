import React, { useState } from 'react';
import ProList from './ProList';

export default function ProApp(){
  const initialPros = [
    {id: 1, text: "It's good for you", importance: 2},
    {id: 2, text: "It's fun", importance: 4},
    {id: 2, text: "It tastes good", importance: 1}
  ]
  const [pros, setPros] = useState(initialPros)
  return(
    <div>
      <h1>here's to hoping this one works</h1>
      <ProList pros={pros} />
    </div>
  );
}

// ProApp
//   ProForm
//   ProList
//     ProItem   //id, task, level of importance