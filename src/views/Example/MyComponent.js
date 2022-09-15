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
 handleClickButton = () => {
    console.log('hit the button')
    alert('click me')
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
            <div className="third">
                <button onClick={() => this.handleClickButton()}>Click Me</button>
            </div>
           
            
        </>
        )
    }
}

export default MyComponent;