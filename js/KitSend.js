function getNextField($form){
	var j = 1;
	while( $form.find("input[name="+j+"]").length ){
		j++;
	}
	return j;
}

function fancyOpen(el){
    $.fancybox(el,{
        scrolling: 'no',
        beforeShow: function(){
			// $(".fancybox-wrap").addClass("beforeShow");
		},
		afterShow: function(){
			// $(".fancybox-wrap").removeClass("beforeShow");
			// $(".fancybox-wrap").addClass("afterShow");
			// setTimeout(function(){
   //              $('.fancybox-wrap').css({
   //                  'position':'absolute'
   //              });
   //              $('.fancybox-inner').css('height','auto');
   //          },200);
		},
		beforeClose: function(){
			// $(".fancybox-wrap").removeClass("afterShow");
			// $(".fancybox-wrap").addClass("beforeClose");
		},
		afterClose: function(){
			// $(".fancybox-wrap").removeClass("beforeClose");
			// $(".fancybox-wrap").addClass("afterClose");
		},
		tpl: {
            closeBtn : '<a title="Close" class="fancybox-close" style="display:none;" href="javascript:;"></a>',
        },
        padding:0
    }); 
    // $('html').addClass('fancybox-lock'); 
    // $('.fancybox-overlay').html($('.fancybox-wrap')); 
    return false;
}

var customHandlers = [];

$(document).ready(function(){	
	var rePhone = /^\+*\d{6,15}$/,
		tePhone = '+7 (999) 999-99-99';

	$.validator.addMethod('customPhone', function (value) {
		return rePhone.test(value);
	});

	if( isMobile ){
        $(".b-marker .b-label, .b-marker span").each(function(){
        	$(this).addClass("fancy").attr("href", $(this).attr("data-href"));
        });
    }

	$("img.zoom").each(function(){
		$(this).wrap("<a href='"+$(this).attr("src")+"' class='fancy-img'></a>");
		$(this).removeClass("zoom");
	});

	$(".ajax").parents("form").each(function(){
		$(this).validate({
			rules: {
				email: 'email',
				phone: 'customPhone',
				'EMAIL': 'email',
				'PHONE': 'customPhone',
				'TELEPHONE' : 'customPhone'
			}
		});
		if( $(this).find("input[name=phone],input[name=PHONE]").length ){
			$(this).find("input[name=phone],input[name=PHONE]").mask(tePhone,{placeholder:" "});
		}
	});

	function whenScroll(){
		var scroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		if( customHandlers["onScroll"] ){
			customHandlers["onScroll"](scroll);
		}
	}
	$(window).scroll(whenScroll);
	whenScroll();

	$(".fancy").each(function(){
		var $popup = $($(this).attr("href")),
			$this = $(this);
		$this.fancybox({
			padding : 0,
			content : $popup,
			helpers: {
	         	overlay: {
	            	locked: true 
	         	}
	      	},
	      	openEffect  : 'drop',
			closeEffect : 'drop',
			nextEffect  : 'elastic',
			prevEffect  : 'elastic',
			tpl: {
	            closeBtn : '<a title="Close" class="fancybox-close" style="display:none;" href="javascript:;"></a>',
	        },
			beforeShow: function(){
				$(".fancybox-wrap").addClass("beforeShow");
				$popup.find(".custom-field").remove();
				if( $this.attr("data-value") ){
					var name = getNextField($popup.find("form"));
					$popup.find("form").append("<input type='hidden' class='custom-field' name='"+name+"' value='"+$this.attr("data-value")+"'/><input type='hidden' class='custom-field' name='"+name+"-name' value='"+$this.attr("data-name")+"'/>");
				}
				if( $this.attr("data-beforeShow") && customHandlers[$this.attr("data-beforeShow")] ){
					customHandlers[$this.attr("data-beforeShow")]($this);
				}
			},
			afterShow: function(){
				$(".fancybox-wrap").removeClass("beforeShow");
				$(".fancybox-wrap").addClass("afterShow");
				if( $this.attr("data-afterShow") && customHandlers[$this.attr("data-afterShow")] ){
					customHandlers[$this.attr("data-afterShow")]($this);
				}
				if( !$popup.find(".b-vacancy-form").length )
					$popup.find("input[type='text'],input[type='number'],textarea").eq(0).focus();
			},
			beforeClose: function(){
				$(".fancybox-wrap").removeClass("afterShow");
				$(".fancybox-wrap").addClass("beforeClose");
				if( $this.attr("data-beforeClose") && customHandlers[$this.attr("data-beforeClose")] ){
					customHandlers[$this.attr("data-beforeClose")]($this);
				}
			},
			afterClose: function(){
				$(".fancybox-wrap").removeClass("beforeClose");
				$(".fancybox-wrap").addClass("afterClose");
				if( $this.attr("data-afterClose") && customHandlers[$this.attr("data-afterClose")] ){
					customHandlers[$this.attr("data-afterClose")]($this);
				}
			}
		});
	});

	$(".b-go").click(function(){
		var block = $( $(this).attr("data-block") ),
			off = $(this).attr("data-offset")||0;
		$("body, html").animate({
			scrollTop : block.offset().top-off
		},800);
		return false;
	});

	$(".fancy-img").fancybox({
		padding : 0
	});

	$(".ajax").parents("form").submit(function(){
  		if( $(this).find("input.error,select.error,textarea.error").length == 0 ){
  			$(this).removeClass("no-validate");
  			var $this = $(this),
  				$thanks = $($this.attr("data-block"));

  			$this.find(".ajax").attr("onclick", "return false;");

  			if( $this.attr("data-beforeAjax") && customHandlers[$this.attr("data-beforeAjax")] ){
				customHandlers[$this.attr("data-beforeAjax")]($this);
			}

  			$.ajax({
			  	type: $(this).attr("method"),
			  	url: $(this).attr("action"),
			  	data:  $this.serialize(),
				success: function(msg){
					var $link;
					if( msg == "1" ){
						$link = $this.find(".b-thanks-link");
					}else{
						$link = $(".b-error-link");
					}

					if( $this.attr("data-afterAjax") && customHandlers[$this.attr("data-afterAjax")] ){
						customHandlers[$this.attr("data-afterAjax")]($this);
					}

					$link.click();
				},
				error: function(){
					$(".b-error-link").click();	
				},
				complete: function(){
					$this.find(".ajax").removeAttr("onclick");
					$this.find("input[type=text],textarea").val("");
				}
			});
  		}else{
  			$(this).find("input.error,select.error,textarea.error").eq(0).focus();
  			$(this).addClass("no-validate");
  		}
  		return false;
  	});
});