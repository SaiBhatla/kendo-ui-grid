import React from 'react';
import {GridColumn as Column} from '@progress/kendo-react-grid';

export function getServiceUrl(){
    return "https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories";
}

export function getColumnDefs(){
    let columns = [];
    columns.push(<Column key="CategoryID" field="CategoryID" title="ID" width="50px" />);
    columns.push(<Column key="CategoryName" field="CategoryName" width="200px" title="Category Name" />);
    columns.push(<Column key="Description" field="Description" />);
    return columns;
}