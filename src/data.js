import stocks from './stocks.json'
export function getData(){
    //Hookup a service call here to get data using optional args parameters
    //we will generate a json object using a sample data file here
    let dataObject = get_sample_json();
    return dataObject;
};

function get_sample_json(){
       //return [{"Ticker":"AAPL","StockPrices":[{"Year":2017,"Prices":[{"Month":"Jan","Value":971.897219993126},{"Month":"Feb","Value":243.268406737255},{"Month":"Mar","Value":700.139563437616},{"Month":"Apr","Value":912.208824982964},{"Month":"May","Value":419.146417509367},{"Month":"Jun","Value":953.798916588444},{"Month":"Jul","Value":740.527142370365},{"Month":"Aug","Value":649.556339322383},{"Month":"Sep","Value":414.297815092978},{"Month":"Oct","Value":233.932799722037},{"Month":"Nov","Value":968.463171025954},{"Month":"Dec","Value":584.883296482676}]},{"Year":2018,"Prices":[{"Month":"Jan","Value":181.036358504107},{"Month":"Feb","Value":847.106198289947},{"Month":"Mar","Value":654.599134928826},{"Month":"Apr","Value":617.140701328004},{"Month":"May","Value":936.004706954586},{"Month":"Jun","Value":679.200217304379},{"Month":"Jul","Value":203.078533850181},{"Month":"Aug","Value":725.354465993752},{"Month":"Sep","Value":581.549333725846},{"Month":"Oct","Value":627.732193622614},{"Month":"Nov","Value":821.336928392452},{"Month":"Dec","Value":617.033329567422}]}]},{"Ticker":"FB","StockPrices":[{"Year":2017,"Prices":[{"Month":"Jan","Value":568.241564588734},{"Month":"Feb","Value":361.733290116178},{"Month":"Mar","Value":718.355734841132},{"Month":"Apr","Value":670.236074444948},{"Month":"May","Value":392.403101731279},{"Month":"Jun","Value":523.63839630207},{"Month":"Jul","Value":775.506585778439},{"Month":"Aug","Value":619.237088653835},{"Month":"Sep","Value":887.397207639831},{"Month":"Oct","Value":796.413042161806},{"Month":"Nov","Value":307.313668079355},{"Month":"Dec","Value":932.023283248778}]},{"Year":2018,"Prices":[{"Month":"Jan","Value":382.864186206304},{"Month":"Feb","Value":787.873756600485},{"Month":"Mar","Value":645.491049227068},{"Month":"Apr","Value":738.127076597012},{"Month":"May","Value":499.37636484363},{"Month":"Jun","Value":444.280477447566},{"Month":"Jul","Value":635.588812146144},{"Month":"Aug","Value":740.514091328026},{"Month":"Sep","Value":794.99963745242},{"Month":"Oct","Value":346.492072402729},{"Month":"Nov","Value":251.911679865751},{"Month":"Dec","Value":443.463336184371}]}]},{"Ticker":"AMZN","StockPrices":[{"Year":2017,"Prices":[{"Month":"Jan","Value":508.453774037051},{"Month":"Feb","Value":858.619572948022},{"Month":"Mar","Value":517.977849402455},{"Month":"Apr","Value":631.936330363125},{"Month":"May","Value":686.579575290242},{"Month":"Jun","Value":755.404119452184},{"Month":"Jul","Value":390.732708289629},{"Month":"Aug","Value":952.74884600786},{"Month":"Sep","Value":183.30388962445},{"Month":"Oct","Value":909.130375324344},{"Month":"Nov","Value":379.958200491945},{"Month":"Dec","Value":713.483428821658}]},{"Year":2018,"Prices":[{"Month":"Jan","Value":481.5668821249},{"Month":"Feb","Value":289.321905369555},{"Month":"Mar","Value":153.654421332131},{"Month":"Apr","Value":971.391341123446},{"Month":"May","Value":321.445890851992},{"Month":"Jun","Value":358.614525179665},{"Month":"Jul","Value":591.143840128157},{"Month":"Aug","Value":659.133859378814},{"Month":"Sep","Value":621.316038687395},{"Month":"Oct","Value":459.525526528957},{"Month":"Nov","Value":102.948259423928},{"Month":"Dec","Value":970.683693499623}]}]}];
       return stocks;
};
