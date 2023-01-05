import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { RiStackshareLine, RiHome5Line, RiStackFill, RiDatabase2Fill } from "react-icons/ri";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { useRouter } from 'next/router'




export default function Home() {
  const router = useRouter();
  const [eyeicons, setEyeicons] = useState(false);
  
const signin = ()=>{    
    router.push("/dashboard");
}

  return (
    <>
      <Head>
        <title>Idea Pos System</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.pinimg.com/originals/6e/cb/91/6ecb91e73eab30f51b0b29a880338147.png" />
      </Head>
      
 

      
      <div className="signin_main">
        
        
        <div className="signin_left" style={{backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/previews/015/732/277/non_2x/abstract-transparent-circles-with-shadow-on-white-grey-background-illustration-vector.jpg" + ")"}}>
        
        <div className="signin"> Sign In </div>
        <div className="signinform">
            <div className="input-container">
                <label>Email Address </label>
                <input type="text" name="uname" required />         
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type={eyeicons ? "text" : "password"} name="pass" required className="inputpasword_field" />                
                <div className="eye_icon" onClick={()=>setEyeicons(!eyeicons)} >
                  { eyeicons ? <AiFillEye/> : <AiTwotoneEyeInvisible /> }
                </div>
            </div>
            <div className="input-remember">
                <input type="checkbox" value="lsRememberMe" /> &nbsp;
                <label for="rememberMe"> Remember me</label>
            </div>




            <div className="button-container">                
              <input type="submit" onClick={()=>signin()} value="Sign in"/>
            </div>

             </div>
            <div className="privacy_policy"> Privacy Policy | Contact </div>
   </div>
        




        <div className="signin_right">
            <img src="https://loyverse.com/sites/all/themes/loyversecom/images/home/loyverse-pos.webp"/>
        </div>
        

      </div>

 
    </>
  )
}
