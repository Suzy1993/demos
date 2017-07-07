setInterval(function() {
	$(".index").css("background", "#aaa");
	$("#index" + ((Math.abs(parseInt($("#images").css("left")) / 400) + 1) % 5 + 1)).css("background", "#555");
	// 判断当前的left值，如果当前显示的是假的第一张，需要回到真的第一张，以便下一步继续轮播第二张图片
	if ($("#images").css("left") == "-2000px") {
		$("#images").css("left", "0px");
	}
	$("#images").animate({left: parseInt($("#images").css("left")) - 400 + "px"}, 200);
}, 3000);


for (var k = 1; k <= 5; k++) {
	(function(k) {
		$("#index" + k).on("click", function() {
			// 判断当前的left值，如果当前显示的是假的第一张，需要回到真的第一张，防止错误的滚动方向
			if ($("#images").css("left") == "-2000px") {
				$("#images").css("left", "0px");
			}
			$("#images").animate({left: -400 * (k - 1) + "px"}, 200);
			$(".index").css("background", "#aaa");
			$("#index" + k).css("background", "#555");
		});
	})(k);
}

$(".prev").on("click", function() {
	// 判断当前的left值，如果当前显示的是真的第一张，需要回到假的第一张，防止错误的滚动方向
	if ($("#images").css("left") == "0px") {
		$("#images").css("left", "-2000px");
	}
	$("#images").animate({left: parseInt($("#images").css("left")) - 400 + "px"}, 200);
	$(".index").css("background", "#aaa");
	$("#index" + ((Math.abs(parseInt($("#images").css("left")) / 400) - 1) % 5 + 1)).css("background", "#555");
});

$(".next").on("click", function() {
	// 判断当前的left值，如果当前显示的是假的第一张，需要回到真的第一张，防止错误的滚动方向
	if ($("#images").css("left") == "-2000px") {
		$("#images").css("left", "0px");
	}
	$("#images").animate({left: parseInt($("#images").css("left")) + 400 + "px"}, 200);
	$(".index").css("background", "#aaa");
	$("#index" + ((Math.abs(parseInt($("#images").css("left")) / 400) + 1) % 5 + 1)).css("background", "#555");
});