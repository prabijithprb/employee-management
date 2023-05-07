import { react, useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Await, Link } from "react-router-dom";
import axios from "axios";
import View from "./View";

function Admin() {
    const [allEmployees, setAllEmployees] = useState([])

    const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/getAllEmployee')
        setAllEmployees(result.data.employees);
    }


    const handleDelete=async (id)=>{
        const result = await axios.delete('http://localhost:8000/deleteEmployee/'+id)
        alert(result.data.message)

        // console.log(result);

        //  refresh that table content
        fetchData()
    }


    // console.log(allEmployees);

    useEffect(() => {
        fetchData()
    }, [])



    return (

        <div>


            <h1 className='h text-center mt-5 '><i class="fa-solid fa-house-chimney-user"></i> Employee Management App</h1>
            <hr className='mt-5' />
            <p className='text-white text'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency.Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals.</p>
            <hr />

            <Link to={('/add')}>
                <div className='text-center mt-5 '>
                    <Button variant="success"><i class="fa-solid fa-user-plus"></i> Add Employee</Button>

                </div>
            </Link>


            <Table striped bordered hover variant="dark" className='w-75 container mt-4'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allEmployees?.map((item, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.uname}</td>
                                <td>{item.age}</td>
                                <td>{item.designation}</td>
                                <td>{item.salary}</td>
                                <td className='text-center'>
                                    <Link to={'View/'+item.id}>
                                    <Button className='me-3' variant="info"><i class="fa-solid fa-eye"></i> View</Button>
                                    </Link>
                                    <Link to={'edit/'+item.id}>
                                        <Button className='me-3' variant="warning"><i class="fa-solid fa-user-pen"></i> Edit</Button>
    
                                    <Button onClick={()=>handleDelete(item.id)} variant="danger"><i class="fa-solid fa-trash"></i> Delete</Button>
                                    </Link>
                                </td>
                            </tr>

                        ))

                    }
                </tbody>
            </Table>
        </div>
    )


}

export default Admin