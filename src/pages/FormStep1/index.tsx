import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'


export function FormStep1() {
  const navigateTo = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [])

  const handleNextStep = () => {
    navigateTo('/step2')
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return(
    <Theme>
      <Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preenche o campo abaixo com o seu nome completo.</p>

        <hr/>
        <label>
          Seu nome completo
          <input
            type ="text" 
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  )
}