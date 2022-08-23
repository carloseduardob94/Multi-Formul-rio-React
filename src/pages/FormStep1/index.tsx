import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { Theme } from '../../components/Theme'





export function FormStep1() {
  const navigateTo = useNavigate()

  const handleNextStep = () => {
    navigateTo('/step2')
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
          />
        </label>
        <button onClick={handleNextStep} >Próximo</button>
      </Container>
    </Theme>
  )
}