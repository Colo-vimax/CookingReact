import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
// styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setcookingTime] = useState('')
  // cache memory
  const [newIngredients, setnewIngredient] = useState('')
  const [ingredient, setIngredient] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()

  const { postData, data, error } = useFetch("http://localhost:3000/recipes", "POST")

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredient, method, cookingTime: cookingTime + 'minutes' })

  }
  const handleAdd = (e) => {
     e.preventDefault()
    // cached memory
    const ing = newIngredients.trim()

    if (ing && !ingredient.includes()){
      setIngredient(prevIngredients =>  [...prevIngredients, ing])
    }
    setnewIngredient('')
    ingredientInput.current.focus()
  }
   
  // redirect user data response
  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data])




  return (
    <div className='create'>
      <h1 className='page-title'>Add a New Recipe</h1>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe title:</span>
          <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          />
        </label>

        {/* { ingredients } */}
        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input 
            type="text"
            onChange={(e) => setnewIngredient(e.target.value)}
            value={newIngredients}
            ref={ingredientInput}
            />
            <button onClick={handleAdd} className='add'>add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredient.map(i => <em key={i}>{i}, </em>)}</p>


        <label>
          <span>Recipe method:</span>
          <textarea
          onChange={(e) => setMethod(e.target.value)}
          value={method}
          required
          />
        </label>

        <label>
          <span>cooking time (minutes):</span>
          <input
          type="number"
          onChange={(e) => setcookingTime(e.target.value)}
          value={cookingTime}
          required          
          />
        </label>
      
        <button className='btn'>submit</button>

      </form>
    </div>
  )
}
