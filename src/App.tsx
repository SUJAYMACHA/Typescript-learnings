// router.tsx
import React from 'react';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Pokemon from './Pokemon';
import Computer from './Computers';
import Plots from './Plots';
// Import other components for routing here
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className='flex  flex-col items-center gap-10 text-white bg-yellow-400 h-screen '>
        <h1 className='text-3xl  '>CHOOSE YOUR WEBPAGE</h1>
        <button className=' cursor-pointer p-4 pl-3 rounded-lg pr-3 hover:bg-blue-300 bg-blue-500'>
        <Link to="/pokemon">PokemonCards</Link>
        </button>
        <button className='cursor-pointer p-4 pl-3 rounded-lg pr-3 hover:bg-blue-300 bg-blue-500'>
        <Link to="/computer">ComputerCards</Link>
        </button>
        <button className='cursor-pointer p-4 pl-3 rounded-lg pr-3 hover:bg-blue-300 bg-blue-500'>
        <Link to="/Plots">Plot Cards</Link>
        </button>
      </div>
    ),
  },
  {
    path: "pokemon",
    element: <Pokemon />,
  },
  {
    path: "computer",
    element: <Computer />,
  },
  {
    path: "plots",
    element: <Plots />,
  },
]);
const Routes: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default Routes;
