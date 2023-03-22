
import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

// RecipeList component




export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
  return (
    <div className='home'>
      {error && <p className='error'></p>}
      {isPending && <p className=''>is pending ...</p>}
      {data && <RecipeList recipes={data} />}
    </div> 
  )
}
