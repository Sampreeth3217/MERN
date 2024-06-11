import './Header.css';

function Header(){
  return(
    <div>
      <ul className="nav justify-content-end bg-secondary fs-4">
        <li className="nav-item">
          <a href="" className="nav-link text-white">Home</a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link text-white">Register</a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link text-white">Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
