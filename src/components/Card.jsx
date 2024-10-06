import React from 'react'

const Card = ({ user, id, handleRemove }) => {
  return (
    <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
      <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden ">
        <img className="w-full h-full object-cover " src={user.image} alt="" />
      </div>
      <h1 className="m-1 text-xl text-center font-semibold">{user.name}</h1>
      <h4 className='opacity-60 text-xs font-semibold'>{user.email}</h4>
      <p className="m-1 text-sm text-center font-semibold leading-1 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, neque.</p>
      <button onClick={() => handleRemove(id)} className='px-3 py-1 bg-red-600 text-white rounded-lg text-white font-semibold m-1' >Remove It</button>
    </div>


  )
}

export default Card
