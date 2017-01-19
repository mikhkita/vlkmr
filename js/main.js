$(document).ready(function(){	
    var isDesktop = false,
        isTablet = false,
        isSmallTablet = false;
        isMobile = false,
        techHeight = 0;

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

        isDesktop = isTablet = isSmallTablet = isMobile = false;

        if( myWidth > 1240 ){
            isDesktop = true;
        }else if( myWidth > 1023 ){
            isTablet = true;
        }else if( myWidth > 767 ){
            isSmallTablet = true;
        }else{
            isMobile = true;
        }

        $(".b-fixed-side, .b-fixed-side-item").css({
            "height": myHeight,
            "width": (myWidth - $(".b-wide-block").eq(0).width() < 0)?0:(myWidth - $(".b-wide-block").eq(0).width()/2)
        });
        if( tog ){
            $(".b-fixed-side, .b-fixed-side-item").css({
                "width": ($(".b-head .b-wide-block").offset().left > 0)?$(".b-head .b-wide-block").offset().left:0
            });
        }

        var sliderHeight = ( myHeight-195 < 450 )?450: ((myHeight-195 > 600)?600:myHeight-195);
        if( $(".b-main-slider .b-slider").length )
            $(".b-main-slider .b-slider,.b-main-slider .b-slide").css("height",sliderHeight);

        $(".b-search-form").css("margin-top", (myHeight-$(".b-search-form-center").height())/2-20 );
        $(".b-search-form .b-search-title h2").css("left", ($(".b-search-form").width()-$(".b-search-form .b-search-title h2").width())/2 );
        $(".b-search-result").css("height", myHeight-( (isMobile)?180:160 ));

        techHeight = (myHeight > 1000)?1000:myHeight;
        if( isSmallTablet ){
            techHeight = (techHeight < 400)?400:techHeight;
        }else{
            techHeight = (techHeight < 500)?500:techHeight;
        }
        $(".b-tech-slider, .b-tech-slider .b-slide").css("height", techHeight );

        calcMenuOverlay();

        calcHeight();

        // calcMobileMenu();
        calcTech();
    }
    $(window).resize(function(){
        resize(true);
    });
    $(".b-search-input input").focus(function(){
        resize();
        setTimeout(resize, 300);
        setTimeout(resize, 500);
    });
    resize(false);

// Retina images ------------------------------------------------------------------------------------
    $(".b-retina").each(function(){
        var src = $(this).attr( (isRetina || isMobile || isSmallTablet)?"data-retina-image":"data-image");
        $(this).css("background-image", "url('"+src+"')");
        var img = new Image();
        img.src = src;
    });
// Retina images ------------------------------------------------------------------------------------

    // window.addEventListener("orientationchange", orientation, false);

    // orientation();

    // function orientation() {
    //     isSmallTablet = isMobileAlbum = false;

    //     if( window.orientation == 0 ){
    //         if( isTablet )
    //             isSmallTablet = true;    
    //     }else{
    //         if( isMobile )
    //             isMobileAlbum = true;
    //     }
    //     //isSmallTablet = true;
    // }

    if( !isMobile ){
        $("*[data-parallaxs='scroll']").attr("data-parallax", "scroll");
    }
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

    if( isMobile || isSmallTablet ){
        $("body").on("touchstart", ".b-slideout-not-touch", function(){
            $("html").addClass("touch-locked");
        });

        $("body").on("touchend", function(){
            $("html").removeClass("touch-locked");
        });

        /*slideout = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 500,
            'tolerance': 70,
            'touch' : true
        });

        slideout.on('open', function() {
            $(".b-menu-overlay").show();
        });*/
    }

    $("body").on("click", ".b-orange-butt", function(){
        var $this = $(this);
        $this.addClass("clicked");
        setTimeout(function(){
            $this.removeClass("clicked");
        },820);
    });

    if( isMobile || isSmallTablet ){
        // Toggle button
        $('.b-menu-butt').click(function() {
            slideout.open();
            $(".b-menu-overlay").show();
        });
        $('.b-menu-overlay').click(function() {
            slideout.close();
            $(".b-menu-overlay").hide();
        });
    }

    function setHeight(height, elems){
        // var blockHeight = ( isTablet )?235:258;
        for( var i in elems )
            elems[i].find(".b-news-text").css("height", height + 30);
    }

    setTimeout(calcMenuOverlay, 1000);

    /*if( isMobile || isSmallTablet )
        new FastClick(document.body);*/

    if( isMobile || isSmallTablet ){
        $(".b-text table").wrap('<div class="b-table-wrap b-slideout-not-touch clearfix"></div>');
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
            closeLk();
        }
    });

    $(".b-auth-link").click(function(){
        openLk();
        return false;
    });

    function openLk(){
        $(".b-lk-auth-block .b-lk-white").animate({
            height : 207
        },300, 'easeOutCubic');

        $(".b-lk-auth-block .b-lk-form").fadeIn(300);

        $(".b-auth-link").fadeOut(300, function(){
            $(".b-lk-auth-block .b-lk-form input[type='text']").focus();
        });

        $(".b-lk-orange a").animate({
            padding : (!device.windows())?"18px 14px 16px 55px":"17px 14px 17px 55px",
            height : "50px"
        },300, 'easeOutCubic');
    }

    function closeLk(){
        $(".b-lk-auth-block .b-lk-white").animate({
            height : 64
        },300, 'easeOutCubic');

        $(".b-lk-auth-block .b-lk-form").fadeOut(300);

        $(".b-auth-link").fadeIn(300);

        $(".b-lk-orange a").animate({
            padding : (!device.windows())?"31px 14px 28px 55px":"30px 14px 29px 55px",
            height : "75px"
        },300, 'easeOutCubic');
    }

    $(".lk-check").change(function(){
        if( $(this).val() == "" ){
            lk[$(this).attr("data-field")+"Empty"] = true;
        }else{
            lk[$(this).attr("data-field")+"Empty"] = false;
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
            cssEase: (isDesktop)?'cubic-bezier(.6,0,.36,1)':'ease-out',
            autoplay: true,
            autoplaySpeed: 7000
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

    $(".b-form select").change(function(){
        $(this).addClass("selected");
    });

    function calcMenuOverlay(){
        if( !isMobile && !isSmallTablet ){
            $(".b-menu-overlay").css("top", $(".b-menu").offset().top + $(".b-menu").height());

            $(".b-menu-overlay").css("height",0);
            $(".b-menu-overlay").css("height", $("body").height()-$(".b-menu-overlay").offset().top);
        }
    }

    if( $(".b-inner-slider .b-slide").length ){
        if( isIE ){
            $('.b-inner-slider .b-slide').css("background-image", "url('"+$('.b-inner-slider .b-slide').attr("data-image-src")+"')");
        }else{
            var img = new Image();
            img.src = $('.b-inner-slider .b-slide').attr("data-image-src");
            img.onload = function(){
                $('.b-inner-slider .b-slide').parallax({
                    speed : 0.5
                });
                $(window).load(function(){
                    $(".b-inner-slider .b-slide-lines").fadeOut(700);
                });
            }
        }
    }

    // if( !isMobile ){
    $('.b-parallax').parallax({
        speed : 0.75
    });
    // }

    $(".fancy-img-with-thumbs").fancybox({
        padding : 0,
        helpers:  {
            title   : {
                type: 'outside'
            },
            thumbs : {
                width: isMobile?190:150,
                height: 100
            }
        },
        tpl: {
            closeBtn : '<a title="Close" class="fancybox-item fancybox-close fancybox-decor" href="javascript:;"></a>',
        },
        afterShow: function(){
            $("#fancybox-thumbs").addClass("show");
        },
        beforeClose: function(){
            $("#fancybox-thumbs").removeClass("show");
        }
    });

    var incCount = 0;
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
            separator : (el.attr("data-sep"))?el.attr("data-sep"):' ', 
            decimal : '.', 
            prefix : '', 
            suffix : '' 
        };
        incCount++;
        el.attr("id", "myid-"+incCount);
        var demo = new CountUp(el.attr("id"), el.attr("data-from")*1, el.attr("data-to")*1, ' ', 3, options);
        demo.start();
    }

    $("body").on("click", ".b-popup-close", function(){
        $(this).parents(".fancybox-wrap").find(".fancybox-close").click();
        return false;
    });

    $(".phone, .telephone").numericInput({ allowFloat: false, allowNegative: true });
    $(".numeric, .number").numericInput({ allowFloat: false, allowNegative: false });


// Tech Process ------------------------------------------------------------------------------------
    if( $(".b-tech-slider").length ){
        var techBlocked = 0,
            prevScroll = 0,
            techSpeed = (isDesktop)?1000:((isTablet)?1000:700);
        function scroll(event) {
            if( myHeight != techHeight ) return true;
            var nowScroll = ((document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop),
                deltaY = event.originalEvent.deltaY,
                delta = (typeof deltaY != "undefined")?deltaY:(nowScroll-prevScroll);  

            if( techBlocked ){
                event.preventDefault();
                return true;
            }

            if( (delta > 0 && $(".b-tech-slider").offset().top > nowScroll && $(".b-tech-slider").offset().top - nowScroll < 250 ) ||
                (delta < 0 && $(".b-tech-slider").offset().top < nowScroll && nowScroll - $(".b-tech-slider").offset().top < 200) ){
                $("body, html").animate({
                    scrollTop : $(".b-tech-slider").offset().top
                },600, 'easeOutCubic');

                techBlocked = true;
                setTimeout(function(){
                    techBlocked = false;
                },650);
                event.preventDefault();
            }
            prevScroll = nowScroll;
        }
        $(window).bind("scroll mousewheel", scroll);

        $(".b-tech-slider").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: "<span class='b-slider-prev'></span>",
            nextArrow: "<span class='b-slider-next'></span>",
            speed: techSpeed,
            cssEase: (isDesktop || isTablet)?'cubic-bezier(.6,0,.36,1)':'cubic-bezier(.21,.36,.31,1.01)'
            // autoplay: true,
            // autoplaySpeed: 7000
        });

        $(".b-slider-nav-next").click(function(){
            $(".b-slider-next").click();
        });

        $(".b-slider-nav-prev").click(function(){
            $(".b-slider-prev").click();
        });

        var techClicked = false;
        $('.b-tech-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            if( !techClicked )
                $(".b-tech-thumbs td").eq(nextSlide).click();

            techClicked = false;
        });

        $('.b-tech-slider').on('afterChange', function(event, slick, currentSlide){
            showMarkers($(".b-tech-slider .b-slide[data-slick-index="+currentSlide+"] .b-marker"));
            hideMarkers($(".b-tech-slider .b-slide[data-slick-index!="+currentSlide+"] .b-marker"));
        });

        if( !isMobile && !isSmallTablet ){
            $("body").on("click", ".b-marker span, .b-marker .b-label", function(){
                var $el = $(this).parents(".b-marker");
                showBubble($el);
            });
        }

        $("body").on("click", ".b-marker .b-popup-close", function(){
            var $el = $(this).parents(".b-marker");
            hideBubble($el);
        });

        var markerOpen = false;
        $("body").on("mouseup",".b-marker .b-bubble, .b-marker .b-bubble *",function(){
            markerOpen = true;
        });
        $("body").on("mousedown",function() {
            markerOpen = false;
        }).bind("mouseup",function(){
            if( !markerOpen ){
                hideBubble();
            }
        });

        $(window).load(function(){
            showMarkers($(".b-tech-slider .b-slide[data-slick-index='0'] .b-marker"));
        });

        function showMarkers($el){
            $el.find("span").stop().animate({
                transform : "scale(1)",
                "opacity" : 1
            },{
                'duration' : 300
            });

            $el.find(".b-label").each(function(){
                $(this).css("margin-left", $(this).width()/2*(-1)-20);
            });
            $el.find(".b-bubble.b-without-image").each(function(){
                $(this).css("margin-top", $(this).height()/2*(-1));
            });

            $el.find(".b-label").delay(300).animate({
                transform : "scale(1)",
                "opacity" : 1
            },{
                'duration' : 300
            });
        }

        function hideMarkers($el){
            $el.find("span").animate({
                transform : "scale(0)",
                "opacity" : 0
            },{
                'duration' : 300
            });

            $el.find(".b-label").animate({
                transform : "scale(0)",
                "opacity" : 0
            },{
                'duration' : 300
            });
        }

        function showBubble($el){
            $el.addClass("opened").find(".b-bubble").fadeIn(300).animate({
                transform : "scale(1)"
            },{
                'duration' : 300,
                'queue' : false,
                'easing' : 'easeOutCubic'
            });

            $el.find(".b-label").animate({
                transform : "scale(0)",
                "opacity" : 0
            },{
                'duration' : 300
            });
        }

        function hideBubble($el){
            if( typeof $el == "undefined" ) $el = $(".b-marker.opened");
            $el.removeClass("opened").find(".b-bubble").fadeOut(300).animate({
                transform : "scale(0.7)"
            },{
                'duration' : 300,
                'queue' : false
            });

            $el.find(".b-label").animate({
                transform : "scale(1)",
                "opacity" : 1
            },{
                'duration' : 300
            });
        }

        function hideSlidesAfter(currentSlide){
            $(".b-main-slide[data-slick-index!='"+currentSlide+"'] .b-image").removeClass("slideDownRetourn").removeClass("magictime");
        }

        function hideSlidesBefore(currentSlide){
            TweenLite.set($(".b-main-slide[data-slick-index!='"+currentSlide+"'] h2"), {css:{opacity:0}});
        }

        $(".b-tech-thumbs td").click(function(){
            var index = $(this).index(),
                n = $(".b-tech-slider").queue();

            if( n.length > 1 )
                $(".b-tech-slider").queue(n.slice(0,1));

            techClicked = true;

            $(".b-tech-slider").queue(function(next){
                $(this).slick('slickGoTo', index);
                setTimeout(function(){
                    next();
                },1050);
            });
            
            $(".b-tech-thumbs td.active").removeClass("active");
            $(this).addClass("active");
        });

        $(".b-tech-thumbs td .b-bubble").each(function(){
            $(this).css("margin-left", $(this).width()/2*(-1)-20);
        });
        $(".b-marker .b-label").each(function(){
            $(this).css("margin-left", $(this).width()/2*(-1)-20);
        });
    }

    function calcTech(){
        $(".b-marker .b-label").each(function(){
            $(this).css("margin-left", $(this).width()/2*(-1)-20);
        });
        $(".b-marker .b-bubble.b-without-image").each(function(){
            $(this).css("margin-top", $(this).height()/2*(-1));
        });
    }
