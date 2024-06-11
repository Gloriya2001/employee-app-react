import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {

    const [data, changeData] = useState(
        [


            {
                "_id": "66682b0592aa58f41ebd6ace",
                "empId": "205",
                "empName": "Rosy",
                "__v": 0
            },
            {
                "_id": "666859bb7291258cdfed6a7a",
                "empId": "201",
                "empName": "Ria",
                "__v": 0
            }
        ]

    )


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