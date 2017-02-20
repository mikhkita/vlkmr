$(document).ready(function(){
	if( isIE ){
    	$('.contentImage').addClass("hide showContent");
    	$('.cssload-zenith').addClass("hide");
    }else{
    	$('.IEloader').addClass("hide");
    }

    $('.currentTexture').each(function(){
		    var src = $(this).attr( (isRetina || isMobile)?"data-retina-image":"data-image");
		    $(this).attr("data-src", src);
		});
    $('.roomImage').each(function(){
		    var src = $(this).attr( (isRetina || isMobile)?"data-retina-image":"data-image");
		    $(this).attr("xlink:href", src);
		});

	function DrawDefault(svg, hash){
		//console.log(svg, svg.attr("data-kitchen") === "true");
		var floor;
		var hashArray = [];
		if(~hash.indexOf('|')){
			floor = hash.split('|')[0];
			hash = hash.split('|')[1];
		}
		hashArray = hash.split(',');
		var i=0;
		var src;
		svg.find('*[data-itsFloor]').attr("xlink:href", $('.'+svg.attr("data-floor")+'[data-id="'+floor+'"]').attr("data-src"));
		svg.find("pattern image").each(function(){
			//console.log($(this));
			if(!$(this).attr("data-itsFloor")){
				var src = $('#decor-'+hashArray[i]).attr("data-src");
		        $(this).attr("xlink:href", src);
		        i++;
			}
	    });
	    var src = svg.find(".roomImage").attr("data-src");
		svg.find(".roomImage").attr("xlink:href", src);
	}

    $('.b-workshop').each(function(){
    	var count = 0;
    	var th = $(this);
    	//th.fadeOut();
    	DrawDefault($(this).find("svg"), $(this).attr("data-hash"));
    	var imgRoom = new Image();
    	imgRoom.src = th.find(".roomImage").attr("xlink:href");
    	var loadImages = th.find("pattern").length;
    	th.find("pattern").each(function(){
    		var img = new Image();
    		img.src = $(this).find("image").attr("xlink:href");
    		img.onload = function(){
	    		count++;
	    		//console.log(th, count);
	    		if(count === loadImages){
	    			imgRoom.onload = function(){
		    			afterLoad(th);
		        	}
	    		}
	    	}
    		
    	});
    	imgRoom.onload = function(){
    		if(count === loadImages){
		    	afterLoad(th);
	       	}
	    }
    });

    function afterLoad(th){
    	th.find(".preload").hide();
		th.removeClass("heightPreload");
		loadContent(th.find(".contentImage"));
    }
    function loadContent(content){
		if( isIE ){
	         content.fadeIn(500);
	    }else{
	       content.addClass("showContent");
	    }
	 }
});
