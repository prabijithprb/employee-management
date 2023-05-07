import axios from 'axios';
import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function View() {

const [employee,setEmployee]=useState({})

const params=useParams()
const fetchEmp=async () =>{
  const result=await axios.get('http://localhost:8000/getAnEmp/'+params.id)
  setEmployee(result.data.employee)

}
useEffect(()=>{
fetchEmp()
},[])





  return (
    <div>
            <h1 className='mt-5 text-white text-center'>
        <i class="fa-sharp fa-solid fa-house-user"></i>

        Edit Employee Details</h1>


<p>Workers don't need to work full time to be considered employees—they simply need to be paid to work by an employer (the person or business that pays them). The term employee is sometimes used to distinguish contract workers from full employees (who often earn additional benefits), but in this example, both types of workers are considered employees in the general sense.</p>

<div className=' w-50 container'>
  
  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      
</div>
  




    </div>
  )
}

export default View