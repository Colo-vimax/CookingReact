import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'

// styles
import './Home.css'

// RecipeList component
import RecipeList from '../../components/RecipeList'
import { useEffect } from 'react'

export default function Home() {
   const [ data, setData] = useState(null)
   const [ isPending, setisPending] = useState(false)
   const [ error, setError] = useState(false)

  useEffect(() => {
    setisPending(true)

    // listeners
    const unsub = projectFirestore.collection("recipe").onSnapshot((snapshot) => {

      if (snapshot.empty) {
        setError("No recipe to load")
        setisPending(false)
      } else {
        let results = []
        snapshot.docs.forEach( doc  => {
          results.push({id: doc.id , ...doc.data()})
        })
        setData(results)
        setisPending(false)
      }
    }, (err) => {
      setError(err.message)
      setisPending(false)
    })

    return () => unsub() 
    
  }, [])
  
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className=''>is pending ...</p>}
      {data && <RecipeList recipes={data} />}
    </div> 
  )
}
