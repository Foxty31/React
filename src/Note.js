import * as React from 'react'

export default function Note(props) {
    return(
        <>
            <div className='card'>
                <h1 className='cardNotesTitle'>{props.title}</h1>
                <h3 className='cardNotesDate'>{props.date}</h3>
                <p className='cardNotesText'>{props.description}</p>
                <button className='cardNotesButton'>Excluir</button>
            </div>
        </>
    )
}