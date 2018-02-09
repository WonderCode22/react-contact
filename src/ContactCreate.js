import React from 'react'
import PropTypes from 'prop-types'
export default class ContactCreate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            phone: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e){
        let contact = {}
        contact[e.target.name] = e.target.value
        this.setState(contact)
    }

    handleClick(){
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };
        this.props.onCreate(contact)
        this.setState({
            name: '',
            phone: ''
        })
        this.nameInput.focus()
    }
    render(){
        return(
            <div>
                <h2>Create Contact</h2>
                <div>
                    <input
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        ref={(ref) => { this.nameInput = ref }}
                    />
                    <input name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange}/>
                    <div>
                        <button onClick={this.handleClick}>Create</button>
                    </div>
                </div>
            </div>
        )
    }
}


ContactCreate.propTypes = {
    onCreate: PropTypes.func
}

ContactCreate.defaultProps = {
    onCreate: () => {console.error('error');}
}
