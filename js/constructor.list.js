$(document).ready(function(){
	if( isIE ){
    	$('.contentImage').addClass("hide showContent");
    	$('.cssload-zenith').addClass("hide");
    }else{
    	$('.IEloader').addClass("hide");
    }

	function DrawDefault(svg, hash){
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
    	DrawDefault($(this).find("svg"), $(this).attr("data-hash"));
    	var imgRoom = new Image();
    	imgRoom.src = th.find(".roomImage").attr("xlink:href");
    	var loadImages = th.find("pattern").length + 1;
    	th.find("pattern").each(function(){
    		var img = new Image();
    		img.src = $(this).find("image").attr("xlink:href");
    		img.onload = function(){
	    		count++;
	    		if(count === loadImages){
		    		afterLoad(th);
		        }
	    	}
    	});
    	imgRoom.onload = function(){
    		count++;
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
