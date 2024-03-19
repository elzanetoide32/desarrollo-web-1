const API_URL="https://pokeapi.co/api/v2/pokemon";
const xhr= new XMLHttpRequest();
var poke=[];
function onRequestHandler(){
    if(this.readyState===4 && this.status===200){
        //console.log(this.response);
        const data=JSON.parse(this.response);
        console.log(data.results);

        //const HTMLResponse= document.querySelector("#app");            
        //HTMLResponse.innerHTML=`${data.results}`;
        for(var i=0;i<20;i++){
            poke.push(data.results[i].name,data.results[i].url);
        }
        
        document.getElementById("app").innerHTML = poke;
        
    }
}
console.log(poke)
xhr.addEventListener("load",onRequestHandler);
xhr.open("GET", `${API_URL}`);
xhr.send();
//data.results[0].name