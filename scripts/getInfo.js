/**
 * Created by Hing on 2015/7/21.
 */


function getInfo(){
    console.log(document.documentElement.clientHeight);

    console.log(document.documentElement.scrollTop);
    $.get("/heihei.php/home/jobnet/fjoblist",{page:1,count:20},function(json){
        if(json != null) {
            for (var i = 0; i < json.data.data.length; i++){
                getJob(json.data.data[i]);
            }
        }else{
                console.log("json is null");
            }
    });
}

function getHieght(){
    return document.documentElement.clientHeight;
}

function getJob(data){
    var time = getTime(data.time);
    $('#content').append(function(){
        var str = "<li style=\"height:70px;\">" +
            "<a href=\"detail.html?jobid="+data.id+"\">" +
            "<div class=\"icon a7\">"+time[1]+"-"+time[2]+"</div>" +
            "<div class=\"txt\">" +
            "<div class=\"tit\">"+data.title+"</div>" +
            "</div>" +
            "<div class=\"label\">" +
            "<img class=\"flag\" width=\"10\" height=\"10\" alt=\"flag\" src=\"img/flag.png\">" +
            "<p style=\"float: right; overflow: hidden;width:150px;\">"+data.company+"</p>" +
            "</div>" +
            "<div class=\"oth\"><p style=\"overflow: hidden;\">"+data.money+"</p>" +
            "<div class=\"time\">"+time.join("-")+"<img width=\"10\" height=\"10\" alt=\"time\" src=\"img/time.png\">" +
            "</div>" +
            "</div>" +
            "</a>" +
            "</li>";
        return str;
    });
}
/*function getResponse(){
    if(request.readyState == 4){
        if(request.status == 200){
            var data = eval('('+request.responseText+')');
            if(data.status == 200){
                window.area = data.info;
                place.innerHTML = window.area+" V";
                for(var i =0;i<data.data.length;i++){
                    getDetail(data.data[i]);
                }
            }
        }else{
            console.log('请求失败');
        }
    }
}

function getDetail(data){
    switch(data.jobType){
        case '1':
            data.jobType="礼仪";
            break;
        case '2':
            data.jobType="传单";
            break;
        case '3':
            data.jobType="会展";
            break;
        case '4':
            data.jobType="开发";
            break;
        case '5':
            data.jobType="销售";
            break;
        case '6':
            data.jobType="服务";
            break;
        case '7':
            data.jobType="设计";
            break;
        case '8':
            data.jobType="其他";
            break;
    }

    var content = document.getElementById('content');
    var lis = document.createElement('li');
    content.appendChild(lis);

    /!*first div*!/
    var link = document.createElement('a');
    link.href = "detail.html?city="+window.area+"&page="+window.page+"&jobid="+data.jobId;
    lis.appendChild(link);

    var div_0 = document.createElement('div');
    div_0.className="icon a7";
    div_0.innerHTML = data.jobType;
    link.appendChild(div_0);

    /!*second div*!/
    var div_1 = document.createElement('div');
    div_1.className="txt";
    link.appendChild(div_1);

    var div_1_0 = document.createElement('div');
    div_1_0.className="tit";
    div_1_0.innerHTML = data.jobName;
    div_1.appendChild(div_1_0);

    var _0_1_span = document.createElement("span");
    _0_1_span.className = "tit_sta";
    _0_1_span.innerHTML = "荐";
    div_1.appendChild(_0_1_span);

    /!*third div*!/
    var div_2 = document.createElement('div');
    div_2.className = "label";
    link.appendChild(div_2);

    var img = document.createElement('img');
    img.className = "flag";
    img.width = 10;
    img.height = 10;
    img.alt = "flag";
    img.src = "img/flag.png";
    div_2.appendChild(img);

    var intro = document.createElement('p');
    intro.style.float="right";
    intro.innerHTML = data.jobAddress;
    intro.style.width="150px";
    intro.style.whiteSpace = "nowrap";
    intro.style.overflow = "hidden";
    div_2.appendChild(intro);

    /!*fourth div*!/
    var div_3 = document.createElement('div');
    div_3.className="oth";
    link.appendChild(div_3);

    var p = document.createElement('p');
    p.innerHTML = data.jobMoneyIntro;
    p.style.overflow = "hidden";
    p.style.display = "block";
    p.style.width="80px";
    p.style.whiteSpace = "nowrap";
    div_3.appendChild(p);

    var div_3_0 = document.createElement('div');
    div_3_0.className="time";
    var date = (data.jobBegin).split(" ");
    div_3_0.innerHTML = date[0];
    div_3.appendChild(div_3_0);

    var img_1 = document.createElement('img');
    img_1.width=10;
    img_1.height=10;
    img_1.alt="time";
    img_1.src="img/time.png";
    div_3_0.appendChild(img_1);


}*/



