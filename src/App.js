import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Signup from './component/signup';
function App(){
  return(
<Signup/>
  );
}

/* function App() {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmPassword,setConfirmPassword]=useState('');
const [success,setsuccess]=useState('');
const [error,setError]=useState('');

const handleSignup=(e)=>{

  e.preventDefault();
 
  if(!name || !email || !password || !confirmPassword){
    setError("Error : All fields are mandetory");
    return;
  }
 
  if(password!==confirmPassword)
  {
    setError("Password Mismatch");
    return;
  }


}

  return (
    <div className="App">
      <div className="container ">
      <h1>Signup</h1>
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Full Name"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Email" 
                        
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" 
                         value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="message">
                    {error && <div className="error">{error}</div>}
                    {success && <div className="success">{success}</div>}
                    <button onClick={handleSignup} className="btn">Signup</button>
                   
                     </div>
                    

      </div>
      
      

    </div>
  );
}
*/
export default App; 
