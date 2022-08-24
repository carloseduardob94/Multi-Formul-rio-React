import { Container, Info, Title, Description, IconArea, Point } from './styles'
import { Link } from 'react-router-dom'


type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
}

export function SidebarItem({ title, description, icon, path }: Props) {
  return(
    <Container>
      <Link to={path}>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
        <IconArea>

        </IconArea>
        <Point></Point>
      </Link>
    </Container>
  )
}