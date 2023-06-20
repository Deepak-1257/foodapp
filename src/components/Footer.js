import React from 'react';
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <> 
    <footer  ClassName="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div  ClassName="col-md-4 d-flex align-items-center">
      <Link to="/"  ClassName="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg  ClassName="bi" width="30" height="24"><use xlink to="#bootstrap"></use></svg>
      </Link>
      <span  ClassName="text-muted">© 2021 Company, Inc</span>
    </div>

    {/* <ul  ClassName="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li  ClassName="ms-3"><Link  ClassName="text-muted" to="/"><svg  ClassName="bi" width="24" height="24"><use xlink to="#twitter"></use></svg></Link></li>
      <li  ClassName="ms-3"><Link  ClassName="text-muted" to="/"><svg  ClassName="bi" width="24" height="24"><use xlink to="#instagram"></use></svg></Link></li>
      <li  ClassName="ms-3"><Link  ClassName="text-muted" to="/"><svg  ClassName="bi" width="24" height="24"><use xlink to="#facebook"></use></svg></Link></li>
    </ul> */}
  </footer>
  </>
  )
}
