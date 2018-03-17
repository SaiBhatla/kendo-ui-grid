import Axios from 'axios';

export function getServiceUrl() {
    return "https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories";
}

export function getColumnDefs(dashboardName) {
    //ideally, we would append the dashboardname to the service and get the related column definitions. For now, we will hard code based on dashboard name
    let columnDefs = [];
    switch (dashboardName) {
        case "Categories":
            columnDefs.push({
                key:"CategoryID",
                field:"CategoryID",
                title:"ID",
                width:"50px"
            });
            columnDefs.push({
                key:"CategoryName",
                field:"CategoryName",
                title:"Category Name",
                width:"200px"
            });
            columnDefs.push({
                key:"Description",
                field:"Description",
                title:"Description",
            });
            return columnDefs;
        case "Products":
            columnDefs.push({
                key:"ProductID",
                field:"ProductID",
                title:"ID",
                width:"50px"
            });
            columnDefs.push({
                key:"ProductName",
                field:"ProductName",
                title:"Product Name",
                width:"200px"
            });
            return columnDefs;
        default:
            return columnDefs;

    }
}

export async function getRowData(dashboardName) {
    //ideally, we would append the dashboardname to the service and get the related column definitions. For now, we will hard code based on dashboard name using switch. Once the API is ready, we wont need switch
    switch(dashboardName){
        case "Categories":
            const res = await  Axios.get(getServiceUrl());
            const data = await res.data.value;
            return data;
        case "Products":
            let rows = [];
            let p1 = {
                ProductID:0,
                ProductName:"Pepsi"
            };
            rows.push(p1);
            p1 = {
                ProductID:1,
                ProductName:"Minute Maid"
            };
            rows.push(p1);
            return rows;
        default:
            let empty = [];
            return empty;
    }
}

export function getComboboxData(){
    let comboboxData = [];
    comboboxData.push("Categories");
    comboboxData.push("Products");
    return comboboxData;
}