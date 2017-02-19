$(document).ready(function(){
	if( isIE ){
    	$('.contentImage').addClass("hide showContent");
    	$('.cssload-zenith').addClass("hide");
    }else{
    	$('.IEloader').addClass("hide");
    }

	function DrawDefault(svg, hash){
		console.log(svg, svg.attr("data-kitchen") === "true");
		var floor;
		var hashArray = [];
		if(~hash.indexOf('|')){
			floor = hash.split('|')[0];
			hash = hash.split('|')[1];
		}
		hashArray = hash.split(',');
		var i=0;
		var src;
		if(svg.attr("data-kitchen") === "true"){
			console.log("++++");
			src = $('#FloorKitchen-'+floor).attr( (isRetina || isMobile)?"data-retina-image":"data-image");
			$('#FloorKitchenImage').attr("xlink:href", src);
		}
		svg.find("pattern image").each(function(){
			if($(this).attr("data-floor") === "true"){
				src = $('#Floor-'+floor).attr( (isRetina || isMobile)?"data-retina-image":"data-image");
				$(this).attr("xlink:href", src);
			}else{
				//взять нужный декор из hashArray и положить его в image
		        var src = $('#decor-'+hashArray[i]).attr( (isRetina || isMobile)?"data-retina-image":"data-image");
		        $(this).attr("xlink:href", src);
		        i++;
		    }
	    });
	}

    $('.b-workshop').each(function(){
    	var count = 0;
    	var th = $(this);
    	//th.fadeOut();
    	DrawDefault($(this).find("svg"), $(this).attr("data-hash"));
    	var imgRoom = new Image();
    	imgRoom.src = th.find(".roomImage").attr("xlink:href");
    	th.find("pattern").each(function(){
    		var img = new Image();
    		img.src = th.find("pattern image").attr("xlink:href");
    		img.onload = function(){
	    		count++;
	    		if(count == +th.attr("data-loadImages")){
	    			console.log("COUNT");
	    			th.find(".preload").hide();
	        		th.removeClass("heightPreload");
	        		loadContent(th.find(".contentImage"));
	    		}
	    		console.log("this", th, "----", count, th.attr("data-loadImages"));
	    	}
    		//console.log("this", th, "----", count);
    	});
    	imgRoom.onload = function(){
			if(count == +th.attr("data-loadImages")){
    			console.log("IMAGE");
		    	th.find(".preload").hide();
		        th.removeClass("heightPreload");
		        loadContent(th.find(".contentImage"));
	       	}
	    }

        /*img.src = th.find(".roomImage").attr("xlink:href");
        img.onload = function(){
        	th.find(".preload").hide();
        	th.removeClass("heightPreload");
        	loadContent(th.find(".contentImage"));
        }*/
    });
     function loadContent(content){
				if( isIE ){
	                content.fadeIn(500);
	            }else{
	            	content.addClass("showContent");
	            }
	            
			}
});