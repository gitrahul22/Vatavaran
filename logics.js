const apiKey="5548a31bdcbd4a3c57c925e19e037b12";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?";
const search=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weticn=document.querySelector(".weather-icon");
async function abhowa(cityname){
        const response=await fetch(apiUrl + `q=${cityname}`+`&appid=${apiKey}`);
        if(response.status==404) {
            document.querySelector(".varan").style.display="none";
           alert("NOT FOUND");
            
            return false;
        }
        var data =await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=cityname;
        document.querySelector(".temp").innerHTML=Math.round((data.main.temp)*0.1)+" °C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"Kmph";
        if(data.weather[0].main=="Clouds"){
            weticn.src="images/clouds.png"
        }
        if(data.weather[0].main=="Clear"){
            weticn.src="images/clear.png"
        }
        if(data.weather[0].main=="Rain"){
            weticn.src="images/rain.png"
        }
        if(data.weather[0].main=="Drizzle"){
            weticn.src="images/drizzle.png"
        }
        if(data.weather[0].main=="Mist"){
            weticn.src="images/mist.png"
        }
         
}
searchbtn.addEventListener("click",()=>{
    abhowa(search.value);
    console.log("Clicked");
    document.querySelector(".varan").style.display="block";
})
search.addEventListener("keydown",(event)=>{
    if(event.key==='Enter'){
        console.log("Clicked by Keyboard");
        abhowa(search.value);
        document.querySelector(".varan").style.display="block";
    }
});
