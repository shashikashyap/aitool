import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './Image/chatgpt (2).png';
import deri from './Image/group.png';
import insta from "./Image/instagram.png";
import trick from "./Image/trick.png";

function BasicExample() {
  return (
    
    <div class="row row-cols-1 row-cols-md-4 g-3 d-flex justify-content-around mt-5">
 
  <div class="col ">
    <div class="card h-90 shadow p-1 mb-5 bg-white rounded">
      <img src={logo} class="card-img-top" alt="..." className='image'/>
      <div class="card-body">
        <h5 class="card-title">ChatGpt  <img src={trick}  width='38px'/></h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <div className='btn'>
        <button type="button" class="btn btn1 btn btn-outline-info">  <img src={insta} class="card-img-top " alt="..." height="25px"/></button>
        </div>
        <a href="https://openai.com/blog/chatgpt"><button type="button" class="btn btn-primary btn2"> Try Now </button> </a>

       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-90 shadow p-1 mb-5 bg-white rounded">
      <img src={deri} class="card-img-top" alt="..." className='image'/>
      <div class="card-body">
        <h5 class="card-title">Adcreative.Ai <img src={trick}  width='38px'/></h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <div className='btn'>
        <button type="button" class="btn btn1 btn btn-outline-info">  <img src={insta} class="card-img-top" alt="..." height="25px"/></button>
        </div>
        <a href="https://www.adcreative.ai/"><button type="button" class="btn btn-primary btn2"> Try Now </button> </a>

        
      </div>
    
    </div>
  </div>
  <div class="col">
    <div class="card h-90 shadow p-1 mb-5 bg-white rounded">
      <img src={logo} class="card-img-top" alt="..." className='image'/>
      <div class="card-body">
        <h5 class="card-title">Cody<img src={trick}  width='38px'/></h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      
        <div className='btn'>
        <button type="button" class="btn btn1 btn btn-outline-info">  <img src={insta} class="card-img-top" alt="..." height="25px"/></button>
        </div>
        <a href="https://www.meetcody.ai/"><button type="button" class="btn btn-primary btn2"> Try Now </button> </a>
      </div>
     

     
    </div>
  </div>
  <div class="col">
    <div class="card h-90 shadow p-1 mb-5 bg-white rounded">
      <img src={logo} class="card-img-top" alt="..." className='image'/>
      <div class="card-body">
        <h5 class="card-title">Cody<img src={trick}  width='38px'/></h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      
        <div className='btn'>
        <button type="button" class="btn btn1 btn btn-outline-info">  <img src={insta} class="card-img-top" alt="..." height="25px"/></button>
        </div>
        <a href="https://www.meetcody.ai/"><button type="button" class="btn btn-primary btn2"> Try Now </button> </a>
      </div>
     

     
    </div>
  </div>

</div>

  );
}

export default BasicExample;