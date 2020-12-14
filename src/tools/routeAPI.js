let routeAPI;
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === "prod"){
    routeAPI = "https://api.ganatrade.xyz/";
}else{
    routeAPI = "https://beta.api.ganatrade.xyz/";
}
export default routeAPI
