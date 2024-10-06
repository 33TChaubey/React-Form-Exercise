import React, { useState } from 'react'
import Form from './components/Form';
import Cards from './components/Cards';
const App = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    console.log(id);
    setUsers(() => users.filter((item, index) => index !== id))
  }
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center ">
      <div className="container mx-auto">
        <Cards users={users} handleRemove={handleRemove} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  )
}

export default App;

