import React, { useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const Form = () => {
    const[data,setData]=useState({
        "name":"",
        "bookname":"",
        "bookid":"",
        "author":"",
        "category":"",
        "price":"",
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
            (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("succesfully added")
                        
                    } else {
                        alert("eroor")
                    }
            }
        ).catch().finally()
    }
    
  return (
    <div>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Book Name</label>
                            <input type="text" className="form-control" name='bookname' value={data.bookname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Book ID</label>
                            <input type="text" className="form-control" name='bookid' value={data.bookid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Author</label>
                            <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Category</label>
                            <input type="text" className="form-control" name='category' value={data.category}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control"name='price' value={data.price} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form