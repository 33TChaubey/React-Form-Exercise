import React from 'react';
import Card from './Card';
import Form from './Form';

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="w-full p-4 flex justify-center gap-4 flex-wrap max-h-96 min-h-96 overflow-auto">
      {users.map((item, index) => {
        return <Card key={index} user={item} id={index} handleRemove={handleRemove} />
      })}


    </div>
  )
}

export default Cards;
