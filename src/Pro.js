import React from 'react';
export default function Pro({ text, importance }){
  return (
    <div>
      <li>{text}  {importance}
        <button aria-label="Edit">Edit</button>
        <button aria-label="Delete">Delete</button>
      </li>  
    </div>)
    
}