// Tech Process ------------------------------------------------------------------------------------

// Vacancy ------------------------------------------------------------------------------------
    if( $(".b-vacancies").length ){
        if( window.location.hash != "" ){
            var arr = window.location.hash.split("-"),
                moved = false,
                timing = false;
            if( arr[0] == "#vacancy" ){
                $(".b-vacancies li[data-id='"+arr[1]+"'] a").click();
            }
            window.location.hash = "";
        }
    }
// Vacancy ------------------------------------------------------------------------------------

// Catalog ------------------------------------------------------------------------------------
    if( $(".b-catalog").length ){
        $(window).load(function(){
            $("ul.b-catalog li").each(function(){
                var img = new Image(),
                    $this = $(this);
                img.src = (isRetina || isMobile || isSmallTablet)?$(this).attr("data-retina-img"):$(this).attr("data-img");
                img.onload = function(){
                    $this.css("background-image", "url('"+img.src+"')");
                    $this.addClass("loaded");
                }
            });
        });

        if( window.location.hash != "" ){
            var arr = window.location.hash.split("-"),
                moved = false,
                timing = false;
            if( arr[0] == "#decor" ){
                var $to = $(".b-catalog li[data-id='"+arr[1]+"']");
                $("body, html").animate({
                    scrollTop : $to.offset().top - ( (myHeight - $to.height())/2 )
                },800);
                $(".b-catalog li[data-id!='"+arr[1]+"']").fadeTo(500, 0.2);
            }

            $("body").bind("mousemove", function(){
                moved = true;
                $("body").unbind("mousemove");
                if( timing )
                    $(".b-catalog li[data-id!='"+arr[1]+"']").fadeTo(300, 1);
            });

            setTimeout(function(){
                timing = true;
                if( moved )
                    $(".b-catalog li[data-id!='"+arr[1]+"']").fadeTo(300, 1);

                customHandlers['onScroll'] = function(){
                    $(".b-catalog li[data-id!='"+arr[1]+"']").fadeTo(300, 1);
                    customHandlers['onScroll'] = null;
                }
            }, 3000 );
            window.location.hash = "";
        }
    }
