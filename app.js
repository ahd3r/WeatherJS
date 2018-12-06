const storage = new Storage;
let dataInStorage=storage.getLocalData();
let weather=new Weather(dataInStorage.city, dataInStorage.state);
const ui = new UI;
weather.getWeather().then(data=>{
    ui.paint(data);
}).catch(err=>console.log(err)); // It shoultn't being in page
document.querySelector('#btn-change-loc').addEventListener('click', function(){
  if(document.querySelector('#City').value!==''&&document.querySelector('#State').value!==''){
  	weather=new Weather(document.querySelector('#City').value, document.querySelector('#State').value);
  	weather.getWeather().then(data=>{
  		if(data){
        storage.setLocalData(document.querySelector('#City').value,document.querySelector('#State').value);
        dataInStorage=storage.getLocalData();
        weather=new Weather(dataInStorage.city, dataInStorage.state);
        weather.getWeather().then(data=>{
            ui.paint(data);
        }).catch(err=>console.log(err));
  		}
  	}).catch(err=>console.log(err));
    $('#exampleModal').modal('hide'); // jquery stuff
  }
});
