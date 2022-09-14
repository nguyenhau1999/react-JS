import React from 'react';

class MyComponent extends React.Component{
    
/**
 * key: value
  */
 state = {
    name: 'Hau',
    channel: 'React JS'
 }
 /*  
 fragment
 */
 handleOnChangeName = (event) => {
    this.setState({
        name: event.target.value
    })
 }
    render (){
       
        return (
       <>
            <div className="first">
                hello my Component <br></br>
                <input value={this.state.name} type="text"
                    onChange={(event) => this.handleOnChangeName(event)}
                /> 
                 My name is {this.state['name']}
            </div>
            <div className="second">
            My channel is : {this.state.channel}
            </div>
           
            
        </>
        )
    }
}

export default MyComponent;