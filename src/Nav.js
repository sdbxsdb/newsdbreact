import { Link } from 'react-router-dom';

function Nav(){
  
  return (
    <div>
      <ul className="flex justify-around">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav
