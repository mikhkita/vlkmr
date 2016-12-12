$(document).ready(function(){	
    var isDesktop = false,
        isTablet = false,
        isMobile = false,
        isIE = false;

    if (!('querySelector' in document)  //скорее всего ie 9+
         || !('localStorage' in window)  //ie 8+
         || !('addEventListener' in window)  //ie 8 + (возможно)
        || !('matchMedia' in window)) {//ie 10+

        isIE = true;
    }

    if( isIE ){
        $("body").addClass("ie");
    }else{
        $("body").addClass("not-ie");
    }

    function resize(tog){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }

        isDesktop = isTablet = isMobile = false;

        if( myWidth > 1240 ){
            isDesktop = true;
        }else if( myWidth > 768 ){
            isTablet = true;
        }else{
            isMobile = true;
        }

        $(".b-fixed-side, .b-fixed-side-item").css({
            "height": myHeight
        });
        if( tog ){
            $(".b-fixed-side, .b-fixed-side-item").css({
                "width": ($(".b-head .b-wide-block").offset().left > 0)?$(".b-head .b-wide-block").offset().left:0
            });
        }

        var sliderHeight = ( myHeight-175 < 450 )?450: ((myHeight-175 > 600)?600:myHeight-175);
        if( $(".b-main-slider .b-slider").length )
            $(".b-main-slider .b-slider,.b-main-slider .b-slide").css("height",sliderHeight);

        $(".b-search-form").css("margin-top", (myHeight-$(".b-search-form").height())/2-20 );

        calcMenuOverlay();

        calcHeight();
    }
    $(window).resize(function(){
        resize(true);
    });
    resize(false);
    setTimeout(function(){
        resize(true);
        $('.b-fixed-side').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 1000,
            cssEase: 'cubic-bezier(.6,0,.36,1)'
        });
    },500);
    calcHeight();
    setTimeout(calcHeight,1000);
    function calcHeight(){
        if( $(".b-news").length ){
            $(".b-news li .b-news-text").css("height", "auto");
            if( !isMobile ){
                var maxHeight = 0,
                    i = 0,
                    elems = [],
                    count = (isTablet)?2:3;
                $(".b-news li").each(function(){
                    if( $(this).index() % count == 0 ){
                        setHeight(maxHeight, elems);
                        elems = [];
                        maxHeight = 0;
                    }
                    if( maxHeight < $(this).find(".b-news-text").height() )
                        maxHeight = $(this).find(".b-news-text").height();

                    elems.push($(this));
                });
                setHeight(maxHeight, elems);
            }
        }
    }

    function setHeight(height, elems){
        // var blockHeight = ( isTablet )?235:258;
        for( var i in elems )
            elems[i].find(".b-news-text").css("height", height + 30);
    }

    setTimeout(calcMenuOverlay, 1000);

    if( isMobile )
        new FastClick(document.body);

    if( isMobile ){
        $(".b-text table").wrap('<div class="b-table-wrap clearfix"></div>');
    }

    autosize(document.querySelectorAll('textarea'));

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();

    var lk = {
        loginEmpty : true,
        passwordEmpty : true,
        focus : false
    };

    $("body").on("mouseup",".b-lk-white *, .b-lk-white",function(){
        lk.focus = true;
    });
    $("body").on("mousedown",function() {
        lk.focus = false;
    }).bind("mouseup",function(){
        if( !lk.focus && lk.loginEmpty && lk.passwordEmpty ){
            if( isIE ){
                TweenLite.to($(".b-lk-auth-block .b-lk-white"), 0.3, { "height" : 119, ease : Quad.easeOut } );
            }else{
                $(".b-lk-auth-block").removeClass("opened");
            }
        }
    });

    if( isIE ){
        var isCatalogHover = false;
        $(".b-catalog-accordeon").hover(function(){
            isCatalogHover = true;
        },function(){
            isCatalogHover = false;
        });

        $(".b-catalog-accordeon td").hover(function(){
            if( isCatalogHover ){
                TweenLite.to($(".b-catalog-accordeon td"), 0.4, { "width" : 171, ease : Quad.easeOut } );
            }
            TweenLite.to($(this), 0.4, { "width" : 303, ease : Quad.easeOut } );
            TweenLite.to($(this).find(".b-catalog-white"), 0.4, { "margin-bottom" : 0, ease : Quad.easeOut } );
        },function(){
            if( isCatalogHover ){
                TweenLite.to($(this), 0.4, { "width" : 171, ease : Quad.easeOut } );
            }else{
                TweenLite.to($(this), 0.4, { "width" : 193, ease : Quad.easeOut } );
            }
            TweenLite.to($(this).find(".b-catalog-white"), 0.4, { "margin-bottom" : -100, ease : Quad.easeOut } );
        });
    }

    $(".b-lk-auth-block input").focus(function(){
        if( isIE ){
            TweenLite.to($(".b-lk-auth-block .b-lk-white"), 0.3, { "height" : 193, ease : Quad.easeOut } );
        }else{
            $(".b-lk-auth-block").addClass("opened");
        }
    });

    $(".lk-check").change(function(){
        if( $(this).val() == "" ){
            lk[$(this).attr("data-field")+"Empty"] = true;
        }else{
            lk[$(this).attr("data-field")+"Empty"] = false;
        }
    });

    if( $(".b-main-slider .b-slide").length ){
        $('.b-main-slider .b-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: "<span class='b-slider-prev'></span>",
            nextArrow: "<span class='b-slider-next'></span>",
            asNavFor: ".b-fixed-right",
            speed: (isDesktop)?1000:((isTablet)?600:300),
            cssEase: (isDesktop)?'cubic-bezier(.6,0,.36,1)':'ease-out'
        });

        $(".b-slider-nav-next").click(function(){
            $(".b-slider-next").click();
        });

        $(".b-slider-nav-prev").click(function(){
            $(".b-slider-prev").click();
        });

        $('.b-main-slider .b-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $(".b-fixed-left").slick('slickGoTo', nextSlide);
        });
    }

    var isMenuHover = false;
    $(".b-menu>li").hover(function(){
        calcMenuOverlay();
        if( $(this).find("ul").length ){
            isMenuHover = true;
            $(".b-menu-overlay").addClass("show");

            if( isIE ){
                $(".b-menu-overlay").fadeIn(250);
                $(this).find(".b-submenu").fadeIn(250);
                TweenLite.to($(this).find(".b-submenu"), 0.25, { "top" : isTablet?72:75, ease : Quad.easeOut } );
            }
        }
    },function(){
        isMenuHover = false;
        $(".b-menu-overlay").removeClass("show");

        if( isIE ){
            setTimeout(function(){
                if( !isMenuHover ){
                    $(".b-menu-overlay").stop().fadeOut(250);
                }
            },10);
            $(this).find(".b-submenu").stop().fadeOut(250);
            TweenLite.to($(this).find(".b-submenu"), 0.25, { "top" : isTablet?82:85, ease : Quad.easeOut } );
        }else{
            $(".b-menu-overlay").css("height", 800);
        }
    });

    $(".b-search-butt").click(function(){
        openSearch();
        return false;
    });
    
    $(".b-search-overlay").click(function(){
        closeSearch();
    });

    function calcMenuOverlay(){
        $(".b-menu-overlay").css("top", $(".b-menu").offset().top + $(".b-menu").height());

        $(".b-menu-overlay").css("height",0);
        $(".b-menu-overlay").css("height", $("body").height()-$(".b-menu-overlay").offset().top);
    }

    function openSearch(){
        $(".b-search-overlay, .b-search-form").addClass("show");
        setTimeout(function(){
            $(".b-search-input input").focus();
        },300);
    }

    function closeSearch(){
        $(".b-search-overlay, .b-search-form").removeClass("show");
    }

    var ctrldown = false;
    function down(e){
        // alert(e.keyCode);
        if( e.keyCode == 27 ){
            closeSearch();
        }
    }
    function up(e){
        if( e.keyCode == 91 || e.keyCode == 17 ){
            ctrldown = false;
        }
    }

    $(document).keydown(down);
    $(document).keyup(up);

    if( $(".b-inner-slider .b-slide").length ){
        if( isMobile ){
            $('.b-inner-slider .b-slide').css("background-image", "url('"+$('.b-inner-slider .b-slide').attr("data-image-src")+"')");
        }else{
            $('.b-inner-slider .b-slide').parallax({
                speed : 0.5
            });
        }
    }

    $('.b-parallax').parallax({
        speed : 0.75
    });

    $(".fancy-img-with-thumbs").fancybox({
        padding : 0,
        helpers:  {
            title   : {
                type: 'outside'
            },
            thumbs : {
                width: isMobile?190:200,
                height: 100
            }
        },
        afterShow: function(){
            $("#fancybox-thumbs").addClass("show");
        },
        beforeClose: function(){
            $("#fancybox-thumbs").removeClass("show");
        }
    });

    custom["countUp"] = function(el){
        var easingFn = function (t, b, c, d) {
            var ts = (t /= d) * t;
            var tc = ts * t;
            return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
        }
        var options = {
            useEasing : true, 
            easingFn: easingFn, 
            useGrouping : true, 
            separator : ' ', 
            decimal : '.', 
            prefix : '', 
            suffix : '' 
        };
        var demo = new CountUp(el.attr("id"), el.attr("data-from")*1, el.attr("data-to")*1, ' ', 3, options);
        demo.start();
    }

    var styles = [
        // {
        //     "stylers": [
        //         { "visibility": "on" },
        //         { "saturation": -100 },
        //         { "lightness": 30 }
        //     ]
        // },{
        //     "featureType": "administrative.country",
        //     "elementType": "labels",
        //     "stylers": [
        //         { "weight": 0.1 },
        //         { "visibility": "off" },
        //         { "color": "#323232" }
        //     ]
        // },{
        //     "featureType": "administrative",
        //     "elementType": "geometry",
        //     "stylers": [
        //         { "visibility": "on" },
        //         { "weight": 0.4 },
        //         { "color": "#646464" }
        //     ]
        // },{
        //     "featureType": "poi.school",
        //     "stylers": [
        //         { "visibility": "off" }
        //     ]
        // },{
        //     "featureType": "road.highway",
        //     "elementType": "geometry",
        //     "stylers": [
        //         { "color": "#e84000" },
        //         { "visibility": "simplified" }
        //     ]
        // },{
        //     "featureType": "road.highway",
        //     "elementType": "labels.text",
        //     "stylers": [
        //         { "weight": 0.1 },
        //         { "color": "#ffffff" },
        //         { "visibility": "on" }
        //     ]
        // },{
        //     "featureType": "road.arterial",
        //     "elementType": "geometry",
        //     "stylers": [
        //         { "color": "#ff6d20" },
        //         { "visibility": "simplified" }
        //     ]
        // },{
        //     "featureType": "road.arterial",
        //     "elementType": "labels",
        //     "stylers": [
        //         { "weight": 0.1 },
        //         { "color": "#ffffff" },
        //         { "visibility": "on" }
        //     ]
        // },{
        //     "featureType": "road.local",
        //     "elementType": "geometry",
        //     "stylers": [
        //         { "color": "#ffffff" }
        //     ]
        // },{
        //     "featureType": "road.local",
        //     "elementType": "labels",
        //     "stylers": [
        //         { "weight": 0.1 },
        //         { "color": "#646464" }
        //     ]
        // },{
        //     "featureType": "transit.station",
        //     "elementType": "labels.icon",
        //     "stylers": [
        //         { "hue": "#8800ff" },
        //         { "visibility": "on" },
        //         { "saturation": 5 }
        //     ]
        // },{
        //     "featureType": "road.highway",
        //     "elementType": "labels.icon",
        //     "stylers": [
        //         { "weight": 0.1 },
        //         { "saturation": 11 },
        //         { "lightness": 50 },
        //         { "visibility": "off" }
        //     ]
        // },{
        //     "featureType": "administrative.locality",
        //     "elementType": "labels.text",
        //     "stylers": [
        //         { "visibility": "off" }
        //     ]
        // },{
        //     "featureType": "transit.station",
        //     "elementType": "labels.text",
        //     "stylers": [
        //         { "visibility": "on" },
        //         { "weight": 0.1 },
        //         { "color": "#323232" }
        //     ]
        // },{
        //     "featureType": "transit.station.bus",
        //     "elementType": "labels.icon",
        //     "stylers": [
        //         { "gamma": 0.72 },
        //         { "weight": 0.1 },
        //         { "saturation": 77 },
        //         { "lightness": 1 },
        //         { "hue": "#0099ff" }
        //     ]
        // },{
        //     "featureType": "transit.station",
        //     "elementType": "labels.text",
        //     "stylers": [
        //         { "visibility": "on" },
        //         { "weight": 0.1 },
        //         { "color": "#3c3c3c" }
        //     ]
        // },{
        //     "elementType": "labels.text.stroke",
        //     "stylers": [
        //         { "visibility": "on" },
        //         { "weight": 0.1 },
        //         { "color": "#464646" }
        //     ]
        // },{
        //     "featureType": "administrative.land_parcel",
        //     "elementType": "labels.text",
        //     "stylers": [
        //         { "visibility": "on" },
        //         { "color": "#3c3c3c" }
        //     ]
        // },{
        //     "featureType": "water",
        //     "elementType": "labels",
        //     "stylers": [
        //         { "visibility": "off" }
        //     ]
        // },{
        //     "featureType": "water",
        //     "elementType": "geometry.fill",
        //     "stylers": [
        //         { "visibility": "on" },
        //         { "color": "#40a4df" }
        //     ]
        // },{
        //     "featureType": "road",
        //     "elementType": "labels.icon",
        //     "stylers": [
        //         { "visibility": "off" }
        //     ]
        // },{
        //     "featureType": "administrative.country",
        //     "elementType": "labels",
        //     "stylers": [
        //         { "visibility": "off" }
        //     ]
        // }
    ];

    if( $("#contacts_map").length ){
        var myPlace = new google.maps.LatLng(56.501057, 85.001990);
        var myOptions = {
            zoom: 17,
            center: ( isMobile ) ? new google.maps.LatLng(56.501278, 85.003651) : new google.maps.LatLng(56.501157, 85.001960),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scrollwheel: false,
            zoomControl: true
        }
        var map = new google.maps.Map(document.getElementById("contacts_map"), myOptions); 

        var marker = new google.maps.Marker({
            position: myPlace,
            icon: {
            url: "/bitrix/templates/main/i/pin.png", // url
            scaledSize: new google.maps.Size(40, 60), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(20,60) // anchor
            },
            animation: google.maps.Animation.DROP,
            map: map,
            title: "Томлесдрев"
        });

        var contentString = '<div class="gmap-bubble-marker-cont"><div class="gmap-bubble-marker gmap-bubble-marker-hide"><div class="b-three-color"></div><div class="gmap-close-button icon-close icon"></div><div class="b-text gmap-cont gmap-cont-1"><h4>Адрес</h4><p>Россия, 634024, г. Томск,<br>2-ой поселок ЛПК, д. 109/3, оф. 43</p></div></div></div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
            if( $(".gmap-bubble-marker").hasClass("gmap-bubble-marker-hide") ){
                $(".gmap-bubble-marker").removeClass("gmap-bubble-marker-hide");
            }else{
                $(".gmap-bubble-marker").addClass("gmap-bubble-marker-hide");
            }
        });

        google.maps.event.addListenerOnce(map, 'idle', function(){
            infowindow.open(map,marker);
        });

        $("body").on("click",".gmap-close-button",function(){
            $(".gmap-bubble-marker").addClass("gmap-bubble-marker-hide");
        });
    }

    custom["map"] = function(){
        setTimeout(function(){
            $(".gmap-bubble-marker").removeClass("gmap-bubble-marker-hide");
        }, 1000 - $(".gmap-bubble-marker").length*1000);
    };

    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

	var myPlace = new google.maps.LatLng(64.672589, 99.033137);
    var myOptions = {
        zoom: 4,
        center: myPlace,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true
    }
    var map = new google.maps.Map(document.getElementById("map-dealers"), myOptions); 

    var marker = new google.maps.Marker({
	    position: myPlace,
	    map: map,
	    title: "Ярмарка вакансий и стажировок"
	});

    map.mapTypes.set('map-dealers', styledMap);
    map.setMapTypeId('map-dealers');

});