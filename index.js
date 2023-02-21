var date = new Date()
var time = date.getHours()

 var adStyle = document.querySelector("h2")



if (time < 12) {
    document.querySelector(".greetings").innerHTML = "Good morning" 
    adStyle.classList.add("hello")
    
} else if (time < 16) {
    document.querySelector(".greetings").innerHTML = "Good afternoon"     
    adStyle.classList.add("hello")

} else {
    document.querySelector(".greetings").innerHTML = "Good evening" 
    adStyle.classList.add("hello")
}



