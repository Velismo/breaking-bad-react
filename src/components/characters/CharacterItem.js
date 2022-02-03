import React from 'react';

const CharacterItem = ({ item }) => {
  return <div className='card'>
  <div className='card-inner'>
    <div className='card-front'>
      <img src={item.img} alt='' />
    </div>
    <div className='card-back'>
      <h1>{item.name}</h1>
      <ul>
        <li>
          <strong>Nombre actor/actriz:</strong> {item.portrayed}
        </li>
        <li>
          <strong>Alias:</strong> {item.nickname}
        </li>
        <li>
          <strong>Temporadas:</strong> {item.appearance}
        </li>
        <li>
          <strong>Estado:</strong> {item.status}
        </li>
        <li>
          <strong>Serie:</strong> {item.category}
        </li>
      </ul>
    </div>
  </div>
</div>;
};

export default CharacterItem;
