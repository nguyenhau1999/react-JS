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

    render (){
       
        return (
       <>
            <div className="first">
                hello my Component , My name is {this.state['name']}
            </div>
            <div className="second">
            My channel is : {this.state.channel}
            </div>
           
            
        </>
        )
    }
}

export default MyComponent;