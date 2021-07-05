
import React, { createContext, useState } from 'react';

export const MemberContext = createContext();

const MemberContextProvider = (props) => {

    const [data, setData] = useState([
        { heading: 'John Tenoso', paragraph: 'Main Programmer/Server Programmer || BSCS32E1 ' , buttonText: 'View details >>' },
        { heading: 'Renz Parreno', paragraph: 'Co-Programmer Elective 3 || BSIT32E2.', buttonText: 'View details >>' },
        { heading: 'Christopher Ortega', paragraph: 'Designer || BSCS32E1', buttonText: 'View details >>' },
        { heading: 'Nino Alamo', paragraph: 'ELECTIVE 3 PROFESSOR', buttonText: 'View details >>' },
        { heading: 'ELECTIVE 3', paragraph: 'ELECTIVE 3: WEB DESIGN', buttonText: 'View details >>' },
    
    ])

    const [count, setCount] = useState(data.length);
    const addData = (heading, paragraph,image) => {
        //
    }

    const removeData = (id) => {
        //
    }


    return (
        <MemberContext.Provider value={{ data, count, addData, removeData }}>
        {props.children}
        </MemberContext.Provider>
    )

}

export default MemberContextProvider;