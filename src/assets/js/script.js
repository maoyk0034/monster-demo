(function($) {
    $(document).ready(function() {

        // ==========================================
        // 0. 动态加载组件
        // ==========================================

        // 加载头部
        $('#header-container').load('/src/components/header.html', function() {
            initHeaderLogic();
        });

        // 加载导航栏
        $('#navbar-container').load('/src/components/navbar.html', function() {
            initNavbarLogic();
        });

        // 加载轮播图
        $('#carousel-container').load('/src/components/carousel.html', function() {

        });

        // 加载主体内容
        $('#main-content-container').load('/src/components/main-content.html');

        // 加载底部
        $('#footer-container').load('/src/components/footer.html', function() {
            initFooterLogic();
        });


        // ==========================================
        // 1. 初始化头部逻辑
        // ==========================================
        function initHeaderLogic() {
            $('.clear-icon').on('click', function() {
                $(this).siblings('input').val('');
                $(this).siblings('input').focus();
            });
        }

        // ==========================================
        // 2. 初始化导航栏逻辑 (三级导航 & 高亮)
        // ==========================================
        function initNavbarLogic() {
            $('.dropdown-submenu > a').on("click", function(e) {
                var submenu = $(this).next('.submenu');
                submenu.slideToggle();
                e.preventDefault();
                e.stopPropagation();
            });

            // 点击页面其他空白区域时，关闭所有已展开的三级菜单
            $(document).on("click", function(e) {
                if (!$(e.target).closest('.dropdown-submenu').length) {
                    $('.submenu').slideUp();
                }
            });

            // 导航栏项点击激活状态切换
            $('.navbar-nav .nav-link').on('click', function() {
                if (!$(this).hasClass('dropdown-toggle')) {
                    $('.navbar-nav .nav-link').removeClass('active');
                    $(this).addClass('active');
                }
            });
        }

        // ==========================================
        // 3. 初始化底部逻辑 (怪物特效)
        // ==========================================
        function initFooterLogic() {
            var eye = $('.monster-eye');
            if (eye.length) {
                $(document).mousemove(function(event) {
                    var eyeX = eye.offset().left + (eye.width() / 2);
                    var eyeY = eye.offset().top + (eye.height() / 2);
                    var rad = Math.atan2(event.pageX - eyeX, event.pageY - eyeY);
                    var rot = (rad * (180 / Math.PI) * -1) + 180;
                    eye.css({
                        '-webkit-transform': 'rotate(' + rot + 'deg)',
                        '-moz-transform': 'rotate(' + rot + 'deg)',
                        '-ms-transform': 'rotate(' + rot + 'deg)',
                        'transform': 'rotate(' + rot + 'deg)'
                    });
                });
            }
        }

    });
})(jQuery);
