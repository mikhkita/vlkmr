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
	<script type="text/javascript" src="js/heartcode-canvasloader-min.js"></script>
	<script type="text/javascript" src="js/constructor.list.js"></script>

	<script type="text/javascript">

		var isIE = false;

		if (!('querySelector' in document)  //скорее всего ie 9+
		     || !('localStorage' in window)  //ie 8+
		     || !('addEventListener' in window)  //ie 8 + (возможно)
		    || !('matchMedia' in window)) {//ie 10+

		    isIE = true;	
		}

		var isRetina = false;
		var isMobile = false;

		
	</script>
</head>
<body>
	<div class="listTextures" style="display: none">
	<ul>
		<li class="currentTexture" id="decor-1" data-id="1" data-image-mini="i/decor-1-mini.jpg" data-retina-image-mini="i/decor-1-mini-retina.jpg" data-src="" data-image="i/decor-1.jpg" data-retina-image="i/decor-1-retina.jpg"></li>
		<li class="currentTexture" id="decor-2" data-id="2" data-image-mini="i/decor-2-mini.jpg" data-retina-image-mini="i/decor-2-mini-retina.jpg" data-src="" data-image="i/decor-2.jpg" data-retina-image="i/decor-2-retina.jpg"></li>
		<li class="currentTexture" id="decor-3" data-id="3" data-image-mini="i/decor-3-mini.jpg" data-retina-image-mini="i/decor-3-mini-retina.jpg" data-src="" data-image="i/decor-3.jpg" data-retina-image="i/decor-3-retina.jpg"></li>

		<!--Полы-->
		<li class="currentTexture" data-id="1" id="Floor-1" data-src="" data-image="i/Floor-1.jpg" data-retina-image="i/Floor-1-retina.jpg"></li>
		<li class="currentTexture" data-id="2" id="Floor-2" data-src="" data-image="i/Floor-2.jpg" data-retina-image="i/Floor-2-retina.jpg"></li>
		<li class="currentTexture" data-id="3" id="Floor-3" data-src="" data-image="i/Floor-3.jpg" data-retina-image="i/Floor-3-retina.jpg"></li>
		<li class="currentTexture" id="FloorKitchen-1" data-id="1" data-src="" data-image="i/FloorKitchen-1.png" data-retina-image="i/FloorKitchen-1-retina.png"></li>
		<li class="currentTexture" id="FloorKitchen-2" data-id="2" data-src="" data-image="i/FloorKitchen-2.png" data-retina-image="i/FloorKitchen-2-retina.png"></li>
		<li class="currentTexture" id="FloorKitchen-3" data-id="3" data-src="" data-image="i/FloorKitchen-3.png" data-retina-image="i/FloorKitchen-3-retina.png"></li>
	</ul>
	</div>
	<ul class="b-workshop-list clearfix">
		<li id="bx_3218110189_258" class="b-workshop" data-hash="1,1,1,3,3,3,3,3,3">	
			<a href="/workshop/gostinaya/">
				<div class="b-workshop-svg gostinaya">
					<div class="preload">
						<div class="cssload-container">
							<div id="circularG">
								<div id="circularG_1" class="circularG"></div>
								<div id="circularG_2" class="circularG"></div>
								<div id="circularG_3" class="circularG"></div>
								<div id="circularG_4" class="circularG"></div>
								<div id="circularG_5" class="circularG"></div>
								<div id="circularG_6" class="circularG"></div>
								<div id="circularG_7" class="circularG"></div>
								<div id="circularG_8" class="circularG"></div>
							</div>
							<img class="IEloader" src="i/preloader.gif" width="50px" height="50px">
						</div>
					</div>

					<div class="contentImage">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 540">
							<defs>
								<pattern id="imageblock1Back1" width="100%" height="100%">
								    <image xlink:href="" rand-min-x="-100" rand-max-x="0" data-rel="1" rand-min-y="-150" rand-max-y="30" xmlns:xlink="http://www.w3.org/1999/xlink" x="-32" y="-50" width="200" height="320" transform="rotate(80, 75, 75)"></image>
								</pattern>
								<pattern id="imageblock2Back1" width="100%" height="100%">
							        <image xlink:href="" rand-min-x="-70" rand-max-x="0" data-rel="1" rand-min-y="-30" rand-max-y="100" xmlns:xlink="http://www.w3.org/1999/xlink" x="-17" y="35" width="200" height="320" transform="scale(-1,1) rotate(100, 75, 75)"></image>
							    </pattern>
							    <pattern id="imageblock3Back1" width="100%" height="100%">
							        <image xlink:href="" rand-min-x="-70" rand-max-x="0" data-rel="1" rand-min-y="-120" rand-max-y="-25" xmlns:xlink="http://www.w3.org/1999/xlink" x="-5" y="-30" width="200" height="320" transform="rotate(80, 75, 75)"></image>
							    </pattern>
							    <pattern id="imageblock4Back1" width="100%" height="100%">
							        <image xlink:href="" rand-min-x="-130" rand-max-x="0" data-rel="0" rand-min-y="-130" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" x="-7" y="-100" width="200" height="320" transform="rotate(94, 75, 75)"></image>
							    </pattern>
							    <pattern id="imageblock5Back1" width="100%" height="100%">
							       <image xlink:href="" rand-min-x="-150" rand-max-x="-20" data-rel="0" rand-min-y="-40" rand-max-y="100" xmlns:xlink="http://www.w3.org/1999/xlink" x="-15" y="0" width="200" height="320" transform="scale(-1,1) rotate(86, 75, 75)"></image>
							    </pattern>
							    <pattern id="imageblock6Back1" width="100%" height="100%">
							        <image xlink:href="" rand-min-x="-140" rand-max-x="0" data-rel="0" rand-min-y="-130" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" x="-3" y="-100" width="200" height="320" transform="rotate(94, 75, 75)"></image>
							    </pattern>
							    <pattern id="imageblock7Back1" width="100%" height="100%">
							        <image xlink:href="" rand-min-x="-90" rand-max-x="0" data-rel="0" rand-min-y="-100" rand-max-y="40" xmlns:xlink="http://www.w3.org/1999/xlink" x="-10" y="-100" width="200" height="320" transform="rotate(98, 75, 75)"></image>
							    </pattern>
							    <pattern id="imageblock8Back1" width="100%" height="100%">
							        <image xlink:href="" rand-min-x="-100" rand-max-x="-30" data-rel="0" rand-min-y="-40" rand-max-y="90" xmlns:xlink="http://www.w3.org/1999/xlink" x="-26.5" y="0" width="200" height="320" transform="scale(-1,1) rotate(82, 75, 75)"></image>
							    </pattern>
							    <pattern id="imageblock9Back1" width="100%" height="100%">
							        <image xlink:href="" rand-min-x="-65" rand-max-x="0" data-rel="0" rand-min-y="-140" rand-max-y="-20" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="-100" width="200" height="320" transform="rotate(98, 75, 75)"></image>
							    </pattern>
							</defs>
							<polygon id="block1Back" fill="url(#imageblock1Back1)" points="267,182.6 352.7,172.9 352,92.4 267,113.9"></polygon>
							<polygon id="block2Back" fill="url(#imageblock2Back1)" points="352.5,170.9 464,156.9 463,65.4 352.5,93.5"></polygon>
							<polygon id="block3Back" fill="url(#imageblock3Back1)" points="615.4,30.6 612.8,30.6 612.8,30.6 463.4,66.4 463.4,155.6 613.4,135.6 613.4,135.6 615.4,135.6"></polygon>
							<polygon id="block4Back" fill="url(#imageblock4Back1)" points="348,300.9 347.8,300.9 347.7,300.9 347.7,301.1 263.7,297.5 263.7,329.2 347.7,337 347.7,337.3   348.7,337.3 348.7,301.4 "></polygon>
							<polygon id="block5Back" fill="url(#imageblock5Back1)" points="458.2,305.8 348.7,300.8 348.5,301 348.5,337.2 458.2,347.7 459.9,347.5 459.9,305.8 "></polygon>
							<polygon id="block6Back" fill="url(#imageblock6Back1)" points="611.3,312.7 609.1,312.7 459.9,306.1 459.9,346.7 460.4,347.2 609.1,361.1 610.8,361.1 611.5,360.6   611.5,313 "></polygon>
							<polygon id="block7Back" fill="url(#imageblock7Back1)" points="347.6,337.5 347.6,337.5 265.2,329.8 263.6,329.9 263.4,330.3 263.2,373.6 263.8,376.6 302,410.8   346.8,420.2 347.5,420.2 347.6,420.2 348.8,420.2 348.8,338.2 "></polygon>
							<path id="block8Back" fill="url(#imageblock8Back1)" d="M459.2,348c-1-0.2-1-0.2-1-0.2l-107.5-9.9c-0.6-0.1-1.3-0.1-1.9,0v82.6l0.2,0.2l108.7,22.7h0.5l0,0h0.5l1-0.2  v-94.6L459.2,348z"></path>
							<polygon id="block9Back" fill="url(#imageblock9Back1)" points="610.1,362 608.8,362 608.6,361.8 461,348 459.8,348 459.6,348.5 459.7,442.9 459.9,443.4 608.9,474.7   609.1,474.7 609.3,474.5 610.3,474.3 611,473.8 611.1,362.5 "></polygon>
							<image xmlns:xlink="http://www.w3.org/1999/xlink" class="roomImage" id="image-test1" xlink:href="" data-image="i/Room2.png" data-retina-image="i/Room2.png" x="0" y="0" width="720" height="540"></image>
						</svg>
					</div>
				</div>
				<div class="b-workshop-title"><h3>Гостиная</h3></div>
				<div class="b-three-color"></div>
			</a>
		</li>
			
		<li id="bx_3218110189_260" class="b-workshop" data-hash="2|2,2,2,2,1,1,3,3,3,3,1,1,2,2,2,2,2,2,2,2,2,2,2,2">
		
		<a href="/workshop/detskaya/">
		<div class="b-workshop-svg detskaya">

		<div class="preload">
			<div class="cssload-container">
					<div id="circularG">
						<div id="circularG_1" class="circularG"></div>
						<div id="circularG_2" class="circularG"></div>
						<div id="circularG_3" class="circularG"></div>
						<div id="circularG_4" class="circularG"></div>
						<div id="circularG_5" class="circularG"></div>
						<div id="circularG_6" class="circularG"></div>
						<div id="circularG_7" class="circularG"></div>
						<div id="circularG_8" class="circularG"></div>
					</div>
				<img class="IEloader" src="i/preloader.gif" width="50px" height="50px">
			</div>
		</div>
		<div class="contentImage">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2401 1565">
			<pattern id="floorPatternBack"  width="100%" height="100%">
		      <image data-floor="true" rand-min-x="-150" rand-max-x="0" rand-min-y="0" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="-50" width="2500" height="580">
		     </image>
		    </pattern>
			<pattern id="imageblock1Back" width="100%" height="100%">
		       <image rand-min-x="-500" rand-max-x="0" rand-min-y="-200" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-200" y="-100" width="1000" height="1600" transform="scale(0.5, 1)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock2Back" width="100%" height="100%">
		       <image rand-min-x="-500" rand-max-x="0" rand-min-y="-200" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="0" width="600" height="960" transform="rotate(98, 300, 300)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock3Back" width="100%" height="100%">
		       <image rand-min-x="-500" rand-max-x="0" rand-min-y="-200" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="0" width="600" height="960" transform="rotate(82, 300, 300)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock4Back" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="-400" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-30" y="-100" width="500" height="800" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock5Back" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="-400" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-100" y="-50" width="500" height="800" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock6Back" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="-400" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-120" y="-300" width="500" height="800" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock7Back" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="-400" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-150" y="-50" width="500" height="800" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock8Back" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="-400" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-200" y="-350" width="500" height="800" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock9Back" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="-400" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-140" y="-150" width="500" height="800" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock10Back" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="-400" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-50" y="-222" width="500" height="800" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock11Back" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="-400" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-80" y="-120" width="500" height="800" >
		     	</image>
		    </pattern>
		     <pattern id="imageblock12Back" width="100%" height="100%">
		       <image rand-min-x="-120" rand-max-x="0" rand-min-y="-200" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="0" width="300" height="480" transform="rotate(82, 100, 100)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock13Back" width="100%" height="100%">
		       <image rand-min-x="-120" rand-max-x="0" rand-min-y="-200" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="0" width="300" height="480" transform="rotate(82, 100, 100)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock14Back" width="100%" height="100%">
		       <image rand-min-x="-120" rand-max-x="0" rand-min-y="-200" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="-100" width="300" height="480" transform="rotate(82, 100, 100)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock15Back" width="100%" height="100%">
		       <image rand-min-x="-120" rand-max-x="0" rand-min-y="-200" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="-50" width="300" height="480" transform="rotate(82, 100, 100)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock16Back" width="100%" height="100%">
		       <image rand-min-x="-120" rand-max-x="0" rand-min-y="-200" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="0" width="300" height="480" transform="rotate(82, 100, 100)">
		     	</image>
		    </pattern>

		    <pattern id="imageblock17Back" width="100%" height="100%">
		       <image rand-min-x="-300" rand-max-x="0" rand-min-y="-400" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="0" width="500" height="800" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock18Back" width="100%" height="100%">
		       <image rand-min-x="-150" rand-max-x="0" rand-min-y="-250" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="0" width="600" height="960" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock19Back" width="100%" height="100%">
		       <image rand-min-x="-300" rand-max-x="-20" rand-min-y="-300" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-50" y="0" width="500" height="800" transform="rotate(84, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock20Back" width="100%" height="100%">
		       <image rand-min-x="-500" rand-max-x="0" rand-min-y="-200" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="0" width="800" height="1280" transform="rotate(95, 400, 400)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock21Back" width="100%" height="100%">
		       <image rand-min-x="-150" rand-max-x="0" rand-min-y="0" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="0" width="500" height="800" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock22Back" width="100%" height="100%">
		       <image rand-min-x="-150" rand-max-x="0" rand-min-y="0" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="0" width="500" height="800" >
		     	</image>
		    </pattern>
		    <pattern id="imageblock23Back" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="-150" rand-max-y="-150"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="-150" width="500" height="800" transform="rotate(98, 300, 300)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock24Back" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="-150" rand-max-y="-150"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="-150" width="500" height="800" transform="rotate(100, 300, 300)">
		     	</image>
		    </pattern>
		 

		<polygon class="classSVGback" id="block1Back" fill="url(#imageblock1Back)" points="116.3,174.7 239,128.3 241.9,1460.2 127,1406.8 "/>
		<polygon class="classSVGback" id="block2Back" fill="url(#imageblock2Back)" points="239,128.3 722.7,191 722.7,212 239,153.7 "/>
		<polygon class="classSVGback" id="block3Back" fill="url(#imageblock3Back)" points="241.9,1460.2 718.7,1380.3 720.8,1351.1 248,1425.8 241.9,1422.5 "/>
		<polygon class="classSVGback" id="block4Back" fill="url(#imageblock4Back)" points="239,153.7 490.3,184 491.5,485.5 239.8,472.2 "/>
		<polygon class="classSVGback" id="block5Back" fill="url(#imageblock5Back)" points="490.3,184 715.5,212 716.2,496.5 491.5,485.5 "/>
		<polygon class="classSVGback" id="block6Back" fill="url(#imageblock6Back)" points="239.8,472.2 491.5,485.5 493.8,787 241.9,791.8 "/>
		<polygon class="classSVGback" id="block7Back" fill="url(#imageblock7Back)" points="491.5,485.5 716.2,496.5 717.7,782.5 493.8,787 "/>
		<polygon class="classSVGback" id="block8Back" fill="url(#imageblock8Back)" points="241.9,791.8 493.8,787 495.3,1088 241.9,1110.7 "/>
		<polygon class="classSVGback" id="block9Back" fill="url(#imageblock9Back)" points="493.8,787 717.7,782.5 719.7,1068.3 495.3,1088 "/>
		<polygon class="classSVGback" id="block10Back" fill="url(#imageblock10Back)" points="241.9,1110.7 495.3,1088 497.5,1386.4 248,1425.8 244.5,1423.9 "/>
		<polygon class="classSVGback" id="block11Back" fill="url(#imageblock11Back)" points="495.3,1088 719.7,1068.3 720.8,1351.1 497.5,1385.5 "/>

		<polygon class="classSVGback" id="block12Back" fill="url(#imageblock12Back)" points="719.5,1041.7 788.2,1036.1 891,1050.4 891,1068.3 887.3,1069.3 719.7,1082.6 "/>
		<polygon class="classSVGback" id="block13Back" fill="url(#imageblock13Back)" points="719.7,1081.3 887.3,1066.5 887.3,1140 720,1159.3 "/>
		<polygon class="classSVGback" id="block14Back" fill="url(#imageblock14Back)" points="887.3,1140 889.2,1213.5 720.4,1235.8 720,1159.3 "/>
		<polygon class="classSVGback" id="block15Back" fill="url(#imageblock15Back)" points="889.2,1213.5 889.2,1287.3 720.7,1313.8 720.4,1235.8 "/>
		<polygon class="classSVGback" id="block16Back" fill="url(#imageblock16Back)" points="722.1,1329.1 720.7,1313.8 889.2,1287.3 892,1286.8 891.6,1296 891.7,1301.9 "/>

		<polygon class="classSVGback" id="block17Back" fill="url(#imageblock17Back)" points="1237.1,1028.2 1109.8,1014.2 1096.2,1015.6 1096.2,1245 1225.1,1271.4 1232.7,1271.4 1231.6,1029.1 "/>
		<polygon class="classSVGback" id="block18Back" fill="url(#imageblock18Back)" points="1399,323.3 1100.7,288.7 1095,290.7 1094.5,961.9 1101.9,961.9 1399.3,943 "/>
		<polygon class="classSVGback" id="block19Back" fill="url(#imageblock19Back)" points="2251.1,911.6 1960.6,933.7 1959,1047 1973,1047 2266.7,1013.3 2266.7,913.7 "/>
		<path class="classSVGback" id="block20Back" fill="url(#imageblock20Back)" d="M1534.2,922.2V883c0,0,109.8-127,320.8-125s411.7,155.7,411.7,155.7l-15.6-2l-290.4,22L1534.2,922.2z"/>
		<polygon class="classSVGback" id="block21Back" fill="url(#imageblock21Back)" points="1260.5,1034 1260.5,1165.7 1271.7,1167.8 1271.7,1172 1267.5,1172.4 1267.3,1271.4 1248.1,1271.4 
			1248.1,1034 "/>
		<polygon class="classSVGback" id="block22Back" fill="url(#imageblock22Back)" points="1942.8,1103.7 1942.8,1271 1943.5,1400.9 1963.1,1402.1 1960.2,1103.7 "/>
		<polygon class="classSVGback" id="block23Back" fill="url(#imageblock23Back)" points="1260.5,1034 1942.8,1103.7 1942.8,1271 1271.7,1167.8 1260.5,1165.7 "/>
		<polygon class="classSVGback" id="block24Back" fill="url(#imageblock24Back)" points="1271.7,1172 1942.8,1272.3 1942.8,1418.3 1265.8,1285.5 1267.5,1172.4 "/>
		<polygon class="classSVGback" id="floorBack" fill="url(#floorPatternBack)" points="-6.3,1428.2 130.7,1408.6 241.9,1460.2 718.7,1380.3 722.1,1329.1 891.7,1301.9 891.6,1296 945,1287.4   986.5,1210.4 957,1139.4 1079.5,1140 1055.5,1205.4 1086,1264.9 1106,1261.7 1973,1434 2260,1361 2406,1402.1 2406,1574 -8,1574 "/>

		<image xmlns:xlink="http://www.w3.org/1999/xlink" class="roomImage" id="image-test2" xlink:href="" data-image="i/RoomChild.png" data-retina-image="i/RoomChild.png" x="0" y="0" width="2401" height="1565"></image>
		</svg>
		</div>
		</div>
		</a>
			<div class="b-workshop-title"><h3>Детская</h3></div>
			<div class="b-three-color"></div>
	</li>

	<li id="bx_3218110189_259" class="b-workshop" data-hash="1,1,1,1,2,2,2,2">
		
		<a href="/workshop/stenka/">
		<div class="b-workshop-svg stenka">
		<div class="preload">
				<div class="cssload-container">
					<div id="circularG">
						<div id="circularG_1" class="circularG"></div>
						<div id="circularG_2" class="circularG"></div>
						<div id="circularG_3" class="circularG"></div>
						<div id="circularG_4" class="circularG"></div>
						<div id="circularG_5" class="circularG"></div>
						<div id="circularG_6" class="circularG"></div>
						<div id="circularG_7" class="circularG"></div>
						<div id="circularG_8" class="circularG"></div>
					</div>
					<img class="IEloader" src="i/preloader.gif" width="50px" height="50px">
				</div>
		</div>
		<div class="contentImage">
		
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 410">
	<defs>
		<pattern id="imageblock1Back2" width="100%" height="100%">
		    <image rand-min-x="-80" rand-max-x="-10" data-rel="0" rand-min-y="-20" rand-max-y="90" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-32" y="0" width="180" height="288" transform="rotate(86.5, 75, 75)">
		    </image>
		</pattern>
		<pattern id="imageblock2Back2" width="100%" height="100%">
	        <image rand-min-x="-70" rand-max-x="-10" data-rel="0" rand-min-y="-20" rand-max-y="40" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-26" y="0" width="180" height="288" transform="rotate(86.5, 75, 75)">
	     	</image>
	    </pattern>
	    <pattern id="imageblock3Back2" width="100%" height="100%">
	        <image rand-min-x="-60" rand-max-x="-10" data-rel="0" rand-min-y="-20" rand-max-y="20" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="0" width="180" height="288" transform="rotate(86, 75, 75)">
	     	</image>
	    </pattern>
	    <pattern id="imageblock4Back2" width="100%" height="100%">
	        <image rand-min-x="-60" rand-max-x="-10" data-rel="0" rand-min-y="-20" rand-max-y="60" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-21.5" y="-50" width="180" height="288" transform="rotate(86, 75, 75)">
	     	</image>
	    </pattern>
	    <pattern id="imageblock5Back2" width="100%" height="100%">
	       <image rand-min-x="-110" rand-max-x="0" data-rel="0" rand-min-y="-100" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-50" y="-30" width="180" height="288" transform="rotate(92.5, 75, 75)">
	     	</image>
	    </pattern>
	    <pattern id="imageblock6Back2" width="100%" height="100%">
	        <image rand-min-x="-110" rand-max-x="0" data-rel="0" rand-min-y="-120" rand-max-y="-50" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-45" y="-70" width="180" height="288" transform="rotate(92.5, 75, 75)">
	     	</image>
	    </pattern>
	    <pattern id="imageblock7Back2" width="100%" height="100%">
	        <image rand-min-x="-110" rand-max-x="-10" data-rel="0" rand-min-y="-100" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-10" y="-50" width="180" height="288" transform="rotate(94.5, 75, 75)">
	     	</image>
	    </pattern>
	    <pattern id="imageblock8Back2" width="100%" height="100%">
	        <image rand-min-x="-110" rand-max-x="-10" data-rel="0" rand-min-y="-120" rand-max-y="-60" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-5" y="-70" width="180" height="288" transform="rotate(94, 75, 75)">
	     	</image>
	    </pattern>
	</defs>
	<polygon class="classSVGback" id="block1Back" fill="url(#imageblock1Back2)" points="209.6,155.5 163.4,157.1 163.4,74.8 209.6,70.4 "></polygon>
	<polygon class="classSVGback" id="block2Back" fill="url(#imageblock2Back2)" points="306.1,152.1 209.6,155.3 209.6,70.5 306.1,61.4 "></polygon>
	<polygon class="classSVGback" id="block3Back" fill="url(#imageblock3Back2)" points="493.6,44.2 493.6,145.4 373,149.5 372.7,55.2 "></polygon>
	<polygon class="classSVGback" id="block4Back" fill="url(#imageblock4Back2)" points="493.6,44.2 493.6,145.4 563.8,143 563.8,37.2 "></polygon>
	<polygon class="classSVGback" id="block5Back" fill="url(#imageblock5Back2)" points="145.4,243.7 290.8,247.4 290.8,293.9 145.3,285.5 "></polygon>
	<polygon class="classSVGback" id="block6Back" fill="url(#imageblock6Back2)" points="361.1,249.2 558.3,254.6 558.3,309.2 361.1,297.9 "></polygon>
	<polygon class="classSVGback" id="block7Back" fill="url(#imageblock7Back2)" points="290.8,293.9 145.3,285.5 145.3,328.1 290.8,340.9 "></polygon>
	<polygon class="classSVGback" id="block8Back" fill="url(#imageblock8Back2)" points="361.1,297.9 558.3,309.2 558.4,365 361,347.2 "></polygon>

	<image xmlns:xlink="http://www.w3.org/1999/xlink" class="roomImage" id="image-test3" xlink:href="" data-image="i/RoomWall.png" data-retina-image="i/RoomWall.png" x="0" y="0" width="720" height="410"></image>
	</svg>
	</div>
	</div>
	</a>
		<div class="b-workshop-title"><h3>Стенка</h3></div>
		<div class="b-three-color"></div>
	</li>

	<li id="bx_3218110189_261" class="b-workshop" data-hash="1|1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,3,3,3,3,3,3,3,3,3,3">

			<a href="">
			<div class="b-workshop-svg kitchen" style="height: 210px">
			<div class="preload">
				<div class="cssload-container">
					<div id="circularG">
						<div id="circularG_1" class="circularG"></div>
						<div id="circularG_2" class="circularG"></div>
						<div id="circularG_3" class="circularG"></div>
						<div id="circularG_4" class="circularG"></div>
						<div id="circularG_5" class="circularG"></div>
						<div id="circularG_6" class="circularG"></div>
						<div id="circularG_7" class="circularG"></div>
						<div id="circularG_8" class="circularG"></div>
					</div>
					<img class="IEloader" src="i/preloader.gif" width="50px" height="50px">
				</div>

			</div>
			<div class="contentImage">
			
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3269 1895" data-kitchen="true">
		<defs>
		<!--<pattern data-floor="true" id="floorPatternBack" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/FloorKitchen-1.png" x="0" y="0" width="3269" height="618">
		     	</image>
		    </pattern>-->
			<pattern id="imageblock1Back3" width="100%" height="100%">
			    <image rand-min-x="-100" rand-max-x="0" rand-min-y="-300" rand-max-y="70" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-50" y="-50" width="500" height="800" transform="rotate(89, 200, 200)">
			    </image>
			</pattern>
			<pattern id="imageblock2Back3" width="100%" height="100%">
		       	<image rand-min-x="-150" rand-max-x="0" rand-min-y="-350" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-55" y="0" width="500" height="800">
		     	</image>
		    </pattern>
		    <pattern id="imageblock3Back3" width="100%" height="100%">
		        <image rand-min-x="-60" rand-max-x="0" rand-min-y="-70" rand-max-y="350"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-55" y="200" width="500" height="800" transform="scale(-1, 1) rotate(92.5, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock4Back3" width="100%" height="100%">
			    <image rand-min-x="-150" rand-max-x="0" rand-min-y="-350" rand-max-y="0"   xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-65" y="-50" width="500" height="800">
			    </image>
			</pattern>
			<pattern id="imageblock5Back3" width="100%" height="100%">
		        <image rand-min-x="-250" rand-max-x="0" rand-min-y="-300" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="0" width="500" height="800">
		     	</image>
		    </pattern>
		    <pattern id="imageblock6Back3" width="100%" height="100%">
		        <image rand-min-x="-200" rand-max-x="0" rand-min-y="70" rand-max-y="250"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-35" y="300" width="500" height="800" transform="scale(-1, 1) rotate(92, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock7Back3" width="100%" height="100%">
			    <image rand-min-x="-200" rand-max-x="0" rand-min-y="80" rand-max-y="250"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-220" y="300" width="500" height="800" transform="scale(-1, 1) rotate(93, 200, 200)">
			    </image>
			</pattern>
			<pattern id="imageblock8Back3" width="100%" height="100%">
		        <image rand-min-x="-250" rand-max-x="0" rand-min-y="-300" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="0" width="500" height="800">
		     	</image>
		    </pattern>
		    <pattern id="imageblock9Back3" width="100%" height="100%">
		       <image rand-min-x="-400" rand-max-x="0" rand-min-y="-50" rand-max-y="100"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-100" y="-30" width="500" height="800" transform="rotate(88, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock10Back3" width="100%" height="100%">
			    <image rand-min-x="-200" rand-max-x="0" rand-min-y="-250" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-100" y="-50" width="500" height="800">
			    </image>
			</pattern>
			
		    <pattern id="imageblock11Back3" width="100%" height="100%">
		        <image rand-min-x="-200" rand-max-x="0" rand-min-y="-250" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-5" y="-100" width="500" height="800">
		     	</image>
		    </pattern>
		    <pattern id="imageblock12Back3" width="100%" height="100%">
			    <image rand-min-x="-200" rand-max-x="0" rand-min-y="-200" rand-max-y="150"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-100" y="-50" width="500" height="800" transform="rotate(105, 200, 200)">
			    </image>
			</pattern>
			<pattern id="imageblock13Back3" width="100%" height="100%">
		        <image rand-min-x="-200" rand-max-x="0" rand-min-y="-200" rand-max-y="100"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-100" y="35" width="500" height="800" transform="rotate(105, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock14Back3" width="100%" height="100%">
		        <image rand-min-x="-60" rand-max-x="0" rand-min-y="-200" rand-max-y="100"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="-30" width="500" height="800" transform="rotate(85, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock15Back3" width="100%" height="100%">
		        <image rand-min-x="-300" rand-max-x="-250" rand-min-y="-200" rand-max-y="150"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="0" width="1000" height="1600" transform="rotate(91, 500, 500)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock16Back3" width="100%" height="100%">
		        <image rand-min-x="-180" rand-max-x="40" rand-min-y="-200" rand-max-y="150"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-100" y="35" width="500" height="800" transform="rotate(103, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock17Back3" width="100%" height="100%">
		        <image rand-min-x="-200" rand-max-x="0" rand-min-y="-200" rand-max-y="100"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-5" y="0" width="500" height="800" transform="rotate(103, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock18Back3" width="100%" height="100%">
		        <image rand-min-x="-60" rand-max-x="0" rand-min-y="-70" rand-max-y="350"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-55" y="200" width="500" height="800" transform="scale(-1, 1) rotate(92.5, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock19Back3" width="100%" height="100%">
		       <image rand-min-x="-60" rand-max-x="0" rand-min-y="-70" rand-max-y="350"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-55" y="200" width="500" height="800" transform="scale(-1, 1) rotate(92.5, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock20Back3" width="100%" height="100%">
		         <image rand-min-x="-250" rand-max-x="0" rand-min-y="-300" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="0" width="500" height="800">
		     	</image>
		    </pattern>
		    <pattern id="imageblock21Back3" width="100%" height="100%">
		       <image rand-min-x="-200" rand-max-x="0" rand-min-y="70" rand-max-y="250"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-35" y="300" width="500" height="800" transform="scale(-1, 1) rotate(92, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock22Back3" width="100%" height="100%">
		        <image rand-min-x="-200" rand-max-x="0" rand-min-y="70" rand-max-y="250"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-35" y="300" width="500" height="800" transform="scale(-1, 1) rotate(92, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock23Back3" width="100%" height="100%">
		        <image rand-min-x="-250" rand-max-x="0" rand-min-y="-300" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="0" width="500" height="800">
		     	</image>
		    </pattern>
		    <pattern id="imageblock24Back3" width="100%" height="100%">
		        <image rand-min-x="-400" rand-max-x="0" rand-min-y="-50" rand-max-y="100"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-100" y="-30" width="500" height="800" transform="rotate(88, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock25Back3" width="100%" height="100%">
		       <image rand-min-x="-100" rand-max-x="0" rand-min-y="0" rand-max-y="200"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-100" y="-50" width="500" height="800" transform="rotate(87.5, 200, 200)">
			    </image>
		    </pattern>
		    <pattern id="imageblock26Back3" width="100%" height="100%">
		       <image rand-min-x="-80" rand-max-x="30" rand-min-y="-200" rand-max-y="200"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-5" y="-100" width="500" height="800" transform="rotate(103, 200, 200)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock27Back3" width="100%" height="100%">
		         <image rand-min-x="-200" rand-max-x="0" rand-min-y="-200" rand-max-y="150"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-100" y="-50" width="500" height="800" transform="rotate(105, 200, 200)">
			    </image>
		    </pattern>
		     <pattern id="imageblock28Back3" width="100%" height="100%">
		         <image rand-min-x="-200" rand-max-x="0" rand-min-y="-200" rand-max-y="150"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-100" y="-50" width="500" height="800" transform="rotate(105, 200, 200)">
			    </image>
		    </pattern>
		    <pattern id="imageblock29Back3" width="100%" height="100%">
		    	 <image rand-min-x="-60" rand-max-x="0" rand-min-y="-200" rand-max-y="100"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="-30" width="500" height="800" transform="rotate(85, 200, 200)">
		     	</image>
		    </pattern>

		 </defs>
		<polygon class="classSVGback" id="block1Back" fill="url(#imageblock1Back3)" points="134,678 442,684 442,1059.4 134,1065.7 "/>
		<polygon class="classSVGback" id="block2Back" fill="url(#imageblock2Back3)" points="442,684 730.7,688 730.3,1052.3 442,1058.6 "/>
		<polygon class="classSVGback" id="block3Back" fill="url(#imageblock3Back3)" points="730.3,1052.3 731.7,1451.7 444,1470 442,1058.6 "/>
		<polygon class="classSVGback" id="block4Back" fill="url(#imageblock4Back3)" points="134,1065.7 442,1059.4 444,1470 137.7,1489.3 "/>
		<polygon class="classSVGback" id="block5Back" fill="url(#imageblock5Back3)" points="761.3,1048 925,1044.7 925,1437.3 761.3,1448.7 "/>
		<polygon class="classSVGback" id="block6Back" fill="url(#imageblock6Back3)" points="925,1044.7 1386.3,1034.3 1384.5,1221.4 925,1241.4 "/>
		<polygon class="classSVGback" id="block7Back" fill="url(#imageblock7Back3)" points="1384.5,1221.4 1383.5,1409 925,1437.3 925,1241.4 "/>
		<polygon class="classSVGback" id="block8Back" fill="url(#imageblock8Back3)" points="1386.3,1034.3 1530.5,1030.7 1528,1398 1383.5,1407.1 "/>
		<polygon class="classSVGback" id="block9Back" fill="url(#imageblock9Back3)"  points="1530.5,1030.7 1804.5,1022.5 1803.4,1058.8 1530.3,1065.2 "/>
		<polygon class="classSVGback" id="block10Back" fill="url(#imageblock10Back3)" points="1804.5,1022.5 1965.4,1017.4 1960.5,1367.2 1797.3,1378.7 "/>
		<polygon class="classSVGback" id="block11Back" fill="url(#imageblock11Back3)" points="1965.4,1017.4 2090.5,1036.5 2084.5,1405 1960.5,1367.2 "/>
		<polygon class="classSVGback" id="block12Back" fill="url(#imageblock12Back3)" points="2090.5,1036.5 2357.5,1077 2357.5,1285.1 2087.5,1220.3 "/>
		<polygon class="classSVGback" id="block13Back" fill="url(#imageblock13Back3)" points="2087.5,1220.3 2357.5,1285.1 2357.5,1491 2084.5,1405 "/>
		
		<polygon class="classSVGback" id="block14Back" fill="url(#imageblock14Back3)" points="2357.5,1075.7 2640.5,1059 2635,1468.5 2357.5,1497.2 "/>
		<polygon class="classSVGback" id="block15Back" fill="url(#imageblock15Back3)" points="1293.7,344 2212,388 2212,995 1288,984 "/>

		<!--Отражение-->
		<polygon class="classSVGback" id="block16Back" fill="url(#imageblock16Back3)" points="1675.2,1104.9 1670.8,1267 1798.6,1313.5 1801.7,1147.6 "/>
		<polygon class="classSVGback" id="block17Back" fill="url(#imageblock17Back3)" points="1675.2,1104.9 1675.2,1061.8 1801.7,1058.8 1801.7,1147.6 "/>


		<polygon class="classSVGBack" id="block18Back" fill="url(#imageblock18Back3)" points="448.8,1895 134,1895 134,1590.9 444,1570.9 "/>
		<polygon class="classSVGBack" id="block19Back" fill="url(#imageblock19Back3)" points="740.3,1550.6 740.3,1895 448.8,1895 444,1570.9 "/>
		<polygon class="classSVGBack" id="block20Back" fill="url(#imageblock20Back3)" points="925,1541.9 925,1895 755,1895 755,1554.6 "/>
		<polygon class="classSVGBack" id="block21Back" fill="url(#imageblock21Back3)" points="925,1541.9 925,1747.9 1383.5,1697.9 1383.5,1497.9 "/>
		<polygon class="classSVGBack" id="block22Back" fill="url(#imageblock22Back3)" points="1383.5,1697.9 1383.5,1890.2 1333.3,1895 925,1895 925,1747.9 "/>
		<polygon class="classSVGBack" id="block23Back" fill="url(#imageblock23Back3)" points="1383.5,1497.9 1529.6,1491 1526,1876.9 1383.5,1890.2 "/>
		<polygon class="classSVGBack" id="block24Back" fill="url(#imageblock24Back3)" points="1526,1876.9 1526,1790.9 1796.2,1755.9 1796.2,1842.9 "/>
		<polygon class="classSVGBack" id="block25Back" fill="url(#imageblock25Back3)" points="1796.2,1835.9 1796.2,1469.4 1969.5,1447.4 1956,1813.9 "/>
		<polygon class="classSVGBack" id="block26Back" fill="url(#imageblock26Back3)" points="2084.5,1485.8 2084.5,1882.5 1956,1813.9 1969.5,1447.4 "/>
		<polygon class="classSVGBack" id="block27Back" fill="url(#imageblock27Back3)" points="2379.7,1584.6 2379.7,1803.2 2084.5,1676.3 2084.5,1485.8"/>
		<polygon class="classSVGBack" id="block28Back" fill="url(#imageblock28Back3)" points="2379.7,1803.2 2379.7,1895 2108,1895 2084.5,1882.5 2084.5,1676.3 "/>
		<polygon class="classSVGBack" id="block29Back" fill="url(#imageblock29Back3)" points="2639,1566.9 2623.3,1895 2379.7,1895 2379.7,1584.6 "/>

		<image xmlns:xlink="http://www.w3.org/1999/xlink" id="FloorKitchenImage" xlink:href="" x="0" y="0" width="3269" height="1895"></image>
		<image xmlns:xlink="http://www.w3.org/1999/xlink" class="roomImage" id="image-test4" xlink:href="" data-image="i/RoomKitchen.png" data-retina-image="i/RoomKitchen.png" x="0" y="0" width="3269" height="1895"></image>
		</svg>
		</div>
		</div>
		</a>
			<div class="b-workshop-title"><h3>Кухня</h3></div>
			<div class="b-three-color"></div>
		</li>

		<li id="bx_3218110189_262" class="b-workshop" data-hash="3|1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2">
			
			<a href="">
			<div class="b-workshop-svg hall" style="height: 260px">
			<div class="preload">
				<div class="cssload-container">
					<div id="circularG">
						<div id="circularG_1" class="circularG"></div>
						<div id="circularG_2" class="circularG"></div>
						<div id="circularG_3" class="circularG"></div>
						<div id="circularG_4" class="circularG"></div>
						<div id="circularG_5" class="circularG"></div>
						<div id="circularG_6" class="circularG"></div>
						<div id="circularG_7" class="circularG"></div>
						<div id="circularG_8" class="circularG"></div>
					</div>
					<img class="IEloader" src="i/preloader.gif" width="50px" height="50px">
				</div>

			</div>
			<div class="contentImage">
			
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 432">
		<defs>
			<pattern id="floorPatternBack4" width="100%" height="100%">
		        <image data-floor="true" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/Floor-2.jpg" x="-10" y="0" width="600" height="120">
		     	</image>
		    </pattern>
			<pattern id="imageblock1Back4" width="100%" height="100%">
			    <image rand-min-x="0" rand-max-x="-50" rand-min-y="-70" rand-max-y="-40" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="-40" width="100" height="160" transform="rotate(90, 25, 25)">
			    </image>
			</pattern>
			<pattern id="imageblock2Back4" width="100%" height="100%">
		       <image rand-min-x="-150" rand-max-x="0" rand-min-y="0" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-20" y="0" width="200" height="320" transform="scale(0.2, 1)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock3Back4" width="100%" height="100%">
		        <image rand-min-x="-150" rand-max-x="0" rand-min-y="0" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-5" y="0" width="200" height="320">
		     	</image>
		    </pattern>
		    <pattern id="imageblock4Back4" width="100%" height="100%">
			    <image rand-min-x="-40" rand-max-x="0" rand-min-y="-40" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="0" width="120" height="192">
			    </image>
			</pattern>
			<pattern id="imageblock5Back4" width="100%" height="100%">
		        <image rand-min-x="-40" rand-max-x="0" rand-min-y="-80" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="0" y="0" width="100" height="160">
		     	</image>
		    </pattern>
		    <pattern id="imageblock6Back4" width="100%" height="100%">
		        <image rand-min-x="-40" rand-max-x="0" rand-min-y="-80" rand-max-y="0"  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-5" y="-30" width="100" height="160">
		     	</image>
		    </pattern>
		    <pattern id="imageblock7Back4" width="100%" height="100%">
		        <image rand-min-x="-40" rand-max-x="0" rand-min-y="-80" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-5" y="-30" width="200" height="320">
		     	</image>
		    </pattern>

		    <pattern id="imageblock8Back4" width="100%" height="100%">
		        <image rand-min-x="-150" rand-max-x="0" rand-min-y="-50" rand-max-y="50" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-7" y="0" width="200" height="320" transform="rotate(90, 125, 125)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock9Back4" width="100%" height="100%">
		        <image rand-min-x="-70" rand-max-x="0" rand-min-y="0" rand-max-y="20" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-15" y="0" width="100" height="160" transform="rotate(90, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock10Back4" width="100%" height="100%">
		        <image rand-min-x="-50" rand-max-x="0" rand-min-y="0" rand-max-y="100" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-3" y="0" width="100" height="160" transform="rotate(90, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock11Back4" width="100%" height="100%">
		        <image rand-min-x="-50" rand-max-x="0" rand-min-y="0" rand-max-y="100" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-7" y="0" width="100" height="160" transform="rotate(90, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock12Back4" width="100%" height="100%">
		        <image rand-min-x="-100" rand-max-x="0" rand-min-y="-50" rand-max-y="40" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-15" y="0" width="200" height="320" transform="rotate(90, 125, 125)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock13Back4" width="100%" height="100%">
		        <image rand-min-x="-100" rand-max-x="0" rand-min-y="-50" rand-max-y="40" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-3" y="0" width="200" height="320" transform="rotate(90, 125, 125)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock14Back4" width="100%" height="100%">
		        <image rand-min-x="-120" rand-max-x="0" rand-min-y="-50" rand-max-y="50" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-3" y="0" width="200" height="320" transform="rotate(90, 125, 125)">
		     	</image>
		    </pattern>

		    <pattern id="imageblock15Back4" width="100%" height="100%">
		        <image rand-min-x="-100" rand-max-x="0" rand-min-y="-100" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-10" y="0" width="200" height="320">
		     	</image>
		    </pattern>
		    <pattern id="imageblock16Back4" width="100%" height="100%">
		        <image rand-min-x="-50" rand-max-x="0" rand-min-y="-50" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-26.5" y="0" width="100" height="160">
		     	</image>
		    </pattern>
		    <pattern id="imageblock17Back4" width="100%" height="100%">
		        <image rand-min-x="-80" rand-max-x="0" rand-min-y="0" rand-max-y="50" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-10" y="0" width="100" height="160" transform="rotate(90, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock18Back4" width="100%" height="100%">
		        <image rand-min-x="-100" rand-max-x="0" rand-min-y="-70" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-10" y="0" width="200" height="320" transform="scale(0.2, 1)">
		     	</image>
		    </pattern>
		    <pattern id="imageblock19Back4" width="100%" height="100%">
		        <image rand-min-x="0" rand-max-x="0" rand-min-y="0" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-26.5" y="0" width="100" height="160">
		     	</image>
		    </pattern>
		    <pattern id="imageblock20Back4" width="100%" height="100%">
		        <image rand-min-x="-50" rand-max-x="0" rand-min-y="-100" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-10" y="-100" width="100" height="160">
		     	</image>
		    </pattern>
		    <pattern id="imageblock21Back4" width="100%" height="100%">
		        <image rand-min-x="-50" rand-max-x="0" rand-min-y="-80" rand-max-y="0" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="" x="-10" y="0" width="100" height="160">
		     	</image>
		    </pattern>
		 </defs>

		 <polygon class="classSVGback" id="block1Back" fill="url(#imageblock1Back4)" points="65.3,85.2 93,89.3 145,89.3 145,74.4 65.3,74.4 "/>
		<polygon class="classSVGback" id="block2Back" fill="url(#imageblock2Back4)" points="145,344.8 154,335.7 154,296.1 155,296 155.1,295.3 155.2,85.6 145,75.2 "/>
		<polygon class="classSVGback" id="block3Back" fill="url(#imageblock3Back4)" points="65.5,85.2 93,89.3 93,89.3 93,344.8 65.5,344.8 "/>
		<rect x="93" y="130.6" class="classSVGback" id="block4Back" fill="url(#imageblock4Back4)" width="50.5" height="143.4"/>
		<rect x="93" y="89.3" class="classSVGback" id="block5Back" fill="url(#imageblock5Back4)" width="52" height="41.3"/>
		<rect x="93" y="274" class="classSVGback" id="block6Back" fill="url(#imageblock6Back4)" width="52" height="70.8"/>
		<rect x="143.5" y="130.6" class="classSVGback" id="block7Back" fill="url(#imageblock7Back4)" width="1.5" height="143.4"/>

		<rect x="162.7" y="148" class="classSVGback" id="block8Back" fill="url(#imageblock8Back4)"  width="190.3" height="33.7"/>
		<rect x="193.8" y="320.6" class="classSVGback" id="block9Back" fill="url(#imageblock9Back4)"  width="125.5" height="23.3"/>
		<path class="classSVGback" id="block10Back" fill="url(#imageblock10Back4)"  d="M319.3,308.7c0.2,0,40-5.8,40-5.8v41h-40V308.7z"/>
		<path class="classSVGback" id="block11Back" fill="url(#imageblock11Back4)" d="M193.8,308.7c-0.2,0-40-5.8-40-5.8v41h40V308.7z"/>
		<polygon class="classSVGback" id="block12Back" fill="url(#imageblock12Back4)" points="359.3,296.2 154,296.1 155,296 155.1,295.3 163.5,290.2 354.2,290.2 "/>
		<polygon class="classSVGback" id="block13Back" fill="url(#imageblock13Back4)" points="359.3,296.2 359.3,302.9 319.3,308.7 193.8,308.7 154,302.9 154,296.1 "/>
		<polygon class="classSVGback" id="block14Back" fill="url(#imageblock14Back4)" points="352.1,233.8 161.3,233.8 155.6,235.3 155.6,240.2 356.6,240.2 356.6,235.3 "/>

		<polygon class="classSVGback" id="block15Back" fill="url(#imageblock15Back4)" points="451.7,125.4 415.6,129.5 415.4,343.9 451.7,343.9 "/>
		<!--<rect x="374" y="170.4" class="classSVGback" id="block16Back" fill="url(#imageblock16Back)" width="41.4" height="103.6"/>-->
		<polygon class="classSVGback" id="block16Back" fill="url(#imageblock16Back4)" points="374.2,170.8 415.7,170.8 415.5,274.2 374,274.3 "/>
		<polygon class="classSVGback" id="block17Back" fill="url(#imageblock17Back4)" points="451.7,125.4 451.7,115.6 372.2,115.6 372.2,129.5 415.6,129.5 "/>
		<polygon class="classSVGback" id="block18Back" fill="url(#imageblock18Back4)" points="372.2,115.6 365.8,123.4 365.8,334.5 372.2,344.8 "/>
		<rect x="372.2" y="170.6" class="classSVGback" id="block19Back" fill="url(#imageblock19Back)" width="1.8" height="103.7"/>
		<polygon class="classSVGback" id="block20Back" fill="url(#imageblock20Back4)" points="415.4,129.5 372.2,129.2 372.2,170.4 415.4,170.4 "/>
		<!--<rect x="372.2" y="274" class="classSVGback" id="block21Back" fill="url(#imageblock21Back)" width="43.2" height="69.9"/>-->
		<polygon class="classSVGback" id="block21Back" fill="url(#imageblock21Back4)" points="372.2,274.3 415.5,274.2 415.4,343.9 372.2,343.9 "/>

		<polygon class="classSVGback" id="floorBack" fill="url(#floorPatternBack4)" points="25.7,344.8 540,344.8 579.7,364.7 579.7,434.7 -2.3,434.7 -2.3,405 26,389.8 "/>
		
		<image xmlns:xlink="http://www.w3.org/1999/xlink" class="roomImage" id="image-test5" xlink:href="" data-image="i/RoomHall.png" data-retina-image="i/RoomHall.png" x="0" y="0" width="576" height="432"></image>
		</svg>
		</div>
		</div>
		</a>
			<div class="b-workshop-title"><h3>Зал</h3></div>
			<div class="b-three-color"></div>
		</li>

</ul>

</body>
</html>