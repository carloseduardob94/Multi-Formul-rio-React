import { useNavigate, Link } from 'react-router-dom'
import { Container } from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'


export function FormStep3() {
  const navigateTo = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    if(state.name === ''){
      navigateTo('/')
    }else{
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      })
    }
  }, [])

  const handleNextStep = () => {
    if(state.name !== '' && state.github !== ''){
      console.log(state)
    }else{
      alert('Preencha os dados')
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return(
    <Theme>
      <Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus dados para conseguirmos entrar em contato.</p>

        <hr/>
        <label>
          Qual seu e-mail?
          <input
            type ="email" 
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu Github?
          <input
            type ="url" 
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backbutton">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </Container>
    </Theme>
  )
}