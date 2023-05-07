import { React, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Add() {
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState(0)


  useEffect(() => {
    setId(uuid().slice(0, 3))
  }, [])


  // create a object for the hook
  let location = useNavigate()



  const addEmployee = async (e) => {
    e.preventDefault()

    setId(uuid().slice(0, 3));

    const body = {
      id,
      uname,
      age,
      designation: desig,
      salary
    }

    // console.log(body);

    const result = await axios.post('http://localhost:8000/addEmployee', body)
    console.log(result);
    alert(result.data.message)

    location('/')

  }




  return (
    <div>


      <div className=' p-5 container w-50 '>

        <h1 > <i class="fa-solid fa-user-plus"></i> Add  New  Employee

        </h1>
        <br>
        </br>

        <Form>
          <Form.Group className="mb-3 " controlId="exampleForm.controlTextareal">
            <Form.Label>User Name</Form.Label>
            <Form.Control onChange={(e) => setUname(e.target.value)} type="text" placeholder="" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="exampleForm.controlTextareal">
            <Form.Label>Age</Form.Label>
            <Form.Control onChange={(e) => setAge(e.target.value)} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.controlTextareal">
            <Form.Label>Designation</Form.Label>
            <Form.Control onChange={(e) => setDesig(e.target.value)} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.controlTextareal">
            <Form.Label>Salary</Form.Label>
            <Form.Control onChange={(e) => setSalary(e.target.value)} type="text" placeholder="" />
          </Form.Group>



          <Button onClick={(e) => addEmployee(e)} className='me-3' variant="primary" type="submit">
            Add
          </Button>

          <Link to={'/'}>

            <Button variant="warning" type="submit">
              Cancel
            </Button>

          </Link>


        </Form>
      </div>

    </div>
  )
}

export default Add