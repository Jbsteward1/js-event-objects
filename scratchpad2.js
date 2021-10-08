let atlanta = document.getElementById("atlanta");
let chicago = document.getElementById("chicago");
let charlotte = document.getElementById("charlotte");
let ohio = document.getElementById("ohio");
let temp = document.getElementById("temp");
let rnc = document.getElementById("rnc");
let humid = document.getElementById("humid");
let wind = document.getElementById("wind");
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let cityFor = document.getElementById("cityFor")


fetch("https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=7983f9630bd1335bc5529b4c48cf145a")
.then(function(response){
    console.log(response)
    return response.json()
})
    .then(function(data){
        console.log(data)
        return data
    })
    .then(function(data){
        console.log(data.main.temp)
        let temp= data.main.temp
        var element = document.getElementById("atl")
        let i = (temp - 273.15) * 9/5 +32
        element.innerHTML= i.toFixed(0) + "°"
        return (data) 
    })

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=7983f9630bd1335bc5529b4c48cf145a")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        return data;
    })
    .then(function(data){
        console.log(data.main.temp);
        let temp= data.main.temp
        var element = document.getElementById("chi")
        let i = (temp - 273.15) * 9/5 +32 
        element.innerHTML= i.toFixed(0) + "°"
        return data
    })

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=7983f9630bd1335bc5529b4c48cf145a")
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data)
        return data
    })
    .then(function(data){
        console.log(data.main.temp)
        let temp= data.main.temp
        var element = document.getElementById("char")
        let i = (temp - 273.15) * 9/5 +32
        element.innerHTML= i.toFixed(0) + "°"
        return data
    })

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Ohio&appid=7983f9630bd1335bc5529b4c48cf145a")
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data)
        return data
    })
    .then(function(data){
        console.log(data.main.temp)
        let temp= data.main.temp
        var element = document.getElementById("oh")
        let i = (temp - 273.15) * 9/5 +32
        element.innerHTML= i.toFixed(0) + "°"
        return data
    })
    
// function loadTemp(){
//     let city = input.value;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7983f9630bd1335bc5529b4c48cf145`)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         cityFor.innerHTML = city + " Forecast";
//         return data;
//     })
// }

function loadTemp(){
    let city = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7983f9630bd1335bc5529b4c48cf145a`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("this is dat", data)
    // console.log(data.main.temp);
    cityFor.innerHTML = city + " Forecast";
    temp.innerHTML = (Math.floor(data.main.temp - 273.15) * 9/5 + 32) + " °Farenheit"
    rnc.innerHTML = (data.weather[0].description);
    humid.innerHTML = (data.main.humidity);
    wind.innerHTML = (data.wind.speed);
    return data;
})}


submit.addEventListener("click", loadTemp);

function bigBox(x){
    x.style.height = "450px";
    x.style.width = "350px";
}
function littleBox(x){
    x.style.height = "250px";
    x.style.width = "250px";

}
        

        
        
        
       
    
    
    
    
    
    
    
    
    
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(data){
    //     console.log(data.main.temp);
    //     cityFor.innerHTML = `${input.value}Forecast`;
    //     temp.innerHTML = Math.floor((dat.main.temp -273.15) * 9/5 + 32)+"Fahrenheit"
    // })
    // submit.addEventListener(onclick, loadTemp);