// Catalog ------------------------------------------------------------------------------------

// Search ------------------------------------------------------------------------------------
    var prevQuery = $("#search").val(),
        stackQuery = 0,
        searchTimer;
    $("#search").keyup(function(){
        var currentVal = $(this).val().trim();
        if( prevQuery != currentVal && currentVal != "" ){
            var $form = $(this).parents("form");
            prevQuery = currentVal;
            if( !$(".b-search-form").hasClass("opened") ){
                $(".b-search-form, .b-search-close").addClass("opened");
                $("body, html").animate({
                    scrollTop : 0
                },300);
            }
            $form.submit();
        }
        if( currentVal == "" ){
            hideResults();
        }
    });

    $("#search").parents("form").submit(function(){
        var $form = $(this);

        hideResults();
        $(".cssload-jumping").fadeIn(200);
            
        stackQuery++;
        setTimeout(function(){
            $.ajax({
                type: $form.attr("method"),
                url: $form.attr("action"),
                data:  $form.serialize(),
                success: function(msg){
                    stackQuery --;
                    if( stackQuery == 0 )
                        showResults(msg);
                },
                error: function(){
                    
                },
                complete: function(){
                    
                }
            });
        },500);
        return false;
    });

    function showResults(msg){
        $(".cssload-jumping").fadeOut(200);
        $("#b-for-result").html(msg);
        $(".b-result li").each(function(){
            fadeInBottom($(this), 50*$(this).index());
        });
        fadeInBottom($(".b-search-pages").show(), 50*$(".b-result li").length);
    }

    function hideResults(){
        $.dequeue('fadeIn');
        $(".b-result li").each(function(){
            fadeOutBottom( $(this) );
        });
        fadeOutBottom($(".b-search-pages"));
    }

    function fadeInBottom($el, delay){
        $el.delay(delay).animate({
            "top" : 0,
            "opacity" : 1
        },{
            'duration' : 500, 
            'easing' : 'easeOutCubic'
        });
    }

    function fadeOutBottom($el){
        $el.stop().animate({
            "top" : 30,
            "opacity" : 0
        },{
            'duration' : 200, 
            'easing' : 'easeOutCubic'
        }).hide();
    }

    $("body").on("click", ".b-search-pages a", function(){
        var $this = $(this);
        hideResults();
        $(".cssload-jumping").fadeIn(200);
        $.ajax({
            type: "GET",
            url: $this.attr("href"),
            success: function(msg){
                showResults(msg);
            },
            error: function(){
                
            },
            complete: function(){
                
            }
        });        
        return false;
    });

    $(".b-search-butt").click(function(){
        openSearch();
        return false;
    });
    
    $(".b-search-overlay, .b-search-close").click(function(){
        closeSearch();
    });
    
    function openSearch(){
        $(".b-search-overlay, .b-search-form, .b-search-close").addClass("show");
        setTimeout(function(){
            $(".b-search-input input").focus();
        },300);
        $("html").addClass("fancybox-lock");
    }

    function closeSearch(){
        $(".b-search-overlay, .b-search-form, .b-search-close").removeClass("show");
        $("html").removeClass("fancybox-lock");
        hideResults();
        setTimeout(function(){
            $(".b-search-form, .b-search-close").removeClass("opened");
            prevQuery = "";
        },300);
        $("#search").val("");
    }
    
    var ctrldown = false;
    function down(e){
        if( e.keyCode == 27 ){
            closeSearch();
            $.fancybox.close();
        }
    }
    function up(e){
        if( e.keyCode == 91 || e.keyCode == 17 ){
            ctrldown = false;
        }
    }

    $(document).keydown(down);
    $(document).keyup(up);
