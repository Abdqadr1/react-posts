import React from 'react'
import Rainbow from '../hoc/rainbow';

const Contact = () => {
    
    return (
        <div className="container">
        <h4 className="center">Contact</h4>
        <p>This is the Contact page, Thank you</p>
        </div>
    )

}

// using higher order components, Rainbow to wrap the about component
export default Rainbow(Contact)