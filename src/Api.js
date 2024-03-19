import axios from "axios";


const url="http://localhost:4200/products"
 

 export const Getdata= async ()=>{
    return await axios.get(url)
}


export const DeleteData= async (id)=>{
    return await axios.delete(`${url}/${id}`)
}

export const Postdata= async (data)=>{
    return await axios.post(url,data,{
        headers:{
            "content-type":"application/json"
        }
    })
}
export const Putdata= async (id,data)=>{
    return await axios.put(url+"/"+id,data,{
        headers:{
            "content-type":"application/json"
        }
    })
}