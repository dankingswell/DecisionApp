import React from "react"
// need react for JSX

//Stateless Functional Component
const Option =  (props) => {
    return (
        <div className="option">
           <p className="option__text"> {props.count}. {props.optionText} </p>
           <button
            className="button button--link"
            onClick={(event) => {
                props.handleDeleteOptionSingle(props.optionText)
            } }
            
            >Remove</button>
        </div>
    )
}
// removing component name makes component print as unknown
// because of this we export it explicitly
 export default Option