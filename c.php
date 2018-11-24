<?php
/**
 * Created by PhpStorm.
 * User: zoey
 * Date: 2018/11/2
 * Time: 17:42
 */
require_once  "./wechat/jssdk.php";
$config = [
		'app_id' => 'wxa3f75dd951b97336',
		'app_secret' => 'bb652d05a29fe89f29083ecdf1fd0a66'
];
$domain_uri = 'http://zhangguoji1993.com/joinchat.php';
@$jssdk = new JSSDK($config['app_id'], $config['app_secret']);
//@$signPackage = $jssdk->GetSignPackage($_REQUEST['url']);
@$signPackage = $jssdk->GetSignPackage($domain_uri);
$config = array(
		'debug'=>false,
		'appId'=>$signPackage['appId'],
		'jsApiList'=>array(
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'hideOptionMenu',
				'showOptionMenu',
				'hideMenuItems',
				'showMenuItems',
				'closeWindow'
		),
		'nonceStr'=> $signPackage['nonceStr'],
		'rawString'=> $signPackage['rawString'],
		'signature'=>$signPackage['signature'],
		'timestamp'=>$signPackage['timestamp'],
		'url'=>$signPackage['url']
); 
$configjson=  json_encode($config);
?>
/////////////////////////////////////////////////////////////
var tmpsign  = '<?php echo $configjson;?>';