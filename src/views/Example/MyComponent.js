import React from 'react';
import ChilComponent from './ChildComponent';

class MyComponent extends React.Component{
    
/**
 * key: value
  */
 state = {
    fisrtName: '',
    lastName:''
   
 }
 /*  
 fragment
 cap nhap lai state => setState

 */
 handleChangeFirstName = (event) => {
    this.setState({
        fisrtName: event.target.value
    })
 }
 handleChangeLastName = (event) => {
    this.setState({
        lastName: event.target.value
    })
 }
 handleSubmit = (event) => {
   event.preventDefault()
   console.log(">>> Check data input: ", this.state)
 }

    render (){
        //re-render
       console.log('>>> Call render: ', this.state)
        return (
       <>
            
            <form>
                <label htmlFor="fname">First name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.fisrtName}    
                    onChange={(event) => this.handleChangeFirstName(event)}
                /><br/>
                <label htmlFor="lname">Last name:</label><br/>
                    <input type="text"
                    value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}    
                    /><br/><br/>
                <input type="submit" 
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
            <ChilComponent/>
            <ChilComponent/>
            <ChilComponent/>
        </>
        )
    }
}

export default MyComponent;