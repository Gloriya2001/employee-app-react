import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:8080/view").then(

            (response) => {

                changeData(response.data)

            }

        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1>View Employees</h1>

                        <table class="table table-dark table-striped">
                            <thead>

                                <tr>
                                    <th scope="col">Employee Id</th>
                                    <th scope="col">Employee Name</th>

                                </tr>

                            </thead>

                            <tbody>


                                {data.map(

                                    (value, index) => {

                                        return <tr>
                                            <th scope="row">{value.empId}</th>
                                            <td>{value.empName}</td>

                                        </tr>


                                    }



                                )}




                            </tbody>
                        </table>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default View