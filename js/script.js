let DataCountainer;
let searchInp = document.getElementById('search');
  
  
searchInp.addEventListener('keyup', function(){
  if (searchInp.value == "") {
    weather();
  }else{
    (async function weather (){
    
      let  response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1a13fb99f4014f1fa9e131947210305&q=${searchInp.value}&days=7`);
      let  responseData = await response.json();
      
      
      DataCountainer = responseData;
      
      console.log(DataCountainer)
      
      display();
      forecast();
      twoDays();
      })();
  }
})



async function weather (){
  
let  response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=1a13fb99f4014f1fa9e131947210305&q=cairo&days=7');
let  responseData = await response.json();


DataCountainer = responseData;

console.log(DataCountainer)

display();
forecast();
twoDays();
};
weather();

function display(){

  let temp = document.getElementById('temp')
    temp.innerHTML = DataCountainer.current.temp_c + '°';

  let loca = document.getElementById('location');
    loca.innerHTML = `${DataCountainer.location.name} , ${DataCountainer.location.country} Weather`
  
  let time = document.getElementById('time');
    time.innerHTML= DataCountainer.location.localtime;

  let mood = document.getElementById('mood');
    mood.innerHTML = DataCountainer.current.condition.text;

  let rain = document.getElementById('rain');
    rain.innerHTML = DataCountainer.forecast.forecastday[0].day.daily_chance_of_rain + '% chance of rain Today'
  
  let icon = document.getElementById('weather-icon');
    icon.src = 'https:'+DataCountainer.current.condition.icon;

  let maxtemp = document.getElementById('max');
    maxtemp.innerHTML= DataCountainer.forecast.forecastday[0].day.maxtemp_c + '°';

  let mintemp = document.getElementById('min');
    mintemp.innerHTML= '/ '+ DataCountainer.forecast.forecastday[0].day.mintemp_c + '°';

  
}

function forecast(){
  let h5 = document.querySelector('.info .h5');
    h5.innerHTML = "Today's Forcast for " + `${DataCountainer.location.name} , ${DataCountainer.location.country} `;
  
  let morning = document.querySelector('.info .morning h4');
    morning.innerHTML = DataCountainer.forecast.forecastday[0].hour[9].temp_c + '°';

  let img1 = document.querySelector('.info .morning img');
    img1.src = 'https:'+DataCountainer.forecast.forecastday[0].hour[9].condition.icon;

  let wind1 = document.querySelector('.info .morning h5 span');
    wind1.innerHTML = DataCountainer.forecast.forecastday[0].hour[9].wind_kph + ' kph';

  let afternoon = document.querySelector('.info .afternoon h4');
    afternoon.innerHTML = DataCountainer.forecast.forecastday[0].hour[14].temp_c + '°';

  let img2 = document.querySelector('.info .afternoon img');
    img2.src = 'https:'+DataCountainer.forecast.forecastday[0].hour[14].condition.icon;

  let wind2 = document.querySelector('.info .afternoon h5 span');
    wind2.innerHTML = DataCountainer.forecast.forecastday[0].hour[14].wind_kph + ' kph';

  let evening = document.querySelector('.info .evening h4');
    evening.innerHTML= DataCountainer.forecast.forecastday[0].hour[21].temp_c + '°';

  let img3 = document.querySelector('.info .evening img');
    img3.src = 'https:'+DataCountainer.forecast.forecastday[0].hour[21].condition.icon;

  let wind3 = document.querySelector('.info .evening h5 span');
    wind3.innerHTML = DataCountainer.forecast.forecastday[0].hour[21].wind_kph + ' kph';

  let overnight = document.querySelector('.info .overnight h4');
    overnight.innerHTML = DataCountainer.forecast.forecastday[0].hour[0].temp_c + '°';

  let img4 = document.querySelector('.info .overnight img');
    img4.src = 'https:'+DataCountainer.forecast.forecastday[0].hour[0].condition.icon;

  let wind4 = document.querySelector('.info .overnight h5 span');
    wind4.innerHTML = DataCountainer.forecast.forecastday[0].hour[0].wind_kph + ' kph';
}

function twoDays(){
  let dayOneLocation = document.querySelector('.two-days .dayonelocation');
    dayOneLocation.innerHTML = DataCountainer.location.name;
  
  let dOneTime = document.querySelector('.two-days .d-onetime');
    dOneTime.innerHTML = DataCountainer.forecast.forecastday[1].date;

  let dOneTemp = document.querySelector('.two-days .d-onetemp');
    dOneTemp.innerHTML = DataCountainer.forecast.forecastday[1].day.maxtemp_c + '°';

  let dOneImg = document.querySelector('.day-one img');
    dOneImg.src = 'https:'+ DataCountainer.forecast.forecastday[1].day.condition.icon;

  let dOneMood = document.querySelector('.day-one h5');
    dOneMood.innerHTML = DataCountainer.forecast.forecastday[1].day.condition.text;


    let dayTwoLocation = document.querySelector('.two-days .daytwolocation');
    dayTwoLocation.innerHTML = DataCountainer.location.name;
  
  let dTwoTime = document.querySelector('.two-days .d-twotime');
    dTwoTime.innerHTML = DataCountainer.forecast.forecastday[2].date;

  let dTwoTemp = document.querySelector('.day-two h4');
    dTwoTemp.innerHTML = DataCountainer.forecast.forecastday[2].day.maxtemp_c + '°';

  let dTwoImg = document.querySelector('.day-two img');
    dTwoImg.src = 'https:'+ DataCountainer.forecast.forecastday[2].day.condition.icon;

  let dTwoMood = document.querySelector('.day-two h5');
    dTwoMood.innerHTML = DataCountainer.forecast.forecastday[2].day.condition.text
}




