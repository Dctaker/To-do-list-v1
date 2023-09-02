import './App.css';
import React from 'react'
import Input from '../src/componentes/Input'
import Result from '../src/componentes/Lista'

function App() {
//Isso aqui força a Lista sempre iniciar como vazia
  React.useEffect(()=>{
    setLista('')
  },[])

//States que são  atualizados na minha lista
 const [tarefa, setTarefa] = React.useState('')
 const [lista, setLista] = React.useState([{}])
 
//Função para adicionar um Item dentro da Lista
 function addTask(tarefa){
   const array = [...lista,{
       tarefa,
       isComplet:false,
       modal:false
   }]
   setLista(array)
   console.log(array)
   setTarefa('')
 }

 //Função para deletar um item da Lista
 function deleta(index){
  const array = [...lista]
  array.splice(index,1)

  setLista(array)
 }

 function isDone(index){
   const array = [...lista]
   array[index].isComplet = !array[index].isComplet
   setLista(array)
 }

 function isModal(index){
  const array = [...lista]
  array[index].modal = !array[index].modal
  setLista(array)
}




  return (

    <>
      
      <div className="App">

        
        <div className='appContainer'>
        <h1>Lista de Tarefas</h1>
          <Input 
            tarefa={tarefa}
            setTarefa={setTarefa}
            addTask={addTask}
          />
          
          <Result lista={lista} deleta={deleta} isDone={isDone} isModal={isModal}/>
        </div>


     
      
    </div>
    
    </>
  );
}

export default App;
