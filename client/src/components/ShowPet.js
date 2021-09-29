import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom"


const ShowPet = () => {

    const { _id } = useParams()

    const [petInfo, setPetInfo] = useState({})


    const history = useHistory()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then(res=>{
                console.log("this is the res", res)
                setPetInfo(res.data.results)
            })
            .catch(err=>console.log("your err is ", err))
    },[_id])

        const deletePet = ()=>{
            console.log("deleteeeee", petInfo._id)
            axios.delete(`http://localhost:8000/api/pet/${petInfo._id}`)
                .then(res=>{
                    console.log("res is ", res)
                    history.push("/")
                    
                })
                .catch(err=> console.log("err is", err))
        }

    return (
        <div>
            <h1>Details about: {petInfo.name}</h1>
            <p>Pet Type: {petInfo.type}</p>
            <p>Description: {petInfo.description}</p>
            <p>Skills (IF PROVIDED): {petInfo.skill1},{petInfo.skill2},{petInfo.skill3}</p>
            <p onClick={deletePet} className="btn btn-danger">Adopt {petInfo.name}</p>
            <Link className="btn btn-info"to="/">Home</Link>
        </div>
    );
};



export default ShowPet;