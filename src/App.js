

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import BasicExample from './BasicExample';
import Cody from './Cody';
import NewFeature from './NewFeature';

function App() {
  return (

    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">AI-Planet</a>
   
 
  </div>
  <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Favourite</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Submit</a>
        </li>
       
         
        <li class="nav-item">
          <a class="nav-link " href="#">Help</a>
        </li>
      </ul>
    
    </div>
</nav>

<div>
  <NewFeature/>
<BasicExample/>


<div>
  <Cody/>
  </div>
  
</div>
<BasicExample/>

    </div>
  );


}

export default App;

