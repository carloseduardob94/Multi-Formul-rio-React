import { Container, Area, Steps, Sidebar, Page } from './styles'
import { ReactNode } from 'react'
import { Header } from '../Header'
import { SidebarItem } from '../SidebarItem'

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

            <SidebarItem 
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
            />

            <SidebarItem 
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
            />

            <SidebarItem 
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
            />

          </Sidebar>
          <Page>
            {children}
          </Page>
        </Steps>

      </Area>
    </Container>
  )
}