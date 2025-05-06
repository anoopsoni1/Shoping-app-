import { useEffect, useState } from "react";
import {doc, getDoc} from 'firebase/firestore'
import { auth ,db } from '../Firebase';
import { toast } from "react-toastify";
const Profile = () => {
  const [users , setusers] = useState(null)
  const fetchuserdata = async()=>{
    auth.onAuthStateChanged(async(user)=>{
       console.log(user);
   const docref = doc(db,"Users" ,user.uid)
   const docsnap = await getDoc(docref)
     if(docsnap.exists()){
      setusers(docsnap.data()) ;
   console.log(docsnap.data());
     } else {
     console.log("User is not logged in !");
     }
    })
  }
   useEffect(()=>{
     fetchuserdata()
   } , []) ;

 const handlelogout = async ()=>{
    try {
      await auth.signOut() ;
      window.location.href = "/login"
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <>
   <div>
    {users ? (<>
    <div className="grid place-items-center text-3xl">
      <h1 className="font-semibold text-slate-800 text-3xl">Welcome {users.FirstName} </h1>
        <p>Email : {users.email}</p>
        <p>FirstName :{users.FirstName}</p>
        <p>LastName :{users.LastName}</p>
     </div>
     <div className="grid place-items-center">
  <div>
<button className="hover:bg-red-400 transition bg-red-500 rounded-full text-center h-12 w-36 mt-10 mb-10 text-2xl font-semibold text-white place-items-center" onClick={handlelogout}>Logout</button>
</div>
 </div>
       </>
    ) : (
      <p>
        Loading...
      </p>
    )}
   </div>
 </>
  )
}

export default Profile;
