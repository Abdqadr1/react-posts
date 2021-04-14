import React from 'react'

// hoc to wrap other components
function RainbowColour(Content){

    const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

    const randomColor = colors[Math.floor(Math.random() * 5)];

    let className = randomColor + '-text';

    return  (props) => {
        console.log(props)
        return (
            <div className={className}>
                <Content  {...props}/>
            </div>
        )
    }
}


export default RainbowColour