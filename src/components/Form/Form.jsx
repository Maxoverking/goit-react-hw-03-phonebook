import React, { Component } from 'react'
import { FormContainer,Input,Label } from './Form.styled'
import { nanoid } from 'nanoid'


export class Form extends Component {
state = {
    id:'',
    name: '',
    number: ''
}
//Получаем данные из полей записываем в state
    inputAddedName = evt => {
    const {name,value,id} = evt.currentTarget;
    this.setState({
        [name]: value,
        id
    })
    }
//Добавляем данные в Арр 
//переносим данные из state в props submitData
    onSubmitForm = evt => {
    evt.preventDefault();
//Передаем данные в Арр через пропс submitData
    this.props.submitData(this.state);
    this.resetForm();
    }
//Очищаем поля формы
    resetForm = ()=>{
    this.setState({name: '',number:'',id:''})
    }

    render() {
const uniqueId = nanoid();
const {name,number} = this.state
    return (
    <FormContainer>
        <form style={{
            display: 'flex',
            flexDirection: 'column'
        }}
            onSubmit={this.onSubmitForm}
        >
        <Label >Name</Label>
            <Input
                id={uniqueId}
                autoComplete="off"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="May contain only letters"
                value={name}
                onChange={this.inputAddedName}
                required />
                <br />
        <Label>Number</Label>
            <Input
                id={uniqueId}
                autoComplete="off"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="May contain only number"
                value={number}
                onChange={this.inputAddedName}
                required />

            <br />
            <button type="submit">Add Contact</button>
            </form>
      </FormContainer>
    )
  }
}


