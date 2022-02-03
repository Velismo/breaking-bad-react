import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')
  const onChangue = (q) => {
    setText(q)
    getQuery(q)
  }

  return <section className='search'>
      <form>
          <input type='text' className='form-control' placeholder='Busca personaje' value={text} onChangue={(e) => onChangue(e.target.value)} autoFocus/>
      </form>
  </section>;
};

export default Search;
