const apiKey="0ca8fe984ce3fef321cd475314908f08";
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');

const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;
 async function checkWeather(city){
    try{
        const response=await fetch(apiUrl+`&q=${city}`);
        if(response.ok){
        var data=await response.json();
        console.log(data);
        document.querySelector('.cityname').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML=data.main.
        humidity + "%";
        document.querySelector('.windspeed').innerHTML=data.wind.speed+ "km/hr";
     }
     else{
         throw new Error('failed to fetch');
     }
    }
    catch(e){
        console.Error(e.message);
    }

 }
 searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
 })
