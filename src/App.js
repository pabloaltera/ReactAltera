import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/navbar/navbar';
import Card from './componentes/card/card';

function App() {
  return (
    <div className="App container-fluid">
      <Navbar/>
      <Card
      titulo={"Soporte universal"}
      descripcion={"Soporte universal para Celular / Tablet. Varios colores"}
      img={"https://http2.mlstatic.com/D_NQ_NP_714534-MLA51824544508_102022-O.webp"}
      button={"Ver mas"}
      />
      
    </div>
  );
}

export default App;
