import "./attributes.css"
import "./normalize.css"
import "./app.css";

function App() {

  return (
    <>
      <section className="header">

      </section>

      <section className="main">
        <h1><i>REACT</i></h1>
        <ul className="flex flex-column gap-01">
          {/* CREACION DE PROYECTO */}
          <li className="flex flex-column gap-01">
            <h2>Creacion de proyecto</h2>
            <p>Escribimos en la terminal:</p>

            <div className="container containerBlue">
              <i>"$ npm create vite@latest"</i>
              <ul>
                <li>Escribimos un nombre para el proyecto.</li>
                <li>Elegimos React.</li>
                <li>Elegimos Javascript.</li>
              </ul>
            </div>

            <p>Una vez en el VS, tenemos que instalar algunas dependencias necesaria de REACT, ejecutamos en la terminal:</p>
            
            <ul className="container containerBlue">
              <li><i>"$npm i"</i> ó <i>"$npm install"</i></li>
            </ul>
          </li>

          {/* useState() */}
          <li className="flex flex-column gap-01">
            <h2>useState()</h2>
            <p>El <i>useState()</i> es un metodo el cual solo puede ser llamado en el nivel superior del componente. No puede ser llamado en <strong>Condicionales</strong> ni <strong>bucles</strong>. Si lo necesitas, debes crear un componente y llamarlo desde ahí.</p>
            
            <ul className="container containerBlue">
              <li>Nomenclatura: <i>"const [state, setState] = useState(valorInicial);"</i></li>
              <ul className="containerInner">
                <li><i>state:</i> La variable a usar.</li>
                <li><i>setState:</i> El <i>metodo</i> o <i>setter</i>, que modificara su contenido:</li>
                <div className="containerInner"><i> setState(nuevoValor);</i></div>
              </ul>
            </ul>

            <p>Si le pasas una <i>funcion()</i> como variable, sera tratada como una función de inicialización. Debe ser <strong>Puro</strong> no debe tener argumentos y debe retornar un valor de cualquier tipo. React inicializara esa función y almacenara en ella el resultado como valor inicial.</p>

            <p>Si el valor actual del State es identico al del setState(), React no re-renderizara el componente y sus hijos.</p>

            <p>React lotiza los estados. Actualiza la pantalla luego de de que todos los <i>event handle</i> se han ejecutado y han llamado a sus funciones. Esto previene multiples re-renderizados durante un mismo evento. En dado caso que necesites forzar una actalizacion de React, por ejemplo para acceder al DOM, puedes usar <strong><i>flushSync</i></strong></p>

            <p className="container containerRed">Cuidado:
              Llamar al <i>set</i> dentro de un codigo ya ejecutado como un <strong><i>handleClick</i></strong> no cambia al valor actual al valor ya existente:
              <div className="containerInner">
                <i className="iBlock">
                  {"function handleClick() {"}
                </i>
                <i className="iBlock">
                  {"setName('Robin');"}
                </i>
                <i className="iBlock">
                  {"console.log(name); // Still 'Taylor'!"}
                </i>
                <i className="iBlock">
                  {"}"}
                </i>
              </div>
            </p>

          </li>
          
          {/* useEffect() */}
          <li className="flex flex-column gap-01">
            <h2>useEffect()</h2>
            <p>El <i>useEffect()</i> es un metodo que se ejecuta <strong>SOLO 1 VEZ</strong> en toda la existencia de la app(a menos que se recarge la pagina) al final luego de cargar el componente que lo contiene(El APP.jsx tambien es un componente). Esto por defecto, los <i>useEffect()</i> llevan como parametro un array que contiene estados(Hooks) los cuales al cambiar, disparan la ejecución del contenido del <i>useEffect()</i>. Al contenido de este array se les denomina <strong>Variables Dependencia.</strong></p>
            
            <p>•useEffect(callback, [variables_dependencia]);</p>

            <p></p>

            <p><strong>DATO:</strong> Los useEffect(), al igual que todos los <strong>HOOKS</strong> son funciones.</p>
          </li>

          <li className="flex flex-column gap-01">
            <h2>REACT REDUX (Estados Globales):</h2>
            <div className="container containerBlue"><p><i>"$ npm i @reduxjs/toolkit react-redux"</i></p></div>
            <p>En la carpeta <i>"src"</i> creamos la carpeta <i>"store"</i>. Dentro de <i>"store"</i> creamos el archivo <strong><i>"index.js"</i></strong> que representa la <strong>store misma.</strong></p>
            <p>Luego creamos aquí mismo una carpeta <i>slices</i> que va a contener las variables globales.</p>
            <p>Esquema:</p>
            <ul className="containerInner containerBlue">
              <li>En la carpeta <i>slices</i> creamos el archivo <i>variable.slice.js</i></li>
              <li>
                Esquema:
                <div className="containerInner">
                  <h2>varialbe.slice.js:</h2>
                  <p><i>{"import { createSlice } from '@reactjs/toolkit';"}</i></p>
                  <br />
                  <p><i>{"const varName = createSlice({"}</i></p>
                  <p><i>&nbsp;&nbsp;&nbsp;&nbsp;{"name: 'varName',"}</i>&nbsp;&nbsp;&nbsp;&nbsp; → El nombre de la variable</p>
                  <p><i>&nbsp;&nbsp;&nbsp;&nbsp;{"initialState: null,"}</i>&nbsp;&nbsp;&nbsp;&nbsp; → Su valor inicial que <strong>No puede ser <i>undefined</i></strong></p>
                  <p><i>&nbsp;&nbsp;&nbsp;&nbsp;{"reducers: {"}</i>&nbsp;&nbsp;&nbsp;&nbsp; → Los metodos que tendra.</p>
                  <p><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"setVariable: (value, action) => action.payload"}</i> → Si no usas value, lo puedes reemplazar con "_", para buenas practicas</p>
                  <p><i>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</i></p>
                  <p><i>{"});"}</i></p>
                  <br />
                  <p><i>{"export const {setVarible} = varName.actions;"}</i> → Por logica deberia ser <i>varName.reducers</i> pero así lo quisieron los desarrolladores.</p>
                  <br />
                  <p><i>{"export default varName.reducer;"}</i> → Exportamos la Variable.</p>
                </div>
              </li>
            </ul>

            <div className="containerInner containerBlue">
              <h2>index.js:</h2>
              <p><i>{"import { configureStore } from '@reduxjs/toolkit';"}</i> → Importamos los paquetes necesarios</p>
              <br />
              <p><i>{"import varSlice from './slices/variable.slice';"}</i> → Importamos el archivo <strong><i>varible.slice.js</i></strong></p>
              <br />
              <p><i>{"const store = configureStore("}</i></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<i>{"reducer:{"}</i></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<i>&nbsp;&nbsp;&nbsp;&nbsp;{"varSlice"}</i> → Aqui van los slices</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<i>{"}"}</i></p>
              <p><i>{");"}</i></p>
              <p><i>{"export default store;"}</i></p>
            </div>
          </li>

          <div className="containerInner containerGreen"><p>{"Y con eso queda construido el store :)"}</p></div>

          <p>Como invocarlo:</p>

          <p>En <i>"Main.jsx":</i> Debes envolver la etiqueta <i>"App.jsx"</i> en un <strong>Provider:</strong></p>

          <div className="containerInner containerBlue">
            <p><i>{"import { Provider } from 'react-redux';"}</i></p>
            <p><i>{"import store from './store/index.js';"}</i></p>
            <br />
            <p><i>{"<Provider store={store}>"}</i></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<i>{"<App/>"}</i></p>
            <p><i>{"</Provider>"}</i></p>
          </div>

          <p>Como usarlo:(Por ejemplo en App.jsx)</p>

          <div className="containerInner containerBlue">
            <p><i>{"import { useSelector } from 'react-redux';"}</i></p>
            <br />
            <p><i>{"const globalVar = useSelector(store => store.varName);"}</i> → Ahora <i>globalVar</i> guarda a la variable global <i>varName</i></p>
          </div>

          <li className="flex flex-column gap-01">
            <h2>REDUX THUNK:</h2>
            <p>Guardar los resultados de una <strong>Peticion Asincrona</strong>(como el <i>axios</i>) en una variable global:</p>
            <div className="containerInner containerBlue">
              <h2>variable.slice.js:</h2>
              <p><i>{"import { createSlice } from '@reactjs/toolkit';"}</i></p>
              <br />
              <p><i>{"const varName = createSlice({"}</i></p>
              <p><i>&nbsp;&nbsp;&nbsp;&nbsp;{"name: 'varName',"}</i>&nbsp;&nbsp;&nbsp;&nbsp; → El nombre de la variable</p>
              <p><i>&nbsp;&nbsp;&nbsp;&nbsp;{"initialState: null,"}</i>&nbsp;&nbsp;&nbsp;&nbsp; → Su valor inicial que <strong>No puede ser <i>undefined</i></strong></p>
              <p><i>&nbsp;&nbsp;&nbsp;&nbsp;{"reducers: {"}</i>&nbsp;&nbsp;&nbsp;&nbsp; → Los metodos que tendra.</p>
              <p><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"setVariable: (value, action) => action.payload"}</i> → Si no usas value, lo puedes reemplazar con "_", para buenas practicas</p>
              <p><i>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</i></p>
              <p><i>{"});"}</i></p>
              <br />
              <p><i>{"export const {setVarible} = varName.actions;"}</i> → Por logica deberia ser <i>varName.reducers</i> pero así lo quisieron los desarrolladores.</p>
              <br />
              <p><i>{"export default varName.reducer;"}</i> → Exportamos la Variable.</p>
              <br />
              <p><i>{"export const getVarNameHunk = (url) => (dispatch) => {"}</i> → Es una buena practica colocar la palabra <i>Hunk</i> al final del nombre de la variable para asociar que estamos creando un <i><strong>Función</strong> dentro de un <strong>Slice</strong></i>.</p>
              <p>{"Una funcion que retorna otra funcion → Función de Orden Superior"}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<i>{"axios.get(url)"}</i></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>{".then(res => dispatch(setVariable(res.data)"}</i></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>{".catch(err => console.log(err));"}</i></p>
              <p><i>{"}"}</i></p>
            </div>

            <div className="containerInner containerBlue">
              <h2>App.jsx:</h2>
              <p><i>{"import { useSelector, useDispatch } from 'react-redux';"}</i></p>
              <br />
              <p><i>{"const dispatch = useDispatch();"}</i></p>
              <br />
              <p><i>{"const globalVar = useSelector(store => store.varName);"}</i> → Ahora <i>globalVar</i> guarda a la variable global <i>varName</i></p>
              <p><i>{"useEffect(() => {"}</i></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<i>{"const url = '...';"}</i></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<i>{"getVarNameHunk(url);"}</i></p>
              <p><i>{"}), []);"}</i></p>
              <p><i>{""}</i></p>
              <p><i>{""}</i></p>
            </div>
          </li>

          {/* POSIBLES ERRORES: */}
          <li className="flex flex-column gap-01">
            <h2>Posibles Errores:</h2>
            <p><i>"$ npm i axios react-redux @reduxjs/toolkit":</i> Puede que te este pidiendo que instales la version mas reciente de react y react-dom, ya que por alguna razón esta instalando una versión obsoleta.</p>

            <div className="containerInner containerBlue">
              <i>"$ npm i react react-dom"</i>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default App
