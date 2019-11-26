import React, { useState } from 'react';

export default function ProList(props){
  return(
    <div>
      {props.pros.map(pro => 
        <li>{pro.text}</li>      
      )}
    </div>
  )
}