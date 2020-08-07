import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red','orange','yellow','green','blue','purple','violet'];
    const randomColor = colors[Math.floor(Math.random() * 6)];

    return (props) => {
        return(
            <div style={{color: randomColor}}>
                <WrappedComponent {...props}/>
                {/* <WrappedComponent yeah="some text here"/> */}
            </div>
        )
    }
}

export default Rainbow;