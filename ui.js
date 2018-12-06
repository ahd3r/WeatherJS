class UI{
  paint(data){
    document.querySelector('#w-location').textContent=data.display_location.full;
    document.querySelector('#w-desk').textContent=data.weather;
    document.querySelector('#w-string').textContent=data.temperature_string;
    document.querySelector('#w-icon').setAttribute('src',data.icon_url);
    document.querySelector('#w-humidity>h4').textContent=`Relative Humidity: ${data.relative_humidity}`;
    document.querySelector('#w-dewpoint>h4').textContent=`Dewpoint: ${data.dewpoint_string}`;
    document.querySelector('#w-feels-like>h4').textContent=`Feels Like: ${data.feelslike_string}`;
    document.querySelector('#w-wind>h4').textContent=`Wind: ${data.wind_string}`;
  }
}
