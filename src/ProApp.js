import React, { useState } from 'react';

export default function ProApp(){
  const initialPros = [
    {id: 1, task: "It's good for you", importance: 2},
    {id: 2, task: "It's fun", importance: 4},
    {id: 2, task: "It tastes good", importance: 1}
  ]
  const [pros, setPros] = useState(initialPros)
  return(
  <h1>here's to hoping this one works</h1>
  );
}

// ProApp
  //ProForm
  //ProList
    //ProItem   //id, task, level of importance, 