
import Cardcitas from './components/ListGroupExample.js'
import Formulario from './components/Formulario.js'
import {useEffect, View} from 'react';
import { useState } from "react";
import Prueba from './components/prueba'
function App() {
  const [citas, setCitas] = useState([])

  useEffect(() => {
    
  }, [citas])

  return (
    <view>
      <Prueba/>
    <Formulario setCitas={setCitas}/>

    <Cardcitas citas={citas} setCitas={setCitas}/>
   
    </view>
  );
}

export default App;


