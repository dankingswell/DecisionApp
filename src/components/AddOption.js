// transform class property syntax


import React from "react"


export default class AddOption extends React.Component{
    // after upgrading to new syntax we no longer need to bind functions
    // additionally we can decalre class props directly on to the class
    state = {
        error:undefined
    }



    // were keeping the method here in order to 
    // retain behaviour of preventing
    // and getting values
    handleAddOption = (event)=> {
        
        event.preventDefault()
        const valueFromInput = event.target.elements.option.value.trim();
        
        // looking at return value by calling func in parent and await response
        const error =this.props.handleAddOption(valueFromInput)
       
        // if no error still undefined which means nothing is rendered
        this.setState(()=>{
            return{
                // new ES6 syntax for a prop that comes from a variable
                error
                // can still have other props like
                //name: dan
            }
        })
        if(!error){
            event.target.elements.option.value = "";
        }

    }
    render(){
        // error only shows if set as undefined is not shown
        return(
            <div>
                {this.state.error && <p className="add-option-error"> {this.state.error}</p>}
                <form 
                className="add-option"
                onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" autocomplete="off" />
                    <button className="button" >Add Option</button>
                </form>
            </div>
        )
    }
}