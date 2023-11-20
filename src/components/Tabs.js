
import React, { useState } from "react";



const Tabs = ({tabProps}) =>{

    const [content, setContent] = useState('');




    return(
        
        

        <div>
            <ul>
            {tabProps.map((tab)=>(
                <li onClick={()=> setContent(tab.content)}>{tab.title} </li>
            ))}
            </ul>


                <p>{content}</p>
        </div>

       
        

    );

    

};


export default Tabs;