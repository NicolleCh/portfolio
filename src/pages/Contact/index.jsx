import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

import isEmailValid from '../../utils/isEmailValid'
import useErrors from '../../hooks/useErrors.jsx'

import {
  Container,
  Form,
  FormGroup,
  Input,
  TextArea,
  Button,
} from './styles'

export default function Contact() {

  const form = useRef()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors()

  const isFormValid = (name && email && message && errors.length === 0)

  function handleNameChange(event) {
    setName(event.target.value)


    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)

    event.target.value && !isEmailValid(event.target.value) ?
      setError({ field: 'email', message: 'E-mail inválido' }) :
      removeError('email')
  }

  function handleMessageChange(event) {
    setMessage(event.target.value)

    if (!event.target.value) {
      setError({ field: 'message', message: 'Mensagem é obrigatória' })
    } else {
      removeError('message')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    emailjs
      .sendForm('service_0vxk9c7', 'template_aya64wc', form.current, {
        publicKey: 'OkxcgYvYGvRqqm46p',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )

    console.log({
      name, email, message,
    })
  }

  return (
    <Container id='contact'>
      <Form ref={form} onSubmit={handleSubmit} noValidate>
        <span>Entre em contato</span>
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            error={getErrorMessageByFieldName('name')}
            placeholder='Nome *'
            value={name}
            name="name"
            onChange={handleNameChange}
          />
          {getErrorMessageByFieldName('name') && (
            <small>{getErrorMessageByFieldName('name')}</small>
          )}
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('email')}>
          <Input
            type='email'
            error={getErrorMessageByFieldName('email')}
            placeholder='E-mail *'
            value={email}
            name="email"
            onChange={handleEmailChange}
          />
          {getErrorMessageByFieldName('email') && (
            <small>{getErrorMessageByFieldName('email')}</small>
          )}
        </FormGroup>

        <FormGroup>
          <TextArea
            type='text'
            placeholder='Mensagem *'
            value={message}
            name="message"
            onChange={handleMessageChange}
            maxLength="700"
          />
          {getErrorMessageByFieldName('message') && (
            <small>{getErrorMessageByFieldName('message')}</small>
          )}
        </FormGroup>

        <div>
          <Button type='submit' disabled={!isFormValid}>
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  )
}
