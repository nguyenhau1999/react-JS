import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component {
//lifecycle
    componentDidMount() {
        setTimeout(() => {
           this.props.history.push('/todo') 
        }, 3000);
    }     




    render () {
        return (
            <div>
                HOME PAGE
            </div>
        )
    }
}
export default withRouter(Home); //withRouter : HOC (higher order component) tạo nên 1 component mới và có đầy đủ thông tin của componen được bọc


