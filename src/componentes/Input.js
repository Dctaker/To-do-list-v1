import '../styles/input.css'  

function Input(props) {
  return (
    <div className='inputContainer'>
       <input
        type='text'
        placeholder='Digite aqui sua nova tarefa'
        value={props.tarefa}
        onChange={(e)=> props.setTarefa(e.target.value)}
       />
       
       <button onClick={()=>props.addTask(props.tarefa)} >Adicionar</button>
    </div>
  );
}

export default Input;
