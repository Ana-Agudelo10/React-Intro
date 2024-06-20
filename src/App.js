import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de Intro a Reac.js', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALA', completed: false},
  { text: 'Usar estado derivados', completed: true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos); //Estado, set de actualización y por ultimo en el useState -> Estado inicial
  const [searchValue, setSearchValue] = React.useState(''); //Se actualiza aquí

  const completedTodos = todos.filter(todo => !!todo.completed).length; //Doble negación !! convertir en boleano cualquier datos que nosotros estemos devolviendo
  const totalTodos = todos.length; //Estados derivados

  const searchedTodos = todos.filter( //Se crea un estado derivado apartir del listado de todos y filtrado para que devuelv todas las coincidencias
    (todo) => { //Arrowfuction
      //Tildes:
      const noTildes = (todos) => {
        return todos.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };

      const todoText = noTildes(todo.text.toLowerCase());
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText); //Preguntar si el texto de ese todo, incluye en alguna parte el texto que contiene el estado de searchValue. Convertir a minuscula el estado Todo, y mientras se realiza la busqueda igualmente
    }
  );
  
  const completeTodo = (text) => { //Función que espera recibir un parametro con el texto para saber que todo completar o no
    const newTodos = [...todos]; //...copia de los todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ); //Encontrar un unico elemento por su indice;
    newTodos[todoIndex].completed = true; //Indicar cual de todos los objetos se va a editar y colocar la propiedad completed como true
    setTodos(newTodos);
  };

  const deleteTodo = (text) => { //Función que espera recibir un parametro con el texto para saber que todo eliminar o no
    const newTodos = [...todos]; //...copia de los todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ); //Encontrar un unico elemento por su indice;
    newTodos.splice(todoIndex, 1); //Indicar cual de todos los objetos se va a eliminar. Splice, pide una posición, cuantos se van a eliminar
    setTodos(newTodos);
  };
  return (
    <>

      <TodoCounter
        completed = {completedTodos} 
        total = {totalTodos}/>
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}/>

      <TodoList>
        {searchedTodos.map(todo => ( //SearchTodos (devuelve un array con los todos), renderizar los todos, apartir del estado derivado SearchTodos, filtrado con el otro estado de busqueda, derivado del primer array de todos
          <TodoItem 
            key = { todo.text } 
            text = { todo.text }
            completed = {todo.completed }
            onComplete = { () => completeTodo(todo.text) }
            onDelete = {() => deleteTodo(todo.text)}/>  //Los eventos en react no esperan de una vez la función ya ejecutada, si no que se necesita de una función a la que react pueda ponerle los parentesis unicamente cuando ocurra el evento o la iteracción por la que esperamos ejecutar esta función, para hacer esto, se encapsula las funciones en otras funciones. FunctionSecction, colocar una función que no se ha ejecutado evitando crachear y sucede cuando se llama el evento. Renderiza de nuevo por el cambio del estado
        ))}

      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;

//¿Cómo comunico informacion de mi estado entre componentes? .. Podemos comunicar informacion del "Estado" entre componentes utilizando las "props" pero hay que tener en cuenta que esa informacion la podemos compartir ++Solamente de "Componentes Padres a Componentes Hijos."++ Es decir, debemos declarar el "Estado" dentro del Componente Padre (En este caso App.js) para poder comunicarlo al componente hijo a través de "props" (TodoSearch.js)
//La diferencia entre los métodos toLowerCase() y toLocaleLowerCase() en JavaScript está relacionada con la forma en que se procesan los caracteres en mayúsculas y acentuados en diferentes idiomas.
//toLowerCase() convierte una cadena de texto en minúsculas, utilizando las reglas de conversión que se aplican a los caracteres ASCII (caracteres en inglés y otros idiomas europeos que no tienen acentos)
//Por otro lado, toLocaleLowerCase() también convierte una cadena de texto en minúsculas, pero utiliza las reglas de conversión específicas del idioma y la ubicación (localización) en la que se está ejecutando el código. Esto significa que, en función de la localización, algunos caracteres con acentos o diacríticos (como la letra "á" en español) pueden ser convertidos a su equivalente en minúsculas, mientras que otros caracteres pueden permanecer sin cambios.