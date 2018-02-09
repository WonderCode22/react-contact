import React from 'react'

export default class ContactDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        }
        this.handleToggle = this.handleToggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleToggle(){
        console.log(this.props.isSelected);
        if(!this.state.isEdit)
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            })
        else this.handleEdit()
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    handleEdit(){
        this.props.onEdit(this.state.name, this.state.phone)
    }
    handleChange(e){
        let contact = {}
        contact[e.target.name] = e.target.value
        this.setState(contact)
    }
    render(){
        const detail = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );
        const edit = (
            <div>
                <p>
                    <input
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        name='phone'
                        placeholder='Phone'
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </p>
                <p>{this.props.contact.phone}</p>
            </div>
        )
        const view = this.state.isEdit ? edit : detail
        const blank = (<div>Not Selected</div>);

        return(
            <div>
                {this.props.isSelected ? view : blank}
                <button onClick={this.props.onRemove} disabled={this.props.isSelected ? '' : 'disabled'}>Remove</button>
                <button onClick={this.handleToggle} disabled={this.props.isSelected ? '' : 'disabled'}>{this.state.isEdit ? 'Save' : 'Edit'}</button>
            </div>
        )
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    }
}
