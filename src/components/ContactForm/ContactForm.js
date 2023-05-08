import React, {Component} from "react";
import PropTypes from "prop-types";

import css from './ContactForm.module.css';

export class ContactForm extends Component {
state ={
    name: '',
    number: ''
}
hendleInputChange = event => {
    const {name, value} = event.currentTarget
        this.setState({
            [name]: value})
        }

hendleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.resetForm()
}

resetForm = () => {
    this.setState({
        name: '',
        number: ''
    })
}

render () {
return (

    <form className={css.phonebookForm} onSubmit={this.hendleSubmit}>
        <label className={css.phonebookLable}>Name
        <input className={css.phonebookInput}
            value={this.state.name}
            onChange={this.hendleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        </label>
        <label className={css.phonebookLable}>Phone
        <input className={css.phonebookInput}
            value={this.state.number}      
            onChange={this.hendleInputChange}      
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        </label>
        <button className={css.addButton} type="submit">Add contact</button>
    </form>
)

}
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}