
import React, { useState } from "react";



const Tabs = ({tabProps}) =>{

    const [selectedTab, setSelectedTab] = useState(null);




    const handleTabClick = (title)=>{
        setSelectedTab(title);  
    }


    return(
        
        

        <div>
            <ul>
            {tabProps.map((tab,index)=>(
                <li key={index} onClick={() => handleTabClick(tab.title)}>{tab.title} </li>
            ))}
            </ul>


        {selectedTab && (
        <div>
          {tabProps.find((tab) => tab.title === selectedTab).content}
        </div>
        )}    
        </div>

       
        

    );

    

};


export default Tabs;