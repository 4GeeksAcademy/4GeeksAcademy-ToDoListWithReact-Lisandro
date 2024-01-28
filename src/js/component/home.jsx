import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
    const [list, setList] = useState([]); //Array. Lista de items o coleccion de datos.
    const [newTask, setNewTask] = useState(""); //String. Es una secuencia de caracteres.
    //Estos son los estados iniciales.

    //Despues pones la funcion que queres que se haga cuando haces click. Se puede poner despues del evento,
    //pero es mejor que quede aca arriba asi se ve mas comodo. Es como que se usa abajo, pero se escribe arriba.
    function agregarElemento(e) {
        if (e.keyCode === 13) {  //agrego un condicional para que cada vez que presione la tecla enter (codigo 13) el elemento nuevo se agregue a la lista.
            setList(list.concat(newTask));
            setNewTask("") //hago que la funcion  setNewTask se actualice a 0 cada vez que apreto la tecla enter.       
        }
    };


    function eliminar(tarea) {
        let nuevoArray = list.filter((item) => item !== tarea) //creo un nuevo array con una condicion (!== tarea)   
        setList(nuevoArray); //llamo a la funcion nuevoArray generado para actualizar a list.
        /* console.log(tarea); */
        //filtra todos los elementos menos al que le hacen click

    }

    function updateCounter() {
        return list.length;
    }


    //Aca debajo en el Return empieza lo que es la parte del HTML, seria la estructura de lo que queres mostrar y el diseño.
    //Pones el estado con el que queres que empiece,
    //que lo declaramos arriba, al principio, en los espacios de memoria, Task y NewTask
    return (
        <div className="container d-flex position-absolute top-50 start-50 translate-middle flex-column col-4 my-3 mx-auto shadow-lg p-3 mb-5 bg-secondary rounded-4">
            <h1 className="fs-1 d-flex justify-content-center">todos</h1>

            <div className="input-group flex-nowrap my-5">
                <input type="text" className="form-control" onChange={(e) => setNewTask(e.target.value)} onKeyDown={agregarElemento} value={newTask} placeholder="What needs to be done?" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>

            <div className="Otros elementos de la lista">
                <div>
                <ul>
                    {list.map((item, index) => 
                    <li key={index}>{item} <span onClick={() => eliminar(item)} className="d-flex justify-content-end">X</span></li>)}
                </ul>
                <p className="text-center mt-3">Total tareas: {updateCounter()}</p>
                </div>

            </div>
        </div>
    )
}

export default Home;
