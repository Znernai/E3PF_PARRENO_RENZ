import React from 'react';


const Member = (props) => {
    const { heading, paragraph, buttonText } = props.data;
    return (

        <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="Image" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%"fill="#520" /><text x="50%" y="50%" fill="#520" dy=".3em">140x140</text></svg>
            
       
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            <p><a className="btn btn-secondary" href="/#">{buttonText}</a></p>
            
        </div>
    );
}

export default Member;