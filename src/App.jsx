import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();

  return (
    <>
      <h1 className='text-5xl text-orange-950 text-center'>Coffee Store </h1>
      <h1 className='text-2xl text-orange-950 text-center'>Hot Hot Cold Coffees {coffees.length}</h1>
      <div className='m-20 grid md:grid-cols-2 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
