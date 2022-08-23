import { Container, Area, Steps, Sidebar, Page } from './styles'
import { ReactNode } from 'react'
import { Header } from '../Header'

type Props = {
  children: ReactNode
}

export function Theme({children}: Props) {
  return(
    <Container>
      <Area>
        <Header />

        <Steps>
          <Sidebar>

          </Sidebar>
          <Page>
            {children}
          </Page>
        </Steps>

      </Area>
    </Container>
  )
}