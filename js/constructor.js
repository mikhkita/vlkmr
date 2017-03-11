var fullSizeCheck = false;
var blocks = [];
var shiftSlider;
var currentTexture;
var currentTextureID;
var prevTexture;
var prevTexturePopup;
var currentFloor;
var prevFloor;
var progressbarValue = 0.3;
var decorsID = [];
var floorsID = [];
var stackTextures = [];
var stackTexturesCopy = [];
var stackTexturesCount;

$(document).ready(function(){
	var valueInc = 0.4 / ($('.popUpTexture').length + $('.floors').length);
	var height = 140;
	if( isIE ){
    	$('.rel').addClass("hide");
    	$('.rel').css("opacity", 1);
    }
    $('#roomSVGBack pattern image.defaultRand').each(function(){
		var randX = Math.floor(Math.random() * ($(this).attr("rand-max-x") - $(this).attr("rand-min-x") + 1 )) + +$(this).attr("rand-min-x");
		var randY = Math.floor(Math.random() * ($(this).attr("rand-max-y") - $(this).attr("rand-min-y") + 1 )) + +$(this).attr("rand-min-y");
		$(this).attr({
			"x": randX,
			"y": randY
		});
		//console.log($('#imageblock'+$(this).attr("data-number")+'Back'));
		$('#imageblock'+$(this).attr("data-number")+'Back').children().attr({
			"x": randX,
			"y": randY
		});
    });
    
    /*------Прогрессбар----------*/
	function ProgressBarInc(value){
	  	progressbarValue += value;
        bar.animate(progressbarValue);
	}

	$('.popUpTexture').each(function(){
		var src;
		if(isRetina || isMobile){
			src = $(this).attr("data-retina-image-mini");
			$(this).attr("data-src", $(this).attr("data-retina-image"));
		}else{
			src = $(this).attr("data-image-mini");
			$(this).attr("data-src", $(this).attr("data-image"));
		}
        $(this).css("background-image", "url('"+src+"')");
        decorsID.push($(this).attr("data-id"));
        var img = new Image();
    	img.src = src;
   		img.onload = function(){
   			ProgressBarInc(valueInc);
    	}
    	$(this).click();
    });

	$('.floors').each(function(){
        var src = $(this).attr( (isRetina || isMobile)?"data-retina-image":"data-image");
        $(this).attr("data-src", src);
        var img = new Image();
    	img.src = src;
   		img.onload = function(){
   			ProgressBarInc(valueInc);
    	}
        floorsID.push($(this).attr("data-id"));
    });

    //var srcMain = $('.mainTexture').attr("data-src", $(this).attr( (isRetina || isMobile)?"data-retina-image":"data-image"));
    //$('.mainTexture').css("background-image", "url('i/decor-1-mini.jpg')");

	//Загрузка полов в выпадающей панели
	$('.floorIMG').each(function(){
        var src = $(this).attr( (isRetina || isMobile)?"data-retina-image":"data-image");
        $(this).attr("data-src", src);
    });

	//Загрузка комнаты
    $('#room').attr("src", $('#room').attr( (isRetina || isMobile)?"data-retina-image":"data-image"));
	var imgRoom = new Image();
    imgRoom.src = $('#room').attr("src");
   	imgRoom.onload = function(){
   		ProgressBarInc(0.3);
    }
    /*-----------------------------------*/

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
		if(fullSizeCheck === true || isMobile === true || isSmallTablet === true){
			FullWidth();
		}else{
			$('#room, #floorRoom, #floorRoomBack, #roomSVG, #roomSVGFront, #roomSVGBack').css({
				"height": $(window).height() - height,
				"width": "auto"
			});
		}
		if($('#room').width() > $('.b-wide-block').width()){
			$('#room, #floorRoom, #floorRoomBack, #roomSVG, #roomSVGFront, #roomSVGBack').css({
				"height": "auto",
				"width": $('.b-wide-block').width()
			});
		}
		//$('.rel').css("display", "block");
		
		$('.rel').css({"width": $('#room').width(), "height": $('#room').height()});
		$('.relBackground').css({"height": ""});
		
		if(window.innerWidth >= 1240){
			stackTexturesUpdate(9);//считается вместе с главной текстурой
		}
		if(window.innerWidth < 1240 && window.innerWidth > 1024){
			stackTexturesUpdate(6);
		}
		if(window.innerWidth <= 1024 && window.innerWidth > 768){
			stackTexturesUpdate(3);
		}
		if(window.innerWidth <= 768){
			stackTexturesUpdate(0);
		}
	});

	function stackTexturesUpdate(elements){
		if(stackTexturesCount !== elements){
			//var stackTexturesCopy = [].concat(stackTextures);
			//console.log("++++++",stackTexturesCount,elements);
			if(stackTexturesCount > elements){//значит мы сужаем окно
				$(".currentTexture:gt("+(elements-2)+")").addClass("hide");
				stackTextures.splice(elements, stackTexturesCount-elements);
				//console.log("------",stackTexturesCopy,stackTextures);
			}else{//значит мы расширяем окно
				$(".currentTexture:lt("+(elements-1)+")").removeClass("hide");
				stackTextures = [].concat(stackTexturesCopy);
				//console.log("*******",stackTexturesCopy,stackTextures);
			}
			stackTexturesCount = elements;
			//console.log("AFTER",stackTexturesCount,elements, "length - ",stackTextures.length);
		}
		
	}

	if(getCookie("size") === "full"){
		FullWidth();
		$('.fullSize[title]').qtip('option', 'content.text', 'Уместить по высоте');
		$('.icon-small-size').css("display", "inline-block");
		$('.icon-full-size').css("display", "none");
		fullSizeCheck = true;
	}

	$(window).load(function(e){
		//начать загружать большие декоры
		$('.popUpTexture').each(function(){
	        var src = $(this).attr("data-src");
	        //$(this).css("background-image", "url('"+src+"')");
	        var img = new Image();
	        img.src = src;
	    });
	});

	function FullWidth(){
		var curWidth = $('#room').width();
		$('#room, #floorRoom, #floorRoomBack').css({
			"height": "auto",
			"width": $('.b-wide-block').width()
		});
		var autoHeight = $('#room').height();
		$('.rel, #room, #floorRoom, #floorRoomBack, #roomSVG, #roomSVGFront, #roomSVGBack').width(curWidth).css(
		{
			height: autoHeight,
			width: $('.b-wide-block').width()
		});
	}


	$('.fullSize').click(function(){
		var date = new Date;
		date.setDate(date.getFullYear() + 1);
		if(fullSizeCheck === false){
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
			$('.fullSize').qtip('option', 'content.text', $(this).attr("data-title-small"));
			$('.icon-small-size').css("display", "inline-block");
			$('.icon-full-size').css("display", "none");
			setCookie("size","full", date);
			fullSizeCheck = true;
		}else 
			if(fullSizeCheck === true && $('.rel').height() > $(window).height() - 100){
				var curHeight = $('#room').height();
				$('#room, #floorRoom, #floorRoomBack').css({
					"height": $(window).height() - height,
					"width": "auto"
				});
				var autoWidth = $('#room').width();
				$('.rel, #room, #floorRoom, #floorRoomBack, #roomSVG, #roomSVGFront, #roomSVGBack').height(curHeight).animate(
				{
					height: $(window).height() - height,
					width: autoWidth
				});
				$('.fullSize').qtip('option', 'content.text', $(this).attr("data-title-full"));
				$('.icon-small-size').css("display", "none");
				$('.icon-full-size').css("display", "inline-block");
				setCookie("size","small", date);
				fullSizeCheck = false;
		}
	});
	$('.repeatPrev[title], .repeatPrev2[title], .repeatNext[title], .repeatNext2[title], .layers[title]').qtip({
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

	$('.iconDecors[title], .share[title]').qtip({
	  	position: {
            my: 'bottom center',
            at: 'top center',
            adjust: {
	            y: -7
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

	$('.popUpTexture[title]').each(function(){
	  	$(this).qtip({
	  		position: {
	            my: 'bottom center',
	            at: 'top center',
	            adjust: {
		            y: -8
		        }
        	},
	        style: {
				classes: 'qtipFont qtipCustomBrown qtip-light',
	        	tip: {
	        		width: 22, height: 11, border: 0
	        	}
	        },
	        hide: {
		        effect: function(offset) {
		        	$(this).slideDown(100); // "this" refers to the tooltip
		        }
		    }
	  	});
	});

	$('.share, .iconDecors, .mainTextureContainer').click(function(){
		$('.iconDecorsQtip').qtip('hide');
	});

	$("body").on("scroll mousewheel", ".fancybox-inner",function(){
		 $('.popUpTexture[title]').qtip('hide');
	});

	function qtipScroll(){
		//console.log($(this).scrollTop(),  $(".panelDecor").offset().top);
		if($(this).scrollTop() + 55 > $(".panelDecor").offset().top){
			$('.repeatPrev[title], .repeatPrev2[title], .repeatNext[title], .repeatNext2[title], .layers[title]').qtip({
			  	position: {
	                at: 'bottom center',
	                my: 'top center',
	                adjust: {
			            y: 5
			        }
	            },
	            style: {
	    			classes: 'qtipFont qtipCustomBrown qtip-light',
	            	tip: {
	            		width: 22, height: 11, border: 0
	            	}
	            }
			});
			$('.iconDecors[title], .share[title]').qtip({
			  	position: {
	                at: 'bottom center',
	                my: 'top center',
	                adjust: {
			            y: 7
			        }
	            },
	            style: {
	    			classes: 'qtipFont qtipCustomBrown qtip-light',
	            	tip: {
	            		width: 22, height: 11, border: 0
	            	}
	            },
	            hide: {
			        event: 'click mouseleave'
			    }
			});
			$('.currentTexture[title], .mainTexture[title]').each(function(){
			  	$(this).qtip({
			  		position: {
	                at: 'bottom center',
	                my: 'top center',
		                adjust: {
				            y: 9
				        }
	            	},
		            style: {
		    			classes: 'qtipFont qtipCustomBrown qtip-light',
		            	tip: {
		            		width: 22, height: 11, border: 0
		            	}
		            },
		            hide: {
				        event: 'click mouseleave'
				    }
			  	});
			});
		}else{
			$('.repeatPrev[title], .repeatPrev2[title], .repeatNext[title], .repeatNext2[title], .layers[title]').qtip({
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
			$('.iconDecors[title], .share[title]').qtip({
			  	position: {
	                my: 'bottom center',
	                at: 'top center',
	                adjust: {
			            y: -7
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
			$('.currentTexture[title], .mainTexture[title]').each(function(){
			  	$(this).qtip({
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
		            },
		            hide: {
				        event: 'click mouseleave'
				    }
			  	});
			});
		}
	}

	$(window).scroll(function(){
		qtipScroll();
	});

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
		if((pressCtrl === true || pressCmd === true) && e.which === 90)
		{
			$('.repeatPrevClick').click();
			return false;
		}else if((pressCtrl === true || pressCmd === true) && e.which === 89){
			$('.repeatNextClick').click();
			return false;
		}

	});
	//Панель с полами
	var clickLayers = false;
	$('.layers').click(function(){
		if($('.panelFloor').hasClass("showContent")){
			closeFloor();
		}else{
			openFloor();
		}
		$('.panelFloor').toggleClass("showContent");
		clickLayers = true;
	});

	function openFloor(){
		if( isIE ){
            $(".panelFloor").fadeIn(250);
            TweenLite.to($(".panelFloor"), 0.25, { "top" : 0, ease : Quad.easeOut } );
        }else{
        	$(".panelFloor").addClass("opened");
        }
	}

	function closeFloor(){
		if( isIE ){
            $(".panelFloor").fadeOut(250);
            TweenLite.to($(".panelFloor"), 0.25, { "top" : 10, ease : Quad.easeOut } );
        }else{
        	$(".panelFloor").removeClass("opened");
        }
	}
	//Закрыть панель с декорами по клику вне его
    $(document).click(function (e){
    	if($('.panelFloor').hasClass("showContent") === true && clickLayers === false)
    	{
    		var div = $(".panelFloor"); 
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
					closeFloor();
					$('.panelFloor').toggleClass("showContent");
			}
		}
		clickLayers = false;
	});
    var checkLoad = true;
	var bar = new ProgressBar.Circle('#progressbar', {
		strokeWidth: 10,
		easing: 'easeInOut',
		duration: 800,
		color: '#483435',
		trailColor: '#eee',
		svgStyle: null,
		step: function(state, circle) {
		    var value = Math.round(circle.value() * 100);
		    if (value === 0) {
		      	circle.setText('');
		    }else{
		      	circle.setText(value+'%');
		    }
		    //console.log(progressbarValue);
		    /*if(value >= 70 && checkLoad === true) {
		    	checkLoad = false;
		    	bar.animate(0.99, {
				    duration: 5000,
				    easing: 'easeOut'
				});
		    }*/
		    if(value >= 100) {
		    	//bar.animate(1);
		    	if( isIE ){
		    		$('.progressbarContain').fadeOut(250);
	                $('.rel').fadeIn(500);
	            }else{
	            	$('.progressbarContain').addClass("hideContent");
	            	$('.rel').addClass("showContent");
	            }
	            if(window.innerWidth >= 1240){
					$('.popUpTexture').slice(0,9).click();
				}
				if(window.innerWidth < 1240 && window.innerWidth > 1024){
					$('.popUpTexture').slice(0,6).click();
				}
				if(window.innerWidth <= 1024 && window.innerWidth > 768){
					$('.popUpTexture').slice(0,3).click();
				}
	            $('.popUpTexture').eq(0).click();
			    $('.iconDecorsQtip[title]').qtip({
					position: {
			            my: 'right center',
			            at: 'right center',
			            adjust: {
				            x: -50,
				            y: 12
				        }
			        },
			        style: {
						classes: 'qtipFont qtipCustom qtip-light',
			        	tip: {
			        		width: 22, height: 11, border: 0
			        	}
			        },
			        show: {
			            ready: true // Show the tooltip when ready
			        },
				    hide: {
				        event: 'click'
				    },
				    events: {
				        hide: function (event, api) {
				            var $qtip = api;
				            $qtip.destroy();
				        }
				    }
				});
				qtipScroll();
	        	$(window).resize();
		    }
		}
	});

	bar.text.style.fontSize = '20px';
	bar.text.style.fontWeight = 700;
	bar.animate(progressbarValue);

	//Работа с хэшем

	var hrefUrl = "";
	var myShare = document.getElementById('my-share');
	var share = Ya.share2(myShare, {});

	var urlCommands = (function () {
		this.get = "";
		this.params = {};
		this.floor = "";
		this.events = {};
		this.default = {};
		this.defaultFloor = "";
		this.countSVG = $('#default-hash').attr("data-stack");
		this.countTextures = $('#default-hash').attr("data-countTextures");


		History.Adapter.bind(window,'statechange',function(){
		    this.checkHash();
		});

		this.checkHash = function(){
			this.get = window.location.search;
			var hash = $('#default-hash').attr("data-hash");
			if(~hash.indexOf('|')){
				this.defaultFloor = hash.split('|')[0]
				hash = hash.split('|')[1];
			}
			this.default = hash.split(',');
			if( ~this.get.indexOf('?') ) {
				this.parse();
			}else{
				this.init();
			}
		}

		this.init = function() {
			this.params = {};
			var hash = $('#default-hash').attr("data-hash");
			var hashArray = [];
			if(~hash.indexOf('|')){
				this.floor = hash.split('|')[0];
				hash = hash.split('|')[1];
			}
			this.params = hash.split(',');
			var path = $('.floors[data-id="'+this.floor+'"]').attr("data-src");
			if($('.floorIMG').hasClass("kitchenClass")){
				$('#floorRoom, #floorRoomBack').attr({
					"src": path,
					"data-id": this.floor
				});
			}
			$('#floorPattern, #floorPatternBack').children().attr({
				"xlink:href": path,
				"data-id": this.floor
			});

			for(var i=0; i < +this.countSVG; i++)
			{
				this.drawTexture(i);
			}
			this.urlUpdate(true);
		}

		this.drawTexture = function(i){
			path = $('.popUpTexture[data-id="'+this.params[i]+'"]').attr("data-src");
			$('#imageblock'+(+i+1)+', #imageblock'+(+i+1)+'Back').children().attr({
				"xlink:href": path,
				"data-id": this.params[i]
			});
		    var dataColor = $('.popUpTexture[data-id="'+this.params[i]+'"]').attr("data-color");
			$('.block'+(+i+1)+'BackSmall').attr("fill", dataColor);

			if($('#block'+(+i+1)).attr("data-connect")){
				var blocksConnect = $('#block'+(+i+1)).attr("data-connect").split(',');
				switch(blocksConnect.length){
					case 2:
						$('#imageblock'+blocksConnect[0]+', #imageblock'+blocksConnect[1]+
						', #imageblock'+blocksConnect[0]+'Back, #imageblock'+blocksConnect[1]+'Back').children().attr({
							"xlink:href": path,
							"data-id": this.params[i]
						});
						var dataColor = $('.popUpTexture[data-id="'+this.params[i]+'"]').attr("data-color");
						$('.block'+blocksConnect[0]+'BackSmall, .block'+blocksConnect[1]+'BackSmall').attr("fill", dataColor);
					break
					case 1:
						$('#imageblock'+blocksConnect[0]+', #imageblock'+blocksConnect[0]+'Back').children().attr({
							"xlink:href": path,
							"data-id": this.params[i]
						});
						var dataColor = $('.popUpTexture[data-id="'+this.params[i]+'"]').attr("data-color");
						$('.block'+blocksConnect[0]+'BackSmall').attr("fill", dataColor);
					break
				}
			}
		}

		this.parse = function() {
			var path;
			var data = this.get;
			data = data.replace('?','');
			if(~data.indexOf('floor')){
				var splitFloor = data.split('&');
				data = splitFloor[1];
				var valueFloor = splitFloor[0].split('=')[1];
				if($.inArray(valueFloor, floorsID) !== -1){
	                this.floor = valueFloor;
	                path = $('.floors[data-id="'+this.floor+'"]').attr("data-src");
	                if($('.floorIMG').hasClass("kitchenClass")){
						$('#floorRoom, #floorRoomBack').attr({
							"src": path,
							"data-id": this.floor
						});
					}
					$('#floorPattern, #floorPatternBack').children().attr({
						"xlink:href": path,
						"data-id": this.floor
					});
	            }else{
	            	path = $('.floors[data-id="'+this.defaultFloor+'"]').attr("data-src");
	            	if($('.floorIMG').hasClass("kitchenClass")){
						$('#floorRoom, #floorRoomBack').attr({
							"src": path,
							"data-id": this.defaultFloor
						});
					}
					$('#floorPattern, #floorPatternBack').children().attr({
						"xlink:href": path,
						"data-id": this.defaultFloor
					});
	            	this.floor = this.defaultFloor;
	            }
			}
			var valueBlocks = data.split('=')[1];
			valueBlocks = valueBlocks.split('-');
			
			if(+this.countSVG === valueBlocks.length)
			{
				this.params = valueBlocks;
				for (var i in this.params) {
					//if($('.currentTexture').find($('*[data-id="'+this.params[i]+'"]')))
					if($.inArray(this.params[i], decorsID) !== -1)
					{
						this.drawTexture(i);
					}else{
						//брать дефолтный
						path = $('.popUpTexture[data-id="'+this.default[i]+'"]').attr("data-src");
						$('#imageblock'+(+i+1)+', #imageblock'+(+i+1)+'Back').children().attr({
							"xlink:href": path,
							"data-id": this.params[i]
						});
						this.params[i] = this.default[i];
						this.urlUpdate(true);
					}
				}
			}else{
				this.init();
			}
			this.urlUpdate(true);
		}

		this.urlPush = function(position, texture) {
			if($('#block'+(+position+1)).attr("data-reflection")){
				return
			}
			this.params[position] = texture;
			this.urlUpdate(false);
		}
		this.urlPushFloor = function(texture) {
			this.floor = texture;
			this.urlUpdate(false);
		}
		this.urlUpdate = function(replace){
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
			if(~hrefUrl.indexOf('\?')){
				hrefUrl = window.location.href.slice(0,window.location.href.indexOf('\?'));
			}
			hrefUrl += url;
			if(replace === true){
				window.history.replaceState(null, null, hrefUrl);
			}else{
				window.history.pushState(null, null, hrefUrl);
			}
			share.updateContent({
			    url: hrefUrl
			});
		}
		return this;
	})();

	urlCommands.checkHash();//запустится при загрузке страницы

	//Выбор текстуры
	$(document).on("click", ".currentTexture", function(e){
		if (prevTexture != undefined){
			prevTexture.removeClass("activeTextureSlider");
			$('.allTextures').find('*[data-id="'+currentTexture.attr("data-id")+'"]').removeClass("activeTextureFancy");
		}
		currentTextureID = $(this).attr("data-slick-index");
		currentTexture = $(this);
		prevTexture = $(this);
		$(this).addClass("activeTextureSlider");
		//currentTexture.remove();
		//убрать с прежнего места
		//$('.textures div').first().addClass("currentTexture").removeClass("mainTexture activeTextureSlider fancy");

		//$('.textures div').first().addClass("currentTexture").removeClass("mainTexture activeTextureSlider fancy");
		//и поставить на новое
		$('.textures').prepend($('.mainTextureContainer .mainTexture').removeClass("mainTexture activeTextureSlider").addClass("currentTexture"));
		$('.mainTextureContainer').prepend(currentTexture.addClass("mainTexture activeTextureSlider fancy").removeClass("currentTexture"));
		//$('.textures').prepend($(this));
		//$('.textures div').first().addClass("mainTexture activeTextureSlider fancy").removeClass("currentTexture");
		prevTexturePopup.removeClass("activeTextureFancy");
		prevTexturePopup = $('.allTextures').find('*[data-id="'+currentTexture.attr("data-id")+'"]').addClass("activeTextureFancy");
		stackTextures.splice($.inArray(currentTexture.attr("data-id"), stackTextures), 1);
		stackTextures.unshift(currentTexture.attr("data-id"));
		//console.log(stackTextures);
	});
	$('.popUpTexture').click(function(e){
		if(!$(this).hasClass("activeTextureFancy")){
			var thisTexture = $(this).clone();
			if (prevTexturePopup != undefined){
				prevTexturePopup.removeClass("activeTextureFancy");
			}
			//console.log("POPUP",prevTexturePopup);
			prevTexturePopup = $(this);
			var dataID = thisTexture.attr("data-id");
			$(this).addClass("activeTextureFancy");
			//если такой элемент уже есть
			if($.inArray(dataID, stackTextures) !== -1){
				$('.currentTexture[data-id="'+dataID+'"]').remove();
				stackTextures.splice($.inArray(dataID, stackTextures), 1);
			}
			//если стек заполнен
			if(stackTextures.length >= stackTexturesCount){
				$('.currentTexture:last, .currentTexture.hide').remove();
				stackTextures.pop();
			}
			stackTextures.unshift(thisTexture.attr("data-id"));
			//console.log(stackTextures);
			thisTexture.addClass("mainTexture").removeClass("popUpTexture").qtip({
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
	            },
	            hide:{
			        event: 'click mouseleave'
			    }
		  	});
		  	//console.log($('.textures div').first());
		  	/*$('.textures div').first().addClass("currentTexture").removeClass("mainTexture activeTextureSlider fancy");
			$('.textures').prepend(thisTexture);
			currentTexture = $('.textures div').first().addClass("mainTexture activeTextureSlider fancy").removeClass("currentTexture").attr("href","#b-popup-decors");
			stackTexturesCopy = [].concat(stackTextures);
			thisTexture.click();*/
			//$('.mainTextureContainer').addClass("currentTexture").removeClass("mainTexture activeTextureSlider fancy");
			
			//перенести преыдущую текстуру
			$('.textures').prepend($('.mainTextureContainer .mainTexture').removeClass("mainTexture activeTextureSlider").addClass("currentTexture"));
			//поставить новую
			$('.mainTextureContainer').prepend(thisTexture);
			currentTexture = thisTexture.addClass("mainTexture activeTextureSlider fancy").removeClass("currentTexture");
			stackTexturesCopy = [].concat(stackTextures);
			thisTexture.click();
			//console.log("!!!AFTER",stackTexturesCount, "length - ",stackTextures.length);
	        $.fancybox.close();
		}
    });

	//Выбор пола
	$('.floorIMG').click(function(e){
		if (prevFloor != undefined){
			prevFloor.find(".b-floor-cont").removeClass("activeFloor");
		}
		currentFloor = $(this);
		prevFloor = $(this);
		$(this).find(".b-floor-cont").addClass("activeFloor");
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
		}else{
			$('#floorPatternBack').children().attr({
				"xlink:href": currentFloor.attr("data-src"),
				"data-id": currentFloor.attr("data-id")
			});
			$('#floor').animate({
			    opacity: 0
			},
			{
				duration: 600,
				complete: function(){
					$('#floorPattern').children().attr({
						"xlink:href": currentFloor.attr("data-src"),
						"data-id": currentFloor.attr("data-id")
					});
					$('#floor').css("opacity", 1);
				}
			});
		}
		var pushFloor = currentFloor.attr("data-id");
		urlCommands.urlPushFloor(pushFloor);
		//urlCommands.urlUpdate();
		$('.layers').click();
	});
	
	//Отменить/Повторить
	var stack = [];
	//Заполняем стек начальными текстурами
	$('.classSVG').each(function(){
		/*var stackAdd = new clickArea($(this).attr("id"), $('#image'+$(this).attr("id")).children().attr("xlink:href"));
		stack.push(stackAdd);
		var blockAdd = new areaSVG($('#'+$(this).attr("id")), $('#'+$(this).attr("data-clip")), $(this).attr("data-radius"));
		blocks.push(blockAdd);*/
		var stackAdd = new clickArea($(this).attr("id"), $('#image'+$(this).attr("id")).children().attr("data-id"));
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
			if(prevElemStack != undefined){
				//теперь нужно поменять текстуры
				/*$('#'+lastElemStack.path).css({"fill":prevElemStack.texture});
				$('#'+lastElemStack.path+'Back').css({"fill":prevElemStack.texture});*/
				$('#image'+lastElemStack.path+', #image'+lastElemStack.path+'Back').children().attr({
					"xlink:href": $('.popUpTexture[data-id="'+prevElemStack.texture+'"]').attr("data-src"),
					"data-id": prevElemStack.texture
				});
				var positionElStack = lastElemStack.path.slice(5) - 1;
				var textureElStack = prevElemStack.texture;
				urlCommands.urlPush(positionElStack, textureElStack);
				//urlCommands.urlUpdate();
				stackCancel = true;
				if($('#'+prevElemStack.path).attr("data-connect"))
				{
					var blocksConnect = $('#'+prevElemStack.path).attr("data-connect").split(',');
					if(blocksConnect.length === 2 && checkConnectPrevThree < 2)
					{
						checkConnectPrevThree++;
						$('.repeatPrevClick').click();
					}else if(blocksConnect.length === 1 && checkConnectPrev === false){
						checkConnectPrev = true;
						$('.repeatPrevClick').click();
					}
				}
				stackRepeat.push(lastElemStack);
				console.log(stack, stackRepeat);
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
			var lastElemStackRepeat= stackRepeat.pop();
			/*$('#'+lastElemStackRepeat.path).css({"fill":lastElemStackRepeat.texture});
			$('#'+lastElemStackRepeat.path+'Back').css({"fill":lastElemStackRepeat.texture});*/
			$('#image'+lastElemStackRepeat.path+', #image'+lastElemStackRepeat.path+'Back').children().attr({
				"xlink:href": $('.popUpTexture[data-id="'+lastElemStackRepeat.texture+'"]').attr("data-src"),
				"data-id": lastElemStackRepeat.texture
			});
			var positionElStackR = lastElemStackRepeat.path.slice(5) - 1;
			var textureElStackR = lastElemStackRepeat.texture;
			urlCommands.urlPush(positionElStackR, textureElStackR);
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
			$('.repeatPrev').removeClass('repeatPrev').addClass('repeatPrev2');
			console.log(stack, stackRepeat);
			checkConnectNext = false;
			checkConnectNextThree = 0;
		}
		if(stackRepeat.length === 0){
			$(this).removeClass('repeatNext2').addClass('repeatNext');
		}
	});

	//Анимация
	function areaSVG(path, circle, radius){

		this.path = path;
		this.circle = circle;
		this.radius = radius;
		this.animateSVG = function(x, y, clickEl, currentTextureLoc){
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
		var textureEl = currentTextureLoc.attr("data-id");
		urlCommands.urlPush(positionEl, textureEl);
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
		   			if(stackCancel === false){
			   			$('#image'+clickEl+'Back').children().attr({
			   				"xlink:href": currentTextureLoc.attr("data-src"),
			   				"data-id": currentTextureLoc.attr("data-id"),
							"x": $('#image'+clickEl).children().attr("x"),
							"y": $('#image'+clickEl).children().attr("y")
						});
					stackCancel = false;
			   		}
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

	var clickElem;
	var offset;
	var parent;
	var tempX;
	var tempY;

	//Кликнули по любой области SVG
	$('.classSVGFront').click(function(e){
		clickElem = $(this).attr("data-id");//block1
		if(currentTexture != undefined && currentTexture.attr("data-src") != $('#image'+clickElem).children().attr("xlink:href"))
		{
			//Заливка цветом панелей во floorIMG
		    var dataColor = currentTexture.attr("data-color");
		    //console.log($($(this).attr("data-smallTexture")));
			$($(this).attr("data-smallTexture")).attr("fill", dataColor);

			//закинуть текущую текстуру в pattern
			$('#image'+clickElem).children().attr({
				"xlink:href": currentTexture.attr("data-src"),
				"data-id": currentTexture.attr("data-id")
			});
			offset = $(this).position();
		    parent = $('.rel').offset();

		    var relativeX = (offset.left - parent.left) / $('#room').width() * 100+ ((e.pageX / $('#room').width() * 100) - (offset.left / $('#room').width() * 100));
		    var relativeY = ((offset.top - parent.top) / $('#room').height()) * 100+ ((e.pageY / $('#room').height() * 100) - (offset.top / $('#room').height() * 100));

		    //искать в стеке такое же сочетание path+texture
		    var elemRepeat = false;
		    var stackObj = new clickArea(clickElem, $('#image'+clickElem).children().attr("data-id"));
			stack.push(stackObj);
		    if(stack.length > $('#default-hash').attr("data-stack")){//Если с анимацией пола то 22
				$('.repeatPrev').removeClass('repeatPrev').addClass('repeatPrev2');
			}else{
				$('.repeatPrev2').removeClass('repeatPrev2').addClass('repeatPrev');
			}
			stackRepeat = [];
			console.log(stack, stackRepeat);
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
						$('#imageblock'+blocksConnect[0]+', #imageblock'+blocksConnect[1]).children().attr({
							"xlink:href": currentTexture.attr("data-src"),
							"data-id": currentTexture.attr("data-id")
						});
						if($('#block'+blocksConnect[0]).attr("data-coordX")){
							relativeX = $('#block'+blocksConnect[0]).attr("data-coordX");
							relativeY = $('#block'+blocksConnect[0]).attr("data-coordY");
						}
						blocks[blocksConnect[0] - 1].animateSVG(relativeX, relativeY, "block"+blocksConnect[0], currentTexture);
						stack.push(new clickArea("block"+blocksConnect[0], $('#imageblock'+blocksConnect[0]).children().attr("data-id")));
						if($('#block'+blocksConnect[1]).attr("data-coordX")){
							relativeX = $('#block'+blocksConnect[1]).attr("data-coordX");
							relativeY = $('#block'+blocksConnect[1]).attr("data-coordY");
						}
						blocks[blocksConnect[1] - 1].animateSVG(relativeX, relativeY, "block"+blocksConnect[1], currentTexture);
						stack.push(new clickArea("block"+blocksConnect[1], $('#imageblock'+blocksConnect[1]).children().attr("data-id")));
					break
					case 1:
						$('#imageblock'+blocksConnect[0]).children().attr({
							"xlink:href": currentTexture.attr("data-src"),
							"data-id": currentTexture.attr("data-id")
						});
						
						if($('#block'+blocksConnect[0]).attr("data-coordX")){
							relativeX = $('#block'+blocksConnect[0]).attr("data-coordX");
							relativeY = $('#block'+blocksConnect[0]).attr("data-coordY");
						}
						blocks[blocksConnect[0] - 1].animateSVG(relativeX, relativeY, "block"+blocksConnect[0], currentTexture);
						stack.push(new clickArea("block"+blocksConnect[0], $('#imageblock'+blocksConnect[0]).children().attr("data-id")));
					break
				}
			}
		}
	});

	/*var slider = $('.textures').slick({
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
	    }]
	});
	$('.textures').on('breakpoint', function(event, slick, breakpoint){
		if(breakpoint !== 768)
		{
			$('.textures').slick('slickGoTo', currentTextureID, false);
	        $('.currentTexture[data-slick-index="'+currentTextureID+'"]').click();
		}
	    //console.log($('.allTextures').find('*[data-id="8"]').first());
	    //$('.allTextures').find('*[data-id="8"]').first().click();
	});*/

	// возвращает cookie с именем name, если есть, если нет, то undefined
	function getCookie(name) {
		var matches = document.cookie.match(new RegExp(
		  	"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
		return matches ? decodeURIComponent(matches[1]) : undefined;
	}
	function setCookie(name, value, date) {
		var updatedCookie = name + "=" + value + "; expires="+ date;
		document.cookie = updatedCookie;
	}
	function deleteCookie(name) {
		setCookie(name, "", {expires: -1});
	}
});