import Axios from 'axios';

export function getServiceUrl() {
    //return "https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories";
    return "http://localhost/AnalyticsReporting/api/BaseReport/GetReportData";
}

function getRequestPayload(){
    return {"AdditionalParameters":{"BetaType":"Beta6mVsRegionalIndex"},"AdditionalParameterSelections":{"BETA TYPE":"Beta Regional Index (6M)"},"StartDate":"2018-02-28T00:00:00.000Z","EndDate":"2018-02-28T00:00:00.000Z","ReportingEntityType":"Firm","ReportingEntityIds":[0],"GroupByColumns":[{"$type":"MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.6646.29453, Culture=neutral, PublicKeyToken=null","Id":0,"Field":"AssetTypeId","Description":"Asset Type","FullDescription":null,"ColumnGroupHeader":null,"DataProvider":null,"DataType":"String","Type":"Dimension","HelpText":"The Asset Type of the security from Sec Master.","GroupByColumnField":"AssetTypeDesc","SortByColumnField":"","IsPreCalcColumn":false,"IsTrendBreakdownEnabled":false,"IsTransactionsReportColumn":false,"TrendChartField":"","ExcludedWidgets":null,"RawDataField":null,"StartDateType":"","HeaderOverride":null,"TrendBreakdown":0,"IsExtended":false,"Style":null,"DataProviderColumnMapId":null,"IsActive":false,"IsProductColumn":false,"ChartType":null,"DataTypeOverride":null}],"CurrentGroupByColumnIndex":0,"ReportDesc":"Exposure Report","DataProviderName":"PositionsAnalyticsDataProvider","ReportColumns":[{"$type":"MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.6646.29453, Culture=neutral, PublicKeyToken=null","Id":0,"Field":"MktValueNet","Description":"MV Net","FullDescription":null,"ColumnGroupHeader":null,"DataProvider":null,"DataType":"Number","Type":"Measure","HelpText":"Net Market Value (NMV).","GroupByColumnField":"","SortByColumnField":"","IsPreCalcColumn":false,"IsTrendBreakdownEnabled":false,"IsTransactionsReportColumn":false,"TrendChartField":"","ExcludedWidgets":null,"RawDataField":null,"StartDateType":"","HeaderOverride":null,"TrendBreakdown":0,"IsExtended":false,"Style":null,"DataProviderColumnMapId":null,"IsActive":false,"IsProductColumn":false,"ChartType":null,"DataTypeOverride":null},{"$type":"MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.6646.29453, Culture=neutral, PublicKeyToken=null","Id":0,"Field":"MktValueLong","Description":"MV Long","FullDescription":null,"ColumnGroupHeader":null,"DataProvider":null,"DataType":"Number","Type":"Measure","HelpText":"Long Market Value (LMV): By default, exposure is netted at an issuer level before calculating long market value at higher levels.","GroupByColumnField":"","SortByColumnField":"","IsPreCalcColumn":false,"IsTrendBreakdownEnabled":false,"IsTransactionsReportColumn":false,"TrendChartField":"","ExcludedWidgets":null,"RawDataField":null,"StartDateType":"","HeaderOverride":null,"TrendBreakdown":0,"IsExtended":false,"Style":null,"DataProviderColumnMapId":null,"IsActive":false,"IsProductColumn":false,"ChartType":null,"DataTypeOverride":null},{"$type":"MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.6646.29453, Culture=neutral, PublicKeyToken=null","Id":0,"Field":"MktValueShort","Description":"MV Short","FullDescription":null,"ColumnGroupHeader":null,"DataProvider":null,"DataType":"Number","Type":"Measure","HelpText":"Short Market Value (SMV): By default, exposure is netted at an issuer level before calculating short market value at higher levels.","GroupByColumnField":"","SortByColumnField":"","IsPreCalcColumn":false,"IsTrendBreakdownEnabled":false,"IsTransactionsReportColumn":false,"TrendChartField":"","ExcludedWidgets":null,"RawDataField":null,"StartDateType":"","HeaderOverride":null,"TrendBreakdown":0,"IsExtended":false,"Style":null,"DataProviderColumnMapId":null,"IsActive":false,"IsProductColumn":false,"ChartType":null,"DataTypeOverride":null},{"$type":"MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.6646.29453, Culture=neutral, PublicKeyToken=null","Id":0,"Field":"MktValueGross","Description":"MV Gross","FullDescription":null,"ColumnGroupHeader":null,"DataProvider":null,"DataType":"Number","Type":"Measure","HelpText":"Gross Market Value (GMV): By default, market value is netted at an issuer level before calculating gross.","GroupByColumnField":"","SortByColumnField":"","IsPreCalcColumn":false,"IsTrendBreakdownEnabled":false,"IsTransactionsReportColumn":false,"TrendChartField":"","ExcludedWidgets":null,"RawDataField":null,"StartDateType":"","HeaderOverride":null,"TrendBreakdown":0,"IsExtended":false,"Style":null,"DataProviderColumnMapId":null,"IsActive":false,"IsProductColumn":false,"ChartType":null,"DataTypeOverride":null},{"$type":"MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.6646.29453, Culture=neutral, PublicKeyToken=null","Id":0,"Field":"MktValueAUMPct","Description":"MV Net (% AUM)","FullDescription":null,"ColumnGroupHeader":null,"DataProvider":null,"DataType":"Percent3","Type":"Measure","HelpText":"Net Market Value (NMV) as a percentage of Ending AUM.","GroupByColumnField":"","SortByColumnField":"","IsPreCalcColumn":false,"IsTrendBreakdownEnabled":false,"IsTransactionsReportColumn":false,"TrendChartField":"","ExcludedWidgets":null,"RawDataField":null,"StartDateType":"","HeaderOverride":null,"TrendBreakdown":0,"IsExtended":false,"Style":null,"DataProviderColumnMapId":null,"IsActive":false,"IsProductColumn":false,"ChartType":null,"DataTypeOverride":null},{"$type":"MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.6646.29453, Culture=neutral, PublicKeyToken=null","Id":0,"Field":"MktValueLongAUMPct","Description":"MV Long (% AUM)","FullDescription":null,"ColumnGroupHeader":null,"DataProvider":null,"DataType":"Percent3","Type":"Measure","HelpText":"Long Market Value (LMV) as a % of Ending AUM: By default, exposure is netted at an issuer level before calculating long market value at higher levels.","GroupByColumnField":"","SortByColumnField":"","IsPreCalcColumn":false,"IsTrendBreakdownEnabled":false,"IsTransactionsReportColumn":false,"TrendChartField":"","ExcludedWidgets":null,"RawDataField":null,"StartDateType":"","HeaderOverride":null,"TrendBreakdown":0,"IsExtended":false,"Style":null,"DataProviderColumnMapId":null,"IsActive":false,"IsProductColumn":false,"ChartType":null,"DataTypeOverride":null},{"$type":"MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.6646.29453, Culture=neutral, PublicKeyToken=null","Id":0,"Field":"MktValueShortAUMPct","Description":"MV Short (% AUM)","FullDescription":null,"ColumnGroupHeader":null,"DataProvider":null,"DataType":"Percent3","Type":"Measure","HelpText":"Short Market Value (SMV) as a % of Ending AUM: By default, exposure is netted at an issuer level before calculating short market value at higher levels.","GroupByColumnField":"","SortByColumnField":"","IsPreCalcColumn":false,"IsTrendBreakdownEnabled":false,"IsTransactionsReportColumn":false,"TrendChartField":"","ExcludedWidgets":null,"RawDataField":null,"StartDateType":"","HeaderOverride":null,"TrendBreakdown":0,"IsExtended":false,"Style":null,"DataProviderColumnMapId":null,"IsActive":false,"IsProductColumn":false,"ChartType":null,"DataTypeOverride":null},{"$type":"MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.6646.29453, Culture=neutral, PublicKeyToken=null","Id":0,"Field":"MktValueGrossAUMPct","Description":"MV Gross (% AUM)","FullDescription":null,"ColumnGroupHeader":null,"DataProvider":null,"DataType":"Percent3","Type":"Measure","HelpText":"Gross Market Value (GMV) as a % of Ending AUM: By default, market value is netted at an issuer level before calculating gross.","GroupByColumnField":"","SortByColumnField":"","IsPreCalcColumn":false,"IsTrendBreakdownEnabled":false,"IsTransactionsReportColumn":false,"TrendChartField":"","ExcludedWidgets":null,"RawDataField":null,"StartDateType":"","HeaderOverride":null,"TrendBreakdown":0,"IsExtended":false,"Style":null,"DataProviderColumnMapId":null,"IsActive":false,"IsProductColumn":false,"ChartType":null,"DataTypeOverride":null}],"Top":null,"OrderBy":"","Filter":"","ResultFilter":"","UIFilters":null,"UISort":null,"IncludeGroupTotals":true,"HideGroupByColumn":false,"ShowDetailsOnly":false,"CacheViewData":false,"ViewName":"Market Value"};
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
            const res = await  Axios.post(getServiceUrl(),getRequestPayload());
            const data = await res.data.value;
            console.log(data);
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