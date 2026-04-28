import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import { ButtonPremium, ButtonCircle, ButtonRectangle } from './components/buttons/Buttons';
// import * as CustomButtons from './components/buttons/Buttons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Деструктуризація

  // const card = {
  //   image: "image.png",
  //   title: "Телефон",
  //   price: 100,
  //   rating: 4.5
  // }

  // const nums = [12, 23,56,64];

  // const {image, title} = card;
  // const [first, second] = nums;

  // console.log(image);
  // console.log(title);
  // console.log(first);
  // console.log(second);

  // console.log("Hello world");
  

  return (
    <>
      <Navbar />
      <Products />

      <div>
        <ButtonPremium text="Підтримати"/>

        <ButtonRectangle>
          Натисни на мене
        </ButtonRectangle>

        <ButtonCircle>
          X
        </ButtonCircle>
      </div>
    </>
  )
}

export default App
