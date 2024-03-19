import React, { useState } from "react";
 const Form=(props)=>{
    const[product,setProduct]=useState(props.data);
    const[submitted,setSubmitted]=useState(false)
    let changeFormdata=(e)=>{
        const {name,value}=e.target;
        setProduct({...product,[name]:value})
    }
    return(
        <>
        <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={product.name} className="form-control mt-2"  placeholder="Enter Name"onChange={changeFormdata}/>
                    {
                    submitted && product.name.length<5 && <span className="text-danger">Product name must be 5 chars required</span>
                }
                </div>
                <div className="form-group">
                    <label>Price:</label>
                <input type="number" name="price" value={product.price} className="form-control mt-2" placeholder="Enter Price"onChange={changeFormdata}/>
                {
                    submitted && product.price === "" && <span className="text-danger">Product price required</span>
                }
                </div>
                <div className="form-group">
                <label>Category:</label>
                    <select className="form-control mt-2" name="category" value={product.category} onChange={changeFormdata}>

                    <option value='-1'></option>
                    <option value={'mobiles'}>Mobiles</option>
                    <option value={'laptops'}>Laptop</option>
                    <option value={'tv'}>TV's</option>

                    </select>
                    {
                    submitted && product.category === "" && <span className="text-danger">Product category required</span>
                }
                </div>
                <button className="btn btn-primary float-end" onClick={(e)=>{
                    setSubmitted(true)
                    e.preventDefault()
                    if(!!product.name && !!product.price && !!product.category){
                        props.add(product)
                    }
               
                }}>send</button>
                <button className="btn btn-danger float-end" onClick={(e)=>{
                    e.preventDefault()
                    props.close()
                    
                }}>cancel</button>
            </form>
        </div>
      
        </>
    )
 }
 export default Form;