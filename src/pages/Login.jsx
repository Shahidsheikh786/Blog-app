import React from 'react'

const Login = () => {
  return (
    <div className="w-full bg-[url('/loginPage.jpeg')] bg-no-repeat bg-cover h-[calc(100vh-120px)] flex flex-col
    relative
    justify-center items-center">
    
    <button className="p-2 bg-green-600 text-white rounded-xl absolute top-4
    right-4">Ragister</button>
    
     <h1 className="text-5xl text-center mb-6">Login </h1> 
   
     <div className="flex flex-col gap-3">
     <h2>Email </h2>
     <input className="outline-none rounded-lg p-2 px-3 " placeholder="Enter your Email"/>
     
     <h2 className="">Password </h2>
     <input className=" outline-none rounded-lg p-2 px-3 " placeholder="Enter your Password"/>
     
     <button className="text-white bg-rose-400 p-2 px-3 rounded-lg">Login</button>
     </div>
     
    </div>
  )
}

export default Login