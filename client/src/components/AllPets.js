import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from "react-router-dom"
import { useHistory } from 'react-router';

const AllPets = () => {

    const [allPets, setAllPets] = useState([])

    const [deleteProductClicked, setDeleteProductClicked] = useState()

    const history = useHistory()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
            .then(res=>{
                console.log("this the res",res)
                setAllPets(res.data.results)
            })
            .catch(err=> console.log("this the err",err))
    },[])


    return (
        <div>
            <h4>These pets are looking for a good home</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allPets.map((pet,i)=>{
                        return (
                            <tr>
                                <th scope="row">{pet._id}</th>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><Link to={`/pet/${pet._id}`}>Details</Link> | <Link to={`/pet/edit/${pet._id}`}>Edit</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};


export default AllPets;