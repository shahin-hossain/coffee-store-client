import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  //  data delete করলে সাথে সাথে UI থেকে সরে যাবে, এটা ৩ভাবে করা যায়।
  // ‍state set করে করা যেতে পারে, refetch করা যেতে পারে এবং tanstack query দিয়েও করা যেতে পারে।

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className='text-5xl text-orange-950 text-center'>Coffee Store </h1>
      <h1 className='text-2xl text-orange-950 text-center'>Hot Hot Cold Coffees {coffees.length}</h1>
      <div className='m-20 grid md:grid-cols-2 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
