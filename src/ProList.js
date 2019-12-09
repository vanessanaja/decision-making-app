import React, { useState } from 'react';
import Pro from './Pro';

export default function ProList(props){
  return(
    <div>
      {props.pros.map(pro => 
        <Pro text={pro.text} key={pro.id} importance={pro.importance}/>     
      )}
    </div>
  )
}