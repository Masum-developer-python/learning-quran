import React, { useState, useEffect} from 'react';
export function UserNavigation() {
   const user = localStorage.getItem("user");
   const [isAuth, setIsAuth] = useState(false);
   useEffect(() => {
     if (localStorage.getItem('access_token') !== null) {
        setIsAuth(true); 
        console.log(isAuth);
      }
    }, [isAuth]);
     return ( 
      <div>
        <ul >           
          <li className="m-auto"> 
          {isAuth ? <a href="/home">{user}</a> : null}
          </li>
          <li className="px-4">
          {isAuth ? <a href="/logout">Logout</a> :  
                    <a href="/login">Login</a>}
          </li>
        </ul>
       </div>
     );
}