import React, { useState } from 'react'
import './App.css'
import a1 from './assets/images/a1.jpg'
import Button from './components/Button'


function App({ user, age }) {

   const [count, setCount] = useState(100)
   const [className, setClassName] = useState('green')

   const changeClass = () => {
      if(className === 'green'){
        setClassName('red')
      }else{
        setClassName('green')
      }
    }

  const changeText = () => {
    setCount(count + 1)
  }


  return <div className="container">
            <img className="title-image" src={a1} />
            <h1 className="title">Hola a todos los estudiantes de BIOS, soy el profe {user} tengo {age} años</h1>
            <Button text={count} click={changeText} />
            <Button text="Cambiar clase" click={changeClass} cssClass={className} />


         </div>
}

export default App
