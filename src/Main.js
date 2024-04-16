import React from 'react';
import About from './About';
import Notes from './Notes';
import { useState } from 'react';

export default function Main(){

    const [currentPage, setCurrentState] = useState(1)
    if (currentPage == 1){
        return(<>
            <header className='navbar'> 
                <h1><b>Web Carlos</b></h1>
                <a onClick={() => { setCurrentState(1); }}>Sobre</a>
                <a onClick={() => { setCurrentState(2); }}>Anotações</a>
                <a onClick={() => { setCurrentState(3); }}>Blog</a>
                <a onClick={() => { setCurrentState(4); }}>Noticias</a>
            </header>
    <About/>
    </>)
    }
    if (currentPage == 2){
        return(<>
            <header className='navbar'> 
                <h1><b>Web Carlos</b></h1>
                <a onClick={() => { setCurrentState(1); }}>Sobre</a>
                <a onClick={() => { setCurrentState(2); }}>Anotações</a>
                <a onClick={() => { setCurrentState(3); }}>Blog</a>
                <a onClick={() => { setCurrentState(4); }}>Noticias</a>
            </header>
    <Notes/>
    </>)
    }
}