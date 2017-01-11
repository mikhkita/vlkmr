<?$mobile = (preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i',$_SERVER['HTTP_USER_AGENT'])||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($_SERVER['HTTP_USER_AGENT'],0,4)));?>
<!DOCTYPE html>
<html>
<head>
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

	<link rel="stylesheet" media="screen and (min-width: 768px) and (max-width: 1240px)" href="css/layout-tablet.css" />
	<link rel="stylesheet" media="screen and (min-width: 240px) and (max-width: 767px)" href="css/layout-mobile.css" />

	<? if( $mobile ): ?>
			<meta name="viewport" content="width=750, user-scalable=no">
	<? else: ?>
			<meta name="viewport" content="width=device-width, user-scalable=no">
	<? endif; ?>

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
	<script type="text/javascript" src="js/KitSend.js"></script>
	<script type="text/javascript" src="js/main.js"></script>

	<script type="text/javascript" src="js/jquery.qtip.min.js"></script>
  	<link rel="stylesheet" type="text/css" href="css/jquery.qtip.min.css"/>


<script>
var myWidth,
	isMobile = false,
	isRetina = false,
	slideout = false;

if( typeof( window.innerWidth ) == 'number' ) {
    myWidth = window.innerWidth;
} else if( document.documentElement && ( document.documentElement.clientWidth || 
document.documentElement.clientHeight ) ) {
    myWidth = document.documentElement.clientWidth;
} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    myWidth = document.body.clientWidth;
}

window.addEventListener("orientationchange", onOrientation, false);

function onOrientation() {
    if( device.mobile() ){
    	if( window.orientation == 0 ){
	        document.getElementById("viewport").setAttribute("content", "width=750, user-scalable=no");
	    }else{
	        document.getElementById("viewport").setAttribute("content", "width=768, user-scalable=no");
	    }
    }else if( device.tablet() ){
    	if( window.orientation == 0 ){
	        document.getElementById("viewport").setAttribute("content", "width=768, user-scalable=no");
	    }else{
	        document.getElementById("viewport").setAttribute("content", "width=device-width, user-scalable=no");
	    }
    }

    if( slideout != false )
        slideout.close();
}
onOrientation();

function retina(){
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
        (min--moz-device-pixel-ratio: 1.5),\
        (-o-min-device-pixel-ratio: 3/2),\
        (min-resolution: 1.5dppx)";
	if (window.devicePixelRatio > 1)
	    return true;
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
	    return true;
	return false;
}

if( myWidth < 768 ){
	isMobile = true;
	body.className += " mobile";
}

isRetina = (isMobile)?false:retina();


	var isIE = false;

	if (!('querySelector' in document)  //скорее всего ie 9+
	     || !('localStorage' in window)  //ie 8+
	     || !('addEventListener' in window)  //ie 8 + (возможно)
	    || !('matchMedia' in window)) {//ie 10+

	    isIE = true;	
	}

</script>
</head>
<body>
	<!-- <ul class="ps-lines">
		<li class="v" style="margin-left:-581px"></li>
		<li class="v" style="margin-left:580px"></li>
		<li class="v" ></li>
	</ul> -->
	<div class="b-fixed-sides">
		<div class="b-fixed-side b-fixed-left">
			<div class="b-fixed-side-item" style="background-image: url('i/catalog-b.jpg');"></div>
		</div>
		<div class="b-fixed-side b-fixed-right">
			<div class="b-fixed-side-item" style="background-image: url('i/catalog-b.jpg');"></div>
		</div>
	</div>
	<div class="b b-head">
		<div class="b-wide-block">
			<div class="b-block clearfix">
				<div class="b-logo-cont left">
					<a href='index.php' class="b-logo"></a>
				</div>
				<div class="b-lk-auth-block right">
					<div class="b-three-color"></div>
					<div class="b-lk-white">
						<h2>Кабинет дилера</h2>
						<form action="" id="b-lk-form">
							<input type="text" class="lk-check" data-field="login" placeholder="Логин" required/>
							<input type="password" class="lk-check" data-field="password" placeholder="Пароль" required/>
							<input type="submit" style="display:none;">
							<div class="clearfix b-lk-auth-buttons">
								<div class="b-custom-inputs left">
									<input type="checkbox" id="remember_me" name="remember_me" value="Y">
									<label for="remember_me">Запомнить</label>
								</div>
								<div class="right">
									<a href="#" class="ajax b-orange-butt" onclick="$('#b-lk-form').submit(); return false;">Войти</a>
								</div>
							</div>
						</form>
					</div>
					<div class="b-lk-orange">
						<a href="#" class="icon icon-help">Задать вопрос</a>
					</div>
				</div>
				<ul class="b-lang-nav clearfix right">
					<p class="left">Язык:</p>
					<ul class="b-lang-list left clearfix">
						<li class="left"><a href="#" class="b-ru active"></a></li>
						<li class="left"><a href="#" class="b-en"></a></li>
					</ul>
				</ul>
			</div>
		</div>
	</div>
	<div class="b-menu-block">
		<div class="b-wide-block">
			<div class="b-block clearfix">
				<ul class="b-menu left clearfix">
					<li>
						<a href="about.php">О нас</a>
						<ul class="b-submenu">
							<li><a href="history.php">История</a></li>
							<li><a href="news.php">Новости</a></li>
						</ul>
					</li>
					<li>
						<a href="catalog.php">Продукция</a>
						<ul class="b-submenu">
							<li><a href="catalog.php">ЛДСП</a></li>
							<li><a href="styles.php">ДСП</a></li>
							<li><a href="styles.php">Пиломатериал</a></li>
							<li><a href="styles.php">Кромка</a></li>
						</ul>
					</li>
					<li>
						<a href="production.php">Производство</a>
						<ul class="b-submenu">
							<li><a href="production.php">Переработка древесины</a></li>
							<li><a href="production.php">Производство ДСП</a></li>
							<li><a href="production.php">Ламинирование ДСП</a></li>
							<li><a href="production.php">Импрегнирование бумаги</a></li>
						</ul>
					</li>
					<li><a href="dealers.php">Дилеры</a></li>
					<li>
						<a href="vacancies.php">Вакансии</a>
						<ul class="b-submenu">
							<li><a href="#">Отправить резюме</a></li>
						</ul>
					</li>
					<li><a href="faq.php">FAQ</a></li>
					<li><a href="contacts.php">Контакты</a></li>
				</ul>
				<a href="#" class="left icon icon-search b-search-butt"></a>
			</div>
		</div>
	</div>
	<div class="b b-inner-slider">
		<div class="b-wide-block">
			<div class="b-slider">
				<div class="b-slide" data-parallax="scroll" data-image-src="i/catalog.jpg" >
					<div class="b-block">
						<h3>Работаем с 1980 года</h3>
					</div>	
				</div>
			</div>
		</div>
	</div>
	<div class="b b-content">
		<div class="b-wide-block b-margin" style="padding-bottom: 0px;">
			<div class="b-block">
				<ul class="b-breadcrumbs clearfix">
					<li><a href="#">Главная</a></li>
					<li><a href="#">О нас</a></li>
				</ul>
				<h1 class="b-title">Конструктор декоров</h1>
				
