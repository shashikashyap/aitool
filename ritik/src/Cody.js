import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cod from './Image/chatgpt (2).png'
import trick from "./Image/trick.png";
import insta from "./Image/instagram.png";
import React from 'react'

function Cody() {
  return (



    
    <div class="card mb-3 shadow p-1 mb-5 bg-white rounded" >
    <div class="row g-0">
      <div class="col-md-4">
      <h5 class="card-title"><img src={cod}  width="300px"/></h5>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div className='chat'> 
          <h5 class="card-title">ChatGpt<img src={trick}  width='38px'/> </h5>
          <div className=' btn4 btn3 '>
          <button type="button" class=" btn btn-outline-info btn3 "> <img src={insta} class="card-img-top " alt="..." height="25px"/></button>
          </div>
          </div>
         
        <p class="card-text">ChatGpt is an Al-powered virtual Employee designed By <b>TESLA</b> to assist with various business tasks.
<br></br>
Use cases for Cody are ideal for various business needs: Businesses seeking to save time and money while boosting employee efficiency Marketing teams looking for Al assistance in content creation and idea generation HR and support departments aiming to improve response times and troubleshoot issues</p>
        
          <div className='btn3'>
          <button type="button" class="btn btn-outline btn3">Try Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cody
