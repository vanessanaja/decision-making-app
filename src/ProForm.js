import React from 'react';
import useInputState from './hooks/useInputState';

export default function ProForm({ addPro }){
  const [pro, setPro, reset] = useInputState('');
  return(
    <div>
      <form 
          onSubmit={e => {
          e.preventDefault();
          addPro(pro);
          reset();
      }}
        >
          <textarea
            type='text' 
            value={pro} 
            onChange={setPro}
          >
            {pro}
          </textarea>
          <button type="submit">
              Add Pro
          </button>
      </form>
    </div>
  );
}
