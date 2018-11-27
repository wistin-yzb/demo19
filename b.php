<?php
include 'include.php';
$random_keys=array_rand($a);
$host = $a[$random_keys];
$rtd4 = mt_rand(1,2);
$rtd5 = mt_rand(3,5);
$ren = mt_rand(5,20);
$share_url = "http://{$d5_domain}/chat22/?ja=ja";

$rts_name = array('程晨','慧慧','芯儿','佳佳','小爱','安安','九儿','羽西','萱萱','子涵','花儿','叶琳','小丸子','米豆','瑶瑶','菲菲');
$index = rand(0, count($rts_name)-1);
$rtd_f = mt_rand(10,50);

$group_biao = array('♋','🔑','🍭','🐝','💥','💉','🐾','♌','🎀','💕','🍌','🐾','☀','🍒','🌟','🍎','💫','👑','🍇','🌀');
$group_index = rand(0, count($group_biao)-1);

$man_biao = array('💋','🎀','🎀','🔥','☀','♉','🍦','✏');
$man_index = rand(0, count($man_biao)-1);


$circle_biao = array('🎀','🎀','🔥','☀','♉','🍦','✏');
$circle_index = rand(0, count($circle_biao)-1);

$b = array(
	's'=>array(
			'circle_img'=>'https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/1112/20181120103210.jpg',
			'circle_title'=>'邀妳加'.$circle_biao[$circle_index].'入{city}少妇野'.$circle_biao[$circle_index].'外车'.$circle_biao[$circle_index].'震群',
			'describe'=>'“'.$rts_name[$index].'”邀妳加入女'.$man_biao[$man_index].'神集'.$man_biao[$man_index].'聚内有'.$rtd_f.'位好友点击进入>>>',
			'group_img'=>'https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/1112/20181120103210.jpg',
			'group_title'=>'邀妳加'.$group_biao[$group_index].'入{city}少妇野'.$group_biao[$group_index].'外车'.$group_biao[$group_index].'震群',
			'manage_experience'=>0,
			'manage_img'=>'https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/eighth_one/lao.jpg',
			'manage_title'=>'{city}男^人一晚上'.$man_biao[$man_index].'几|次才算正常，男人应该好好看看了'.$man_biao[$man_index],
			'ren'=>$ren,
			'title_df'=>array(
					0=>"多多",
					1=>"妙彤",
					2=>"安安",
					3=>"梦晗",
					4=>"小樱"
			),
			'url'=>array(
					0=>$share_url.'f1'.get_rand_str(1,5),
					1=> $share_url.'f2'.get_rand_str(5,6),
					2=>$share_url.'f3'.get_rand_str(6,10),
					3=>$share_url.'f4'.get_rand_str(10,15),
					4=>$share_url.'t1'.get_rand_str(15,20),
					5=>$share_url.'t2'.get_rand_str(20,25)
			)			
	)
);
$bjson =  json_encode($b); 
/////////////////////////////////////////////////////////////////////////////////////////////
//index
$bbg = array(
		'circle_date'=>'4oCce25hbWV94oCd6YKA5aaz5Yqg5YWl5aWze2ljb25956We6ZuGe2ljb2596IGa5YaF5pyJe3RpbWV95L2N5aW95Y+L54K55Ye76L+b5YWlPj4+',
		'circle_img'=>'https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/1112/20181120103210.jpg',
		'circle_title'=>'邀妳加{icon}入少妇野{icon}外车{icon}震群',
		'create_time'=>"null",
		'describe'=>'邀妳加入少💘妇野💘外车💘震群',
		"group_img"=>"https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/1112/20181120103210.jpg",
		"group_title"=>"邀妳加{icon}入少妇野{icon}外车{icon}震群",
		"id"=>"1",
		"img"=>"https://hgdedmvqwe.oss-cn-shanghai.aliyuncs.com/1112/20181120103210.jpg",
		"title"=>"{city}野外车".$group_biao[$group_index]."震群",
		"update_time"=>"null",
		"will"=>array(
				0=>$rts_name[$index],
				1=>"程晨"
		)
);
$bbgjson =  json_encode($bbg); 
?>
/////////////////////////////////////////
var bfg = '<?php echo $bjson;?>';
var bbg  = '<?php echo $bbgjson;?>';
var d3_domain = '<?php echo "http://".get_rand_str(2,6).".".$d3_domain.'/jt'.get_random_str(10)."$~jct*)_".get_rand_str(1,10).(time()*3)."#".time()*2;?>';