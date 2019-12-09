import React, { useState } from 'react';
import ProList from './ProList';
import ProForm from './ProForm';

export default function ProApp(){
  const initialPros = [
    {id: 1, text: "It's good for you", importance: 2},
    {id: 2, text: "It's fun", importance: 4},
    {id: 3, text: "It tastes good", importance: 1}
  ]
  const [pros, setPros] = useState(initialPros);
  const addPro = newProText => {
    setPros([...pros, {id: 4, text: newProText, importance: 1}])
  }
  return(
    <div>
      <ProForm addPro={addPro}/>
      <ProList pros={pros} />
    </div>
  );
}

// ProApp
//   ProForm
//   ProList
//     ProItem   //id, task, level of importance