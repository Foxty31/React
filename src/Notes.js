import './App.css';
import React, { useState } from 'react';
import Note from './Note';

export default function Notes() {
    const [show, setShow] = useState(false);
    const [noteList, setNoteList] = useState([]);

    function saveNote(){
        var note = {
            date: document.getElementById("inputDate").value,
            title: document.getElementById("inputTitle").value,
            description: document.getElementById("inputDescription").value
        }

        var copy = [...noteList];
        copy.push(note);
        setNoteList(copy);
        setShow(false);
    }

    return (
        <>
            <div className='banner-Anotacoes'>
                <h1>Minhas Anotações</h1>
                <p>Use esta página para adicionar anotações, lembretes ou qualquer outro tipo de informação</p>
                <button onClick={() => setShow(true)}>Criar Anotação</button>
            </div>
            <div className='containerNotes'>
                {noteList.map((item) => <Note title={item.title} date={item.date} description={item.description}/>)} {/* Passe os dados de cada nota para o componente Note */}
            </div>
            {show && (
                <div id='modal'>
                    <div className='header'>
                        <h1>Adicionar Anotação</h1>
                    </div>
                    <div className='body'>
                        <input id='inputDate' type='date' />
                        <input id='inputTitle' type='text' />
                        <input id='inputDescription' type='' />
                    </div>
                    <div className='footer'>
                        <button onClick={() => setShow(false)}>Fechar</button>
                        <button onClick={() => saveNote()}>Adicionar</button>
                    </div>
                </div>
            )}
        </>
    );
}