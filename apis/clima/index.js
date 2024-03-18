
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    const API_KEY = "e9c678f523da785fed15d406da19e02a";
    //const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;///current time
    //const API_URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${API_KEY}`; ///calidad del aire

    const xhr = new XMLHttpRequest();


    function onRequestHandler(){
        if(this.readyState===4 && this.status===200){
            console.log(this.response);
            //const data=JSON.parse(this.response);
            //console.log(data);
            //const HTMLResponse= document.querySelector("#app");

        /* const tpl= data.map((user) => `<div><p>Nombre: ${user.name}</p>
                                                <p>Apellido: ${user.username}</p>
                                                <p>Email: ${user.email}</p>
                                                <p>Telefono: ${user.phone}</p>
                                                <p>Website: ${user.website}</p>
                                                <p>Company Name: ${user.company.name}</p>
                                                <p>Ciudad: ${user.address.city}</p>
                                                <p>Calle: ${user.address.street}, Altura: ${user.address.suite}</p></div>`);
            HTMLResponse.innerHTML=`${tpl}`;*/
        }
    }

    xhr.addEventListener("load",onRequestHandler);
    xhr.open("GET", `${API_URL}`);
    xhr.send();
});



