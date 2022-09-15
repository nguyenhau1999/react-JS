import React from 'react';

class ChilComponent extends React.Component{
    
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
                <div>
                    ChilComponent
                </div>
            </form>
        </>
        )
    }
}

export default ChilComponent;