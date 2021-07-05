
import React, { useContext, useState } from 'react';
import { MemberContext } from '../../context/MemberContext';
import Member from './Member';


const MemberList = (props) => {

    const { data } = useContext(MemberContext);

    let id = 1;
    console.log(data);

    return (
        <div className="container marketing">

            <div className="row p-5">
                {data.map(d => {
                    return (
                        <Member data={d} key={id+=1}/>
                    )
                })}

            </div>


        </div>
    );
}

export default MemberList;