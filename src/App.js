import "./App.css";
import { useState } from "react";


function App() {
  const [codigo, setCodigo] = useState({
    codigo: '',
    respuesta:'',
  });

 async function consumir(){
    fetch('https://codebreaker-backend-deutsch.herokuapp.com/juego', {
      method: 'POST',
      body: JSON.stringify(codigo.codigo),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(data => {
      setCodigo({
        codigo: codigo.codigo,
        respuesta: data.respuesta,
      });
    }).catch(err => console.log(err));
  }

  return (
    <div className="App">
      <form>
        <label>
          Entre el codigo : 
          <input
          type={'number'}
          name='codigo'
          placeholder='Tu codigo'
          value={codigo.codigo}
          onChange={(e) => {
            setCodigo({ ...codigo, codigo: e.target.value });
          }}
        />
        </label>
        <label className="App">
          {codigo.respuesta}
        </label>
        <input type="submit" value="Submit" onSubmit={consumir()} />
      </form>
    </div>
  );
}

export default App;
