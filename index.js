var date = new Date(2023,3,20,19)
var time = date.getHours()

 var adStyle = document.querySelector("h2")



if (time < 12) {
    document.querySelector(".greetings").innerHTML = "Good morning" 
    adStyle.classList.add("hello")
    
}else if (time < 18) {
    document.querySelector(".greetings").innerHTML = "Good afternoon"
    adStyle.classList.add("hello")

} else if (time < 20) {
    document.querySelector(".greetings").innerHTML = "Good evening"
    adStyle.classList.add("hello")
}
else {
    document.querySelector(".greetings").innerHTML = "Good night"
    adStyle.classList.add("hello")
}


