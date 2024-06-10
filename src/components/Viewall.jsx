import React, { useState } from 'react'

const Viewall = () => {
    const[data,setData]=useState([
        {
            "name":"",
        "bookname":"",
        "bookid":"",
        "author":"",
        "category":"",
        "price":""
        }
    ]
    )
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Book Name</th>
                                    <th scope="col">Book id</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                data.map(
                                    (value,index)=>{
                                     return   <tr>
                                        <th scope="row">{value.name}</th>
                                        <td>{value.bookname}</td>
                                        <td>{value.bookid}</td>
                                        <td>{value.author}</td>
                                        <td>{value.category}</td>
                                        <td>{value.price}</td>
                                        
                                    </tr>

                                    }
                                )
                               }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall