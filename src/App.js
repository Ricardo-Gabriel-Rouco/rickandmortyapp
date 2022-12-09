import './App.css'
import {useEffect, useState} from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import {Routes, Route, useLocation, useNavigate, Outlet} from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Form from './components/Form/Form'
import Favourites from './components/Favorites/Favourites'



function App() {
  const [characters , setCharacters] = useState([])
  const navigate = useNavigate()
  const location = useLocation()


function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.id) {
          if(!characters.find(character => character.id === data.id)){
            setCharacters([...characters, data])
            console.log(characters)
          }
          else{
            window.alert('personaje repetido')
          }
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

const onSearchRandom = () => {
  let randomChar = Math.floor(Math.random() * 827)
  onSearch(randomChar)
}

const onClose = (id) => {
  setCharacters(characters.filter(char => char.id !== id))
}

const [access, setAccess] = useState(false)
const username =  'r.g.rouco1@gmail.com'
const password = 'hola1234'

function login(userData){
  if(userData.username && userData.password){
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home')
    }
    else {
      alert('Datos incorrectos')
    }
  }
}

function logout(){
  setAccess(false)
}

useEffect(() => {
  !access && navigate('/');
  // eslint-disable-next-line 
}, [access]);



  if(location.pathname === '/'){
    return (
      <div className='App' style={{ padding: '25px' }}>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path=':404' element={<Error/>}/>
      </Routes>
      </div>
    )  
  } else {
    return(
    <div className='App' style={{ padding: '25px' }}>
        <div>
          <div>
            <Nav onSearch={onSearch} onSearchRandom={onSearchRandom} logout={logout}/>
            <Routes>
              <Route path='/home' element={<Cards characters={characters} onClose={onClose} onSearchRandom={onSearchRandom} logout={logout}/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/favourites' element={<Favourites/>}/>
              <Route path='/detail/:detailId' element={<Detail/>}/>
              <Route path=':404' element={<Error />}/>
            </Routes>
          </div>
        </div>
      <Outlet/>
    </div>
  )
  }

}

export default App

// onSearch={onSearch} onSearchRandom={onSearchRandom}