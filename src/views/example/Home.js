import React from "react";
import { withRouter } from 'react-router';
import Color from "../HOC/Color";
import logo from "../../assets/images/home.png";

import { connect } from 'react-redux';
class Home extends React.Component{

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo') 
        // },3000)
    }
    handleDeleteUser = (user) => {
        console.log("Del user: ", user)
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log('Pros from Home: ', this.props)
        console.log('Pros from state of Redux: ', this.props.dataRedux);
        let listUsers = this.props.dataRedux;

        return (
            <>
                <div>
                    Wellcome to homepage!
                </div>
                <img src={logo} style={{with: '300px', height: '200px'}} />
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name } &nbsp;
                                    <button onClick={() => this.handleDeleteUser(item)}>Del</button>
                                </div>
                                
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),
    }
    
}
// export default withRouter(Home);
export default connect(mapStateToProps,mapDispatchToProps )(Color(Home));