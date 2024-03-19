import React, { useEffect, useState } from "react";

import Table from "./Table";
import Form from "./Form";
import { Getdata ,DeleteData, Postdata,Putdata} from "./Api";
 const Final=()=>{
    const [products,setProducts]=useState([])
    const [openForm,setopenForm]=useState(false)
    const [edit,setEdit]=useState(false)
    const[initialForm,setinitialForm]=useState({name:'',price:'',category:''})
    useEffect(
        ()=>{
            getProduct()
        },[]
    )

    const getProduct= async ()=>{
        let res =await Getdata();
        setProducts(res.data)
           }
    const  deleteProduct = async (id)=>{
          await DeleteData(id)
        getProduct()  
            }
    const addProduct= async(product)=>{

        let data={
            name:product.name,
            price:product.price,
            category:product.category,
        }

        
        if(edit){
             await Putdata(product.id,data)
        }
          else{
            await Postdata(data)
        }
        getProduct()
        setopenForm(false)
    }

    const editProduct= async(data)=>{
       setinitialForm(data)
        getProduct()
        setopenForm(true)
        setEdit(true)
    }
     const openshow=()=>{
        setopenForm(true);
        setinitialForm({name:'',price:'',category:''})
     }  
     const closeshow=()=>{
        setopenForm(false);
     }       
    return(
        <div className="wrapper m-5 w-130">
       <h1 className="text-primary">URUD Operstions</h1> 
      <button className="btn btn-primary" onClick={()=>{openshow()}}>AddProduct</button>
       <Table products={products} deleted={deleteProduct} edit={editProduct}/>
       {
        openForm && <Form close={closeshow} data={initialForm} add={addProduct}/>
       }
 
        </div>
    )
 }
 export default Final;