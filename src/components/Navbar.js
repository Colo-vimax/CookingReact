// styles

import { Link} from 'react-router-dom'

// styles
import './Navbar.css'
import Searchbar from './Searchbar'

//components
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Nav>
            <Link to="/" className='brand'>
                <h1>Cooking Ninja</h1>
            </Link>
            <Searchbar/>
            <Link to="/create">Create Recipe</Link>
        </Nav>
    </div>
  )
}
