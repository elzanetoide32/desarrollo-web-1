const API_URL="http://jsonplaceholder.typicode.com";
const xhr= new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState===4 && this.status===200){
        //console.log(this.response);
        const data=JSON.parse(this.response);
        console.log(data);
        const HTMLResponse= document.querySelector("#app");

        const tpl= data.map((user) => `<div id="app1"><p id="laura">N° ${user.id}</p>
                                            <p>Nombre: ${user.name}</p>                                            
                                            <p>Apellido: ${user.username}</p>
                                            <p>Email: ${user.email}</p>
                                            <p>Telefono: ${user.phone}</p>
                                            <p>Website: ${user.website}</p>
                                            <p>Company Name: ${user.company.name}</p>
                                            <p>Ciudad: ${user.address.city}</p>
                                            <p>Calle: ${user.address.street}, Altura: ${user.address.suite}</p></div>`);
        HTMLResponse.innerHTML=`${tpl}`;
    }
}

xhr.addEventListener("load",onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();