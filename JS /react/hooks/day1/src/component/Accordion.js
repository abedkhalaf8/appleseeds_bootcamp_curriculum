import React, {useState} from "react";

const Accordion = ({items}) => {
    const [Index, setIndex] = useState(null);



    const clicked = (i) => {
        setIndex(`clicked ${i}`);
    }
    const arr = [];
    for (let i = 0; i < items.length; i++) {
         arr.push(
            <div 
            onClick={()=> {clicked(i)}}
            key={i} 
            style={{backgroundColor: "red", marginTop: "4px", width: "100px"}}>
           
            {items[i].Name}: {items[i].from}  
            
             </div>);
    }
    return (
        <div>
            <div className="accordion">
            {arr}
            {Index}
            </div>
</div>

    )
}

export default Accordion;