import React from 'react';
import {GridComponent, ColumnDirective, ColumnsDirective, Inject, Page, Filter, Group} from '@syncfusion/ej2-react-grids';
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";
import './App.css';


const App = () => {
  const data = new DataManager({
    url:'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
    adaptor: new ODataV4Adaptor()
  })
  return (
    <div>
      <GridComponent
        dataSource={data}
        className='table'
        allowPaging={true}
        pageSettings={{ pageSize:6}}
        allowFiltering={true}
        allowGrouping={true}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' width='100' textAlign="Right" />
          <ColumnDirective field='CustomerID' width='100' />
          <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
          <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
          <ColumnDirective field='ShipCountry' width='100' />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group]}/>
      </GridComponent>
    </div>
  )
}

export default App;
