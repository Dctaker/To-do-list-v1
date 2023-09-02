import '../styles/modal.css'
import React from 'react'

function Modal(props){

    const[message,setMessage] = React.useState('')
    const[messageArray, setMessageArray] = React.useState('')

    function addMensagem(tarefa){
        const array = [...messageArray, tarefa]
        setMessageArray(array)
        setMessage('')
    }
        return(
            <div className='paiModal'>
                <div className='containerModal'>
                <button className='fecharModal'>x</button>
                <h1>{props.titulo}</h1>
                

                    <div className='textoContainer'>
                    <div className='itemTexto'>
                            <p>Text 1</p>
                            <input type='text' placeholder='anotações'/>
                    </div>
                    <div className='itemTexto'>
                        <p>Text 2</p>
                            <input type='text' placeholder='anotações'/>
                    </div>
                    </div>
                    
                    <div className='comentContainer'>   
                        <textarea
                            id='mensagem'
                            value={message}
                            rowns='10'
                            onChange={(e)=> setMessage(e.target.value)}
                        />
                        <button onClick={()=>addMensagem(message)}>Add</button>
                    </div>
                    

              {
                messageArray.length > 0 ? (
                    messageArray.map((item)=>(
                        <li>{item}</li>
                    ))
                ): null
                
              }
                </div>
            </div>
        )
    }

    

export default Modal