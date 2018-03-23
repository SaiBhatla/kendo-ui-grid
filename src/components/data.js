import Axios from 'axios';

let reports = {
    "ExposureReport": "Exposure Report",
    "PnLReport": "PnL Report"
}
export function getServiceUrl() {
    return "http://localhost/AnalyticsReporting/api/BaseReport/GetReportData";
}

function getRequestPayload(dashboardName) {
    switch (dashboardName) {
        case reports.ExposureReport:
            return { "AdditionalParameters": { "BetaType": "Beta6MMDY" }, "AdditionalParameterSelections": { "BETA TYPE": "Beta 6M MDY" }, "AdditionalPreCalcFields": [], "StartDate": "2015-04-30T00:00:00.000Z", "EndDate": "2015-04-30T00:00:00.000Z", "ReportingEntityType": "Fund", "ReportingEntityIds": [0], "GroupByColumns": [{ "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "AssetTypeId", "Description": "Asset Type", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "String", "Type": "Dimension", "HelpText": "The Asset Type of the security from Sec Master.", "GroupByColumnField": "AssetTypeDesc", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }], "CurrentGroupByColumnIndex": 0, "ReportDesc": "Exposure Report", "DataProviderName": "PositionsAnalyticsDataProvider", "ReportColumns": [{ "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "MktValueNet", "Description": "MV Net", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Number", "Type": "Measure", "HelpText": "Net Market Value (NMV).", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": true, "IsTransactionsReportColumn": false, "TrendChartField": "", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }, { "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "MktValueLong", "Description": "MV Long", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Number", "Type": "Measure", "HelpText": "Long Market Value (LMV): By default, exposure is netted at an issuer level before calculating long market value at higher levels.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }, { "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "MktValueShort", "Description": "MV Short", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Number", "Type": "Measure", "HelpText": "Short Market Value (SMV): By default, exposure is netted at an issuer level before calculating short market value at higher levels.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }, { "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "MktValueGross", "Description": "MV Gross", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Number", "Type": "Measure", "HelpText": "Gross Market Value (GMV): By default, market value is netted at an issuer level before calculating gross.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": true, "IsTransactionsReportColumn": false, "TrendChartField": "", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }, { "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "MktValueAUMPct", "Description": "MV Net (% AUM)", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Percent3", "Type": "Measure", "HelpText": "Net Market Value (NMV) as a percentage of Ending AUM.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }, { "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "MktValueLongAUMPct", "Description": "MV Long (% AUM)", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Percent3", "Type": "Measure", "HelpText": "Long Market Value (LMV) as a % of Ending AUM: By default, exposure is netted at an issuer level before calculating long market value at higher levels.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }, { "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "MktValueShortAUMPct", "Description": "MV Short (% AUM)", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Percent3", "Type": "Measure", "HelpText": "Short Market Value (SMV) as a % of Ending AUM: By default, exposure is netted at an issuer level before calculating short market value at higher levels.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }, { "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "MktValueGrossAUMPct", "Description": "MV Gross (% AUM)", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Percent3", "Type": "Measure", "HelpText": "Gross Market Value (GMV) as a % of Ending AUM: By default, market value is netted at an issuer level before calculating gross.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }], "Top": null, "OrderBy": "", "Filter": "", "ResultFilter": "", "UIFilters": null, "UISort": null, "IncludeGroupTotals": true, "HideGroupByColumn": false, "ShowDetailsOnly": false, "CacheViewData": false, "ViewName": "Market Value" };
        case reports.PnLReport:
            return { "AdditionalParameters": { "BetaType": null }, "AdditionalParameterSelections": {}, "AdditionalPreCalcFields": [], "StartDate": "2015-01-01T00:00:00.000Z", "EndDate": "2015-04-30T00:00:00.000Z", "ReportingEntityType": "Fund", "ReportingEntityIds": [2], "GroupByColumns": [{ "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "CountryId", "Description": "Country", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "String", "Type": "Dimension", "HelpText": "Issue Country of the security.", "GroupByColumnField": "CountryDesc", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }], "CurrentGroupByColumnIndex": 0, "ReportDesc": "PnL Report", "DataProviderName": "PositionsAnalyticsDataProvider", "ReportColumns": [{ "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "DTDPnL", "Description": "DTD PnL", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Number", "Type": "Measure", "HelpText": "Daily Profit and Loss: PnL for the selected End Date and dimension.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "DTDPnLTrend", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "DayBegin", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }, { "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "MTDPnL", "Description": "MTD PnL", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Number", "Type": "Measure", "HelpText": "Month to date Total PnL.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "PnLTrend", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "MonthBegin", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }, { "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "QTDPnL", "Description": "QTD PnL", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Number", "Type": "Measure", "HelpText": "Quarter to Date Profit and Loss: Total PnL for the current quarter, as of the end date.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "PnLTrend", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "QuarterBegin", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }, { "$type": "MIKFS.AnalyticsReporting.Model.ReferenceData.ReportColumnConfigurationModel, MIKFS.AnalyticsReporting.Model, Version=2018.1.0.0, Culture=neutral, PublicKeyToken=null", "Id": 0, "Field": "YTDPnL", "Description": "YTD PnL", "FullDescription": null, "ColumnGroupHeader": null, "DataProvider": null, "DataType": "Number", "Type": "Measure", "HelpText": "Year to Date Profit and Loss: Total PnL for the current year.", "GroupByColumnField": "", "SortByColumnField": "", "IsPreCalcColumn": false, "IsTrendBreakdownEnabled": false, "IsTransactionsReportColumn": false, "TrendChartField": "PnLTrend", "ExcludedWidgets": null, "RawDataField": null, "StartDateType": "YearBegin", "HeaderOverride": null, "TrendBreakdown": 0, "IsExtended": false, "Style": null, "DataProviderColumnMapId": null, "IsActive": false, "IsProductColumn": false, "ChartType": null, "DataTypeOverride": null }], "Top": null, "OrderBy": "", "Filter": "", "ResultFilter": "", "UIFilters": null, "UISort": null, "IncludeGroupTotals": false, "HideGroupByColumn": false, "ShowDetailsOnly": false, "CacheViewData": false, "ViewName": "PnL" };
        default:
            return {};
    }
}

