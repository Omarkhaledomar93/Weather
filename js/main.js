


let products = []
let userInput = document.querySelector("input")

function getData(type) {

    let myHttp = new XMLHttpRequest("")
    let myHttp2 = new XMLHttpRequest("");


    // myHttp.open("GET",`http://api.weatherapi.com/v1/search.json?key=6e0b17b946ce43c5b2e174246240107&q=${type}`)
    myHttp.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=6e0b17b946ce43c5b2e174246240107&q=${type}&days=3`);


    myHttp.send()

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4 && myHttp.status == 200) {
            console.log(JSON.parse(myHttp.response))
            products = [JSON.parse(myHttp.response)];
            displayProduct()
        }
    })


    
}

function displayProduct() {

    cartona = ``

    for (let i = 0; i < products.length; i++) {
        cartona += `  <div class="col-md-4 ">
    <div class="forecast-container border rounded-3 ">
    <div class="today forecast">
 <div class="forecast-header d-flex justify-content-between pt-2 ps-2">
     <div class="day">Sunday</div>
     
     <div class="date pe-2">${products[i].location.localtime}</div>
     </div> <!-- .forecast-header -->
     <div class="forecast-content ps-3 pt-4 ">
     <div class="location1">${products[i].location.name}</div>
         <div class="degree">
        <div class="num1 text-center">${products[i].current.temp_c}<sup>o</sup>C</div>
         <div class="forecast-icon ">
              <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="" width="90">
              
        </div>
                </div>
              <div class="custom pb-5">Partly cloudy</div>
          <div class="img-forecast justify-content-between me-5 pe-5 d-flex pb-5 ">
       <span><img class="p-2" src="images/icon-umberella.png" alt="">20%</span>
        <span><img class="p-2" src="images/icon-wind.png" alt="">${products[i].current.wind_kph}</span>
                <span><img class="p-2" src="images/icon-compass.png" alt="">${products[i].current.wind_dir}</span>
             </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="col-md-4">
                <div class="forecast-container border rounded-3">
                    <div class="today forecast ">
                        <div class="forecast-header text-center pt-2 ps-2 ">
                            <div class="day ">Monday</div>
                           
                        </div> <!-- .forecast-header -->
                        <div class="forecast-content p-5 text-center">
                            <div class="forecast-icon p-3 mb-5 ">
                                <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" width="48">
                            </div>
                            <div class="degree ">
                                <div class="num text-center">${products[i].current.temp_c}<sup>o</sup>C</div>
                                <small>${products[i].location.lon}<sup>o</sup></small>
                                <div class="custom pb-5 mb-5">Sunny</div>
                            </div>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="col-md-4">
                <div class="forecast-container border rounded-3">
                    <div class="today forecast ">
                        <div class="forecast-header text-center pt-2 ps-2 ">
                            <div class="day ">Tuesday</div>
                           
                        </div> <!-- .forecast-header -->
                        <div class="forecast-content p-5 text-center">
                            <div class="forecast-icon p-3 mb-5">
                                <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" width="48">
                            </div>
                            <div class="degree">
                                <div class="num text-center">${products[i].current.temp_c}<sup>o</sup>C</div>
                                <small>${products[i].location.lon}<sup>o</sup></small>
                                <div class="custom pb-5 mb-5">Sunny</div>
                            </div>
                            
                           
                        </div>
                    </div>
                </div>
            </div>`

    }

    document.querySelector("#myData").innerHTML = cartona
}






userInput.addEventListener("keyup", function (e) {
    console.log(e.target.value)
    getData(e.target.value)
})

getData("london")








// myHttp2.open("GET","http://api.weatherapi.com/v1//forecast.json?key=6e0b17b946ce43c5b2e174246240107&q=cairo")
    // myHttp2.send()  

    // myHttp2.addEventListener("readystatechange", function(){
    //     if(myHttp2.readyState==4){
    //         console.log(JSON.parse(myHttp2.response))
    //         products=JSON.parse(myHttp2.response);



    //     }
    // })











































////////////////////////////////////////////////////////////////////////////////////////////////////////////