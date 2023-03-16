 @extends('frontend.layout.appfe')
@section('content') 

 <main>
            <style>/*about-us.css*/

                .cb-banner-about{position:relative;}.cb-banner-about .image{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;}.cb-banner-about .image img{-o-object-fit:cover;width:100%;height:100%;object-fit:cover;}.cb-banner-about .content{padding:15px;}.cb-banner-about .title{margin-bottom:10px;}.cb-banner-about .title h1{color:#333333;font-size:20px;font-weight:700;text-align:center;text-transform:uppercase;}@media (min-width:1025px){.cb-banner-about .title h1{font-size:22px;}}@media (min-width:1200px){.cb-banner-about .title h1{font-size:24px;}}.cb-banner-about .text{-moz-text-align-last:center;max-width:720px;margin:0 auto;color:#333333;font-size:18px;font-weight:300;line-height:1.3;text-align:justify;text-align-last:center;}@media (min-width:768px){.cb-banner-about .text{font-size:20px;}}@media (min-width:1025px){.cb-banner-about .text{font-size:24px;}}@media (min-width:1200px){.cb-banner-about .text{font-size:26px;}}@media (min-width:1200px){.cb-banner-about .content{-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);z-index:11;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);}.cb-banner-about .title{margin-bottom:10px;}.cb-banner-about .title h1{color:#ffffff;}.cb-banner-about .text{color:#ffffff;}}.cb-nav-about{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;border-bottom:1px solid #e9e9e9;background:#f8f8f8;}.cb-nav-about.sticky{z-index:111;position:-webkit-sticky;position:sticky;top:60px;}@media (min-width:1200px){.cb-nav-about.sticky{top:80px;}}.cb-nav-about .title-nav{display:none;}.cb-nav-about .list-nav{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;}@media (min-width:576px){.cb-nav-about .list-nav{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;}}.cb-nav-about .list-nav a{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;align-items:center;justify-content:center;padding:9px 15px;color:#999999;font-size:15px;font-weight:700;transition:0.4s ease-in-out all;}.cb-nav-about .list-nav a::before{-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-webkit-transition:0.4s ease-in-out all;-o-transition:0.4s ease-in-out all;position:absolute;top:100%;left:50%;width:0;height:2px;transform:translateX(-50%);background:#2f4ba0;content:"";transition:0.4s ease-in-out all;}.cb-nav-about .list-nav li.active a, .cb-nav-about .list-nav li:hover a{color:#172642;text-decoration:none;}.cb-nav-about .list-nav li.active a::before, .cb-nav-about .list-nav li:hover a::before{width:calc(100% - 30px);}@media (max-width:1023px){.cb-nav-about .list-nav a::before{display:none;}}@media (max-width:576px){.cb-nav-about{display:block;}.cb-nav-about .title-nav{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between;width:100%;padding:3px 15px;background:#f8f8f8;}.cb-nav-about .title-nav p{color:#172642;font-size:16px;font-weight:700;}.cb-nav-about .title-nav em{color:#172642;font-size:20px;}.cb-nav-about .list-nav{display:none;border-top:1px solid #cccccc;}.cb-nav-about .list-nav a{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;font-size:14.5px;}.cb-nav-about .list-nav li.active{display:none;}}.cb-empowering{padding-bottom:0;}.cb-empowering .image{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:100%;height:100%;}.cb-empowering .image img{-o-object-fit:cover;width:100%;max-width:100%;height:100%;object-fit:cover;}@media (min-width:1025px){.cb-empowering .image{height:390px;}}.cb-empowering .content .title{margin-bottom:5px;}.cb-empowering .content .title h2{color:#172642;font-size:20px;font-weight:700;line-height:1.3;}@media (min-width:1025px){.cb-empowering .content .title h2{font-size:22px;}}@media (min-width:1200px){.cb-empowering .content .title h2{font-size:30px;}}@media (min-width:1200px){.cb-empowering .content .title{margin-bottom:25px;}}.cb-empowering .content .text{max-height:300px;padding-right:10px;overflow-y:auto;color:#5d677a;font-size:16px;font-weight:500;line-height:1.4;text-align:justify;}.cb-empowering .content .text > *{margin-top:10px;}.cb-empowering .content .text::-webkit-scrollbar{width:6px;background:#eaeaea;}.cb-empowering .content .text::-webkit-scrollbar-thumb{background:#7fcb42;}@media (min-width:1025px){.cb-empowering .align-item-center{-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;}.cb-empowering .align-item-center .content{padding-left:40px;}}.cb-about-icon .figure{height:240px;padding:50px;padding-right:40px;border:1px solid #e5e5e5;border-radius:5px;}.cb-about-icon .figure .image{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;margin-bottom:15px;}.cb-about-icon .figure .image i{color:#2f4ba0;font-size:40px;}@media (min-width:1025px){.cb-about-icon .figure .image i{font-size:65px;}}.cb-about-icon .figure .figcaption{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;max-width:230px;margin:0 auto;}.cb-about-icon .figure .figcaption .content{max-height:60px;padding-right:10px;overflow-y:auto;color:#172642;font-size:16px;font-weight:500;line-height:1.3;text-align:justify;}.cb-about-icon .figure .figcaption .content::-webkit-scrollbar{width:6px;background:#eaeaea;}.cb-about-icon .figure .figcaption .content::-webkit-scrollbar-thumb{background:#7fcb42;}@media (max-width:576px){.cb-about-icon .figure{height:100%;padding-right:30px;padding-left:30px;}.cb-about-icon .figure .figcaption{max-width:100%;}}.cb-competitive-advantages{min-height:650px;background-size:cover;}.cb-competitive-advantages .cb-title{margin-bottom:30px;}.cb-competitive-advantages .cb-title h2{max-width:1025px;margin:0 auto;color:#ffffff;line-height:1.4;}@media (min-width:1200px){.cb-competitive-advantages .cb-title{margin-bottom:60px;}}.cb-competitive-advantages .figure{position:relative;width:100%;height:330px;overflow:hidden;border-radius:5px;}.cb-competitive-advantages .figure .image{width:100%;height:100%;}.cb-competitive-advantages .figure .image img{-o-object-fit:cover;width:100%;height:100%;object-fit:cover;}.cb-competitive-advantages .figure .figcaption{z-index:11;position:absolute;bottom:0;left:0;width:100%;height:120px;padding:25px;padding-right:20px;}.cb-competitive-advantages .figure .figcaption .content{max-height:72px;padding-right:10px;overflow-y:auto;color:#182642;font-size:16px;font-weight:500;text-align:justify;}.cb-competitive-advantages .figure .figcaption .content::-webkit-scrollbar{width:6px;background:#eaeaea;}.cb-competitive-advantages .figure .figcaption .content::-webkit-scrollbar-thumb{background:#7fcb42;}.cb-competitive-advantages .figure.bg-trends .figcaption{background:rgba(226, 245, 255, 0.9);}.cb-competitive-advantages .figure.bg-tips .figcaption{background:rgba(226, 255, 242, 0.9);}.cb-competitive-advantages .figure.bg-self .figcaption{background:rgba(255, 244, 226, 0.9);}@media (min-width:1200px){.cb-competitive-advantages{background-position:center center;background-repeat:no-repeat;}}.about-us-page .justify-content-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;}


            </style>
            <section class="cb-banner-about">
                <div class="image"><img src="./img/about-us/1.png" alt=""></div>
                <div class="cb-nav-about">
                    <div class="title-nav">
                        <p>Về CareerBuilder.vn</p>
                        <em class="mdi mdi-chevron-down"></em>
                    </div>
                    <ul class="list-nav">
                        <li class="active"><a href="javascript:void(0)">Về Việc làm ngon</a></li>
                        <li ><a href="javascript:void(0)">Ban Lãnh Đạo</a></li>
                        
                        <li><a href="javascript:void(0)" target="_blank">Cơ Hội Nghề Nghiệp</a></li>
                    </ul>
                </div>
                <div class="content">
                    <div class="title">
                        <h1>VỀ Việc làm ngon</h1>
                    </div>
                   <!--  <div class="text">
                        <p>CareerBuilder luôn đi đầu trong đổi mới khi sử dụng dữ liệu và công nghệ để phát triển không gian quản lý nguồn nhân lực, với các giải pháp giúp nhà tuyển dụng tìm, tuyển dụng và quản lý những người tuyệt vời.</p>
                    </div> -->
                </div>
            </section>
            <section class="cb-empowering cb-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="image">
                                <img alt="" src="./img/about-us/2.png" />
                            </div>
                        </div>
                        <div class="col-lg-6 align-item-center">
                            <div class="content">
                                <div class="title">
                                    <h2>
                                        Cung Cấp Giải Pháp Tuyển Dụng Khắp Toàn Cầu
                                    </h2>
                                </div>
                               <!--  <div class="text">
                                    <p>
                                        CareerBuilder.vn, sở hữu bởi CareerBuilder Mỹ - Mạng Việc làm &amp; Tuyển dụng lớn nhất thế giới. Với công nghệ tiên tiến, mạng lưới đối tác toàn cầu và dịch vụ khách hàng chuyên nghiệp, chúng tôi kết nối nhân tài với công việc mơ ước và giúp doanh nghiệp xây dựng đội ngũ nhân sự tài năng.
                                    </p>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cb-about-icon cb-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="figure">
                                <div class="image">
                                    <img alt="" src="./img/about-us/3.png" />
                                </div>
                                <div class="figcaption">
                                    <div class="content">
                                        <p>
                                            CareerBuilder hiện đang hoạt động tại Mỹ, Châu Âu, Canada, Châu Á, Nam Mỹ và có mặt tại hơn&nbsp;<span class="col_link">70 thị trường quốc tế</span>
                                        </p>
                                        <p>
                                            <span class="col_link"><span class="col_link">Hơn 49 triệu người</span>&nbsp;sử dụng dịch vụ CareerBuilder để được tư vấn nghề nghiệp và tìm kiếm cơ hội việc làm mỗi tháng</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="figure">
                                <div class="image">
                                    <img alt="" src="./img/about-us/4.png" />
                                </div>
                                <div class="figcaption">
                                    <div class="content">
                                        <p>
                                            Hơn 2 triệu việc làm đăng tuyển
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="figure">
                                <div class="image">
                                    <img alt="" src="./img/about-us/5.png" />
                                </div>
                                <div class="figcaption">
                                    <div class="content">
                                        <p>
                                            <span class="col_link">Hơn 200 triệu ứng viên</span>&nbsp;trên toàn thế giới tham gia CareerBuilder
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="figure">
                                <div class="image">
                                    <img alt="" src="./img/about-us/6.png" />
                                </div>
                                <div class="figcaption">
                                    <div class="content">
                                        <p>
                                            <span class="col_link">300,000 tập đoàn</span>&nbsp;trên toàn cầu sử dụng dịch vụ tìm kiếm nhân sự mỗi ngày, chiếm 92% trong danh sách 1000 doanh nghiệp lớn nhất ở Mỹ (Fortune 1000)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="cb-competitive-advantages cb-section" style="background-image: url(https://images.careerbuilder.vn/content/Product/bg-1.jpg)">
                <div class="container">
                    <div class="cb-title cb-title-center">
                        <h2 class="en">
                            Tại Việt Nam, CareerBuilder.vn đã và đang là lựa chọn của các doanh nghiệp hàng đầu với các ưu thế
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-xl-3">
                            <div class="figure bg-trends">
                                <div class="image">
                                    <img alt="" src="./img/about-us/7.png" />
                                </div>
                                <div class="figcaption">
                                    <div class="content">
                                        <p>
                                            Nguồn dữ liệu phong phú với hơn 1,800,000 thành viên đăng ký
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-3">
                            <div class="figure bg-tips">
                                <div class="image">
                                    <img alt="" src="./img/about-us/8.png" />
                                </div>
                                <div class="figcaption">
                                    <div class="content">
                                        <p>
                                            Hàng ngàn CV hoàn chỉnh và được cập nhật liên tục
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-3">
                            <div class="figure bg-trends">
                                <div class="image">
                                    <img alt="" src="./img/about-us/9.png" />
                                </div>
                                <div class="figcaption">
                                    <div class="content">
                                        <p>
                                            Tiếp cận hiệu quả nhiều nguồn ứng viên tiềm năng hơn bất cứ trang tuyển dụng nào ở Việt Nam
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-3">
                            <div class="figure bg-self">
                                <div class="image">
                                    <img alt="" src="./img/about-us/10.png" />
                                </div>
                                <div class="figcaption">
                                    <div class="content">
                                        <p>
                                            Hơn 13,000 doanh nghiệp hàng đầu hiện đang sử dụng CareerBulder.vn để tuyển chọn nhân tài và xây dựng đội ngũ nhân sự vững mạnh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <script>/*about-us.js*/
                $(document).ready(function(){$('.cb-nav-about .title-nav').on('click',function(){if($(window).width()<576){$('.cb-nav-about .list-nav').slideToggle()}})})
            </script>
            <div class="back-drop"></div>
        </main>


@endsection        