function getExcludeList(dashboardName) {
    switch (dashboardName) {
        case reports.ExposureReport:
            return { "$type": "$type", "AssetTypeId": "AssetTypeId", "IsTotalRow": "IsTotalRow" };
        case reports.PnLReport:
            return { "$type": "$type", "CountryId": "CountryId", "IsTotalRow": "IsTotalRow" };
        default:
            return {};
    }
}

function getChartData(data, dashboardName) {
    let series = [];
    let series_1_obj = {};
    let series_2_obj = {};
    switch (dashboardName) {
        case reports.ExposureReport:
            series_1_obj = {
                name: "MktValueGross",
                type: "column",
                data: []
            };
            series_2_obj = {
                name: "MktValueNet",
                type: "column",
                data: []
            };
            for (let i = 1; i < data.length; i+=2) {
                let row = data[i];
                series_1_obj.data.push(row.MktValueGross);
                series_2_obj.data.push(row.MktValueNet);
            }
            series.push(series_1_obj);
            series.push(series_2_obj);
            return series;
        case reports.PnLReport:
            series_1_obj = {
                name: "DTDPnL",
                type: "column",
                data: []
            };
            series_2_obj = {
                name: "MTDPnL",
                type: "column",
                data: []
            };
            for (let i = 0; i < data.length; i+=3) {
                let row = data[i];
                series_1_obj.data.push(row.DTDPnL);
                series_2_obj.data.push(row.MTDPnL);
            }
            series.push(series_1_obj);
            series.push(series_2_obj);
            return series;
        default:
            return series;
    }
}

function getChartCategories(data, dashboardName) {
    let categories = [];
    switch (dashboardName) {
        case reports.ExposureReport:
            for (let i = 1; i < data.length; i+=2) {
                let row = data[i];
                categories.push(row.AssetTypeDesc);
            }
            return categories;
        case reports.PnLReport:
            for (let i = 0; i < data.length; i+=3) {
                let row = data[i];
                categories.push(row.CountryDesc);
            }
            return categories;
        default:
            return categories;
    }
}

function getAllHeaders(obj) {
    var cols = [];
    var p = obj[0];
    for (var key in p) {
        cols.push({
            field: key,
            title: key,
            hidden: false
        });
    }
    return cols;
}

function getHeadersWithExclusionList(obj, excludeList) {
    var cols = [];
    var p = obj[0];
    for (var key in p) {
        let hidden = false;
        if (key in excludeList) {
            hidden = true;
        };
        cols.push({
            field: key,
            title: key,
            hidden: hidden
        });
    }
    return cols;
}

export function getColumnDefs(data, excludeList) {
    //ideally, we would append the dashboardname to the service and get the related column definitions. For now, we will hard code based on dashboard name
    if (excludeList) {
        return getHeadersWithExclusionList(data, excludeList);
    }
    else {
        return getAllHeaders(data);
    }
}

export async function getData(dashboardName) {
    //ideally, we would append the dashboardname to the service and get the related column definitions. For now, we will hard code based on dashboard name using switch. Once the API is ready, we wont need switch
    const res = await Axios.post(getServiceUrl(), getRequestPayload(dashboardName));
    let data = await res.data;
    let cols = getColumnDefs(data, getExcludeList(dashboardName));
    let chartData = getChartData(data, dashboardName);
    let chartCategories = getChartCategories(data,dashboardName);
    return {
        rows: data,
        columns: cols,
        chartData: chartData,
        chartCategories:chartCategories
    };
}

export function getComboboxData() {
    let comboboxData = [];
    comboboxData.push(reports.ExposureReport);
    comboboxData.push(reports.PnLReport);
    return comboboxData;
}