// Search ------------------------------------------------------------------------------------

    var styles = [
        {
            "stylers": [
                { "visibility": "on" },
                { "saturation": -100 },
                { "lightness": 10 }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                { "weight": 0.1 },
                { "visibility": "off" },
                { "color": "#4d3131" }
            ]
        },{
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                { "visibility": "on" },
                { "weight": 0.4 },
                { "color": "#4d3131" }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            "featureType": "transit.station",
            "elementType": "labels.text",
            "stylers": [
                { "visibility": "on" },
                { "weight": 0.1 },
                { "color": "#323232" }
            ]
        },{
            "featureType": "transit.station.bus",
            "elementType": "labels.icon",
            "stylers": [
                { "gamma": 0.72 },
                { "weight": 0.1 },
                { "saturation": 77 },
                { "lightness": 1 },
                { "hue": "#0099ff" }
            ]
        },{
            "featureType": "transit.station",
            "elementType": "labels.text",
            "stylers": [
                { "visibility": "on" },
                { "weight": 0.1 },
                { "color": "#3c3c3c" }
            ]
        },{
            "elementType": "labels.text.stroke",
            "stylers": [
                { "visibility": "on" },
                { "weight": 0.1 },
                { "color": "#464646" }
            ]
        },{
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text",
            "stylers": [
                { "visibility": "on" },
                { "color": "#3c3c3c" }
            ]
        },{
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                { "visibility": "on" },
                { "color": "#a3ccff" }
            ]
        },{
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" }
            ]
        }
    ];

    if( $("#contacts_map").length ){
        var bxid = "ololo";
        var myPlace = new google.maps.LatLng(56.544723, 84.937695);
        var myOptions = {
            zoom: 17,
            center: ( isMobile ) ? new google.maps.LatLng(56.544823, 84.939695) : new google.maps.LatLng(56.544883, 84.937695),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scrollwheel: false,
            zoomControl: true,
            fullscreenControl: true
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
            title: "ООО «Томлесдрев»"
        });

        var contentString = '<div class="gmap-bubble-marker-cont"><div class="gmap-bubble-marker b-contacts gmap-bubble-marker-hide"><div class="b-three-color"></div><div class="gmap-close-button icon-close icon"></div><div class="b-text gmap-cont gmap-cont-1 b-for-contacts"></div></div></div>';

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

        custom["map"] = function(){
            setTimeout(function(){
                $(".gmap-bubble-marker").removeClass("gmap-bubble-marker-hide");
                
                $(".b-for-contacts").html($("#b-map-contact-text"));
            }, 1000 - $(".gmap-bubble-marker").length*1000);
        };
    }

    if( $("#map-dealers").length ){
        var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

        var myPlace = new google.maps.LatLng(51.788557, 98.937725);
        var myOptions = {
            zoom: 4,
            center: myPlace,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            scrollwheel: false,
            zoomControl: true
        }
        var map = new google.maps.Map(document.getElementById("map-dealers"), myOptions); 

        map.mapTypes.set('map-dealers', styledMap);
        map.setMapTypeId('map-dealers');

        $("#b-dealers li").each(function(){
            var coords = $(this).attr("data-coords").split(","),
                i = $(this).index();
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(coords[0]*1, coords[1]*1),
                map: map,
                icon: {
                    url: "/bitrix/templates/main/i/pin.png", // url
                    scaledSize: new google.maps.Size(30, 45), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(15,45) // anchor
                }
            });

            var contentString = '<div class="gmap-bubble-marker-cont b-dealer-marker" id="dealer-'+i+'">'+$(this).html().toString()+'<div class="gmap-bubble-marker gmap-bubble-marker-hide"><div class="b-text gmap-cont gmap-cont-1"><p>'+$(this).attr("data-name")+'</p></div></div></div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            google.maps.event.addListener(marker, 'mouseout', function() {
                $("#dealer-"+i+" .gmap-bubble-marker").addClass("gmap-bubble-marker-hide");
            });

            google.maps.event.addListener(marker, 'click', function() {
                if( $("#dealer-"+i+" .b-dealer").hasClass("show") ){
                    $("#dealer-"+i+" .b-dealer").removeClass("show");
                    $("#dealer-"+i+" .gmap-bubble-marker").removeClass("gmap-bubble-marker-hide");
                }else{
                    $("#dealer-"+i+" .b-dealer").addClass("show");
                    $("#dealer-"+i+" .gmap-bubble-marker").addClass("gmap-bubble-marker-hide");
                }
            });

            google.maps.event.addListener(marker, 'mouseover', function() {
                $("#dealer-"+i+" .b-dealer").css("bottom", ($("#dealer-"+i+" .b-dealer").height()*1/2*(-1)-17) );
                if( !$("#dealer-"+i+" .b-dealer").hasClass("show") )
                    $("#dealer-"+i+" .gmap-bubble-marker").removeClass("gmap-bubble-marker-hide");
            });

            google.maps.event.addListenerOnce(map, 'idle', function(){
                infowindow.open(map,marker);
            });

            $("body").on("click",".gmap-close-button",function(){
                $(this).parents(".b-dealer").removeClass("show");
            });

            var open = false;
            $("body").on("mouseup",".b-dealer,.b-dealer *",function(){
                open = true;
            });
            $("body").on("mousedown",function() {
                open = false;
            }).bind("mouseup",function(){
                if( !open ){
                    $(".b-dealer").removeClass("show");
                }
            });
        });
        
        var count = 0,
            interv;

        interv = setInterval(function(){
            count ++;
            $(".b-dealer a").attr("target", "_blank");
            if( count > 100 ){
                clearInterval(interv);
            }
        },300);
    }

});