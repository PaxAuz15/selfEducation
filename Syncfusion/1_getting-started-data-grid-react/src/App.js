import React from 'react';
import './App.css';
import {GridComponent, ColumnDirective, ColumnsDirective, Inject, Page, Filter, Group} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json'

function App() {
  return (
    <div className="TableOnData">
      <GridComponent 
      dataSource={data} 
      className='table' 
      allowPaging={true}
      pageSettings={{ pageSize:6}}
      allowFiltering={true}
      allowGrouping={true}>
        <ColumnsDirective>
          <ColumnDirective field='usuario_id' headerText='Id' width='25%'/>
          <ColumnDirective field='usuario_login' headerText='Login' width='50%'/>
          <ColumnDirective field='nombres' headerText='Nombres' width='75%'/>
          <ColumnDirective field='primer_apellido' headerText='Apellidos' width='75%'/>
          <ColumnDirective field='codigo_estado' headerText='Estado' width='25%'/>
          <ColumnDirective field='fecha_actualizacion' headerText='Actualización' width='75%'/>
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group]}/>
      </GridComponent>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
