import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams} from 'react-router';
import { Link } from "react-router-dom"

const EditPet = () => {

    const history = useHistory()

    const { _id } = useParams()

    const [petInfo, setPetInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then(res=>{
                console.log("this is the res", res)
                setPetInfo(res.data.results)
            })
            .catch(err=>console.log("your err is ", err))
    },[])


    const changeHandler = (e)=>{
        console.log("form is getting there")
        setPetInfo({
            ...petInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pet/${_id}`, petInfo)
        .then(res=>{
            console.log("this is the res", res)
            history.push("/")
        })
        .catch(err=> console.log("err is ", err))
    }

    return (
        <div>
            <h1>Edit {petInfo.name}</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Name</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput" name="name" value={petInfo.name} />
                    {/* <p className="text-danger">{validationErrors.name? validationErrors.name.message: ""}</p> */}
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Type</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="type" value={petInfo.type} />
                    {/* <p className="text-danger">{validationErrors.type? validationErrors.type.message: ""}</p> */}
                </div><br />
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Description</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="description" value={petInfo.description} />
                    {/* <p className="text-danger">{validationErrors.description? validationErrors.description.message: ""}</p> */}
                </div>
                <h1>Skills (Optional)</h1>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Skill</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="skill1" value={petInfo.skill1} />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Skill</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="skill2" value={petInfo.skill2} />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Skill</label>
                    <input type="text" onChange = {changeHandler} className="form-control" id="formGroupExampleInput2" name="skill3" value={petInfo.skill3} />
                </div>
                <br />
                <input className="btn btn-primary" type="submit" value="Edit Pet" />
                <Link className="btn btn-info"to="/">Home</Link>

            </form>
        </div>
    );
};


export default EditPet;