var timeDate = $(".currentDay");
var updatedTIme;
clockUpdt();
function updatetimeBlock(){
    var updatedHour = updatedTime.hours();
    var timeBlock = $(".time-block");
    for (var i=0; i <timeBlock.Length; i++){
        
    }
}
function clockUpdt(){
    updatedTime = moment();
    timeDate.text(updatedTime);
}
var a = "one"
$("#saveBtn1").on("click", function(){
    localStorage.setItem(a, $("#one").val());
})

$("#one").val(localStorage.getItem("one"));;

var b = "two"
$("#saveBtn2").on("click", function(){
    localStorage.setItem(b, $("#two").val());
})

$("#two").val(localStorage.getItem("two"));

var c = "three"
$("#saveBtn3").on("click", function(){
    localStorage.setItem(c, $("#three").val());
})

$("#three").val(localStorage.getItem("three"));

var d = "four"
$("#saveBtn4").on("click", function(){
    localStorage.setItem(d, $("#four").val());
})

$("#four").val(localStorage.getItem("four"));

var e = "five"
$("#saveBtn5").on("click", function(){
    localStorage.setItem(e, $("#five").val());
})

$("#five").val(localStorage.getItem("five"));

var f = "six"
$("#saveBtn6").on("click", function(){
    localStorage.setItem(f, $("#six").val());
})

$("#six").val(localStorage.getItem("six"));

var g = "seven"
$("#saveBtn7").on("click", function(){
    localStorage.setItem(g, $("#seven").val());
})

$("#seven").val(localStorage.getItem("seven"));

var h = "eight"
$("#saveBtn8").on("click", function(){
    localStorage.setItem(h, $("#eight").val());
})

$("#eight").val(localStorage.getItem("eight"));

var i = "nine"
$("#saveBtn9").on("click", function(){
    localStorage.setItem(i, $("#nine").val());
})

$("#nine").val(localStorage.getItem("nine"));

