import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'
import { SelectOptions } from '../../components/SelectOptions'


export function FormStep2() {
  const navigateTo = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [])

  const handleNextStep = () => {
    if(state.name !== ''){
      navigateTo('/step3')
    }else{
      alert("Preencha os dados")
    }
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }


  return(
    <Theme>
      <Container>
        <p>Passo 2/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preenche o campo abaixo com o seu nome completo.</p>

        <hr/>

        <SelectOptions 
          title="Sou iniciante"
          description="Comecei a programa há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOptions 
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}

        />

        <button onClick={handleNextStep}>Próximo</button>
      </Container>
    </Theme>
  )
}