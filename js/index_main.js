

$(function () {
	
	// 点击切换出现城市
	$(".city_toggle").on('click', function () {
		$("#changecity").attr("class","");
	});

	$("#city_colse").on('click', function () {
		$("#changecity").attr("class","selected");
		console.log("2");
	});
	//myfocus
	myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_kdui',//风格
	time:3//时间
	});

});
