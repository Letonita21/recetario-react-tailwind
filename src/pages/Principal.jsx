import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import { getRandomColor } from '../lib/colores';



const Principal = () => {
  
  /* const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_KEY = import.meta.env.VITE_APP_KEY; */
  const APP_ID = "0474d2d6";
  const APP_KEY = "f0a42658b13156aa5a82d24f54088efe";
  const URL_base = 'https://api.edamam.com/api/recipes/v2';

  //crear una constante de json
  const [receta, setReceta] = useState([]);
  const [loading, setLoading] = useState(true);


  //consumir la api
  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setReceta([]);
    try {
      const response = await fetch(
        `${URL_base}?type=public&q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`,

        {
          method: "GET",
          headers: {
            "Edamam-Account-User": "0474d2d6",

          },
        }
      );
      const data = await response.json();
      setReceta(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  const handleSearchReceta = (e)=>{
    e.preventDefault();
    const searchQuery = e.target[0].value;
    fetchRecipes(searchQuery);
  }

/*   const limpiarBuscador=()=>{
    setReceta("")

  } */

  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>
        <form onSubmit={handleSearchReceta}>
          <label className='input shadow-md flex items-center ga-2 w-full'>
            <Search size={"24"} />
            <input
              type='text'
              className='text-sm md:text-md grow'
              placeholder='¿Qué deseas cocinar hoy?'
             /*  onChange={limpiarBuscador} */
            />
          </label>
        </form>
        <h1 className='font-bold text-3cls md:text-5xl mt-4'> Recetas Recomendadas</h1>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'> Recetas Populares</p>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

          {!loading &&
            receta.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}

          {/* Skeleton - circle with content con daisyUI */}
          {loading && [...Array(9)].map((_, index) => (
            <div key={index} className="flex w-52 flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4">
                  <div className="skeleton h-4 w-20"></div>
                  <div className="skeleton h-4 w-28"></div>
                </div>
              </div>
              <div className="skeleton h-32 w-full"></div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}




export default Principal