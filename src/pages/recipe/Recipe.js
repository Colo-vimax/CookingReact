import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from '../../firebase/config'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const { mode } = useTheme()
  
  const [recipe, setRecipe] = useState(null) 
  const [isPending, setisPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setisPending(true)
    
    const unsub = projectFirestore.collection("recipes").doc(id).onSnapshot(doc => {
      if (doc.exists) {
        setisPending(false)
        setRecipe(doc.data())        
      }else{
        setisPending(false)
        setError('could find any recipe')
      }
    })
  }, [id]) 

    return () => unsub()

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).update(
    {
      title: "something completely different "
    }
    )

  }

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        < >
        <h2 className='page-title'>{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to cook.</p>
        <ul>
          {recipe.ingredients.map(ing => <li key={ing}>ing</li>)}
        </ul>
        <p className='method'>{recipe.method}</p>
        <button onClick={handleClick}>update me</button>
        </>
      )}

    </div>
  )
}
