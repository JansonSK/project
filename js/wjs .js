$(function () {

    //获取数据
    var Mobile = true


    $.ajax({
        type: 'get',
        url: './data/imgData.json',
        dataType: 'json',
        success: function (result) {
            // console.log(rseult)
            // 判断屏屏幕的大小

            // 屏幕大于对于768，则加载大图片，反之取小图
            if ($(window).width() >= 768) {
                Mobile = false
            } else {
                Mobile = true
            }




            var html = template('bannerTemp', {
                'list': result,
                Mobile: Mobile
            })
            console.log(html)
            $('.carousel-inner').html(html)
            var indiHTML = template('IndicatorTemp', {
                'list': result
            })
            $('.carousel-indicators').html(indiHTML)
        }

    })




    var startX, distanceX
    var carousel_inner = $('.carousel-inner')[0]
    carousel_inner.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].clientX
    })
    carousel_inner.addEventListener('touchend', function (e) {
        distanceX = e.changedTouches[0].clientX - startX
        if (Math.abs(distanceX) > 30) {
            if (distanceX > 0) {
                $('.carousel').carousel('prev')
            } else {
                $('.carousel').carousel('next')
            }
        }
    })




})