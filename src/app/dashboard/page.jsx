import React from 'react';
import Counter from '../component/Counter';

const DashboardPage = () => {

     
     return (
          <div>
               <h1> Dashboard Page</h1>

               <Counter/>

               <ul> 
                    <li> item01</li>
                    <li> item02</li>
                    <li> item03</li>
               </ul>
               
          </div>
     );
};

export default DashboardPage;