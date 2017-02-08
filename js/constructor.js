		var checkSize = false;
		var blocks = [];
		var shiftSlider;
		var currentTexture;
		var prevTexture;

		$(document).ready(function(){
			var height = 100;
			$('#room').imagesLoaded( function() {
				bar.animate(1);
			});
			$('.relBackground').css({"height": $(window).height() - height});
			$('.progressbarContain').css({
				"top": ($(window).height() - height)/2 - 40
			});
			if($(window).width() < $('.b-wide-block').width()){
				$('.progressbarContain').css({
					"left": ($(window).width())/2 - 40
				});
			}else{
				$('.progressbarContain').css({
					"left": ($('.relBackground').width())/2 - 40
				});
			}
			$(window).resize(function(){
				if(checkSize === false){
					$('#room, #floorRoom, #floorRoomBack, #roomSVG, #roomSVGFront, #roomSVGBack').css({
						"height": $(window).height() - height,
						"width": "auto"
					});
				}
					console.log($('#room').width() > $('.b-wide-block').width());
					if($('#room').width() > $('.b-wide-block').width())
					{
						$('#room, #floorRoom, #floorRoomBack, #roomSVG, #roomSVGFront, #roomSVGBack').css({
							"height": "auto",
							"width": $('.b-wide-block').width()
						});
					}
					$('.rel').css("display", "block");
					$('.rel').css({"width": $('#room').width(), "height": $('#room').height()});
					$('.relBackground').css({"height": ""});
					//checkSize = false;
					if(window.innerWidth >= 1240){
						shiftSlider = 8;
					}
					if(window.innerWidth < 1240 && window.innerWidth > 1024){
						shiftSlider = 6;
					}
					if(window.innerWidth <= 1024 && window.innerWidth > 768){
						shiftSlider = 3;
					}
					if(window.innerWidth <= 768){
						shiftSlider = 1;
					}
				
			});
			//После загрузки страницы вызываем ресайз
			$(window).load(function(e){
				$(window).resize();
				$('.progressbarContain').fadeOut(300);
			});
			//$('#room').load();
			$('.fullSize').click(function(){
					if(checkSize === false){
						var curWidth = $('#room').width();
						$('#room, #floorRoom, #floorRoomBack').css({
							"height": "auto",
							"width": $('.b-wide-block').width()});
						var autoHeight = $('#room').height();
						$('.rel, #room, #floorRoom, #floorRoomBack, #roomSVG, #roomSVGFront, #roomSVGBack').width(curWidth).animate(
							{
								height: autoHeight,
								width: $('.b-wide-block').width()
							});
						$('.fullSize[title]').qtip('option', 'content.text', 'Уместить по высоте');
						$('.icon-small-size').css("display", "inline-block");
						$('.icon-full-size').css("display", "none");
						checkSize = true;
					}else 
						if(checkSize === true && $('.rel').height() > $(window).height() - 100){
							var curHeight = $('#room').height();
							$('#room, #floorRoom, #floorRoomBack').css({
								"height": $(window).height() - height,
								"width": "auto"});
							var autoWidth = $('#room').width();
							$('.rel, #room, #floorRoom, #floorRoomBack, #roomSVG, #roomSVGFront, #roomSVGBack').height(curHeight).animate(
								{
									height: $(window).height() - height,
									width: autoWidth
								});
							$('.fullSize[title]').qtip('option', 'content.text', 'Во всю ширину');
							$('.icon-small-size').css("display", "none");
							$('.icon-full-size').css("display", "inline-block");
							checkSize = false;
					}
			});

			  $('.repeatPrev[title], .repeatNext[title], .iconMore[title], .layers[title], .share[title]').qtip({
			  	position: {
	                my: 'bottom center',
	                at: 'top center',
	                adjust: {
			            y: -5
			        }
	            },
	            style: {
        			classes: 'qtipFont qtipCustom qtip-light',
	            	tip: {
	            		width: 22, height: 11, border: 0
	            	}
	            }
			  });
			  $('.iconMore[title]').qtip({
			  	position: {
	                my: 'bottom center',
	                at: 'top center',
	                adjust: {
			            y: -5
			        }
	            },
	            style: {
        			classes: 'qtipFont qtipCustom qtip-light',
	            	tip: {
	            		width: 22, height: 11, border: 0
	            	}
	            },
	            hide: {
			        event: 'click mouseleave'
			    }
			  });
			  $('.fullSize[title]').qtip({
			  		position: {
	                my: 'right center',
	                at: 'left center',
	                adjust: {
			            x: -5
			        }
	            },
	            style: {
        			classes: 'qtipCustom qtipFont qtipCustomWhite qtip-light',
	            	tip: {
	            		width: 22, height: 11
	            	}
	            }
			  });
			  $('.currentTexture, .currentTexture2').each(function(){
			  	$(this).children().qtip({
			  		position: {
	                my: 'bottom center',
	                at: 'top center',
	                adjust: {
			            y: -8
			        }
	            },
	            style: {
        			classes: 'qtipFont qtipCustom qtip-light',
	            	tip: {
	            		width: 22, height: 11, border: 0
	            	}
	            }
			  	});
			  });


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
				if((pressCtrl === true || pressCmd === true) && e.which == 90)
				{
					console.log("Press Cntr+Z");
					$('.repeatPrevClick').click();
					return false;
				}else if((pressCtrl === true || pressCmd === true) && e.which == 89){
					console.log("Press Cntr+Y");
					$('.repeatNextClick').click();
					return false;
				}

			});
			//Панель с полами
			var clickLayers = false;
			$('.layers').click(function(){
				if($('.panelFloor').hasClass("showContent")){
					$('.panelFloor').fadeOut(350);
				}else{
					$('.panelFloor').fadeIn(350);
				}
				$('.panelFloor').toggleClass("showContent");
				clickLayers = true;
			});
			//Закрыть панель с декорами по клику вне его
		    $(document).click(function (e){
		    	if($('.panelFloor').hasClass("showContent") === true && clickLayers === false)
		    	{
		    		
			    		var div = $(".panelFloor"); 
						if (!div.is(e.target) // если клик был не по нашему блоку
						    && div.has(e.target).length === 0) { // и не по его дочерним элементам
								$('.panelFloor').fadeOut(350);
								$('.panelFloor').toggleClass("showContent");
						}
				}
				clickLayers = false;
			});
			//Раскрывающаяся панель с декорами
			$('.iconMore').fancybox();
			$('.share').fancybox();
			/*$('.iconMore').click(function(){
				$('.allTextures').toggleClass("showContent");
				$('.allTextures').css({
					"max-height": $(window).height() - 100
				});
			});*/
			/*$('.currentTexture img').load(function(){
				console.log("textures!!!!!!!!!!!!!");
			});*/
			var bar = new ProgressBar.Circle('#progressbar', {
			  strokeWidth: 10,
			  easing: 'easeInOut',
			  duration: 1000,
			  color: '#483435',
			  trailColor: '#eee',
			  svgStyle: null,
			  step: function(state, circle) {

			    var value = Math.round(circle.value() * 100);
			    if (value === 0) {
			      circle.setText('');
			    } else {
			      circle.setText(value+'%');
			    }

			  }
			});
			bar.text.style.fontSize = '20px';
			bar.text.style.fontWeight = 700;
			bar.animate(0.4);

		var hrefUrl = "";
		var myShare = document.getElementById('my-share');
		var share = Ya.share2(myShare, {});

		var urlCommands = (function () {
		this.get = "";
		this.params = {};
		this.floor = "";
		this.events = {};
		this.default = {};
		this.countSVG = $('#default-hash').attr("data-stack");
		this.countTextures = $('#default-hash').attr("data-countTextures");

		for(var i=0; i < +this.countSVG; i++)
			{
				var parseTexture = $('#imageblock'+(+i+1)+', #imageblock'+(+i+1)+'Back').children().attr("xlink:href").split(/(\d)/);
				this.default[i] = parseTexture[1];
			}

		History.Adapter.bind(window,'statechange',function(){
	        this.checkHash();
	    });

		this.checkHash = function(){
			console.log("checkHash!!");
			this.get = window.location.search;
			if( ~this.get.indexOf('?') ) {
				this.parse();
			}else{
				this.init();
			}
		}

		this.init = function() {
				console.log("init!!");
				this.params = {};
				if($('.panelFloor').length)
					{
						var parseFloor = $('#floorPattern, #floorPatternBack').children().attr("xlink:href").split(/(\d)/);
						this.floor = parseFloor[1];
					}
				for(var i=0; i < +this.countSVG; i++)
					{
						var parseTexture = $('#imageblock'+(+i+1)+', #imageblock'+(+i+1)+'Back').children().attr("xlink:href").split(/(\d)/);
						this.params[i] = parseTexture[1];
					}
			this.urlUpdate();
		}

		this.parse = function() {
				console.log("parse!!");
				var data = this.get;
				data = data.replace('?','');
				if(~data.indexOf('floor')){
					var splitFloor = data.split('&');
					data = splitFloor[1];
					var valueFloor = splitFloor[0].split('=')[1];
					if (valueFloor > 0 && valueFloor <= 3) {//количество полов
		                this.floor = valueFloor;
		                if($('.floorIMG').hasClass("kitchenClass")){
							$('#floorRoom, #floorRoomBack').attr("src", "i/FloorKitchen-"+this.floor+".png");
						}
						$('#floorPattern, #floorPatternBack').children().attr("xlink:href", "i/Floor-"+this.floor+".jpg");
		            }
				}
				var valueBlocks = data.split('=')[1];
				valueBlocks = valueBlocks.split('-');
				
				if(+this.countSVG === valueBlocks.length)
				{
					console.log("+this.countSVG === ");
				this.params = valueBlocks;
					for (var i in this.params) {
						if(+this.params[i] > 0 && +this.params[i] <= +this.countTextures)
						{
							$('#imageblock'+(+i+1)+', #imageblock'+(+i+1)+'Back').children().attr("xlink:href", "i/decor-"+this.params[i]+".jpg");
							if($('#block'+(+i+1)).attr("data-connect")){
							var blocksConnect = $('#block'+(+i+1)).attr("data-connect").split(',');
							switch(blocksConnect.length){
							case 2:
								$('#imageblock'+blocksConnect[0]+', #imageblock'+blocksConnect[1],
									'#imageblock'+blocksConnect[0]+'Back, #imageblock'+blocksConnect[1]+'Back').children().attr("xlink:href", "i/decor-"+this.params[i]+".jpg");
							break
							case 1:
								$('#imageblock'+blocksConnect[0]).children().attr("xlink:href", "i/decor-"+this.params[i]+".jpg");
							break
							}
						}
						}else{
							//console.log(this.default[i]);
							//брать дефолтный
							$('#imageblock'+(+i+1)+', #imageblock'+(+i+1)+'Back').children().attr("xlink:href", "i/decor-"+this.default[i]+".jpg");
							this.params[i] = this.default[i];
							this.urlUpdate();
						}
					}
				}else{
					console.log("Init for parse");
					this.init();
				}
			}

		this.urlPush = function(position, texture) {
			if($('#block'+(+position+1)).attr("data-reflection")){
				console.log("+++-+--+-");
				return
			}
			this.params[position] = texture;
			this.urlUpdate();
		}
		this.urlPushFloor = function(texture) {
			this.floor = texture;
			this.urlUpdate();
		}
		this.urlUpdate = function(){
			console.log("urlUpdate!!");
			var url = '?';
			if(this.floor != "")
			{
				url += "floor="+this.floor+"&"
			}
			url += "blocks="
			for (var i in this.params)
			{
				url += this.params[i]+'-';
			}
			url = url.slice(0,-1);
			this.get = url;
			hrefUrl = History.getState().url;
			console.log("url", url); 
			if(~hrefUrl.indexOf('\?')){
				hrefUrl = window.location.href.slice(0,window.location.href.indexOf('\?'));
			}
			hrefUrl += url;
			console.log("hrefUrl", hrefUrl);
			window.history.pushState(null, null, hrefUrl);
			share.updateContent({
			    url: hrefUrl
			});
		}
		return this;
	})();
			urlCommands.checkHash();
			//Выбор текстуры
			$('.currentTexture').click(function(e){
				if (prevTexture != undefined)
					prevTexture.children().css("box-shadow", "");
				currentTexture = $(this);
				prevTexture = $(this);
				$(this).children().css({
					"box-shadow": "0 0 0 3px #483434",
					"box-sizing": "border-box"
				});
				if(window.innerWidth <= 768){
					$('.iconMore').click();
				}
			});
			$('.currentTexture2').click(function(e){
		        e.preventDefault();
		        slideIndex = $(this).index();
		        $('.textures').slick('slickGoTo', parseInt(slideIndex), false);
		        console.log("currentTexture",$('.currentTexture').eq(slideIndex), "slideIndex", slideIndex, "this", $(this));
		        $('.currentTexture').eq(slideIndex + shiftSlider).click();
		        $('.allTextures').removeClass("showContent");
		        $.fancybox.close();
		    });

			//Выбор пола
			$('.floorIMG').click(function(e){
				var currentFloor = $(this);
				if(currentFloor.hasClass("kitchenClass")){
				$('#floorRoomBack').attr("src", currentFloor.attr("data-src")).css("opacity", 1);
				$('#floorRoom').animate({
				    opacity: 0
				  },
				  {
					duration: 600,
					complete: function(){
						$('#floorRoom').attr("src", currentFloor.attr("data-src"));
						$('#floorRoom').css("opacity", 1);
						$('#floorRoomBack').css("opacity", 0);
					}
					});
				}else
				{
				$('#floorPatternBack').children().attr("xlink:href", currentFloor.attr("data-src"));
				$('#floor').animate({
				    opacity: 0
				  },
				  {
					duration: 600,
					complete: function(){
						$('#floorPattern').children().attr("xlink:href", currentFloor.attr("data-src"));
						$('#floor').css("opacity", 1);
					}
					});
				}
				var pushFloor = currentFloor.attr("data-src").split(/(\d)/);
				urlCommands.urlPushFloor(pushFloor[1]);
				//urlCommands.urlUpdate();
				$('.layers').click();
			});
			
			//Отменить/Повторить
			var stack = [];
			//Заполняем стек начальными текстурами
			$('.classSVG').each(function(){
				var stackAdd = new clickArea($(this).attr("id"), $('#image'+$(this).attr("id")).children().attr("xlink:href"));
				stack.push(stackAdd);
				var blockAdd = new areaSVG($('#'+$(this).attr("id")), $('#'+$(this).attr("data-clip")), $(this).attr("data-radius"));
				blocks.push(blockAdd);
			});
			var stackRepeat = [];
			var stackCancel = false;
			var checkConnectPrev = false;
			var checkConnectPrevThree = 0;
			var checkConnectNext = false;
			var checkConnectNextThree = 0;
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
							/*$('#'+lastElemStack.path).css({"fill":prevElemStack.texture});
							$('#'+lastElemStack.path+'Back').css({"fill":prevElemStack.texture});*/
							$('#image'+lastElemStack.path).children().attr("xlink:href", prevElemStack.texture);
							$('#image'+lastElemStack.path+'Back').children().attr("xlink:href", prevElemStack.texture);
							var positionElStack = lastElemStack.path.slice(5) - 1;
							var textureElStack = prevElemStack.texture.split(/(\d)/);
							urlCommands.urlPush(positionElStack, textureElStack[1]);
							//urlCommands.urlUpdate();
							stackCancel = true;
							if($('#'+prevElemStack.path).attr("data-connect"))
							{
								var blocksConnect = $('#'+prevElemStack.path).attr("data-connect").split(',');
								if(blocksConnect.length === 2 && checkConnectPrevThree < 2)
								{
									checkConnectPrevThree++;
									console.log(checkConnectPrevThree);
									$('.repeatPrevClick').click();
								}else if(blocksConnect.length === 1 && checkConnectPrev === false){
									checkConnectPrev = true;
									$('.repeatPrevClick').click();
								}
							}
							stackRepeat.push(lastElemStack);
						}
					else{
						stack.push(lastElemStack);
					}
					if(stack.length > $('#default-hash').attr("data-stack"))
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
					checkConnectPrev = false;
					checkConnectPrevThree = 0;
				}
			});

			//Повторить
			$('.repeatNextClick').click(function(e){
				if(stackRepeat.length != 0){
					console.log("stackRepeat", stackRepeat);
					var lastElemStackRepeat= stackRepeat.pop();
					/*$('#'+lastElemStackRepeat.path).css({"fill":lastElemStackRepeat.texture});
					$('#'+lastElemStackRepeat.path+'Back').css({"fill":lastElemStackRepeat.texture});*/
					$('#image'+lastElemStackRepeat.path).children().attr("xlink:href", lastElemStackRepeat.texture);
					$('#image'+lastElemStackRepeat.path+'Back').children().attr("xlink:href", lastElemStackRepeat.texture);
					var positionElStackR = lastElemStackRepeat.path.slice(5) - 1;
					var textureElStackR = lastElemStackRepeat.texture.split(/(\d)/);
					urlCommands.urlPush(positionElStackR, textureElStackR[1]);
					//urlCommands.urlUpdate();
					stack.push(lastElemStackRepeat);
					$(this).removeClass('repeatNext').addClass('repeatNext2');
					if($('#'+lastElemStackRepeat.path).attr("data-connect"))
						{
							var blocksConnect = $('#'+lastElemStackRepeat.path).attr("data-connect").split(',');
							if(blocksConnect.length === 2 && checkConnectNextThree < 2)
							{
								checkConnectNextThree++;
								$('.repeatNextClick').click();
							}else if(blocksConnect.length === 1 && checkConnectNext === false){
								checkConnectNext = true;
								$('.repeatNextClick').click();
							}
						}
					checkConnectNext = false;
					checkConnectNextThree = 0;
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
			   this.animateSVG = function(x, y, clickEl, currentTextureLoc){
			   	console.log(circle);
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
				//Изменение хэша
				var positionEl = clickEl.slice(5) - 1; // из block12 получаем 12
					var textureEl = currentTextureLoc.children().attr("src").split(/(\d)/);
					urlCommands.urlPush(positionEl, textureEl[1]);
					//urlCommands.urlUpdate();
				circle.animate(
					  {
					  	'r': radius
					  },{
					  		duration: 550,
					   		step: function(now, fx) {
					   			$(this).attr({"r": now});
					   			if(stackCancel === true){
					   				$('#image'+clickEl).children().attr({
										"x": tempX,
										"y": tempY
									});
									return
					   			}
					   		},
					   		complete: function(){
					   			console.log(stackCancel);
					   			if(stackCancel === false){
						   			$('#image'+clickEl+'Back').children().attr({
						   				"xlink:href": currentTextureLoc.children().attr("src"),
										"x": $('#image'+clickEl).children().attr("x"),
										"y": $('#image'+clickEl).children().attr("y")
									});
								stackCancel = false;
						   		}
					   		}
					  });

			   };
			};
			console.log(blocks);
			//Объект SVG + текстура (для отменить/повторить)
			function clickArea(path, texture)
			{
				this.path = path;
				this.texture = texture;
			}

			/* --------------------------- */
			/*var block1 = new areaSVG($('#block1'), $('#clipping1 circle'), 80);
			var block2 = new areaSVG($('#block2'), $('#clipping2 circle'), 260);
			var block3 = new areaSVG($('#block3'), $('#clipping3 circle'), 260);
			var block4 = new areaSVG($('#block4'), $('#clipping4 circle'), 260);
			var block5 = new areaSVG($('#block5'), $('#clipping5 circle'), 80);
			var block6 = new areaSVG($('#block6'), $('#clipping6 circle'), 100);
			var block7 = new areaSVG($('#block7'), $('#clipping7 circle'), 260);

			var block8 = new areaSVG($('#block8'), $('#clipping8 circle'), 220);
			var block9 = new areaSVG($('#block9'), $('#clipping9 circle'), 150);
			var block10 = new areaSVG($('#block10'), $('#clipping10 circle'), 70);
			var block11 = new areaSVG($('#block11'), $('#clipping11 circle'), 70);
			var block12 = new areaSVG($('#block12'), $('#clipping12 circle'), 220);
			var block13 = new areaSVG($('#block13'), $('#clipping13 circle'), 220);
			var block14 = new areaSVG($('#block14'), $('#clipping14 circle'), 220);

			var block15 = new areaSVG($('#block15'), $('#clipping15 circle'), 250);
			var block16 = new areaSVG($('#block16'), $('#clipping16 circle'), 250);
			var block17 = new areaSVG($('#block17'), $('#clipping17 circle'), 80);
			var block18 = new areaSVG($('#block18'), $('#clipping18 circle'), 250);
			var block19 = new areaSVG($('#block19'), $('#clipping19 circle'), 250);
			var block20 = new areaSVG($('#block20'), $('#clipping20 circle'), 90);
			var block21 = new areaSVG($('#block21'), $('#clipping21 circle'), 90);*/

			var clickElem;
	    	var offset;
	    	var parent;
	    	var tempX;
	    	var tempY;

			//Кликнули по любой области SVG
			$('.classSVGFront').click(function(e){
				clickElem = $(this).attr("data-id");//block1
				if(currentTexture != undefined && currentTexture.children().attr("src") != $('#image'+clickElem).children().attr("xlink:href"))
				{
					//Получаем элемент из центрального слоя
					
					// = $(this).attr("data-location");//Up
					//$('#'+clickElem).css({"fill": "url(#image"+clickElem+")"});
					//закинуть текущую текстуру в pattern
					$('#image'+clickElem).children().attr("xlink:href", currentTexture.children().attr("src"));
					console.log("#image", $('#image'+clickElem));
					offset = $(this).position();
				    parent = $('.rel').offset();

				    var relativeX = (offset.left - parent.left) / $('#room').width() * 100+ ((e.pageX / $('#room').width() * 100) - (offset.left / $('#room').width() * 100));
				    var relativeY = ((offset.top - parent.top) / $('#room').height()) * 100+ ((e.pageY / $('#room').height() * 100) - (offset.top / $('#room').height() * 100));
				    console.log(relativeX, relativeY);
				    //Добавить текущий SVG и текстуру в стек
				    //var stackObj = new clickArea(clickElem, "url(#" + currentTexture.children().attr("src") +  + ")");
				    /*var stackObj = new clickArea(clickElem, $('#image'+clickElem).children().attr("xlink:href"));
				    console.log(stack);*/
				    //if(stackObj.path != stack[stack.length - 1].path || stackObj.texture != stack[stack.length - 1].texture)

				    //искать в стеке такое же сочетание path+texture
				    var elemRepeat = false;
				    /*stack.forEach(function(item, i, stack){
				    	if(stackObj.path === item.path && stackObj.texture === item.texture)
				    	{
				    		elemRepeat = true;
				    	}
				    })
				    if(elemRepeat === false)
				    {
				    	console.log("add!");
				    	stack.push(stackObj);
				    }*/
				    var stackObj = new clickArea(clickElem, $('#image'+clickElem).children().attr("xlink:href"));
					stack.push(stackObj);
					console.log(stack);
				    if(stack.length > $('#default-hash').attr("data-stack")){//Если с анимацией пола то 22
						$('.repeatPrev').removeClass('repeatPrev').addClass('repeatPrev2');
					}else{
						$('.repeatPrev2').removeClass('repeatPrev2').addClass('repeatPrev');
					}
					stackRepeat = [];
					$('.repeatNext2').removeClass('repeatNext2').addClass('repeatNext');
					//сохраняем старые координаты перед закраской
					tempX = $('#image'+clickElem).children().attr("x");
					tempY = $('#image'+clickElem).children().attr("y");
					//Рандомная закраска
					var randX = Math.floor(Math.random() * ($('#image'+clickElem).children().attr("rand-max-x") - $('#image'+clickElem).children().attr("rand-min-x") + 1 )) + +$('#image'+clickElem).children().attr("rand-min-x");
					var randY = Math.floor(Math.random() * ($('#image'+clickElem).children().attr("rand-max-y") - $('#image'+clickElem).children().attr("rand-min-y") + 1 )) + +$('#image'+clickElem).children().attr("rand-min-y");
					$('#image'+clickElem).children().attr({
						"x": randX,
						"y": randY
					});
					stackCancel = false;

					blocks[clickElem.slice(5) - 1].animateSVG(relativeX, relativeY, clickElem, currentTexture);
					//console.log(($('#'+clickElem).attr("data-connect").split(',').length));
					if($('#'+clickElem).attr("data-connect")){
						var blocksConnect = $('#'+clickElem).attr("data-connect").split(',');
						switch(blocksConnect.length){
							case 2:
								$('#imageblock'+blocksConnect[0]+', #imageblock'+blocksConnect[1]).children().attr("xlink:href", currentTexture.children().attr("src"));
								if($('#block'+blocksConnect[0]).attr("data-coordX")){
									relativeX = $('#block'+blocksConnect[0]).attr("data-coordX");
									relativeY = $('#block'+blocksConnect[0]).attr("data-coordY");
								}
								blocks[blocksConnect[0] - 1].animateSVG(relativeX, relativeY, "block"+blocksConnect[0], currentTexture);
								stack.push(new clickArea("block"+blocksConnect[0], $('#imageblock'+blocksConnect[0]).children().attr("xlink:href")));
								if($('#block'+blocksConnect[1]).attr("data-coordX")){
									relativeX = $('#block'+blocksConnect[1]).attr("data-coordX");
									relativeY = $('#block'+blocksConnect[1]).attr("data-coordY");
								}
								blocks[blocksConnect[1] - 1].animateSVG(relativeX, relativeY, "block"+blocksConnect[1], currentTexture);
								stack.push(new clickArea("block"+blocksConnect[1], $('#imageblock'+blocksConnect[1]).children().attr("xlink:href")));
							break
							case 1:
								$('#imageblock'+blocksConnect[0]).children().attr("xlink:href", currentTexture.children().attr("src"));
								
								if($('#block'+blocksConnect[0]).attr("data-coordX")){
									relativeX = $('#block'+blocksConnect[0]).attr("data-coordX");
									relativeY = $('#block'+blocksConnect[0]).attr("data-coordY");
									console.log(relativeX, relativeY);
								}
								blocks[blocksConnect[0] - 1].animateSVG(relativeX, relativeY, "block"+blocksConnect[0], currentTexture);
								stack.push(new clickArea("block"+blocksConnect[0], $('#imageblock'+blocksConnect[0]).children().attr("xlink:href")));
							break
						}
					}


					/*switch(clickElem){
						case "block1":
							block1.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block2":
							block2.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							$('#imageblock7, #imageblock4').children().attr("xlink:href", currentTexture.children().attr("src"));
							block7.animateSVG(relativeX, relativeY, "block7", currentTexture);
							stack.push(new clickArea("block7", $('#imageblock7').children().attr("xlink:href")));
							block4.animateSVG(relativeX, relativeY, "block4", currentTexture);
							stack.push(new clickArea("block4", $('#imageblock4').children().attr("xlink:href")));
							break
						case "block3":
							block3.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block4":
							block4.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							$('#imageblock2, #imageblock7').children().attr("xlink:href", currentTexture.children().attr("src"));
							block2.animateSVG(relativeX, relativeY, "block2", currentTexture);
							stack.push(new clickArea("block2", $('#imageblock2').children().attr("xlink:href")));
							block7.animateSVG(relativeX, relativeY, "block7", currentTexture);
							stack.push(new clickArea("block7", $('#imageblock7').children().attr("xlink:href")));
							break
						case "block5":
							block5.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block6":
							block6.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block7":
							block7.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							$('#imageblock2, #imageblock4').children().attr("xlink:href", currentTexture.children().attr("src"));
							block2.animateSVG(relativeX, relativeY, "block2", currentTexture);
							stack.push(new clickArea("block2", $('#imageblock2').children().attr("xlink:href")));
							block4.animateSVG(relativeX, relativeY, "block4", currentTexture);
							stack.push(new clickArea("block4", $('#imageblock4').children().attr("xlink:href")));
							break
						case "block8":
							block8.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block9":
							block9.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block10":
							block10.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block11":
							block11.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block12":
							block12.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							$('#imageblock13').children().attr("xlink:href", currentTexture.children().attr("src"));
							block13.animateSVG(relativeX, relativeY, "block13", currentTexture);
							stack.push(new clickArea("block13", $('#imageblock13').children().attr("xlink:href")));
							break
						case "block13":
							block13.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							$('#imageblock12').children().attr("xlink:href", currentTexture.children().attr("src"));
							block12.animateSVG(relativeX, relativeY, "block12", currentTexture);
							stack.push(new clickArea("block12", $('#imageblock12').children().attr("xlink:href")));
							break
						case "block14":
							block14.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block15":
							block15.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block16":
							block16.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							$('#imageblock18, #imageblock19').children().attr("xlink:href", currentTexture.children().attr("src"));
							block18.animateSVG(relativeX, relativeY, "block18", currentTexture);
							stack.push(new clickArea("block18", $('#imageblock18').children().attr("xlink:href")));
							block19.animateSVG(relativeX, relativeY, "block19", currentTexture);
							stack.push(new clickArea("block19", $('#imageblock19').children().attr("xlink:href")));
							break
						case "block17":
							block17.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block18":
							block18.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							$('#imageblock19, #imageblock16').children().attr("xlink:href", currentTexture.children().attr("src"));
							block19.animateSVG(relativeX, relativeY, "block19", currentTexture);
							stack.push(new clickArea("block19", $('#imageblock19').children().attr("xlink:href")));
							block16.animateSVG(relativeX, relativeY, "block16", currentTexture);
							stack.push(new clickArea("block16", $('#imageblock16').children().attr("xlink:href")));

							break
						case "block19":
							block19.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							$('#imageblock16, #imageblock18').children().attr("xlink:href", currentTexture.children().attr("src"));
							block16.animateSVG(relativeX, relativeY, "block16", currentTexture);
							stack.push(new clickArea("block16", $('#imageblock16').children().attr("xlink:href")));
							block18.animateSVG(relativeX, relativeY, "block18", currentTexture);
							stack.push(new clickArea("block18", $('#imageblock18').children().attr("xlink:href")));
							break
						case "block20":
							block20.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
						case "block21":
							block21.animateSVG(relativeX, relativeY, clickElem, currentTexture);
							break
					}*/
				}

			});
		
		$('.textures').slick({
      	nextArrow: $('.arrowNext'),
	    prevArrow: $('.arrowPrev'),
	    dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 8,
		slidesToScroll: 8,
		responsive: [
			    {
			      breakpoint: 1241,
			      settings: {
			        slidesToShow: 6,
			        slidesToScroll: 6
			      }
			    },
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3
			      }
			    },
			    {
			    	breakpoint: 768,
			    	settings: {
			    	arrows: false,
			    	speed: 400,
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
      });
		});