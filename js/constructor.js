		var fullSizeCheck = false;
		var blocks = [];
		var shiftSlider;
		var currentTexture;
		var currentTextureID;
		var prevTexture;
		var currentFloor;
		var prevFloor;
		var progressbarValue = 0.3;
		var decorsID = [];
		var floorsID = [];

		$(document).ready(function(){
			var valueInc = 0.4 / ($('.currentTexture2').length * 2 + $('.floors').length);
			var height = 100;
			if( isIE ){
		    	$('.rel').addClass("hide");
		    	$('.rel').css("opacity", 1);
		    }
		    /*------Прогрессбар----------*/
			function ProgressBarInc(value) {
			  	progressbarValue += value;
                bar.animate(progressbarValue);
			}
			$('.currentTexture, .currentTexture2').each(function(){
				var src;
				if(isRetina || isMobile){
					src = $(this).attr("data-retina-image-mini");
					$(this).attr("data-src", $(this).attr("data-retina-image"));
				}else{
					src = $(this).attr("data-image-mini");
					$(this).attr("data-src", $(this).attr("data-image"));
				}
		        $(this).css("background-image", "url('"+src+"')");
		        var img = new Image();
            	img.src = src;
           		img.onload = function(){
           			ProgressBarInc(valueInc);
            	}
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

			//Загрузка полов в выпадающей панели
			$('.floorIMG').each(function(){
		        var src = $(this).attr( (isRetina || isMobile)?"data-retina-image":"data-image");
		        $(this).attr("data-src", src);
		    });

			$('.currentTexture').each(function(){
			 	decorsID.push($(this).attr("data-id"));
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
				if(fullSizeCheck === false){
					$('#room, #floorRoom, #floorRoomBack, #roomSVG, #roomSVGFront, #roomSVGBack').css({
						"height": $(window).height() - height,
						"width": "auto"
					});
				}else{
					FullWidth();
				}
					if($('#room').width() > $('.b-wide-block').width())
					{
						$('#room, #floorRoom, #floorRoomBack, #roomSVG, #roomSVGFront, #roomSVGBack').css({
							"height": "auto",
							"width": $('.b-wide-block').width()
						});
					}
					//$('.rel').css("display", "block");
					
					$('.rel').css({"width": $('#room').width(), "height": $('#room').height()});
					$('.relBackground').css({"height": ""});
					//fullSizeCheck = false;
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

			$(window).load(function(e){
				$('.slick-active').eq(0).click();
				//$(window).resize();
				if(getCookie("size") === "full"){
					FullWidth();
					$('.fullSize[title]').qtip('option', 'content.text', 'Уместить по высоте');
					$('.icon-small-size').css("display", "inline-block");
					$('.icon-full-size').css("display", "none");
					fullSizeCheck = true;
				}
				//начать загружать большие декоры
				$('.currentTexture').each(function(){
			        var src = $(this).attr( (isRetina || isMobile)?"data-retina-image":"data-image");
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
						$('.fullSize[title]').qtip('option', 'content.text', 'Уместить по высоте');
						$('.icon-small-size').css("display", "inline-block");
						$('.icon-full-size').css("display", "none");
						setCookie("size","full", date);
						fullSizeCheck = true;
					}else 
						if(fullSizeCheck === true && $('.rel').height() > $(window).height() - 100){
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

			  $('.iconMore[title], .share[title]').qtip({
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

			  $('.currentTexture[title]').each(function(){
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
	            }
			  	});
			  });
			  $('.currentTexture2[title]').each(function(){
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

			$("body").on("scroll mousewheel", ".fancybox-inner",function(){
				 $('.currentTexture2[title]').qtip('hide');
			});

			$(window).scroll(function(){
				if($(this).scrollTop() > 575){
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
				$('.iconMore[title], .share[title]').qtip({
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
		            },
		            hide: {
				        event: 'click mouseleave'
				    }
				  });
				$('.currentTexture[title]').each(function(){
				  	$(this).qtip({
				  		position: {
		                at: 'bottom center',
		                my: 'top center',
		                adjust: {
				            y: 8
				        }
		            },
		            style: {
	        			classes: 'qtipFont qtipCustomBrown qtip-light',
		            	tip: {
		            		width: 22, height: 11, border: 0
		            	}
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
				$('.iconMore[title], .share[title]').qtip({
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
				$('.currentTexture[title]').each(function(){
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
		            }
				  	});
				  });
			}
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
				if((pressCtrl === true || pressCmd === true) && e.which == 90)
				{
					$('.repeatPrevClick').click();
					return false;
				}else if((pressCtrl === true || pressCmd === true) && e.which == 89){
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
			    }else {
			      circle.setText(value+'%');
			    }
			    if (value >= 100) {
			    	if( isIE ){
			    		$('.progressbarContain').fadeOut(250);
		                $('.rel').fadeIn(500);
		            }else{
		            	$('.progressbarContain').addClass("hideContent");
		            	$('.rel').addClass("showContent");
		            }
                	$(window).resize();
			    }

			  }
			});
			bar.text.style.fontSize = '20px';
			bar.text.style.fontWeight = 700;
			bar.animate(progressbarValue);

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
			path = $('.currentTexture[data-id="'+this.params[i]+'"]').attr("data-src");
					$('#imageblock'+(+i+1)+', #imageblock'+(+i+1)+'Back').children().attr({
						"xlink:href": path,
						"data-id": this.params[i]
					});

					if($('#block'+(+i+1)).attr("data-connect")){
					var blocksConnect = $('#block'+(+i+1)).attr("data-connect").split(',');
					switch(blocksConnect.length){
					case 2:
						$('#imageblock'+blocksConnect[0]+', #imageblock'+blocksConnect[1]+
							', #imageblock'+blocksConnect[0]+'Back, #imageblock'+blocksConnect[1]+'Back').children().attr({
								"xlink:href": path,
								"data-id": this.params[i]
							});
					break
					case 1:
						$('#imageblock'+blocksConnect[0]+', #imageblock'+blocksConnect[0]+'Back').children().attr({
						"xlink:href": path,
						"data-id": this.params[i]
					});
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
							path = $('.currentTexture[data-id="'+this.default[i]+'"]').attr("data-src");
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
			urlCommands.checkHash();
			//Выбор текстуры
			$('.currentTexture').click(function(e){
				if (prevTexture != undefined){
					prevTexture.css("box-shadow", "");
					$('.allTextures').find('*[data-id="'+currentTexture.attr("data-id")+'"]').css("box-shadow", "");
				}

				currentTextureID = $(this).attr("data-slick-index");
				currentTexture = $(this);
				prevTexture = $(this);
				$('.allTextures').find('*[data-id="'+currentTexture.attr("data-id")+'"]').css({
					"box-shadow": "0 0 0 4px #483434",
					"box-sizing": "border-box"
				});
				$(this).css({
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
		        $('.currentTexture').eq(slideIndex + shiftSlider).click();
		        $('.allTextures').removeClass("showContent");
		        $.fancybox.close();
		    });

			//Выбор пола
			$('.floorIMG').click(function(e){
				if (prevFloor != undefined){
					prevFloor.find(".b-floor-cont").css("box-shadow", "");
				}
				currentFloor = $(this);
				prevFloor = $(this);
				$(this).find(".b-floor-cont").css({
					"box-shadow": "0 0 0 10px #483435 inset"
				});
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
					if(prevElemStack != undefined)
						{
							//теперь нужно поменять текстуры
							/*$('#'+lastElemStack.path).css({"fill":prevElemStack.texture});
							$('#'+lastElemStack.path+'Back').css({"fill":prevElemStack.texture});*/
							$('#image'+lastElemStack.path+', #image'+lastElemStack.path+'Back').children().attr({
								"xlink:href": $('.currentTexture[data-id="'+prevElemStack.texture+'"]').attr("data-src"),
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
						"xlink:href": $('.currentTexture[data-id="'+lastElemStackRepeat.texture+'"]').attr("data-src"),
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
					//Получаем элемент из центрального слоя
					
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
		
		var slider = $('.textures').slick({
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
		$('.textures').on('breakpoint', function(event, slick, breakpoint){
			if(breakpoint === 768)
			{
				//$('.currentTexture2[data-id="'+currentTextureID+'"]').first().click();
			}else{
				$('.textures').slick('slickGoTo', currentTextureID, false);
		        $('.currentTexture[data-slick-index="'+currentTextureID+'"]').click();
			}
		        
		        //console.log($('.allTextures').find('*[data-id="8"]').first());
		        //$('.allTextures').find('*[data-id="8"]').first().click();
		});
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
		  setCookie(name, "", {
		    expires: -1
		  })
		}



});