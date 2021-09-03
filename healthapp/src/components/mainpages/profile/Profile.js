import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'


//const initialState = {
  //  name: '',
    //password: '',
    //cf_password: '',
    //err: '',
    //success: ''
//}

function Profile(){


    return(

        <div className="profile_page">
         <div className="col-left">
            <h2>{"Profile"}</h2>

        
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" 
                placeholder="Your name"/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" 
                placeholder="Your email address"/>
            </div>

            <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input type="password" name="password" id="password"
                placeholder="Your password"   />
            </div>

            <div className="form-group">
                <label htmlFor="cf_password">Confirm New Password</label>
                <input type="password" name="cf_password" id="cf_password"
                placeholder="Confirm password"   />
            </div>

            <div className="col">
               
                   
                       <div className="row" >
                         
                          <div>
                              <button>update</button>
                             
                          </div>
                       </div>
                
               
           </div>  
            
        </div>
        </div>
    )
}
export default Profile