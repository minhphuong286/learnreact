import React from 'react'

class AddComponent extends React.Component{
    state = {
        title: '',
        salary: ''
    }
    handleChangeJobtiltle = (event) =>{
        this.setState({
            title: event.target.value
        });
    }
    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('input is not valid');
            return;
        }
        console.log('The state after render(after click submit): ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render(){
        return(
            <form>
                <label htmlFor='jt'>Job's title: </label>
                <input 
                    className='jt'
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeJobtiltle(event)}
                ></input>
                <br></br>
                <label htmlFor='sl'>Salary: </label>
                <input 
                    className='sl'
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                ></input>
                <br/>
                <br/>
                <input 
                    type='submit' 
                    onClick={(e) => this.handleSubmit(e)}
                ></input>
            </form>
        )
    }
}

export default AddComponent;