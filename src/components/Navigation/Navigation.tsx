import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <div>
        <h1>The Fastest Food</h1>
        <div>Basket</div>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/deals'>Deals</Link>
        </li>
        <li>
          <Link to='/pizzas'>Pizzas</Link>
        </li>
        <li>
          <Link to='/burgers'>Burgers</Link>
        </li>
        <li>
          <Link to='/desserts'>Desserts</Link>
        </li>
        <li>
          <Link to='/drinks'>Drinks</Link>
        </li>
      </ul>
    </nav>
  );
}
