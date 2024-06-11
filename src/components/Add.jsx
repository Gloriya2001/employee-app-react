import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {

    const [data, setData] = useState(
        {
            "empId": "",
            "empName": ""
        }
    )

    const inputHandler = (event) => {

        setData({ ...data, [event.target.name]: event.target.value })

    }


    const readValue = () => {

        console.log(data)

    }




    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h1>Add Employee</h1>

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Employee Id</label>
                                <input type="text" className="form-control" name='empId' value={data.empId} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Employee Name</label>
                                <input type="text" className="form-control" name='empName' value={data.empName} onChange={inputHandler} />


                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Add</button>


                            </div>
                        </div>



                    </div>
                </div>
            </div>



        </div>
    )
}

export default Add