<!--Конструктор-->

	<script type="text/javascript">
		var checkSize = false;
		$(document).ready(function(){
			var height = 100;
			$(window).resize(function(){
					$('#room, #roomSVG, #roomSVGFront, #roomSVGBack').css({
						"height": $(window).height() - height,
						"width": "auto"
					});
					if($('#room').width() > $(window).width())
					{
						$('#room, #roomSVG, #roomSVGFront, #roomSVGBack').css({
							"height": "auto",
							"width": $(window).width()
						});
					}
					$('.rel').css({"width": $('#room').width(), "height": $('#room').height()});
					checkSize = false;
			});
			//$('.windowConstructor').css("height", $(window).height());
			$(window).load(function(){
				console.log("before room: ", $('#room').width());
				$('#room, #roomSVG, #roomSVGFront, #roomSVGBack').css({"height": $(window).height() - height});
				console.log("before: ", $('#room').width());
				$('.rel').css({"width": $('#room').width(), "height": $('#room').height()});
				console.log("after: ", $('#room').width());
				console.log("after: ", $('#room').height());
			});
			$('.fullSize').click(function(){
				if(checkSize === false){
					var curWidth = $('#room').width();
					$('#room').css({
						"height": "auto",
						"width": $('.b-wide-block').width()});
					var autoHeight = $('#room').height();
					$('.rel, #room, #roomSVG, #roomSVGFront, #roomSVGBack').width(curWidth).animate(
						{
							height: autoHeight,
							width: $('.b-wide-block').width()
						});
					checkSize = true;
				}else{
					var curHeight = $('#room').height();
					$('#room').css({
						"height": $(window).height() - height,
						"width": "auto"});
					var autoWidth = $('#room').width();
					$('.rel, #room, #roomSVG, #roomSVGFront, #roomSVGBack').height(curHeight).animate(
						{
							height: $(window).height() - height,
							width: autoWidth
						});
					checkSize = false;
				}
			});
			  /*$('.repeatPrev[title]').qtip({
			  	position: {
			        target: $(document),
				        adjust: {
				            scroll: false // Can be ommited (e.g. default behaviour)
				        }
			    }
			  });*/


			//Доработать значения
			//Зафиксировать панель
			/*$(window).scroll(function(){
				if ($('.panelFloor').hasClass("showContent"))
				{
					height = 400;
				}else{
					height = 100;
				}
				  if($(this).scrollTop() > 600)
				  {
				    //console.log($(this).scrollTop());	
				  	$('.toolbar').addClass("panelFixed");
				  	$('.emptyBlock').addClass("showContent");
				  	$('.emptyBlock').removeClass("hideContent");
				  	$('.emptyBlock').css("height", height);
				  }
				  //= высота - размер картинки
				  if($(this).scrollTop() > 1400|| $(this).scrollTop() < 600)
				  {
				    //console.log($(this).scrollTop());	
				  	$('.toolbar').removeClass("panelFixed");
				  	$('.emptyBlock').removeClass("showContent");
				  	$('.emptyBlock').addClass("hideContent");
				  }
				});*/
			//Сочетание клавиш
			var pressCtrl = false;
			var pressCmd = false;
			$(document).keyup(function(e){
				if(e.which === 17 || e.which === 91){
					pressCtrl = false;
					pressCmd = false;
				}
			});
			$(document).keydown(function(e){
				if(e.which === 17 || e.which === 91){
					pressCtrl = true;
					pressCmd = true;
				}
				console.log(e, pressCtrl, pressCmd);
				if((pressCtrl === true || pressCmd === true) && e.which == 89)
				{
					console.log("Press Cntr+Y");
					$('.repeatNextClick').click();
					return false;
				}else if((pressCtrl === true || pressCmd === true) && e.which == 90){
					console.log("Press Cntr+Z");
					$('.repeatPrevClick').click();
					return false;
				}

			});
				/*if(e.ctrlKey && e.which == 90)
				{
					console.log("Press Cntr+Z");
					$('.repeatPrevClick').click();
					return false;
				}
				else if(e.ctrlKey && e.which == 89){
					console.log("Press Cntr+Y");
					$('.repeatNextClick').click();
					return false;
				}*/
			//Панель с полами
			$('.layers').click(function(){
				$('.panelFloor').toggleClass("showContent");
			});
			//Раскрывающаяся панель с декорами
			$('.iconMore').click(function(){
				$('.allTextures').toggleClass("showContent");
				$('.allTextures').css({
					"max-height": $(window).height() - 100
				});
			});
		});
	</script>
				<div class="windowConstructor">
				<div class="toolbar">
					<div class="panelDecor">

						<div class="repeatBlock">
							<div class="floater">
							<div class="content">
								<div class="repeatPrev repeatPrevClick" title="Отменить">
									<span class="icon-back-arrow"></span>
								</div>
								<div class="repeatNext repeatNextClick" title="Повторить">
									<span class="icon-back-arrow-right"></span>
								</div>
							</div>
							</div>
						</div>
						
						<div class="setTextures">
							<div class="floater">
							<div class="content">
								<div class="arrowPrev">
									<span class="icon-left-arrow"></span>
								</div>
							</div>
							</div>
							<div class="textures">
								
							<div class="currentTexture"><img src="i/decor-1.jpg" width="60px" height="60px" data-id="decor-1"></div>
							<div class="currentTexture"><img src="i/decor-2.jpg" width="60px" height="60px" data-id="decor-2"></div>
							<div class="currentTexture"><img src="i/decor-3.jpg" width="60px" height="60px" data-id="decor-3"></div>
							<div class="currentTexture"><img src="i/decor-4.jpg" width="60px" height="60px" data-id="decor-4"></div>
							<div class="currentTexture"><img src="i/decor-5.jpg" width="60px" height="60px" data-id="decor-5"></div>
							<div class="currentTexture"><img src="i/decor-6.jpg" width="60px" height="60px" data-id="decor-6"></div>
							<div class="currentTexture"><img src="i/decor-7.jpg" width="60px" height="60px" data-id="decor-7"></div>
							<div class="currentTexture"><img src="i/decor-8.jpg" width="60px" height="60px" data-id="decor-8"></div>
							<div class="currentTexture"><img src="i/decor-1.jpg" width="60px" height="60px" data-id="decor-1"></div>
							<div class="currentTexture"><img src="i/decor-2.jpg" width="60px" height="60px" data-id="decor-2"></div>
							<div class="currentTexture"><img src="i/decor-3.jpg" width="60px" height="60px" data-id="decor-3"></div>
							<div class="currentTexture"><img src="i/decor-4.jpg" width="60px" height="60px" data-id="decor-4"></div>
							<div class="currentTexture"><img src="i/decor-5.jpg" width="60px" height="60px" data-id="decor-5"></div>
							<div class="currentTexture"><img src="i/decor-6.jpg" width="60px" height="60px" data-id="decor-6"></div>
							<div class="currentTexture"><img src="i/decor-7.jpg" width="60px" height="60px" data-id="decor-7"></div>
							<div class="currentTexture"><img src="i/decor-8.jpg" width="60px" height="60px" data-id="decor-8"></div>

							</div>

  <script type="text/javascript">
    $(document).ready(function(){
      $('.textures').slick({
      	nextArrow: $('.arrowNext'),
	    prevArrow: $('.arrowPrev'),
	    dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 8,
		slidesToScroll: 8
      });
    });
  </script>

							<div class="setTexturesRight">
								<div class="floater">
								<div class="content">
									<div class="arrowNext">
										<span class="icon-right-arrow"></span>
									</div>
									<div class="iconMore">
										<span class="icon-more"></span>
									</div>
								</div>
								</div>
							</div>
						</div>

						<div class="shareBlock">
							<div class="floater">
							<div class="content">
								<div class="layers">
									<span class="icon-layers"></span>
								</div>
								<div class="share">
									<span class="icon-share"></span>
								</div>
							</div>
							</div>
						</div>

					</div>

					<div class="panelFloor">
						<img src="i/Room.png"  ><!--JPG!!-->
						<img src="i/Room.png"  >
						<img src="i/Room.png"  >
					</div>
					<div style="position: relative;">
						<div class="allTextures">
							<div class="currentTexture2"><img src="i/decor-1.jpg" width="90px" height="90px" data-id="decor-1"></div>
							<div class="currentTexture2"><img src="i/decor-2.jpg" width="90px" height="90px" data-id="decor-2"></div>
							<div class="currentTexture2"><img src="i/decor-3.jpg" width="90px" height="90px" data-id="decor-3"></div>
							<div class="currentTexture2"><img src="i/decor-4.jpg" width="90px" height="90px" data-id="decor-4"></div>
							<div class="currentTexture2"><img src="i/decor-5.jpg" width="90px" height="90px" data-id="decor-5"></div>
							<div class="currentTexture2"><img src="i/decor-6.jpg" width="90px" height="90px" data-id="decor-6"></div>
							<div class="currentTexture2"><img src="i/decor-7.jpg" width="90px" height="90px" data-id="decor-7"></div>
							<div class="currentTexture2"><img src="i/decor-8.jpg" width="90px" height="90px" data-id="decor-8"></div>
							<div class="currentTexture2"><img src="i/decor-1.jpg" width="90px" height="90px" data-id="decor-1"></div>
							<div class="currentTexture2"><img src="i/decor-2.jpg" width="90px" height="90px" data-id="decor-2"></div>
							<div class="currentTexture2"><img src="i/decor-3.jpg" width="90px" height="90px" data-id="decor-3"></div>
							<div class="currentTexture2"><img src="i/decor-4.jpg" width="90px" height="90px" data-id="decor-4"></div>
							<div class="currentTexture2"><img src="i/decor-5.jpg" width="90px" height="90px" data-id="decor-5"></div>
							<div class="currentTexture2"><img src="i/decor-6.jpg" width="90px" height="90px" data-id="decor-6"></div>
							<div class="currentTexture2"><img src="i/decor-7.jpg" width="90px" height="90px" data-id="decor-7"></div>
							<div class="currentTexture2"><img src="i/decor-8.jpg" width="90px" height="90px" data-id="decor-8"></div>
						</div>
					</div>
				</div>

				<div class="emptyBlock hideContent">
				
				</div>

				<!--<div class="imageRoom">
					<img id="room" src="i/Room.png"  >
				</div>-->
			</div><!--WindowCons-->
		</div><!--b-block-->
		<div class="relBackground">
			<div class="fullSize">
				<span class="icon-full-size"></span>
			</div>
		<div class="rel">
		<svg id="roomSVGBack" data-name="Слой 3 + Группа 1 Изображение" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 540">
		
		<title>Гостиная</title>

		 <defs>
		 	
		 	
		<!--Текстуры-->
			<pattern id="decor-1Up" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-1.jpg" x="0" y="-100" width="220" height="350" transform="rotate(80, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-1Middle" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-1.jpg" x="0" y="-100" width="220" height="350" transform="rotate(95, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-1Down" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-1.jpg" x="0" y="-100" width="220" height="350" transform="rotate(98, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-2Up" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="0" y="-100" width="220" height="350" transform="rotate(80, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-2Middle" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="0" y="-100" width="220" height="350" transform="rotate(95, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-2Down" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="0" y="-100" width="220" height="350" transform="rotate(98, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-3Up" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-3.jpg" x="0" y="-100" width="220" height="350" transform="rotate(80, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-3Middle" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-3.jpg" x="0" y="-100" width="220" height="350" transform="rotate(95, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-3Down" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-3.jpg" x="0" y="-100" width="220" height="350" transform="rotate(98, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-4Up" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-4.jpg" x="0" y="-100" width="220" height="350" transform="rotate(80, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-4Middle" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-4.jpg" x="0" y="-100" width="220" height="350" transform="rotate(95, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-4Down" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-4.jpg" x="0" y="-100" width="220" height="350" transform="rotate(98, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-5Up" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-5.jpg" x="0" y="-100" width="220" height="350" transform="rotate(80, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-5Middle" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-5.jpg" x="0" y="-100" width="220" height="350" transform="rotate(95, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-5Down" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-5.jpg" x="0" y="-100" width="220" height="350" transform="rotate(98, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-6Up" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-6.jpg" x="0" y="-100" width="220" height="350" transform="rotate(80, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-6Middle" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-6.jpg" x="0" y="-100" width="220" height="350" transform="rotate(95, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-6Down" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-6.jpg" x="0" y="-100" width="220" height="350" transform="rotate(98, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-7Up" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-7.jpg" x="0" y="-100" width="220" height="350" transform="rotate(80, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-7Middle" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-7.jpg" x="0" y="-100" width="220" height="350" transform="rotate(95, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-7Down" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-7.jpg" x="0" y="-100" width="220" height="350" transform="rotate(98, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-8Up" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-8.jpg" x="0" y="-100" width="220" height="350" transform="rotate(80, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-8Middle" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-8.jpg" x="0" y="-100" width="220" height="350" transform="rotate(95, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="decor-8Down" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-8.jpg" x="0" y="-100" width="220" height="350" transform="rotate(98, 75, 75)">
			<pattern id="woodStartUp" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/front.jpg" x="0" y="-100" width="220" height="350" transform="rotate(80, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="woodStartMiddle" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/front.jpg" x="0" y="-100" width="220" height="350" transform="rotate(95, 75, 75)">
		     	</image>
		    </pattern>
		    <pattern id="woodStartDown" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/front.jpg" x="0" y="-100" width="220" height="350" transform="rotate(98, 75, 75)">
		     	</image>
		    </pattern>

		 </defs>

		<polygon class="classSVGback" id="blockUp1Back" points="267.05 182.58 353.06 172.9 352.93 92.28 267.05 113.94 267.05 182.58"/>
		<polygon class="classSVGback" id="blockUp2Back" points="352.97 170.82 463.89 156.94 464.06 65.36 352.73 93.78 352.97 170.82"/>
		<polygon class="classSVGback" id="blockUp3Back" points="463.85 66.66 463.55 155.46 613.37 135.54 613.37 30.66 463.85 66.66"/>

		<path class="classSVGback" d="M347.79,301.2H348l0.72,0.49V337h-1V301.2Z"/>
		<path class="classSVGback" id="blockMiddle1Back" d="M264,297.84l84,3.6v35.28L264,329v-31.2Z"/>
		<path class="classSVGback" id="blockMiddle2Back" d="M348.75,301.92l0.24-.24,109.2,4.8V346.8L348.75,336.72v-34.8Z"/>
		<path class="classSVGback" d="M458.19,306.48h1.68v40.08l-1.68.24V306.48Z"/>
		<path class="classSVGback" id="blockMiddle3Back" d="M460.11,306.48v40.08l0.48,0.48,148.56,13.68V313Z"/>
		<path class="classSVGback" d="M609.15,313h2.16l0.24,0.24v47l-0.72.48h-1.68V313Z"/>

		<path class="classSVGback" id="blockDown1Back" d="M263.79,330h1.44l82.32,7.68V420h-0.72l-44.88-9.36-38.16-34.08-0.24-3.36V330.48Z"/>
		<path class="classSVGback" d="M347.55,337.68l1.2,0.72V420h-1.2V337.68Z"/>
		<path class="classSVGback" id="blockDown2Back" d="M348.75,338.16v82.08l0.24,0.24L457.71,443h0.48V348l-107.52-9.84A10.52,10.52,0,0,0,348.75,338.16Z"/>
		<path class="classSVGback" d="M458.19,348s0,0,1,.24l0.48,0.48V442.8l-1,.24h-0.48V348Z"/>
		<path class="classSVGback" id="blockDown3Back" d="M459.63,349l0.24-.48h1.2l147.6,13.68,0.48,0.48,0.24,0.24V474l-0.24.24h-0.24l-149-31-0.24-.48V349Z"/>
		<path class="classSVGback" d="M608.91,362.16h1l1,0.48V473.52l-0.72.48-0.72.24V362.88l-0.48-.24-0.24-.48h0.24Z"/>

	</svg>

<!--Это задний слой - он и будет изменяться-->
	<svg id="roomSVG" data-name="Слой 3 + Группа 1 Изображение" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 540">
		
		<title>Гостиная</title>

		 <defs>
		 	
		 	
		 	<clipPath id="clippingUp1">
			     <circle cx="300" cy="150" r="50"/>
			</clipPath>
			<clipPath id="clippingUp2">
			     <circle cx="300" cy="150" r="50"/>
			</clipPath>
			<clipPath id="clippingUp3">
			     <circle cx="300" cy="150" r="50"/>
			</clipPath>
			<clipPath id="clippingMiddle1">
			     <circle cx="300" cy="150" r="50"/>
			</clipPath>
			<clipPath id="clippingMiddle2">
			     <circle cx="300" cy="150" r="50"/>
			</clipPath>
			<clipPath id="clippingMiddle3">
			     <circle cx="300" cy="150" r="50"/>
			</clipPath>
			<clipPath id="clippingDown1">
			     <circle cx="300" cy="150" r="50"/>
			</clipPath>
			<clipPath id="clippingDown2">
			     <circle cx="300" cy="150" r="50"/>
			</clipPath>
			<clipPath id="clippingDown3">
			     <circle cx="300" cy="150" r="50"/>
			</clipPath>
		<!--Текстуры-->
			<pattern id="wood" width="100%" height="100%">
		        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="i/decor-2.jpg" x="0" y="-100" width="200" height="350" transform="rotate(90, 75, 75)">
		     	</image>
		    </pattern>

		 </defs>

		<polygon class="classSVG default" id="blockUp1" points="267.05 182.58 353.06 172.9 352.93 92.28 267.05 113.94 267.05 182.58"/>
		<polygon class="classSVG default" id="blockUp2" points="352.97 170.82 463.89 156.94 464.06 65.36 352.73 93.78 352.97 170.82"/>
		<polygon class="classSVG default" id="blockUp3" points="463.85 66.66 463.55 155.46 613.37 135.54 613.37 30.66 463.85 66.66"/>

		<path class="classSVG" d="M347.79,301.2H348l0.72,0.49V337h-1V301.2Z"/>
		<path class="classSVG default" id="blockMiddle1" d="M264,297.84l84,3.6v35.28L264,329v-31.2Z"/>
		<path class="classSVG default" id="blockMiddle2" d="M348.75,301.92l0.24-.24,109.2,4.8V346.8L348.75,336.72v-34.8Z"/>
		<path class="classSVG" d="M458.19,306.48h1.68v40.08l-1.68.24V306.48Z"/>
		<path class="classSVG default" id="blockMiddle3" d="M460.11,306.48v40.08l0.48,0.48,148.56,13.68V313Z"/>
		<path class="classSVG" d="M609.15,313h2.16l0.24,0.24v47l-0.72.48h-1.68V313Z"/>

		<path class="classSVG default" id="blockDown1" d="M263.79,330h1.44l82.32,7.68V420h-0.72l-44.88-9.36-38.16-34.08-0.24-3.36V330.48Z"/>
		<path class="classSVG" d="M347.55,337.68l1.2,0.72V420h-1.2V337.68Z"/>
		<path class="classSVG default" id="blockDown2" d="M348.75,338.16v82.08l0.24,0.24L457.71,443h0.48V348l-107.52-9.84A10.52,10.52,0,0,0,348.75,338.16Z"/>
		<path class="classSVG" d="M458.19,348s0,0,1,.24l0.48,0.48V442.8l-1,.24h-0.48V348Z"/>
		<path class="classSVG default" id="blockDown3" d="M459.63,349l0.24-.48h1.2l147.6,13.68,0.48,0.48,0.24,0.24V474l-0.24.24h-0.24l-149-31-0.24-.48V349Z"/>
		<path class="classSVG" d="M608.91,362.16h1l1,0.48V473.52l-0.72.48-0.72.24V362.88l-0.48-.24-0.24-.48h0.24Z"/>

	</svg>

	<img id="room" src="i/Room.png">

<!--Это передний слой - он отслеживает клики и меняет задний слой-->
	<svg id="roomSVGFront" data-name="Слой 3 + Группа 1 Изображение" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 540">
		
		<title>Гостиная</title>
		<polygon class="classSVGFront" id="blockUp1Front" data-id="blockUp1" data-location="Up" points="267.05 182.58 353.06 172.9 352.93 92.28 267.05 113.94 267.05 182.58"/>
		<polygon class="classSVGFront" id="blockUp2Front" data-id="blockUp2" data-location="Up" points="352.97 170.82 463.89 156.94 464.06 65.36 352.73 93.78 352.97 170.82"/>
		<polygon class="classSVGFront" id="blockUp3Front" data-id="blockUp3" data-location="Up" points="463.85 66.66 463.55 155.46 613.37 135.54 613.37 30.66 463.85 66.66"/>

		<path class="classSVGFront" d="M347.79,301.2H348l0.72,0.49V337h-1V301.2Z"/>
		<path class="classSVGFront" id="blockMiddle1Front" data-id="blockMiddle1" data-location="Middle" d="M264,297.84l84,3.6v35.28L264,329v-31.2Z"/>
		<path class="classSVGFront" id="blockMiddle2Front" data-id="blockMiddle2" data-location="Middle" d="M348.75,301.92l0.24-.24,109.2,4.8V346.8L348.75,336.72v-34.8Z"/>
		<path class="classSVGFront" d="M458.19,306.48h1.68v40.08l-1.68.24V306.48Z"/>
		<path class="classSVGFront" id="blockMiddle3Front" data-id="blockMiddle3" data-location="Middle" d="M460.11,306.48v40.08l0.48,0.48,148.56,13.68V313Z"/>
		<path class="classSVGFront" d="M609.15,313h2.16l0.24,0.24v47l-0.72.48h-1.68V313Z"/>

		<path class="classSVGFront" id="blockDown1Front" data-id="blockDown1" data-location="Down" d="M263.79,330h1.44l82.32,7.68V420h-0.72l-44.88-9.36-38.16-34.08-0.24-3.36V330.48Z"/>
		<path class="classSVGFront" d="M347.55,337.68l1.2,0.72V420h-1.2V337.68Z"/>
		<path class="classSVGFront" id="blockDown2Front" data-id="blockDown2" data-location="Down" d="M348.75,338.16v82.08l0.24,0.24L457.71,443h0.48V348l-107.52-9.84A10.52,10.52,0,0,0,348.75,338.16Z"/>
		<path class="classSVGFront" d="M458.19,348s0,0,1,.24l0.48,0.48V442.8l-1,.24h-0.48V348Z"/>
		<path class="classSVGFront" id="blockDown3Front" data-id="blockDown3" data-location="Down" d="M459.63,349l0.24-.48h1.2l147.6,13.68,0.48,0.48,0.24,0.24V474l-0.24.24h-0.24l-149-31-0.24-.48V349Z"/>
		<path class="classSVGFront" d="M608.91,362.16h1l1,0.48V473.52l-0.72.48-0.72.24V362.88l-0.48-.24-0.24-.48h0.24Z"/>
	</svg>

	<script type="text/javascript">
    	$(document).ready(function()
    	{
    		var shiftSlider = 8;//менять в зависимости от ширины окна
			var currentTexture;
			var prevTexture;
			//Выбор текстуры
			$('.currentTexture').click(function(e){
				if (prevTexture != undefined)
					prevTexture.children().css("box-shadow", "");
				currentTexture = $(this);
				console.log("!!!!! ", $(this).children());
				prevTexture = $(this);
				$(this).children().css({
					"box-shadow": "0 0 0 3px #483434",
					"box-sizing": "border-box"
				});
			});
			$('.currentTexture2').click(function(e){
				console.log(e);
		        e.preventDefault();
		        slideIndex = $(this).index();
		        $('.textures').slick('slickGoTo', parseInt(slideIndex), false);
		        console.log("currentTexture",$('.currentTexture').eq(slideIndex), "slideIndex", slideIndex, "this", $(this));
		        $('.currentTexture').eq(slideIndex + shiftSlider).click();
		        $('.allTextures').removeClass("showContent");
		    });
		    //Закрыть панель с декорами по клику вне его
		    $(document).click(function (e){ 
		    	if($('.allTextures').hasClass("showContent") === true)
		    	{
					var div = $(".allTextures, .iconMore"); 
					if (!div.is(e.target) // если клик был не по нашему блоку
					    && div.has(e.target).length === 0) { // и не по его дочерним элементам
							$('.allTextures').removeClass("showContent"); // скрываем его
					}
				}
			});
			//Отменить/Повторить
			var stack = [];
			//Заполняем стек начальными текстурами
			$('.default').each(function(){
				var stackAdd = new clickArea($(this).attr("id"), $(this).css("fill"));
				stack.push(stackAdd);
			});
			var stackRepeat = [];
			//Отменить
			$('.repeatPrevClick').click(function(e){
				if(stack.length != 0)
				{
					var lastElemStack = stack.pop();
					var prevElemStack;
					stack.forEach(function(item, i, stack){
						if(item.path === lastElemStack.path)
						{
							prevElemStack = item;
						}
					});
					if(prevElemStack != undefined)
						{
							console.log("stack", stack);
							//теперь нужно поменять текстуры
							$('#'+lastElemStack.path).css({"fill":prevElemStack.texture});
							$('#'+lastElemStack.path+'Back').css({"fill":prevElemStack.texture});
							stackRepeat.push(lastElemStack);
						}
					else{
						stack.push(lastElemStack);
					}
					if(stack.length > 9)
					{
						$('.repeatPrev').removeClass('repeatPrev').addClass('repeatPrev2');
						
					}else{
						$('.repeatPrev2').removeClass('repeatPrev2').addClass('repeatPrev');
						
					}
					if(stackRepeat.length > 0)
					{
						$('.repeatNext').removeClass('repeatNext').addClass('repeatNext2');
					}
					else{
						$('.repeatNext2').removeClass('repeatNext2').addClass('repeatNext');
					}
				}
			});

			//Повторить
			$('.repeatNextClick').click(function(e){
				if(stackRepeat.length != 0){
					console.log("stackRepeat", stackRepeat);
					var lastElemStackRepeat= stackRepeat.pop();
					$('#'+lastElemStackRepeat.path).css({"fill":lastElemStackRepeat.texture});
					$('#'+lastElemStackRepeat.path+'Back').css({"fill":lastElemStackRepeat.texture});
					stack.push(lastElemStackRepeat);
					$(this).removeClass('repeatNext').addClass('repeatNext2');
				}
				else{
					$(this).removeClass('repeatNext2').addClass('repeatNext');
				}
			});

			//Анимация
			function areaSVG(path, circle, radius){
			   this.path = path;
			   this.circle = circle;
			   this.radius = radius;
			   this.animateSVG = function(x, y, clickEl, dataLoc){
			   	//console.log(path, circle);
			   	circle.attr({
				  	'cx': x + '%',
				  	'cy': y + '%'
				});
				var circleID = circle.parent().attr("id");
				path.css({
				  	"clip-path":"url(#"+circleID+")",
				  	"opacity" : "1"
				  });
				circle.css({
				  	'r': 0
				 });
				circle.animate(
					  {
					  	'r': radius
					  },{
					  		duration: 550,
					   		step: function(now, fx) {
					   			$(this).attr({"r": now});
					   		},
					   		complete: function(){
					   			$('#'+clickEl+'Back').css({"fill": "url(#"+currentTexture.children().attr("data-id")+ dataLoc + ")"});
					   		}
					  });

			   };
			};

			//Объект SVG + текстура (для отменить/повторить)
			function clickArea(path, texture)
			{
				this.path = path;
				this.texture = texture;
			}

			/* --------------------------- */
			var blockUp1 = new areaSVG($('#blockUp1'), $('#clippingUp1 circle'), 120);
			var blockUp2 = new areaSVG($('#blockUp2'), $('#clippingUp2 circle'), 150);
			var blockUp3 = new areaSVG($('#blockUp3'), $('#clippingUp3 circle'), 195);
			var blockMiddle1 = new areaSVG($('#blockMiddle1'), $('#clippingMiddle1 circle'), 90);
			var blockMiddle2 = new areaSVG($('#blockMiddle2'), $('#clippingMiddle2 circle'), 125);
			var blockMiddle3 = new areaSVG($('#blockMiddle3'), $('#clippingMiddle3 circle'), 160);
			var blockDown1 = new areaSVG($('#blockDown1'), $('#clippingDown1 circle'), 125);
			var blockDown2 = new areaSVG($('#blockDown2'), $('#clippingDown2 circle'), 150);
			var blockDown3 = new areaSVG($('#blockDown3'), $('#clippingDown3 circle'), 195);

			var clickElem;
			var dataLocation;
	    	var offset;
	    	var parent;

			//Кликнули по любой области SVG
			$('.classSVGFront').click(function(e){
				if(currentTexture != undefined)
				{
					//Получаем элемент из центрального слоя
					clickElem = $(this).attr("data-id");
					dataLocation = $(this).attr("data-location");
					$('#'+clickElem).css({"fill": "url(#"+currentTexture.children().attr("data-id")+ dataLocation + ")"});

					offset = $(this).position();
				    parent = $('.rel').offset();

				    var relativeX = (offset.left - parent.left) / $('#room').width() * 100+ ((e.pageX / $('#room').width() * 100) - (offset.left / $('#room').width() * 100));
				    var relativeY = ((offset.top - parent.top) / $('#room').height()) * 100+ ((e.pageY / $('#room').height() * 100) - (offset.top / $('#room').height() * 100));

				    //Добавить текущий SVG и текстуру в стек
				    var stackObj = new clickArea(clickElem, "url(#" + currentTexture.children().attr("data-id") + dataLocation + ")");
				    console.log(stackObj.path != stack[stack.length - 1].path, stackObj.texture != stack[stack.length - 1].texture);
				    if(stackObj.path != stack[stack.length - 1].path || stackObj.texture != stack[stack.length - 1].texture)
				    {
				    	console.log("add!");
				    	stack.push(stackObj);
				    }
				    
				    if(stack.length > 9){
						$('.repeatPrev').removeClass('repeatPrev').addClass('repeatPrev2');
					}else{
						$('.repeatPrev2').removeClass('repeatPrev2').addClass('repeatPrev');
					}
					stackRepeat = [];
					$('.repeatNext2').removeClass('repeatNext2').addClass('repeatNext');

					switch(clickElem){
						case "blockUp1":
							blockUp1.animateSVG(relativeX, relativeY, clickElem, dataLocation);
							break
						case "blockUp2":
							blockUp2.animateSVG(relativeX, relativeY, clickElem, dataLocation);
							break
						case "blockUp3":
							blockUp3.animateSVG(relativeX, relativeY, clickElem, dataLocation);
							break
						case "blockMiddle1":
							blockMiddle1.animateSVG(relativeX, relativeY, clickElem, dataLocation);
							break
						case "blockMiddle2":
							blockMiddle2.animateSVG(relativeX, relativeY, clickElem, dataLocation);
							break
						case "blockMiddle3":
							blockMiddle3.animateSVG(relativeX, relativeY, clickElem, dataLocation);
							break
						case "blockDown1":
							blockDown1.animateSVG(relativeX, relativeY, clickElem, dataLocation);
							break
						case "blockDown2":
							blockDown2.animateSVG(relativeX, relativeY, clickElem, dataLocation);
							break
						case "blockDown3":
							blockDown3.animateSVG(relativeX, relativeY, clickElem, dataLocation);
							break
					}
				}

			});
		});
    	</script>
			</div><!--rel-->
			</div>
		</div><!--b-wide-->
	</div><!--b-content-->
	<div class="b b-main-footer">
		<div class="b-wide-block">
			<div class="b-block b-block-one clearfix">
				<div class="b-col left">
					<h3>О компании</h3>
					<ul>
						<li><a href="#">Новости</a></li>
						<li><a href="#">История</a></li>
						<li><a href="#">Вакансии</a></li>
					</ul>
				</div>
				<div class="b-col left">
					<h3>Продукция</h3>
					<ul>
						<li><a href="#">ЛДСП</a></li>
						<li><a href="#">ДСП</a></li>
						<li><a href="#">Пиломатериал</a></li>
						<li><a href="#">Кромка</a></li>
					</ul>
				</div>
				<div class="b-col left">
					<h3>Производство</h3>
					<ul>
						<li><a href="#">Переработка древесины</a></li>
						<li><a href="#">Производство ДСП</a></li>
						<li><a href="#">Ламинирование ДСП</a></li>
						<li><a href="#">Импрегнирование бумаги</a></li>
					</ul>
				</div>
				<div class="b-col left">
					<h3>Адрес</h3>
					<p>634024, г. Томск, 2-ой поселок ЛПК, д. 109/3, оф. 43</p>
				</div>
				<div class="b-col left">
					<h3>Отдел кадров</h3>
					<p>Тел.: (3822) 70-67-23<br>Тел.: (3822) 70-67-27 Доб. 1305<br>E-mail: ShustrovaN@tomlesdrev.ru</p>
					<h3>Отдел сбыта</h3>
					<p>Тел.: (3822) 28-33-48</p>
				</div>
			</div>
			<div class="b-block b-block-two clearfix">
				<p class="left">ООО «Томлесдрев», все права защищены © 2016</p>
				<a href="#" class="b-copyright right"></a>
			</div>
		</div>
	</div>
	<div class="b-menu-overlay">
		<div class="b-wide-block"></div>
	</div>
	<div class="b-search-overlay"></div>
	<div class="b-search-form">
		<h2>Поиск по сайту</h2>
		<form action="" id="b-search-form">
			<div class="b-search-input clearfix">
				<span class="icon icon-search left"></span>
				<input type="text" placeholder="Начните вводить запрос">
				<a href="#" class="icon icon-arrow-right right" onclick="$('#b-search-form').submit(); return false;"></a>
			</div>
		</form>
	</div>
	<div style="display:none;">
		<div id="b-popup-1">
			<div class="b-popup" >
				<h3>Оставьте заявку</h3>
				<h4>и наши специалисты<br>свяжутся с Вами в ближайшее время</h4>
				<form action="kitsend.php" method="POST" id="b-form-1" data-block="#b-popup-2">
					<div class="b-popup-form">
						<label for="name">Введите Ваше имя</label>
						<input type="text" id="name" name="name" required/>
						<label for="tel">Введите Ваш номер телефона</label>
						<input type="text" id="tel" name="phone" required/>
						<label for="tel">Введите Ваш E-mail</label>
						<input type="text" id="tel" name="email" required/>
						<input type="hidden" name="subject" value="Заказ"/>
						<input type="submit" class="ajax b-orange-butt" value="Заказать">
					</div>
				</form>
			</div>
		</div>
		<div id="b-popup-2">
			<div class="b-thanks b-popup">
				<h3>Спасибо!</h3>
				<h4>Ваша заявка успешно отправлена.<br/>Наш менеджер свяжется с Вами в течение часа.</h4>
				<input type="submit" class="b-orange-butt" onclick="$.fancybox.close(); return false;" value="Закрыть">
			</div>
		</div>
		<div id="b-popup-error">
			<div class="b-thanks b-popup">
				<h3>Ошибка отправки!</h3>
				<h4>Приносим свои извинения. Пожалуйста, попробуйте отправить Вашу заявку позже.</h4>
				<input type="submit" class="b-orange-butt" onclick="$.fancybox.close(); return false;" value="Закрыть">
			</div>
		</div>
	</div>
</body>
</html>