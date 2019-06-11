module.exports = function(string) {
    let time = string.split(':');
    let hours = Number(time[0]);
    let minutes= time[1];

    let newHour, abbr;
    

    if (hours > 0 && hours <= 12) {
        newHour = "" + hours;
        abbr = "a.m.";

    } else if (hours > 12) {
        newHour = "" + (hours - 12);
        abbr = "p.m.";
    } else if (hours == 0) {
        newHour = "12";
        abbr = "a.m.";
    }
    return `${newHour}:${minutes} ${abbr}`;
    
}