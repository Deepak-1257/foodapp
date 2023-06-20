import React from 'react';
import{Link,useNavigate} from 'react-router-dom';
import { Badge } from 'react-bootstrap';

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout=()=>{
     localStorage.removeItem("authToken");
     navigate("/login");
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand fs-1 fst-italic" to="/">GOFOOD</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav me-auto  mb-2">
      <li className='nav-item'>
      <Link className="nav-item nav-link active " to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      {(localStorage.getItem("authToken"))?
      <li className='nav-item'>
      <Link className="nav-item nav-link active " to="/">My Orders <span className="sr-only">(current)</span></Link>
      </li>:""}
    
    </ul>
    {(!localStorage.getItem("authToken"))?
    <div className='d-flex '> 
    <li> 
      <Link className="btn bg-white text-success mx-1" to="/login">login</Link>
      </li>
      <li> 
      <Link className="btn bg-white text-danger mx-1" to="/Createuser">Signup</Link>
      </li>
      </div>:
      <div>
      <div className='btn bg-white text-success mx-2'>
        My Cart{" "}
        <Badge pill bg='danger'></Badge>
        </div>
      <div  className='btn bg-white text-danger mx-2 ' onClick={handleLogout}>logout</div>
      </div>}
      </div>
</nav>
</>
  )
}
