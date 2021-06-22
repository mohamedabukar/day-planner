var timeDate = $(".currentDay");
var updatedTIme;
clockUpdt();

function clockUpdt(){
    updatedTime = moment();
    timeDate.text(updatedTime);
}