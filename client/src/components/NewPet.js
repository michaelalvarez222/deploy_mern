import React, { useState } from 'react';
import axios from 'axios';
import { useHistory} from 'react-router';
import { Link } from "react-router-dom"

const NewPet = () => {

    const history = useHistory()

    let [formInfo, setFormInfo] = useState({
        name: null,
        description: null,
        type: null,
        skill1: null,
        skill2: null,
        skill3: null
    })

    let [validationErrors, setValidationErrors] = useState({})

    const changeHandler = (e)=>{
        console.log("form is getting there")
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("the info is",formInfo)
        axios.post("http://localhost:8000/api/pet/create", formInfo)
            .then(res=>{
                if(res.data.err){
                    setValidationErrors(res.data.err.errors)

                }
                else{
                    console.log("res is ", res)
                    history.push("/")
                }
            })
            .catch(err=>console.log("err is", err))
    }
    return (
        <div>
            <h1>Know A pet needing a home?</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Name</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput" name="name" placeholder="Example input"/>
                    <p className="text-danger">{validationErrors.name? validationErrors.name.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Type</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="type" placeholder="Another input"/>
                    <p className="text-danger">{validationErrors.type? validationErrors.type.message: ""}</p>
                </div><br />
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Description</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="description" placeholder="Another input"/>
                    <p className="text-danger">{validationErrors.description? validationErrors.description.message: ""}</p>
                </div>
                <h1>Skills (Optional)</h1>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Skill</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="skill1" placeholder="Another input"/>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Skill</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="skill2" placeholder="Another input"/>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Skill</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="skill3" placeholder="Another input"/>
                </div>
                <input className="btn btn-primary" type="submit" value="Add Pet" />
                <Link className="btn btn-info"to="/">Home</Link>
            </form>
        </div>
    );
};


export default NewPet;