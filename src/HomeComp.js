import axios from "axios";
import {saveUser} from "./api/user"
import { useEffect ,useState} from "react";
function HomeComp() {
const [user,setUser] = useState({
    name:"",
    address:"",
    phone:""
})
  // console.log("hello",name)
  const handleSubmit = (event) => {
    event.preventDefault();
    saveUser().then(user=>{
      console.log(user)
    })
    console.log(user)
  }
  

  const updateData = (evt)=>{
    // console.log(evt.name,evt.value)
    setUser({...user,[evt.name]:evt.value});
    //setData({...data,[evt.name]:evt.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={user.name}
          name="name"
          onChange={(e) => updateData(e.target)}
        />
      </label>

      <label>Enter your address:
        <input 
          type="text" 
          value={user.address}
          name="address"
          onChange={(e) => updateData(e.target)}
        />
      </label>
      <label>Enter your phone:
        <input 
          type="text" 
          value={user.phone}
          name="phone"
          onChange={(e) => updateData(e.target)}
        />
      </label>

      <input type="submit" />
    </form>
  )
}

export default HomeComp;
