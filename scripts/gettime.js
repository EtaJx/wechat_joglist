/**
 * Created by zx591 on 2015/8/7.
 */
function getTime(time){
    var theTime = time.split(" "),
        _time = theTime[0],
        final = _time.split("-");
    var timeArr = new Array();
    for(var i = 0;i<final.length;i++){
        timeArr[i] = final[i];
    }
    return timeArr;
}