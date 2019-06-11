module.exports = function(string) {
    let time = string.split(':');
    let hours = Number(time[0]);
    let minutes= time[1];

    let timeValue, abbr;
    

    if (hours > 0 && hours <= 12) {
        timevalue = "" + hours;
        abbr = "a.m.";

    } else if (hours > 12) {
        timeValue = "" + (hours - 12);
        abbr = "p.m.";
    } else if (hours == 0) {
        timeValue = "12";
        abbr = "a.m.";
    }
    return `${timeValue}:${minutes} ${abbr}`;
    
}