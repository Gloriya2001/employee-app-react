import React from 'react'

const View = () => {
    return (
        <div>

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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    
                                </tr>

                            </tbody>
                        </table>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default View