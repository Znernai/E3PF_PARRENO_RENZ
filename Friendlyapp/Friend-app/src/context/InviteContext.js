
import  React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid'; //==> npm install uuid

export const InviteContext = createContext();

const InviteContextProvider = (props) => {

    const [invites, setinvites] = useState([
        {from:`{uuid()}@itmlyceumalabang.onmicrosoft`, message:'Please accept me.'},
        {from:`{uuid()}@itmlyceumalabang.onmicrosoft`, message:'Please accept me.'},
        {from:`{uuid()}@itmlyceumalabang.onmicrosoft`, message:'Please accept me.'},
    ])

    const [count, setCount] = useState(invites.length)

    return(
        <InviteContext.Provider value={{invites, count}}>
            {props.children}
        </InviteContext.Provider>
    )
}

export default InviteContextProvider;