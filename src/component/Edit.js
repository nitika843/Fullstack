import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const  Edit = () => {

    const [inpval,setINP]= useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        add:"",
        desc:""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value

            }
        })
    }

  return (
    
    <div className="container">
            {/* <NavLink to="/" > Home 2Edit</NavLink> */}
            <form className="mt-4">
                <div class="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for=" exampleInputEmail1" className="form-label">Name</label>
                        <input type="Email" value={inpval.name} onChange={setdata}  className="form-control" name="name" id="exampleInputEmail1"  />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata}  name="email" class="form-control"   id="exampleInputPassword1" aria-describedby="email" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">age</label>
                        <input type="text" value={inpval.age} onChange={setdata}   name="age"class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" value={inpval.mobile} onChange={setdata}   name="mobile" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text" value={inpval.work}  onChange={setdata} name="work" className="form-control" id="exampleInputPassword" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input  type="text" value={inpval.add} onChange={setdata}  name="add" className="form-control" id="exampleInputPassword" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name="desc" value={inpval.desc} onChange={setdata}  className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary sm-btn">Submit</button>
                </div>
            </form>
        </div>
  )
  }

export default Edit;
