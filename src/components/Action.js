import React from "react"
//Stateless Functional Component
const Action = (props) => {
    return (
        <div>
            <button className="big-button"
            disabled={!props.hasOptions} 
            onClick={props.handlePick}
            > What should i do? </button>
        </div>
    )
}

export { Action as default}