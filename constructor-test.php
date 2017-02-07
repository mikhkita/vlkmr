<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<meta name="keywords" content=''>
	<meta name="description" content=''>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1">
	<link rel="stylesheet" href="css/reset.css" type="text/css">
	<link rel="stylesheet" href="css/jquery.fancybox.css" type="text/css">
	<link rel="stylesheet" href="css/jquery.fancybox-thumbs.css" type="text/css">
	<link rel="stylesheet" href="css/slick.css" type="text/css">
	<link rel="stylesheet" href="css/KitAnimate.css" type="text/css">
	<link rel="stylesheet" href="css/layout.css" type="text/css">
	<link rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico">

	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.fancybox.js"></script>
	<script type="text/javascript" src="js/jquery.fancybox-thumbs.js"></script>
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
	<script type="text/javascript" src="js/slick.js"></script>
	<script type="text/javascript" src="js/TweenMax.min.js"></script>
	<script type="text/javascript" src="js/swipe.js"></script>
	<script type="text/javascript" src="js/parallax.min.js"></script>
	<script type="text/javascript" src="js/numericInput.js"></script>
	<script type="text/javascript" src="js/css3-mediaqueries.js"></script>
	<script type="text/javascript" src="js/autosize.min.js"></script>
	<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>
	<script type="text/javascript" src="js/jquery.validate.min.js"></script>
	<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="js/KitProgress.js"></script>
	<script type="text/javascript" src="js/KitAnimate.js"></script>
	<script type="text/javascript" src="js/countUp.js"></script>
	<script type="text/javascript" src="js/device.js"></script>
	<!--<script type="text/javascript" src="js/KitSend.js"></script>-->
	<!--<script type="text/javascript" src="js/main.js"></script>-->

	<link rel="stylesheet" type="text/css" href="css/jquery.qtip.min.css"/>
	<script type="text/javascript" src="js/jquery.qtip.min.js"></script>
	<script type="text/javascript" src="js/progressbar.min.js"></script>
	<script type="text/javascript" src="js/imagesloaded.pkgd.min.js"></script>
	<!--<script type="text/javascript" src="js/constructor.js"></script>-->
	<script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
	<script src="//yastatic.net/share2/share.js"></script>
	<script type="text/javascript" src="js/jquery.history.js"></script>

<script type="text/javascript">
	$(document).ready(function(){
		var texturesList = [];
		texturesList[0] = "decor-1.jpg";
		texturesList[1] = "decor-2.jpg";
		texturesList[2] = "decor-3.jpg";
		//console.log(texturesList);
		function drawing(container, textures){
			var countSVG = container.attr("data-countSVG");
			for(var i=0; i<countSVG;i++){
				container.find('#imageblock'+(i+1)).children().attr({
				"xlink:href": "i/"+textures[+container.find('#imageblock'+(i+1)).attr("data-rel")]});
			}
		}
		drawing($('#svg-container'), texturesList);
	});
</script>

<style type="text/css">
	#svg-container{
		width: 1000px;
	}
</style>

