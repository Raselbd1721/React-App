
import React,{useState,useEffect} from "react"
import { Outlet, Link,useNavigate,useLocation } from 'react-router-dom'
import {useDispatch,useSelector } from "react-redux";
import {setLogin,setSideBar} from "../Components/EcomReducer.jsx";
import toast,{Toaster} from 'react-hot-toast';
import { RxCrossCircled } from "react-icons/rx";
import LogedinPage from "../Pages/LogedinPage.jsx"
import {setLs,RemoveLs,getLs,callIslogin} from "../Helper/HelperLs.jsx";
import About from "../Pages/About.jsx"
import axios from "axios"

export default function MainPage(){
 const navigate=useNavigate()
  const dispatch=useDispatch()
    const { pathname } = useLocation();
  
  const [isLo,setIsLo]=useState(false)
  const [isLoading,setIsLoading]=useState(false)
  
  const {login}=useSelector((state)=>state.EcomReducer)
  const [userd,setUserd]=useState({email:"",password:""})
  
 axios.defaults.withCredentials=true
   const callApi=async()=>{
    try{
      //const res=await axios.get('http://localhost:3000/products/islogin')
      const res=await callIslogin({action:"get",url:"https://ecommerce-app-5dnf.onrender.com/products/islogin"})
      
      if(res.data){
        //dispatch(setLogin(true))
     setIsLo(true)
     if(pathname === "/"){
       navigate("/home")
     }
  //else{ navigate(pathname)}
     //alert("true")
      }
    }catch(error){
      
      setIsLo(false)
      navigate("/login")
      //dispatch(setSideBar(false))
      console.log(error)
      //alert(false)
    }
  }
  /*const userLogOut=async()=>{
   try{
      const res=await axios.get("http://localhost:3000/products/logout")
      await toast.success(res.data.message)
      navigate("/")
    }catch(error){
     await toast.error(error.response.data.message)
    }
  }*/
  
  /*const userLogin=async(e)=>{
   try{
      e.preventDefault()
      const res=await axios.post("http://localhost:3000/products/userlogin",userd)
    await toast.success(res.data.message)
      setUserd({email:"",password:""})
     // dispatch(setLogin(false))
     setIsLo(true)
      navigate(-1)
    }catch(error){
      setIsLo(false)
      //dispatch(setLogin(false))
      console.log(error.response.data)
      toast.error(error.response.data.message)
    }
  }*/
  
  
  useEffect(()=>{
    callApi()
  },[isLo])
  
 {
 /*       <div className="mx-2 py-5 text-center font-serif pt-0 z-10 w-[400px] box-border">

<div className="w-[400px] pt-20 pb-12">
      <div className="text-center py-1 border-2 border-blue-600 border-solid rounded-3xl bg-gray-100 mb-4 shadow-[3px_5px_5px_gray] transform transition ease-in-out duration-500 hover:scale-110 w-[330px] mx-auto px-1">
              <div className="flex justify-end text-4xl">
      </div>
              <h1 className="text-3xl text-center text-amber-600 pb-2">User Login</h1>
<form onSubmit={userLogin}>
<input type="text" placeholder="here Username" name="email" className="p-2 border-2 border-solid border-gray-200 outline-none rounded-lg mb-2" value={userd.email} onChange={(e)=>setUserd({...userd,email:e.target.value})}required/><br/>
<input type="text" placeholder="here password" name="password" className="p-2 border-2 border-solid border-gray-200 outline-none rounded-lg mb-2" value={userd.password} onChange={(e)=>setUserd({...userd,password:e.target.value})} required/>
<button className="p-2 border-2 mx-auto block border-amber-200 rounded-xl mt-3 bg-green-600 text-white " type="submit">Submit</button>
</form><br/>
<button onClick={()=>userLogOut()}>logout</button>
</div>
</div>

</div>*/}
 
  return( 
  <div>{isLo && <Outlet /> }
  </div>
 ) 
}