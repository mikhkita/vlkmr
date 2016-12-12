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
	<script type="text/javascript" src="js/css3-mediaqueries.js"></script>
	<script type="text/javascript" src="js/autosize.min.js"></script>
	<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>
	<script type="text/javascript" src="js/jquery.validate.min.js"></script>
	<script type="text/javascript" src="js/KitProgress.js"></script>
	<script type="text/javascript" src="js/KitAnimate.js"></script>
	<script type="text/javascript" src="js/countUp.js"></script>
	<script type="text/javascript" src="js/device.js"></script>
	<script type="text/javascript" src="js/KitSend.js"></script>
	<script type="text/javascript" src="js/main.js"></script>

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
		<div class="b-wide-block b-margin">
			<div class="b-block">
				<ul class="b-breadcrumbs clearfix">
					<li><a href="#">Главная</a></li>
					<!-- <li><a href="#">О нас</a></li> -->
				</ul>
				<h1 class="b-title">История</h1>
				<div class="b-text">
					<p>Работы над проектом завода по производству древесностружечных плит начались в 1970 году (в то время завод входил в состав Всесоюзного объединения «Томлеспром»).</p>
				</div>
			</div>
		</div>
		<div class="b-wide-block b-history b-margin">
			<div class="b-block">
				<div class="b-history-section">
					<h2>Как все начиналось</h2>
					<h4>1980 - 2003 годы</h4>
					<ul class="b-history-list">
						<li class="b-left clearfix">
							<div class="b-year">1980</div>
							<div class="b-bubble anim fadeLeft" data-anim="fadeLeft" data-delay="0">
								<div class="b-three-color"></div>
								<p>Запуск и испытание линии по производству древесно-стружечных плит финской фирмы «RAUMAREPOLA».</p>
							</div>
						</li>
						<li class="b-right clearfix">
							<div class="b-year">1984</div>
							<div class="b-bubble anim fadeRight" data-anim="fadeRight" data-delay="0">
								<div class="b-three-color"></div>
								<p>Производство вышло на проектную мощность.</p>
							</div>
						</li>
						<li class="b-left clearfix">
							<div class="b-year">1991</div>
							<div class="b-bubble anim fadeLeft" data-anim="fadeLeft" data-delay="0">
								<div class="b-three-color"></div>
								<p>Проведена реконструкция завода с заменой основного технологического оборудования на более современное и высокопроизводительное, что привело к росту качества выпускаемой продукции до европейских стандартов. Объем выпускаемой продукции вырос до 130 тыс. м3 в год.</p>
							</div>
						</li>
						<li class="b-right clearfix">
							<div class="b-year">1992</div>
							<div class="b-bubble anim fadeRight" data-anim="fadeRight" data-delay="0">
								<div class="b-three-color"></div>
								<p>Предприятие получило сертификат по выпуску древесностружечных плит с классом эмиссии E1.</p>
							</div>
						</li>
						<li class="b-left clearfix">
							<div class="b-year">1999</div>
							<div class="b-bubble anim fadeLeft" data-anim="fadeLeft" data-delay="0">
								<div class="b-three-color"></div>
								<p>проведена модернизация участков, установлено оборудование производства Японии, Германии («SIEMPELKAMP», «BIZON»).</p>
							</div>
						</li>
						<li class="b-right clearfix">
							<div class="b-year">2003</div>
							<div class="b-bubble anim fadeRight" data-anim="fadeRight" data-delay="0">
								<div class="b-three-color"></div>
								<p>Установлена первая линия ламинирования. В период с 2003 по 2007 г. на заводе ДСП в общем было установлено пять высокотехнологичных линий по производству ламинированной древесностружечной плиты фирмы «BUKLE», благодаря которым лесопромышленное объединение «Томлесдрев» стало крупнейшим российским производителем ЛДСП с ежемесячным объёмом производства 1 200 000 – 1 300 000 м2.</p>
							</div>
						</li>
					</ul>
					<h2>Производство</h2>
					<ul class="b-numbers clearfix">
						<li class="b-number b-dsp">
							<div class="b-image"></div>
							<h3><b><span id="my_id" class="anim countUp" data-func="countUp" data-anim="countUp" data-offset="80" data-from="17000000" data-to="36250000">36 250 000</span> м<span class="power">2</span></b> в год</h3>
							<h3>ДСП</h3>
						</li>
						<li class="b-number b-ldsp">
							<div class="b-image"></div>
							<h3><b><span id="my_id1" class="anim countUp" data-func="countUp" data-anim="countUp" data-offset="80" data-from="10000000" data-to="34000000">34 000 000</span> м<span class="power">2</span></b> в год</h3>
							<h3>ЛДСП</h3>
						</li>
					</ul>
				</div>
				<div class="b-history-section">
					<h2>Развитие</h2>
					<h4>2004 - 2011 годы</h4>
					<ul class="b-history-list">
						<li class="b-center">
							<div class="b-year">2004</div>
							<div class="b-bubble anim fadeDown" data-anim="fadeDown" data-offset="0" data-delay="0">
								<div class="b-three-color"></div>
								<p>Проведена реконструкция завода, установлено новое немецкое оборудования фирмы «SIEMPELKAMP», обеспечивающее производительность – 180 тыс. м3 в год. Модернизация производства позволила улучшить качество формирования древесно-стружечного ковра и обеспечить равномерность плотности плиты.<br><br>С запуском нового оборудования объем выпускаемых древесно-стружечных плит был увеличен на треть, улучшились экологические показатели, а так же условия труда сотрудников предприятия. </p>
							</div>
						</li>
						<li class="b-left clearfix">
							<div class="b-year">2005</div>
							<div class="b-bubble anim fadeLeft" data-anim="fadeLeft" data-delay="0">
								<div class="b-three-color"></div>
								<p>Модернизирован участок сырой стружки:<br>установлены четыре стружечных станка фирмы «PALLMANN», каждый из которых выдаёт 10 тонн качественной стружки в час. </p>
							</div>
						</li>
						<li class="b-right clearfix">
							<div class="b-year">2007</div>
							<div class="b-bubble anim fadeRight" data-anim="fadeRight" data-delay="0">
								<div class="b-three-color"></div>
								<p>Запущена линия импрегнирования декоративной бумаги фирмы «VITS».</p>
							</div>
						</li>
						<li class="b-left clearfix">
							<div class="b-year">2011</div>
							<div class="b-bubble anim fadeLeft" data-anim="fadeLeft" data-delay="0">
								<div class="b-three-color"></div>
								<p>Совместно с немецкой фирмой «Siempelkamp» была успешно проведена реконструкция гидравлики на участке горячего прессования, что позволило увеличить выпуск ДСП на 5%, и достигнуть плановой мощности завода 260 000 м3 ДСП в год. Проведена реконструкция и модернизация участков, что существенно позволило повысить производительность ЛДСП на 7%.</p>
							</div>
						</li>
					</ul>
					<h2>Производство</h2>
					<ul class="b-numbers clearfix">
						<li class="b-number b-dsp">
							<div class="b-image"></div>
							<h3><b>36 250 000 м<span class="power">2</span></b> в год</h3>
							<h3>ДСП</h3>
						</li>
						<li class="b-number b-ldsp">
							<div class="b-image"></div>
							<h3><b>34 000 000 м<span class="power">2</span></b> в год</h3>
							<h3>ЛДСП</h3>
						</li>
					</ul>
				</div>
				<div class="b-history-section">
					<h2>Вклад в будущее</h2>
					<h4>2011 - 2016 годы</h4>
					<ul class="b-history-list">
						<li class="b-left clearfix">
							<div class="b-year">2013</div>
							<div class="b-bubble anim fadeLeft" data-anim="fadeLeft" data-delay="0">
								<div class="b-three-color"></div>
								<p>Запущено строительство нового завода по производству ДСП, ЛДСП.</p>
							</div>
						</li>
						<li class="b-right clearfix">
							<div class="b-year">2016</div>
							<div class="b-bubble anim fadeRight" data-anim="fadeRight" data-delay="0">
								<div class="b-three-color"></div>
								<p>Состоялось открытие нового завода. Установлено новое оборудование немецкой компании «Dieffenbacher Gmbh». Производственные мощности ДСП и ЛДСП увеличились до общих показателей 36 250 000 м2 и 34 000 000 м2 в год соответственно.</p>
							</div>
						</li>
					</ul>
					<h2>Производство</h2>
					<ul class="b-numbers clearfix">
						<li class="b-number b-dsp">
							<div class="b-image"></div>
							<h3><b>36 250 000 м<span class="power">2</span></b> в год</h3>
							<h3>ДСП</h3>
						</li>
						<li class="b-number b-ldsp">
							<div class="b-image"></div>
							<h3><b>34 000 000 м<span class="power">2</span></b> в год</h3>
							<h3>ЛДСП</h3>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
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