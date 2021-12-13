import { useEffect, useState }from 'react'



export const FetchURL =(url) => {
    const [result,setResult]= useState({cargando:true,data:null})
 
     useEffect(() => {
         getData(url)
        
     }, [url])
    
     async function getData(url){
        try{
            setResult({cargando:true,data:null})
            const resp =await fetch(url)
            const data =await resp.json()
            setResult({cargando:false,data})
        }
        catch(e){
            console.log(e)
        }
     }
 return result
}


