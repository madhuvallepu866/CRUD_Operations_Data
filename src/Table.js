import React from "react";
 const Table=(props)=>{
    return(
        <>
        <table className="table">
            <thead>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
                <td>category</td>
            </thead>
            <tbody>
                {
                    props.products.map(
                        (data)=>(
                           <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.category}</td>
                            <td>
                                <button className="btn btn-primary m-1"
                                onClick={()=>{
                                    props.edit(data)
                                }}
                                >Edit</button>
                                <button className="btn btn-danger m-1"
                                onClick={()=>{
                                    props.deleted(data.id)
                                }}
                                >Delete</button>
                            </td>
                           </tr>
                        )
                    )
                }
            </tbody>

        </table>
        
        </>
    )
 }
 export default Table;