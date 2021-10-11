var wrapperEl = document.body.querySelector(".wrapper")
var counterEl = document.body.querySelector(".counter")


var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];


for(var i = 0; i < list.length; i++){
    var el = document.createElement("div")
    var nameEl = document.createElement("h2")
    var ageEl = document.createElement("h4")

    nameEl.innerHTML = "Name: " + list[i].name

    el.appendChild(nameEl)

    if(list[i].age > 25){
        ageEl.innerHTML = "Age: " + list[i].age
        ageEl.style.backgroundColor="green"
        el.appendChild(ageEl)
    }
    else{
        ageEl.innerHTML = "Age: " + (list[i].age)
        el.appendChild(ageEl)
    }

    wrapperEl.appendChild(el)

}

counterEl.innerHTML = "Counter: 5"

var value = 5;

document.body.querySelector(".butt1").addEventListener("click",function(){
    value += 1
    counterEl.innerHTML = "Counter: " + value

})
