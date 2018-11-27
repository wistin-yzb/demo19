<?php
/**
 * Created by PhpStorm.
 * User: zoey
 * Date: 2018/11/2
 * Time: 17:42
 */
include ('include.php');
require_once  "./wechat/jssdk.php";
$config = [
		'app_id' => $dataArr['app_id'],
		'app_secret' => $dataArr['app_secret']
];
@$jssdk = new JSSDK($config['app_id'], $config['app_secret']);
@$signPackage = $jssdk->GetSignPackage($_REQUEST['url']);
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
var d1_domain  = '<?php echo 'http://'.get_rand_str(2, 6).'.'.$d1_domain;?>';