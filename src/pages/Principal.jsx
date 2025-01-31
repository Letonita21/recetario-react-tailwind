import {  Search} from 'lucide-react'
import React from 'react'
import RecipeCard from '../components/RecipeCard'

const Principal = () => {
  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>
        <form >
          <label className='input shadow-md flex items-center ga-2 w-full'>
            <Search size={"24"} />
            <input
              type='text'
              className='text-sm md:text-md grow'
              placeholder='¿Qué deseas cocinar hoy?'
            />
          </label>
        </form>

        <h1 className='font-bold text-3cls md:text-5xl mt-4'> Recetas Recomendadas</h1>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'> Recetas Populares</p>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>

        </div>
      </div>




    </div>
  )
}

export default Principal