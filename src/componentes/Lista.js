import Modal from "./Modal";
import React from 'react'
import '../styles/lista.css'

function Result(props) {

  
  if(props.lista.length > 0){
    return (
      <div className='listaContainer'>
            <ul>
          {
            props.lista.map((item, index)=>(
              <li style={item.isComplet ? {color:'green'} : {color:'black'} }>
                {item.tarefa}


                <div className="itemButton">
                  <button onClick={()=> props.isDone(index)}>
                    {
                      item.isComplet?'isNotDone':'Done'
                    }
                  </button>
                  <button onClick={()=> props.deleta(index)}>x</button>
                  <button onClick={()=> props.isModal(index)}>Detalhes</button>
                </div>

                {
                  item.modal ? <div className='modalContainer'><Modal titulo={item.tarefa} /></div>:null
                }
              </li>
            ))
          }
      </ul>

      

      </div>
    )
  }
  else{
    return <div className='semTask'>Adicione uma Tarefa XD</div>
  }
   
}

export default Result;
