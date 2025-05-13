import { Link, NavLink } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
function Header() { 
  const handleLogout = () => {
  signOut(auth)
    .then(() => console.log("User signed out"))
    .catch((error) => console.error("Sign out error:", error));
};
  onAuthStateChanged(auth, (user) => {
  if (user) {
   const getstarted = document.getElementById("one") ;
       getstarted.innerHTML = "Logout"
       getstarted.style.height = "40px"
       getstarted.style.width = "85px"  
        getstarted.onclick = {handleLogout}
  } else {
    console.log("No user signed in.");
  }
});

  return (
 <>
    <header className="flex justify-between items-center p-4 font-semibold">
    <nav className="hidden md:flex space-x-8 ">
        <span className="text-lg cursor-pointer hover:text-purple-600"> <NavLink className={({isActive})=> 
        `${isActive ? "text-orange-400" : "text-silver"}`} to='/'>Home</NavLink>
           </span>
        <span className="text-lg cursor-pointer hover:text-purple-600"><NavLink  className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-silver"}`} to='/about'> About</NavLink></span>
        <span className="text-lg cursor-pointer hover:text-purple-600"><NavLink className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-silver"}`} to='/services'>Services</NavLink></span>
        <span className="text-lg cursor-pointer hover:text-purple-600"><NavLink className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-silver"}`} to='/contact'>Contact</NavLink></span>
    </nav>
    <div className='flex gap-10'>
     <button  className='bg-yellow-400 text-gray-800 py-2 px-6 rounded-md font-semibold hover:bg-yellow-500 transition duration-300'> <Link to='/buy'>Cart</Link> </button>
    <button id="one" className="bg-yellow-400 text-gray-800 py-2 px-6 rounded-md font-semibold hover:bg-yellow-500 transition duration-300">
      <Link to="/login"> Get Started</Link>  
    </button>
    </div>
</header>


<div className="md:hidden p-4 gap-2 flex justify-evenly font-semibold">
    <p className="text-white"><NavLink to="" className={({isActive})=>`${isActive ? "text-orange-700" :"text-gray-800"}`} >Home</NavLink></p>
    <p className=" text-white "><NavLink to="/about" className={({isActive})=>`${isActive ? "text-orange-700" :"text-gray-800"}`}>About</NavLink></p>
    <p className=" text-white "><NavLink to="/services" className={({isActive})=>`${isActive ? "text-orange-700" :"text-gray-800"}`}>Services</NavLink></p>
    <p className=" text-white "><NavLink to="/contact"  className={({isActive})=>`${isActive ? "text-orange-700" :"text-gray-800"}`}>Contact</NavLink></p>
</div>
</>
  )
}

export default Header