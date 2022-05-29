import Accordion from './component/Accordion';
import React from "react";

const items = [{
    Name: 'Abed',
    from: "kafr qara"
},
{
    Name: 'Mike',
    from: "Tel-Aviv"
},
{
    Name: 'Ahmad',
    from: "Haifa"
}
]



const App = () => {

   return (
       <Accordion items={items} />
   )

}
export default App;