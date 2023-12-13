
import React, { useState } from "react";
const Tabs = ({tabData}) =>{

    const [content, setContent] = useState(tabData[0].content);

    return(
        
        

        <div>
            <ul>
            {tabData.map((tab)=>(
                <li onClick={()=> setContent(tab.content)}>{tab.title} </li>
            ))}
            </ul>

                <div>
                {
                    content && <p>{content}</p>
                }
                </div>

        </div>

       
        

    );

    

};


export default Tabs;