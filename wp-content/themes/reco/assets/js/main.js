/*Faq start*/
jQuery(document).ready(function($){
    $('.faq-page #button-search').on('click', function (){
        var filter = $('input[name=input-search]').val();
        searchText(filter)
    })

    $('.faq-page .input-search').on('keyup',function (e) {
        e.preventDefault()
        if($(this).val().length && e.keyCode === 13) {
            searchText($(this).val())
        }
    })

    function searchText(filter) {
        if(filter.length) {
            $('.faq-page .accordion-button').each(function () {
                if ($(this).html().search(new RegExp(filter, "i")) > 0) {
                    if($(this).hasClass('collapsed')) {
                        $(this).click();
                        $([document.documentElement, document.body]).scrollTop($(this).offset().top - $('.header').innerHeight() -300);
                        return false;
                    }
                }
            })
        }
    }
});
/*Faq end*/

/*Homepage start*/
$('.homepage .slide-top').owlCarousel({
    items: 1,
    autoplay:true,
    loop:true,
    dots:false,
    autoHeight: true,
})

function updateWithSearchBox() {
    if($(window).innerWidth() >= 1400) {
        $(".search-content").css({
            'width': ($(".homepage .content-description-top").width() + 'px')
        });
    } else {
        $(".search-content").css({
            'width': ($(window).innerWidth() + 'px')
        });
    }
}

jQuery(document).ready(function($){
    updateWithSearchBox()
    makeEqualHeightsDescriptionTop();
    makeEqualHeightsDescriptionMiddle();
    makeEqualHeightsSuitableObject();
    makeEqualHeightsComments();
    $(window).on('resize', function(){
        updateWithSearchBox()
        makeEqualHeightsDescriptionTop();
        makeEqualHeightsDescriptionMiddle();
        makeEqualHeightsSuitableObject();
        makeEqualHeightsComments();
    });

    function makeEqualHeightsDescriptionTop() {
        let listContent = $(".homepage .content-description-top .item-list");
        if(listContent) {
            let maxHeight = Math.max(...
                listContent.map(function () {
                    return $(this).height();
                })
            );

            listContent.height(maxHeight);
            listContent.height(maxHeight);
        }
    }

    function makeEqualHeightsDescriptionMiddle() {
        let listContent = $(".homepage .description-middle .description-item");
        if(listContent) {
            let maxHeight = Math.max(...
                listContent.map(function () {
                    return $(this).height();
                })
            );

            listContent.height(maxHeight);
            listContent.height(maxHeight);
        }
    }

    function makeEqualHeightsSuitableObject() {
        let listContent = $(".homepage .list-suitable-object .suitable-object-item");
        if(listContent) {
            let maxHeight = Math.max(...
                listContent.map(function () {
                    return $(this).height();
                })
            );

            listContent.height(maxHeight);
            listContent.height(maxHeight);
        }
    }

    function makeEqualHeightsComments() {
        let listContent = $(".homepage .comments .comment-item");
        if(listContent) {
            let maxHeight = Math.max(...
                listContent.map(function () {
                    return $(this).height();
                })
            );

            listContent.height(maxHeight);
            listContent.height(maxHeight);
        }
    }

    $('.homepage .description-middle .description-item').hover(function (){
        data_fill = $(this).data('fill')
        $('.path-fill').attr('fill','#A8A8A8')
        $('path[data-fill='+ data_fill +']').attr('fill','#C10000')
    })

    $('.homepage .description-middle .description-item').mouseleave(function (){
        $('.path-fill').attr('fill','#A8A8A8')
    })
});
/*Homepage end*/

/*policy start*/
jQuery(document).ready(function($){
    makeEqualHeightsStep1Label();
    makeEqualHeightsStep2()
    makeEqualHeightsStep3()
    $(window).on('resize', function(){
        makeEqualHeightsStep1Label();
        makeEqualHeightsStep2()
        makeEqualHeightsStep3()
    });

    function makeEqualHeightsStep1Label() {
        let listContent = $(".policy-step .policy-step-1 .step-1-label");
        if(listContent && $(window).innerWidth() >= 768) {
            let maxHeight = Math.max(...
                listContent.map(function () {
                    return $(this).height();
                })
            );

            listContent.height(maxHeight);
            listContent.height(maxHeight);
        }
    }

    function makeEqualHeightsStep2() {
        let listContent = $(".policy-step .step-2-description-content");
        if(listContent && $(window).innerWidth() >= 768) {
            let maxHeight = Math.max(...
                listContent.map(function () {
                    return $(this).height();
                })
            );

            listContent.height(maxHeight);
            listContent.height(maxHeight);
        }
    }

    function makeEqualHeightsStep3() {
        let listContent = $(".policy-step .policy-step-3-item .text-1");
        if(listContent && $(window).innerWidth() >= 768) {
            let maxHeight = Math.max(...
                listContent.map(function () {
                    return $(this).height();
                })
            );

            listContent.height(maxHeight);
            listContent.height(maxHeight);
        }
    }
});
/*policy end*/

/*user guide start*/
$(document).ready(function (){
    function getSliderObject(number) {
        return  {
            width:'100%',
            height:500,
            autoplay:false,
            arrows:true,
            buttons:false,
            fullScreen:true,
            fadeFullScreen:false,
            fade:true,
            gotoSlide: function (event) {
                $('.user_guide .slide-count[data-slide='+number +'] > span.current-slide').html(event.index + 1)
            }
        }
    }

    $('.user_guide #slider1').sliderPro(getSliderObject(1))
    $('.user_guide #slider2').sliderPro(getSliderObject(2))
    $('.user_guide #slider3').sliderPro(getSliderObject(3))
    $('.user_guide #slider4').sliderPro(getSliderObject(4))
    $('.user_guide #slider5').sliderPro(getSliderObject(5))


    var slider1 = $('#slider1')
    if(slider1.length) {
        var slider1_data = slider1.data('sliderPro');
        $('.user_guide span.total-slide[data-slide=1]').html(slider1_data.getTotalSlides())
    }

    var slider2 = $('#slider2')
    if(slider2.length) {
        var slider2_data = slider2.data('sliderPro');
        $('.user_guide span.total-slide[data-slide=2]').html(slider2_data.getTotalSlides())
    }

    var slider3 = $('#slider3')
    if(slider3.length) {
        var slider3_data = slider3.data('sliderPro');
        $('.user_guide span.total-slide[data-slide=3]').html(slider3_data.getTotalSlides())
    }

    var slider4 = $('#slider4')
    if(slider4.length) {
        var slider4_data = slider4.data('sliderPro');
        $('.user_guide span.total-slide[data-slide=4]').html(slider4_data.getTotalSlides())
    }

    var slider5 = $('#slider5')
    if(slider5.length) {
        var slider5_data = slider5.data('sliderPro');
        $('.user_guide span.total-slide[data-slide=5]').html(slider5_data.getTotalSlides())
    }

    $('#v-pills-1-tab').on('click', function () {
        $('.user_guide #slider2').sliderPro(getSliderObject(1))
    });

    $('#v-pills-2-tab').on('click', function () {
        $('.user_guide #slider2').sliderPro(getSliderObject(2))
    });

    $('#v-pills-3-tab').on('click', function () {
        $('.user_guide #slider3').sliderPro(getSliderObject(3))
    });

    $('#v-pills-4-tab').on('click', function () {
        $('.user_guide #slider4').sliderPro(getSliderObject(4))
    });

    $('#v-pills-5-tab').on('click', function () {
        $('.user_guide #slider5').sliderPro(getSliderObject(5))
    });
})

/*user guide end*/


