import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                <NavLink to="/edit" style={{color :'black'}} className="btn btn-primary" >Add Data</NavLink> 
                    {/* <button className="btn btn-primary">Add data</button> */}
                </div>
                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Meet</td>
                            <td>meta@gmail.com</td>
                            <td>20001</td>
                            <td>9199993856</td>
                            <td className="d-flex justify-content-between">
                                <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                                <button className="btn btn-primary"><EditIcon /></button>
                                <button className="btn btn-danger"><RestoreFromTrashIcon /></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Jon</td>
                            <td>Jonsy@gmail.com</td>
                            <td>19999</td>
                            <td>91990787675</td>
                            <td className="d-flex justify-content-between">
                                <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                                <button className="btn btn-primary"><EditIcon /></button>
                                <button className="btn btn-danger"><RestoreFromTrashIcon /></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    );
}
export default Home;