</head>
<body>
	<div id="svg-container" data-countSVG="21">


	<svg width="100%" height="100%" viewBox="0 0 576 432">
		<defs>
		<pattern data-rel="0" id="imageblock1" width="100%" height="100%">
			    <image rand-min-x="0" rand-max-x="-50" rand-min-y="-70" rand-max-y="-40" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="0" y="-40" width="100" height="160" transform="rotate(90, 25, 25)">
			    </image>
			</pattern>
			<pattern data-rel="0" id="imageblock2" width="100%" height="100%">
		       <image rand-min-x="-150" rand-max-x="0" rand-min-y="0" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-20" y="0" width="200" height="320" transform="scale(0.2, 1)">
		     	</image>
		    </pattern>
		    <pattern data-rel="0" id="imageblock3" width="100%" height="100%">
		        <image rand-min-x="-150" rand-max-x="0" rand-min-y="0" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-5" y="0" width="200" height="320">
		     	</image>
		    </pattern>
		    <pattern data-rel="0" id="imageblock4" width="100%" height="100%">
			    <image rand-min-x="-40" rand-max-x="0" rand-min-y="-40" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="0" y="0" width="120" height="192">
			    </image>
			</pattern>
			<pattern data-rel="0" id="imageblock5" width="100%" height="100%">
		        <image rand-min-x="-40" rand-max-x="0" rand-min-y="-80" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="0" y="0" width="100" height="160">
		     	</image>
		    </pattern>
		    <pattern data-rel="0" id="imageblock6" width="100%" height="100%">
		        <image rand-min-x="-40" rand-max-x="0" rand-min-y="-80" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-5" y="-30" width="100" height="160">
		     	</image>
		    </pattern>
		    <pattern data-rel="0" id="imageblock7" width="100%" height="100%">
		        <image rand-min-x="-40" rand-max-x="0" rand-min-y="-80" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-5" y="-30" width="200" height="320">
		     	</image>
		    </pattern>

		    <pattern data-rel="1" id="imageblock8" width="100%" height="100%">
		        <image rand-min-x="-150" rand-max-x="0" rand-min-y="-50" rand-max-y="50" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-7" y="0" width="200" height="320" transform="rotate(90, 125, 125)">
		     	</image>
		    </pattern>
		    <pattern data-rel="1" id="imageblock9" width="100%" height="100%">
		        <image rand-min-x="-70" rand-max-x="0" rand-min-y="0" rand-max-y="20" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-15" y="0" width="100" height="160" transform="rotate(90, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern data-rel="1" id="imageblock10" width="100%" height="100%">
		        <image rand-min-x="-50" rand-max-x="0" rand-min-y="0" rand-max-y="100" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-3" y="0" width="100" height="160" transform="rotate(90, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern data-rel="1" id="imageblock11" width="100%" height="100%">
		        <image rand-min-x="-50" rand-max-x="0" rand-min-y="0" rand-max-y="100" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-7" y="0" width="100" height="160" transform="rotate(90, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern data-rel="1" id="imageblock12" width="100%" height="100%">
		        <image rand-min-x="-100" rand-max-x="0" rand-min-y="-50" rand-max-y="40" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-15" y="0" width="200" height="320" transform="rotate(90, 125, 125)">
		     	</image>
		    </pattern>
		    <pattern data-rel="1" id="imageblock13" width="100%" height="100%">
		        <image rand-min-x="-100" rand-max-x="0" rand-min-y="-50" rand-max-y="40" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-3" y="0" width="200" height="320" transform="rotate(90, 125, 125)">
		     	</image>
		    </pattern>
		    <pattern data-rel="1" id="imageblock14" width="100%" height="100%">
		        <image rand-min-x="-120" rand-max-x="0" rand-min-y="-50" rand-max-y="50" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-3" y="0" width="200" height="320" transform="rotate(90, 125, 125)">
		     	</image>
		    </pattern>

		    <pattern data-rel="2" id="imageblock15" width="100%" height="100%">
		        <image rand-min-x="-100" rand-max-x="0" rand-min-y="-100" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-10" y="0" width="200" height="320">
		     	</image>
		    </pattern>
		    <pattern data-rel="2" id="imageblock16" width="100%" height="100%">
		        <image rand-min-x="-50" rand-max-x="0" rand-min-y="-50" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-26.5" y="0" width="100" height="160">
		     	</image>
		    </pattern>
		    <pattern data-rel="2" id="imageblock17" width="100%" height="100%">
		        <image rand-min-x="-80" rand-max-x="0" rand-min-y="0" rand-max-y="50" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-10" y="0" width="100" height="160" transform="rotate(90, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern data-rel="2" id="imageblock18" width="100%" height="100%">
		        <image rand-min-x="-100" rand-max-x="0" rand-min-y="-70" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-10" y="0" width="200" height="320" transform="scale(0.2, 1)">
		     	</image>
		    </pattern>
		    <pattern data-rel="2" id="imageblock19" width="100%" height="100%">
		        <image rand-min-x="0" rand-max-x="0" rand-min-y="0" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-26.5" y="0" width="100" height="160">
		     	</image>
		    </pattern>
		    <pattern data-rel="2" id="imageblock20" width="100%" height="100%">
		        <image rand-min-x="-50" rand-max-x="0" rand-min-y="-100" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-10" y="-100" width="100" height="160">
		     	</image>
		    </pattern>
		    <pattern data-rel="2" id="imageblock21" width="100%" height="100%">
		        <image rand-min-x="-50" rand-max-x="0" rand-min-y="-80" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="-10" y="0" width="100" height="160">
		     	</image>
		    </pattern>

		    <pattern id="floorPattern" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/Floor-2.jpg" x="-10" y="0" width="600" height="120">
		     	</image>
		    </pattern>
		 </defs>
		<title>Гостиная</title>

		<polygon class="classSVG default" id="block1" fill="url(#imageblock1)" data-clip="clipping1 circle" data-radius="80" points="65.3,85.2 93,89.3 145,89.3 145,74.4 65.3,74.4 "/>
		<polygon class="classSVG default" data-connect="4,7" id="block2" fill="url(#imageblock2)" data-clip="clipping2 circle" data-radius="260" points="145,344.8 154,335.7 154,296.1 155,296 155.1,295.3 155.2,85.6 145,75.2 "/>
		<polygon class="classSVG default" id="block3" fill="url(#imageblock3)" data-clip="clipping3 circle" data-radius="260" points="65.5,85.2 93,89.3 93,89.3 93,344.8 65.5,344.8 "/>
		<rect x="93" y="130.3" class="classSVG default" data-connect="2,7" id="block4" fill="url(#imageblock4)" data-clip="clipping4 circle" data-radius="260" width="50.5" height="143.7"/>
		<rect x="93" y="89.3" class="classSVG default" id="block5" fill="url(#imageblock5)" data-clip="clipping5 circle" data-radius="80" width="52" height="41"/>
		<rect x="93" y="274" class="classSVG default" id="block6" fill="url(#imageblock6)" data-clip="clipping6 circle" data-radius="100" width="52" height="70.8"/>
		<rect x="143.5" y="130.3" class="classSVG default" data-connect="2,4" id="block7" fill="url(#imageblock7)" data-clip="clipping7 circle" data-radius="260" width="1.5" height="143.7"/>

		<rect x="162.7" y="148" class="classSVG default" id="block8" fill="url(#imageblock8)" data-clip="clipping8 circle" data-radius="220" width="190.3" height="33.7"/>
		<rect x="193.8" y="320.6" class="classSVG default" id="block9" fill="url(#imageblock9)" data-clip="clipping9 circle" data-radius="150" width="125.5" height="23.3"/>
		<path class="classSVG default" id="block10" fill="url(#imageblock10)" data-clip="clipping10 circle" data-radius="70" d="M319.3,308.7c0.2,0,40-5.8,40-5.8v41h-40V308.7z"/>
		<path class="classSVG default" id="block11" fill="url(#imageblock11)" data-clip="clipping11 circle" data-radius="70" d="M193.8,308.7c-0.2,0-40-5.8-40-5.8v41h40V308.7z"/>
		<polygon class="classSVG default" data-connect="13" id="block12" data-clip="clipping12 circle" data-radius="220" fill="url(#imageblock12)" points="359.3,296.2 154,296.1 155,296 155.1,295.3 163.5,290.2 354.2,290.2 "/>
		<polygon class="classSVG default" data-connect="12" id="block13" data-clip="clipping13 circle" data-radius="220" fill="url(#imageblock13)" points="359.3,296.2 359.3,302.9 319.3,308.7 193.8,308.7 154,302.9 154,296.1 "/>
		<polygon class="classSVG default" id="block14" data-clip="clipping14 circle" fill="url(#imageblock14)" data-radius="220" points="352.1,233.8 161.3,233.8 155.6,235.3 155.6,240.2 356.6,240.2 356.6,235.3 "/>

		<polygon class="classSVG default" id="block15" data-clip="clipping15 circle" data-radius="250" fill="url(#imageblock15)" points="451.7,125.4 415.4,129.5 415.4,343.9 451.7,343.9 "/>
		<rect x="374" y="170.4" class="classSVG default" data-connect="18,19" data-clip="clipping16 circle" data-radius="250" id="block16" fill="url(#imageblock16)" width="41.4" height="103.6"/>
		<polygon class="classSVG default" id="block17" data-clip="clipping17 circle" data-radius="80" fill="url(#imageblock17)" points="451.7,125.4 451.7,115.6 372.2,115.6 372.2,129.2 415.4,129.5 "/>
		<polygon class="classSVG default" data-connect="16,19" id="block18" data-clip="clipping18 circle" data-radius="250" fill="url(#imageblock18)" points="372.2,115.6 365.8,123.4 365.8,334.5 372.2,344.8 "/>
		<rect x="372.2" y="170.4" class="classSVG default" data-connect="16,18" id="block19" data-clip="clipping19 circle" data-radius="250" fill="url(#imageblock19)" width="1.8" height="103.6"/>
		<polygon class="classSVG default" id="block20" data-clip="clipping20 circle" data-radius="90" fill="url(#imageblock20)" points="415.4,129.5 372.2,129.2 372.2,170.4 415.4,170.4 "/>
		<rect x="372.2" y="274" class="classSVG default" id="block21" data-clip="clipping21 circle" data-radius="90" fill="url(#imageblock21)" width="43.2" height="69.9"/>

		<polygon class="classSVG" id="floor" fill="url(#floorPattern)" points="25.7,344.8 540,344.8 579.7,364.7 579.7,434.7 -2.3,434.7 -2.3,405 26,389.8 "/>

		<image xlink:href="i/RoomHall.png" width="100%" height="100%"></image>
	</svg>
	</div>
</body>
</html>