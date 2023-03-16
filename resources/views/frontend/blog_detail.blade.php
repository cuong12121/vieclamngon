@extends('frontend.layout.appfe')
@section('content')

<main>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/swiper.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/advice.css')}}">
    <style>/*swiper.css*/
    </style>
    <!-- <section class="cb-career-advice-nav">
        <div class="container">
            <div class="category-name">
                <h4>Danh mục</h4>
                <h4 class="active">Danh mục</h4>
                <em class="mdi mdi-chevron-down"></em>
            </div>
            <div class="button-search">
                <em class="mdi icon-change"></em>
                <div class="show-hide">
                    <div class="searchbox">
                        <input type="text" id="keynews_mb" placeholder="Nhập từ khóa" name="keynews" maxlength="200" value="">
                        <button type="button" id="search_news_mb" class="btn-gradient">
                        <em class="mdi mdi-magnify"></em></button>
                    </div>
                </div>
            </div>
            <div class="main-nav">
                <ul class="list-nav-left">
                    <li>
                        <div class="title"><a href="https://careerbuilder.vn/vi/talentcommunity">Mới nhất</a></div>
                    </li>
                    <li class="dropdown ">
                        <div class="title"><a href="https://careerbuilder.vn/vi/talentcommunity/bi-quyet-tim-viec">Bí quyết tìm việc<em class="mdi mdi-chevron-down"></em></a></div>
                        <div class="dropdown-menu">
                            <ul>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/bi-quyet-tim-viec/phong-van-thanh-cong">Phỏng vấn thành công</a></li>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/bi-quyet-tim-viec/ho-so-an-tuong">Hồ sơ ấn tượng</a></li>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/bi-quyet-tim-viec/ho-so-mau">Hồ sơ mẫu</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="dropdown active">
                        <div class="title"><a href="https://careerbuilder.vn/vi/talentcommunity/tu-van-nghe-nghiep">Tư vấn nghề nghiệp<em class="mdi mdi-chevron-down"></em></a></div>
                        <div class="dropdown-menu">
                            <ul>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/tu-van-nghe-nghiep/vuot-qua-thu-thach">Vượt qua thử thách</a></li>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/tu-van-nghe-nghiep/phat-trien-su-nghiep">Phát triển sự nghiệp</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="dropdown ">
                        <div class="title"><a href="https://careerbuilder.vn/vi/talentcommunity/thang-tien-su-nghiep">Thăng tiến sự nghiệp<em class="mdi mdi-chevron-down"></em></a></div>
                        <div class="dropdown-menu">
                            <ul>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/thang-tien-su-nghiep/con-duong-su-nghiep">Con đường sự nghiệp</a></li>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/thang-tien-su-nghiep/phat-trien-ban-than">Phát triển bản thân</a></li>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/thang-tien-su-nghiep/work-from-home">Work From Home</a></li>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/thang-tien-su-nghiep/dam-phan-luong">Đàm phán lương</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="dropdown ">
                        <div class="title"><a href="https://careerbuilder.vn/vi/talentcommunity/thi-truong-va-xu-huong">Thị trường &amp; Xu hướng<em class="mdi mdi-chevron-down"></em></a></div>
                        <div class="dropdown-menu">
                            <ul>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/thi-truong-va-xu-huong/thi-truong-lao-dong">Thị trường lao động</a></li>
                                <li> <a href="https://careerbuilder.vn/vi/talentcommunity/thi-truong-va-xu-huong/bao-cao-khao-sat">Báo cáo - Khảo sát</a></li>
                                <li><a href="https://careerbuilder.vn/employerofchoice-winner-2021" target="_blank" class="link_menu">Employer of Choice</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="dropdown ">
                        <div class="title"><a href="https://careerbuilder.vn/vi/talentcommunity/wiki-career">Wiki Career</a></div>
                    </li>
                    <li class="dropdown ">
                        <div class="title"><a href="https://careerbuilder.vn/vi/talentcommunity/thu-gian">Thư giãn</a></div>
                    </li>
                    <li class="dropdown ">
                        <div class="title"><a href="https://careerbuilder.vn/vi/talentcommunity/phu-nu">Dành cho Phụ nữ</a></div>
                    </li>
                    <li class="dropdown ">
                        <div class="title"><a href="https://careerbuilder.vn/vi/talentcommunity/tien-ich-su-nghiep">Tiện ích</a></div>
                    </li>
                    <li class="button-search">
                        <em class="mdi icon-change"></em>
                        <div class="show-hide">
                            <div class="searchbox">
                                <input type="text" id="keynews" placeholder="Nhập từ khóa" name="keynews" maxlength="200" value="">
                                <button type="button" id="search_news" class="btn-gradient"><em class="mdi mdi-magnify"></em></button>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="list-nav-right"><a href="https://careerbuilder.vn/vi/hiringsite" target="_blank" title="Cẩm nang tuyển dụng">Cẩm nang tuyển dụng</a></div>
            </div>
        </div>
    </section> -->
    <script type="text/javascript">
        $(document).ready(function(){
        	$("#keynews").on('keyup', function (e) {
        		if (e.key === 'Enter' || e.keyCode === 13) {
        			$("#search_news").trigger("click");
        		}
        	});
        	$("#keynews_mb").on('keyup', function (e) {
        		if (e.key === 'Enter' || e.keyCode === 13) {
        			$("#search_news_mb").trigger("click");
        		}
        	});
        	$("#search_news").on('click',function(){
        		var keyword = $('#keynews').val().replace(/([\/\,\:\;\=\$\&\-\_\+\.\"\'])/g, "").trim();
        		//var keyword = $('#keynews').val().replace(/[^\u0000-\u007f]/g, "").trim();
        		$('#keynews').val(keyword);
        		keyword = keyword.replace(/\s+/g, "-");
        		if(keyword == ""){
        			$('#keynews').focus();
        			return false;
        		}
        		location.href = PATH_KIEMVIEC + "talentcommunity/search/title/"+keyword;
        	});
        	$("#search_news_mb").on('click',function(){
        		var keyword = $('#keynews_mb').val().replace(/([\/\,\:\;\=\$\&\-\_\+\.\"\'])/g, "").trim();
        		$('#keynews').val(keyword);
        		keyword = keyword.replace(/\s+/g, "-");
        		if(keyword == ""){
        			$('#keynews_mb').focus();
        			return false;
        		}
        		location.href = PATH_KIEMVIEC + "talentcommunity/search/title/"+keyword;
        	});
        });
    </script>
    <section class="cb-career-advice-detail-breakcrumb">
        <div class="container">
            <ul class="breakcrumb">
                <li> <a href="https://careerbuilder.vn/vi/talentcommunity">Home</a></li>
                <li><a href="https://careerbuilder.vn/vi/talentcommunity/tu-van-nghe-nghiep">Tư vấn nghề nghiệp</a></li>
                <li><a href="https://careerbuilder.vn/vi/talentcommunity/phat-trien-su-nghiep">Phát triển sự nghiệp</a></li>
                <li class="active"><a href="https://careerbuilder.vn/vi/talentcommunity/bi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html">Bí kíp tạo ấn tượng đầu tiên tuyệt vời</a></li>
            </ul>
        </div>
    </section>
    <section class="cb-career-advice-detail" id="uni_container">
        <div class="container" id="infinite" style="margin-bottom:20px;">
            <div class="row">
                <div class="col-lg-9-custom">
                    <div class="box-news">
                        <div class="cb-title">
                            <h1>{{ $data->title }}</h1>
                        </div>
                        <div class="view-number">
                            <p>Lượt xem: <span>11,655</span></p>
                        </div>
                        <div class="career-advice-detail-share-social">
                            <ul>
                                <li class="facebook"><a href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=https://careerbuilder.vn/vi/talentcommunity/bi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html&amp;pubid=ra-559220ee7f9c15d6&amp;title=Bí kíp tạo ấn tượng đầu tiên tuyệt vời&amp;ct=1&amp;pco=tbxnj-1.0" target="_blank" title="Facebook"><em class="mdi mdi-facebook"></em></a></li>
                                <li class="linkedin"><a href="https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=https://careerbuilder.vn/vi/talentcommunity/bi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html&amp;pubid=ra-559220ee7f9c15d6&amp;title=Bí kíp tạo ấn tượng đầu tiên tuyệt vời&amp;ct=1&amp;pco=tbxnj-1.0" target="_blank" title="Linkedin"><em class="mdi mdi-linkedin"></em></a></li>
                                <li class="email"><a href="https://api.addthis.com/oexchange/0.8/forward/email/offer?url=https://careerbuilder.vn/vi/talentcommunity/bi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html&amp;pubid=ra-559220ee7f9c15d6&amp;title=Bí kíp tạo ấn tượng đầu tiên tuyệt vời&amp;ct=1&amp;pco=tbxnj-1.0" target="_blank" title="Email"><em class="mdi mdi-email"></em></a></li>
                                <li class="gmail"><a href="https://api.addthis.com/oexchange/0.8/forward/gmail/offer?url=https://careerbuilder.vn/vi/talentcommunity/bi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html&amp;pubid=ra-559220ee7f9c15d6&amp;title=Bí kíp tạo ấn tượng đầu tiên tuyệt vời&amp;ct=1&amp;pco=tbxnj-1.0" target="_blank" title="Gmail"><em class="mdi mdi-gmail"></em></a></li>
                                <li class="zalo">
                                    <div class="zalo-share-button" data-href="" data-oaid="579745863508352884" data-layout="2" data-color="white" data-customize="false" style="position: relative; display: inline-block; width: 20px; height: 20px;"><iframe id="78108f0b-65e3-4d1c-8a4e-2ca223ae2275" name="78108f0b-65e3-4d1c-8a4e-2ca223ae2275" frameborder="0" allowfullscreen="" scrolling="no" width="20px" height="20px" src="https://button-share.zalo.me/share_inline?id=78108f0b-65e3-4d1c-8a4e-2ca223ae2275&amp;layout=2&amp;color=white&amp;customize=false&amp;width=20&amp;height=20&amp;isDesktop=true&amp;url=https%3A%2F%2Fcareerbuilder.vn%2Fvi%2Ftalentcommunity%2Fbi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html&amp;d=eyJ1cmwiOiJodHRwczovL2NhcmVlcmJ1aWxkZXIudm4vdmkvdGFsZW50Y29tbXVuaXR5L2JpLWtpcC10YW8tYW4tdHVvbmctZGF1LXRpZW4tdHV5ZXQtdm9pLjM1QTUxRUNBLmh0bWwifQ%253D%253D&amp;shareType=0" style="position: absolute; z-index: 99; top: 0px; left: 0px;"></iframe></div>
                                </li>
                            </ul>
                        </div>
                        <div class="full-content">
                            {!!  str_replace('images/posts/','http://dienmaynguoiviet.vn/images/posts/', $data->content) !!}
                        </div>
                    </div>
                    <div class="tags">
                        <div class="title">
                            <h6>Tags</h6>
                        </div>
                        <ul class="list-tags">
                            <li><a href="https://careerbuilder.vn/vi/talentcommunity/search/tag/%E1%BA%A5n-t%C6%B0%E1%BB%A3ng-ban-%C4%91%E1%BA%A7u">ấn tượng ban đầu</a></li>
                            <li><a href="https://careerbuilder.vn/vi/talentcommunity/search/tag/t%C3%ACnh-b%E1%BA%A1n-c%C3%B4ng-s%E1%BB%9F">tình bạn công sở</a></li>
                            <li><a href="https://careerbuilder.vn/vi/talentcommunity/search/tag/%C4%91%E1%BB%93ng-nghi%E1%BB%87p">đồng nghiệp</a></li>
                            <li><a href="https://careerbuilder.vn/vi/talentcommunity/search/tag/li%C3%AAn-h%E1%BB%87-ngh%E1%BB%81-nghi%E1%BB%87p">liên hệ nghề nghiệp</a></li>
                            <li><a href="https://careerbuilder.vn/vi/talentcommunity/search/tag/quan-h%E1%BB%87-c%C3%B4ng-vi%E1%BB%87c">quan hệ công việc</a></li>
                            <li><a href="https://careerbuilder.vn/vi/talentcommunity/search/tag/ph%E1%BB%8Fng-v%E1%BA%A5n">phỏng vấn</a></li>
                        </ul>
                    </div>
                   
                    <div class="share-this-news">
                        <span>Chia sẻ bài viết:</span>
                        <a href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=https://careerbuilder.vn/vi/talentcommunity/bi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html&amp;pubid=ra-559220ee7f9c15d6&amp;title=Bí kíp tạo ấn tượng đầu tiên tuyệt vời&amp;ct=1&amp;pco=tbxnj-1.0" target="_blank" title="Facebook"><span class="fa fa-facebook"></span></a>
                        <a href="https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=https://careerbuilder.vn/vi/talentcommunity/bi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html&amp;pubid=ra-559220ee7f9c15d6&amp;title=Bí kíp tạo ấn tượng đầu tiên tuyệt vời&amp;ct=1&amp;pco=tbxnj-1.0" target="_blank" title="Linkedin"><span class="fa fa-linkedin"></span></a>
                        <a href="https://api.addthis.com/oexchange/0.8/forward/gmail/offer?url=https://careerbuilder.vn/vi/talentcommunity/bi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html&amp;pubid=ra-559220ee7f9c15d6&amp;title=Bí kíp tạo ấn tượng đầu tiên tuyệt vời&amp;ct=1&amp;pco=tbxnj-1.0" target="_blank" title="Gmail"><span class="fa fa-envelope"></span></a>
                        <div class="zalo-share-button" data-href="" data-oaid="579745863508352884" data-layout="2" data-color="white" data-customize="false" style="position: relative; display: inline-block; width: 20px; height: 20px;"><iframe id="1e18a978-b0c6-4732-94da-62f7eded2e9f" name="1e18a978-b0c6-4732-94da-62f7eded2e9f" frameborder="0" allowfullscreen="" scrolling="no" width="20px" height="20px" src="https://button-share.zalo.me/share_inline?id=1e18a978-b0c6-4732-94da-62f7eded2e9f&amp;layout=2&amp;color=white&amp;customize=false&amp;width=20&amp;height=20&amp;isDesktop=true&amp;url=https%3A%2F%2Fcareerbuilder.vn%2Fvi%2Ftalentcommunity%2Fbi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html&amp;d=eyJ1cmwiOiJodHRwczovL2NhcmVlcmJ1aWxkZXIudm4vdmkvdGFsZW50Y29tbXVuaXR5L2JpLWtpcC10YW8tYW4tdHVvbmctZGF1LXRpZW4tdHV5ZXQtdm9pLjM1QTUxRUNBLmh0bWwifQ%253D%253D&amp;shareType=0" style="position: absolute; z-index: 99; top: 0px; left: 0px;"></iframe></div>
                    </div>
                    <!-- <div class="similar-post">
                        <div class="cb-title">
                            <h2>Bài viết cùng chuyên mục</h2>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-xl-4 item">
                                <div class="figure">
                                    <div class="image">
                                        <a href="https://careerbuilder.vn/vi/talentcommunity/30-60-90-lo-trinh-cho-nhan-vien-moi.35A51CB4.html"><img src="https://images.careerbuilder.vn/tintuc/career/20210831/330x180/1630393168_p4.jpg" class="lazy-bg" style=""></a>
                                    </div>
                                    <div class="figcaption">
                                        <div class="title">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/30-60-90-lo-trinh-cho-nhan-vien-moi.35A51CB4.html">
                                                <h5>30-60-90: Lộ trình cho nhân viên mới</h5>
                                            </a>
                                        </div>
                                        <div class="content">
                                            Rất nhiều người trong chúng ta bước vào một công việc mới, công ty mới một cách bản năng. Có người may mắn khi bản năng đưa ra các lựa chọn hành động đúng. Có người phải loay hoay rất lâu để làm quen với môi trường. Kế hoạch 30-60-90 ngày đầu tiên sẽ giúp bạn tiết kiệm thời gian.
                                        </div>
                                        <div class="view-more">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/30-60-90-lo-trinh-cho-nhan-vien-moi.35A51CB4.html">
                                            Xem thêm
                                            <em class="mdi mdi-arrow-right"></em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4 item">
                                <div class="figure">
                                    <div class="image">
                                        <a href="https://careerbuilder.vn/vi/talentcommunity/cac-khau-quyet-tim-viec-thoi-dai-dich.35A51C1E.html"><img src="https://images.careerbuilder.vn/tintuc/career/20210615/330x180/1623725021_tim-viec-thoi-dai-dich-careerbuilder.jpg" class="lazy-bg" style=""></a>
                                    </div>
                                    <div class="figcaption">
                                        <div class="title">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/cac-khau-quyet-tim-viec-thoi-dai-dich.35A51C1E.html">
                                                <h5>Các khẩu quyết tìm việc thời đại dịch</h5>
                                            </a>
                                        </div>
                                        <div class="content">
                                            Hiện đang là giai đoạn nhiều doanh nghiệp hoạt động cầm chừng và ngưng việc tuyển dụng. Viễn cảnh có vẻ xám xịt với người đang tìm việc. Tuy nhiên, trong nguy không phải không có cơ. Hãy thử xem những bí quyết sau đây của CareerBuilder có giúp bạn trở thành ứng viên sáng giá giữa thời kỳ khó khăn này không.
                                        </div>
                                        <div class="view-more">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/cac-khau-quyet-tim-viec-thoi-dai-dich.35A51C1E.html">
                                            Xem thêm
                                            <em class="mdi mdi-arrow-right"></em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4 item">
                                <div class="figure">
                                    <div class="image">
                                        <a href="https://careerbuilder.vn/vi/talentcommunity/tra-sua-cho-su-nghiep-dong-luc-de-tran-day-cam-hung.35A51B49.html"><img src="https://images.careerbuilder.vn/tintuc/career/20210303/330x180/1614765903_03032021_7.jpg" class="lazy-bg" style=""></a>
                                    </div>
                                    <div class="figcaption">
                                        <div class="title">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/tra-sua-cho-su-nghiep-dong-luc-de-tran-day-cam-hung.35A51B49.html">
                                                <h5>Trà sữa cho sự nghiệp - động lực để tràn đầy cảm hứng</h5>
                                            </a>
                                        </div>
                                        <div class="content">
                                            Tết nhất chưa qua, dịch dã đã tới…
                                            Cho dù bạn đang tìm kiếm một công việc hoàn hảo, hay phấn đấu cho công việc hiện tại hay tự khởi nghiệp, sẽ có lúc bạn mất tập trung và nản lòng cho sự nghiệp của mình. Cảm giác hoang mang vì đại dịch cùng những hậu quả của nó cũng có thể lấn át tinh thần làm việc và khiến bạn rệu rã.
                                            Bộ sưu tập những câu nói truyền cảm hứng cho công việc của những người đàn ông và phụ nữ thành đạt trong lịch sử có thể sẽ là ly trà sữa gia tăng cảm hứng, giúp bạn tiếp tục đương đầu với cả thế giới.
                                        </div>
                                        <div class="view-more">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/tra-sua-cho-su-nghiep-dong-luc-de-tran-day-cam-hung.35A51B49.html">
                                            Xem thêm
                                            <em class="mdi mdi-arrow-right"></em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4 item">
                                <div class="figure">
                                    <div class="image">
                                        <a href="https://careerbuilder.vn/vi/talentcommunity/cau-hoi-kho-ban-muon-thay-minh-o-dau-sau-5-nam.35A51B06.html"><img src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif" data-src="https://images.careerbuilder.vn/tintuc/career/20210122/330x180/1611307189_5.png" class="lazy-bg"></a>
                                    </div>
                                    <div class="figcaption">
                                        <div class="title">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/cau-hoi-kho-ban-muon-thay-minh-o-dau-sau-5-nam.35A51B06.html">
                                                <h5>Câu hỏi khó: "Bạn muốn thấy mình ở đâu sau 5 năm?"</h5>
                                            </a>
                                        </div>
                                        <div class="content">
                                            Đôi khi đang phỏng vấn cho một công việc mới, bạn có thể nhận được câu hỏi: "Bạn muốn thấy mình ở đâu sau 5 năm nữa?". Bạn khó có thể biết sự nghiệp của mình ra sao trong năm tới, chứ đừng nói đến 5 năm. Nhưng suy nghĩ thật nghiêm túc và cẩn thận, có khi bạn cũng tìm ra câu trả lời ý nghĩa cho chính mình.
                                        </div>
                                        <div class="view-more">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/cau-hoi-kho-ban-muon-thay-minh-o-dau-sau-5-nam.35A51B06.html">
                                            Xem thêm
                                            <em class="mdi mdi-arrow-right"></em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4 item">
                                <div class="figure">
                                    <div class="image">
                                        <a href="https://careerbuilder.vn/vi/talentcommunity/10-cach-de-tu-duy-ben-ngoai-chiec-hop.35A51ADE.html"><img src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif" data-src="https://images.careerbuilder.vn/tintuc/career/20210104/330x180/1609744088_17.png" class="lazy-bg"></a>
                                    </div>
                                    <div class="figcaption">
                                        <div class="title">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/10-cach-de-tu-duy-ben-ngoai-chiec-hop.35A51ADE.html">
                                                <h5>10 cách để tư duy 'bên ngoài chiếc hộp'</h5>
                                            </a>
                                        </div>
                                        <div class="content">
                                            Suy nghĩ thoát ra ngoài khuôn mẫu sẽ giúp bạn phát triển sự nghiệp, nhất là trong thời điểm kinh tế nhiều biến động như hiện nay. Đã đến lúc bước ra khỏi vùng an toàn để nâng tầm bản thân lẫn công việc rồi.
                                        </div>
                                        <div class="view-more">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/10-cach-de-tu-duy-ben-ngoai-chiec-hop.35A51ADE.html">
                                            Xem thêm
                                            <em class="mdi mdi-arrow-right"></em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4 item">
                                <div class="figure">
                                    <div class="image">
                                        <a href="https://careerbuilder.vn/vi/talentcommunity/6-meo-khi-duoc-hoi-ve-khoang-trong-su-nghiep.35A51AC2.html"><img src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/blank.gif" data-src="https://images.careerbuilder.vn/tintuc/career/20201218/330x180/1608280974_24.png" class="lazy-bg"></a>
                                    </div>
                                    <div class="figcaption">
                                        <div class="title">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/6-meo-khi-duoc-hoi-ve-khoang-trong-su-nghiep.35A51AC2.html">
                                                <h5>6 mẹo khi được hỏi về khoảng trống sự nghiệp</h5>
                                            </a>
                                        </div>
                                        <div class="content">
                                            Nói về đề tài này quá nhiều hoặc quá ít với Nhà tuyển dụng đều không ổn. Vậy nói chi tiết đến mức nào là ổn? Đây có lẽ là câu hỏi mà nhiều nhân sự quan tâm sau một năm 2020 bị ảnh hưởng sự nghiệp vì COVID-19.
                                        </div>
                                        <div class="view-more">
                                            <a href="https://careerbuilder.vn/vi/talentcommunity/6-meo-khi-duoc-hoi-ve-khoang-trong-su-nghiep.35A51AC2.html">
                                            Xem thêm
                                            <em class="mdi mdi-arrow-right"></em>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
              
            </div>
        </div>
    </section>
    <script type="application/ld+json">
        {
        	"@context": "http://schema.org",
        	"@type": "NewsArticle",
        	"mainEntityOfPage": "https://careerbuilder.vn/vi/talentcommunity/bi-kip-tao-an-tuong-dau-tien-tuyet-voi.35A51ECA.html",
        	"headline": "Bí kíp tạo ấn tượng đầu tiên tuyệt vời",
        	"author": {
        		"@type": "Person",
        		"name": "Admin"
        	},
        	"publisher": {
        		"@type": "Organization",
        		"name": "Careerbuilder",
        		"logo": {
        			"@type": "ImageObject",
        			"url": "https://static.careerbuilder.vn/themes/careerbuilder/img/logo.png",
        			"width": 245,
        			"height": 37
        		}
        	},
        	"image": {
        		"@type": "ImageObject",
        		"url": "https://images.careerbuilder.vn/tintuc/career/20220519/400x700/1653882240_bi-kip-tao-an-tuong-dau-tien-tuyet-voi-careerbuilder.jpg",
        		"width": 400,
        		"height": 700
        	},
        	"datePublished": "2022-05-19",
        	"dateModified": "2022-07-11",
        	"keywords": [
        		"ấn tượng ban đầu","tình bạn công sở","đồng nghiệp","liên hệ nghề nghiệp","quan hệ công việc","phỏng vấn"	],
        	"sameAs" : "https://www.facebook.com/CareerbuilderVietnam/"
        }
    </script>
    <script src="{{ asset('js/swiper.js') }}">
        
    </script>
    <script>
        var DOMAIN_KV = 'https://careerbuilder.vn';
        var options = {
        	listpages : [
        		
        				"30-60-90-lo-trinh-cho-nhan-vien-moi.35A51CB4",
        				"cac-khau-quyet-tim-viec-thoi-dai-dich.35A51C1E",
        				"dau-truong-chinh-tri-cong-so-dung-lam-nan-nhan.35A51BDD",
        				"nhung-dieu-sinh-vien-nam-cuoi-nen-chuan-bi.35A51BB2",
        				"7-cach-tranh-tram-cam-vi-cong-viec.35A51B94",
        				
        	],
        	pageloadurl : 'https://careerbuilder.vn/careertool/detailinfiniteajax/?type=0&layoutnew=1&news_id=',
        	threshold : 800,
        	scrollelement: "#uni_container",
        	displayelement: "#infinite",
        
        };
        //var scrollinfinite = Scrollinfinite;
        ScrollInfinite.init(options);
        ScrollInfinite.run();
    </script>
    <div class="back-drop"></div>
</main>
@endsection