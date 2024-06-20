import './TodoCounter.css'

function TodoCounter({total, completed}) {
    return (
      completed === total ?
      <h2 className='TodoCounter'>Felicidades, completaste todas las tareas!!</h2>
      :
      <h1 className='TodoCounter'>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    );
  }

export { TodoCounter };