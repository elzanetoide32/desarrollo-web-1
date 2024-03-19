
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    const API_KEY = "e9c678f523da785fed15d406da19e02a";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;///current time

    const xhr = new XMLHttpRequest();


    function onRequestHandler(){
        if(this.readyState===4 && this.status===200){
            //console.log(this.response);
            const data=JSON.parse(this.response);
            console.log(data);
            const HTMLResponse= document.querySelector("#app");

            const tpl= `<div><p>zona mas cercana de la medicion: ${data.name}</p>
                            <p>temperatura: ${data.main.temp}, temperatura max ${data.main.temp_max}, temperatura min: ${data.main.temp_min}, sensacion termica: ${data.main.feels_like}</p>
                            <p>humedad: ${data.main.humidity}</p>
                            <p>presion: ${data.main.pressure}</p>
                            <p>viento  velocidad: ${data.wind.speed} km/h</p></div>`;

            HTMLResponse.innerHTML=`${tpl}`;
        }
    }

    xhr.addEventListener("load",onRequestHandler);
    xhr.open("GET", `${API_URL}`);
    xhr.send();
});



