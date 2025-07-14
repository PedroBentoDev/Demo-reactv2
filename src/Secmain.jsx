import React from 'react'
import Herosection from "./Herosection"
import Coursessection from './Coursessection';
import Seccomunity from './Seccomunity';
import Nicetomeetsec from './Nicetomeetsec';
import CarrosselObras from "./CarrosselObras"
function Secmain() {
  return (
    <div>
        <Herosection/>
        <Coursessection/>
        <CarrosselObras/>
        <Seccomunity/>
        <Nicetomeetsec/>
    </div>
  );
}

export default Secmain;