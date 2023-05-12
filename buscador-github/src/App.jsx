import { ChakraProvider } from '@chakra-ui/react'
import { Input, Button } from '@chakra-ui/react'
import { Header, Container, Main } from './styles'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [bio, setBio] = useState('Aguardando...')
  const [profilePicture, setProfilePicture] = useState(
    'https://i.pinimg.com/736x/03/f5/63/03f5637369b9b8436e69e4e1bf2856bb.jpg'
  )
  const [nameUser, setNameUser] = useState('Aguardando...')
  const [location, setLocation] = useState('Aguardando...')
  const [repos, setRepos] = useState(0)

  const handlerUser = () => {
    axios.get(`https://api.github.com/users/${search}`).then(res => {
      setBio(res.data.bio)
      setNameUser(res.data.name)
      setProfilePicture(res.data.avatar_url)
      setLocation(res.data.location)
      setRepos(res.data.public_repos)
    })
  }

  return (
    <ChakraProvider>
      <Header>
        <h1>Buscar usuário do GitHub</h1>
      </Header>
      <Container>
        <Main>
          <div className="formulario">
            <Input
              placeholder="Pesquisar por usuário"
              size="md"
              onChange={e => setSearch(e.target.value)}
            />
            <Button
              colorScheme="blue"
              onClick={() => {
                handlerUser()
              }}
            >
              Buscar
            </Button>
          </div>

          <div className="user">
            <img src={profilePicture} />
            <h3 className="nameUser">{nameUser}</h3>
            <p className="bioUser">{bio}</p>
            <p className="locationUser">{location}</p>
            <p className="reposUser">Repositorios: {repos}</p>
          </div>
        </Main>
      </Container>
    </ChakraProvider>
  )
}

export default App
