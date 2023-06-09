<!DOCTYPE html>
<html lang="vi">
    <head>
        <META HTTP-EQUIV="Content-language" CONTENT="vi">
        <link href="vi" hreflang="vi" rel="alternate" />
        <link href="en" hreflang="en" rel="alternate" />
        <!-- <base href="https://static.talentnetwork.vn/talentnetwork/source/eurowindow/"/> -->
        <!-- <link rel="shortcut icon" href="https://static.talentnetwork.vn/talentnetwork/source/favicon_eurowindow.ico?t=1"/> -->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="robots" content="noindex" />
        <title>Tuyển dụng và tìm kiếm việc làm nhanh việc làm ngon</title>
        <!-- tag share 4 -->
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content=""/>
        <meta property="og:title" content=""/>
        <meta property="og:url" content="vi"/>
        <meta property="og:image:type" content="image/jpeg"/>

        <meta name="google-site-verification" content="5IKRqCwpFtP82JdyuTKfb9H8BsJdUm5ZRKTEfYbd0Bw" />
        
        <meta property="og:image:width" content="600"/>
        <meta property="og:image:height" content="315"/>
        <meta property="og:description" content=""/>
        <script type="text/javascript" src="{{ asset('download/js/jquery.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('download/js/hoverIntent.js')}}"></script>
        <meta name="keywords" content="_seo_index_index_keywords_" />
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
        <link href="{{  asset('download/css/bootstrap.css')}}" rel="stylesheet" type="text/css" media="screen"/>
        <!--[if lt IE 9]>
    
        <script type="text/javascript" src="{{ asset('download/js/html5shiv.min.js')}}"></script>
        <script type="text/javascript" src="{{ asset('download/js/respond.min.js')}}"></script>
        <![endif]-->
        <style type="text/css">
            .wrapDialog .container { width: 100% }
            .jc-bs3-container, .jc-bs3-row {width:100% !important}
            .jconfirm-content{line-height: 22px}
        </style>
        <link href="{{ asset('download/css/general.css')}}" rel="stylesheet" type="text/css" media="screen"/>
        <link href="{{ asset('download/css/core.css?t=20171010')}}" rel="stylesheet" type="text/css" media="screen"/>
        <link href="{{ asset('download/css/theme_default.css')}}" rel="stylesheet" type="text/css" media="screen"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link href="{{ asset('download/css/TNredirect.css')}}" rel="stylesheet" type="text/css" media="screen"/>
        <link href="{{ asset('download/css/premium.css')}}?ver=1" rel="stylesheet" type="text/css" media="screen"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
        <link rel="stylesheet" type="text/css" href="{{ asset('/css/global1.css') }}">

       
        <!-- <link rel="stylesheet" type="text/css" href="css/nav_vi.css?t=12032015" media="screen"/> -->
        <link href="{{ asset('download/js/jquery.multiselect.css')}}" rel="stylesheet" type="text/css"/>
        <link href="{{ asset('download/js/jquery-ui.css')}}" rel="stylesheet" type="text/css"/>
        <link href="{{ asset('download/css/jquery.fancybox-1.3.4.css')}}" rel="stylesheet" type="text/css"/>
        <link href="{{ asset('download/css/jquery-confirm.min.css')}}" rel="stylesheet" type="text/css"/>

        <style type="text/css">
            .search-jobs-main input.width_545, .search-jobs-main select.slc-mb,.searchvt1{
                background: green !important;
            }

            .container-fluid{
                display: none;
            }
        </style>
        <script type="text/javascript" src="{{ asset('download/js/jquery-ui.min.js')}}"></script>
        <script type="text/javascript" src="{{ asset('download/js/jquery.multiselect.js')}}"></script>
        <script type="text/javascript" src="{{ asset('download/js/jquery.formatcurrency.js')}}"></script>
        <script language="javascript" src="{{ asset('download/js/jquery-confirm.min.js')}}"></script>
        
       
        <script type="text/javascript">
            $( window ).load(function() {
              // Search
                
                $( window ).resize(function() {
                    widthWindowChosen = $(window).width();
                    if(widthWindowChosen > 973){
                        //$(".chosen").show();
                        //setTimeout(function(){ $(".chosen").trigger("chosen:updated") }, 3000);
                        //$(".chosen").hide();
                        if($('.chosen').is(":visible"))
                            $(".chosen").chosen({no_results_text: language.msg_no_results_matched});
                    }
                });
            });
            
        </script> 
        <!-- <script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" data-app-key="fa9yyto5llvqw2b" id="dropboxjs')}}"></script> -->
        <style type="text/css">
            #banner-video{
                background: #ddd;
            }
            #banner-video img{
                width: 100%;
            }
            #back-top{
                display: none !important;
            }
        </style>
    </head>

    <?php 
        $introduce_banner = DB::table('posts1')->where('category', 10)->get()->last();

        $introduce_top = DB::table('posts1')->where('category', 9)->get()->last();



    ?>

    <?php 
            $listDefineJob = LIST_JOB;

            $address = ADDRESS;

            $salary = SALARY;

            $level  = LEVEL;
            
        ?>
    <!-- End Landing Page -->
    <body class="frontend_clients indexclass_index ">
        <!-- Load Facebook SDK for JavaScript -->
        <div id="fb-root"></div>
        <!-- Your customer chat code -->
        <div class="fb-customerchat"
            attribution=setup_tool
            page_id="1686228198272519"
            theme_color="#0060af"
            logged_in_greeting="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
            logged_out_greeting="Xin chào! Chúng tôi có thể giúp gì cho bạn?">
        </div>
        <div id="header-menu-mobile">
            <div class="col-xs-12 c1">
                <div id="header-menu-greeting">
                    <div class="col-xs-12">
                        <h2>Welcome To Talentnetwork</h2>
                    </div>
                </div>
                <div id="header-menu-links">
                    <ul>
                        <li id="header-menu-authentication-links">
                            <div class="col-xs-6"><a href="dang-nhap/vi" class="btn">Đăng nhập</a></div>
                            <div class="col-xs-6"><a href="join-talent-network/vi?url=vi" class="btn">Đăng ký</a> </div>
                        </li>
                        
                        <li><a href="gioi-thieu-35A517C6/vi">Đăng nhập</a>
                        </li>
                       
                        <li><a href="phuc-loi-35A517C8/vi">Tìm việc làm</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <style type="text/css">
            #fancybox-close{right:50px !important}
        </style>
        <div class="section-header" id="section-header">
            <!-- <div id="my-download">
                <div class="container">
                    <div class="download_form_premium">
                        <a href="http://advertising.careerbuilder.vn/html/customer/eurowindow/BM06_QT08EW_To khai ung vien.doc">Tải mẫu thông tin ứng viên</a>
                    </div>
                </div>
            </div> -->
            <div id="header-pre">
                <div class="columns hidden">
                    <div id="show-menu"><span class="fa fa-bars"></span></div>
                </div>
                <div class="container">
                    <div class="logo"><a href="{{ route('home') }}"><img alt="Công Ty Cổ Phần Eurowindow" src="{{ asset('images/logo.png') }}" /></a></div>
                    <div class="menu">
                        <ul>
                            
                            
                            <li class=""><a href="{{ route('form_recruit') }}" id="menu_11979"  target="_self">Đăng tin tuyển dụng </a>
                            </li>


                            <li class=""><a href="{{ route('registerClientUser') }}"  target="_self">Gia nhập việc làm ngon </a>
                            </li>

                            <li class=""><a href="{{ route('our') }}"  target="_self">Về chúng tôi </a>
                            </li>

                            <li class=""><a href="javascript:void(0)" class="dropdown-toggle click-drop"  data-toggle="dropdown">Kiến thức </a>

                                <ul class="dropdown-menu">
                                  <li><a href="{{ route('view-List-Cate', 'ki-nang-cong-so') }}">Kỹ năng công sở</a></li>
                                  <li><a href="{{ route('view-List-Cate', 'chuyen-nganh') }}">Chuyên ngành</a></li>
                                  <li><a href="{{ route('view-List-Cate', 'chuyen-cong-so') }}">Chuyện công sở</a></li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                    <div class="navbar-right">

                        <ul>

                            @if(!Auth::check())
                            <li><a href="{{ route('login-users') }}" class="showDialogD">Đăng nhập</a></li>

                            <li><a href="{{ route('registerClientUser') }}">Đăng Ký</a></li>

                            @else

                            <li style="position: relative;">
                                <a href="{{ route('user-dashboard') }}" class="showDialogD" >Xin chào {{ Auth::user()->name }}</a>
                                <ul class="dropdown-menu drop1">
                                    <li><a href="{{ route('user-dashboard') }}">Dashboard</a></li>
                                    <li><a href="{{ route('logoutUser') }}">Logout</a></li>
                                 
                                </ul>
                            </li>
                            
                            @endif

                            <li> 
                               <a href="{{ route('show-index') }}">Dành cho nhà tuyển dụng</a>

                                 

                            </li>
                           
                        </ul>

                       


                        <style type="text/css">
                            
                           .main-employer .dropdown-toggle {
                                min-width: 190px;
                                padding: 17.5px 20px;
                            }

                            .main-employer .dropdown-toggle {
                                padding: 17.5px;
                                background: #182642;
                            }

                            .main-employer .dropdown-toggle p {
                                color: #999999;
                                font-size: 14.5px;
                                font-weight: 500;
                            }
                            .bgimage{
                                background-size :auto !important;


                            }

                            ::placeholder {
                              color: #fff;
                            }

                        </style>

                    </div>

                </div>
            </div>
        </div>
        <div style="display: none">
            <div id="WhyJoin" class="wrapDialog msgbox">
                <div class="container">
                    <h3 class="col_theme">Join Our Talent Network</h3>
                    <div class="content_why_join">
                        <h4>Talent Network là gì?</h4>
                        <p>Gia nhập Talent Network của chúng tôi sẽ giúp bạn nâng cao khả năng tìm kiếm việc làm. Cho dù bạn ứng tuyển một công việc nào đó hoặc đơn giản là cập nhật thông tin của mình, chúng tôi cũng luôn mong muốn được kết nối cùng bạn.</p>
                        <h4>Vì sao bạn nên gia nhập Talent Network?</h4>
                        <ul style="list-style: disc">
                            <li>Nhận thông báo việc làm mới phù hợp với sự quan tâm của bạn</li>
                            <li>Cập nhật các thông tin mới nhất về công ty</li>
                            <li>Chia sẻ cơ hội việc làm với gia đình, bạn bè thông qua mạng xã hội hoặc email</li>
                        </ul>
                        <p><a href="join-talent-network/vi?url=vi" class="showDialogD"><strong>Hãy gia nhập Talent Network của chúng tôi ngay hôm nay!</strong></a></p>
                    </div>
                    <div class="clearall mar_top10">
                        <div class="btnContinute"><a href="join-talent-network/vi?url=vi" class="showDialogD">Tiếp Tục</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="wrapper">
           
            <div id="photo-area">
                <div class="texton">
                   <!--  <div class="slogan">
                        <h1>CÙNG KIẾN TẠO MỘT SỰ NGHIỆP THÀNH CÔNG</h1>
                    </div> -->
                    <!-- <div class="join-talent-onclip"><a href="join-talent-network/vi" class="showDialogD">Gia nhập cùng Eurowindow</a></div> -->
                </div>
                <div id="banner-video">
                    <div class="filter-videos"></div>

                    <?php 

                        $banners =  App\Models\banners::where('id', 5)->first();
                    ?>

                    <img src="{{ asset($banners->image) }}">
                    
                </div>
                <div class="container-search">
                    <div class="search-jobs-main">
                        <form method="get" action="{{route('filters') }}"  id="frmSearchJob">
                            <input name="keyword"  id="keywords" type="text" class="brOrgane h15 width_545" onblur="if(this.value=='') this.value='';" onfocus="javascript:if(this.value=='Tìm việc') this.value='';" value="" /  placeholder="Tìm việc">
                            <select id="industry" name="industry" class="chosen slc-mb">
                                <option value="">Ngành nghề</option>
                                 @foreach($listDefineJob as $key => $value)

                                    @if($key !=0)

                                     <option value="{{ $key }}">{{ $value }}</option>

                                    @endif 
                                @endforeach
                
                            </select>

                            <select id="location" name="location" class="chosen slc-mb">
                                <option value="">Nơi làm việc</option>
                                <optgroup label="Việt Nam" >
                                    @foreach($address as $key => $value)
                                        <option value="{{ $key }}">{{ $value }}</option>
                                    @endforeach
                                </optgroup>
                            </select>
                            <button class="searchvt1" type="submit">
                            <i class="fa fa-search"></i>
                            <span>Tìm kiếm</span>
                            </button>
                        </form>
                    </div>
                    <style type="text/css">
                        .chosen-container{float:left}
                    </style>
                </div>
            </div>
            <style>
                #bgvid, #bgvid1 {width: 100%;object-fit: cover;transform: translateY(-50%);top:50%;}
                #bgvid1 { position: absolute; min-height:100%; height:auto; }
            </style>

            <div id="11974" class="section-page page-content-pre bg-odd" >
                <header class="container-fluid">
                    <h2 class="section-title" >Giới thiệu</h2>
                </header>
                <div class="container">
                    <div class="col-xs-12">
                        <div class="content_fck text-intro">
                            <p style="text-align:justify">
                                <img src="{{ asset('images/1570440136_1568967007-20180619-01-1.jpg') }}" style="float:right; height:264px; margin-left:15px; margin-right:15px; width:450px" />
                                {!!  @$introduce_top->content !!}
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div id="11975" class="section-page section-grid-career " >
                <div class="container">
                    <header class="container-fluid">
                        <h2 class="section-title" >Cơ Hội Nghề Nghiệp</h2>
                        <!--<p>Here are our openings. Think you're the right fit? Apply today!</p>-->
                    </header>
                    <div class="container-fluid container-narrow">
                        <ul class="flex-row jobs">
                            <li class="col-xs-6 col-sm-6 col-md-4 job">
                                <a href="#"><img src="{{ asset('images/job1.png')}}" /></a>
                                <h3 class="job-title"><a href="#">Bán hàng / Kinh doanh</a></h3>
                            </li>
                            <li class="col-xs-6 col-sm-6 col-md-4 job">
                                <a href="#"><img src="{{ asset('images/job2.png')}}" /></a>
                                <h3 class="job-title"><a href="#">Kế toán / Kiểm toán</a></h3>
                            </li>
                            <li class="col-xs-6 col-sm-6 col-md-4 job">
                                <a href="#"><img src="{{ asset('images/job3.png')}}" /></a>
                                <h3 class="job-title"><a href="#">Kiến trúc</a></h3>
                            </li>
                            <li class="col-xs-6 col-sm-6 col-md-4 job">
                                <a href="#"><img src="{{ asset('images/job4.png')}}" /></a>
                                <h3 class="job-title"><a href="#">Thu mua / Vật tư</a></h3>
                            </li>
                            <li class="col-xs-6 col-sm-6 col-md-4 job">
                                <a href="#"><img src="{{ asset('images/job5.png')}}" /></a>
                                <h3 class="job-title"><a href="#">Vận chuyển / Giao nhận / Kho vận</a></h3>
                            </li>
                            <li class="col-xs-6 col-sm-6 col-md-4 job">
                                <a href="#"><img src="{{ asset('images/job6.png')}}" /></a>
                                <h3 class="job-title"><a href="#">Xây dựng</a></h3>
                            </li>
                        </ul>
                    </div>
                    <!-- <div class="row">
                        <div class="col-xs-3 btn-viewmore">
                            <a href="#" class="btn btn-block btn-primary">Xem thêm</a>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="visible-xs visible-sm">
            </div>
            <div class="hidden-xs hidden-sm">
                <div class="ads-pre slidebg" style="height:350px">
                    <div id="slidehr">
                        <div class="bgimage" style="background-image:url({{ asset('images/banner1.jpg')}}">
                            
                        </div>
                        
                    </div>
                   <!--  <ul id="pager">
                        <li><a href="javascript:void(0);"></a></li>
                        <li><a href="javascript:void(0);"></a></li>
                        <li><a href="javascript:void(0);"></a></li>
                        <li><a href="javascript:void(0);"></a></li>
                    </ul> -->
                    <script type="text/javascript">
                       
                        $(window).load(function(){
                                var posPage = ($(window).width() - $('#pager').width())/2;
                                $('#pager').css({'left':posPage+'px'});
                                $(window).resize(function(){
                                        posPage = ($(window).width() - $('#pager').width())/2;
                                        $('#pager').css({'left':posPage+'px'});
                                });
                        });
                    </script>
                </div>
            </div>
            <div id="11976" class="section-page page-content-pre bg-odd" >
                <header class="container-fluid">
                    <h2 class="section-title" >Chính sách nhân sự</h2>
                </header>
                <div class="container">
                    <div class="col-xs-12">
                        <div class="content_fck text-intro">

                            

                            {!!  @$introduce_banner->content  !!}
                        </div>
                    </div>
                </div>
            </div>

           
            <div class="container">

                <header class="container-fluid">
                    <h2 class="section-title section1">Việc làm nổi bật</h2>
                </header>

                <style type="text/css">

                    .title-special{
                        text-align: center;
                        font-weight: bold;
                        text-transform: uppercase;
                    }

                     .section1 {
                        padding: 20px 0;
                     }
                    
                    .figure {
                        padding-right: 45px;
                    }

                    .figure {
                        -ms-flex-wrap: wrap;
                        -webkit-transition: 0.4s ease-in-out all;
                        -o-transition: 0.4s ease-in-out all;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        position: relative;
                        flex-wrap: wrap;
                        padding: 15px 10px;
                        overflow: hidden;
                        border-top: 1px solid #e5e5e5;
                        border-right: 1px solid #e5e5e5;
                        border-radius: 5px;
                        border-top-left-radius: 4px;
                        transition: 0.4s ease-in-out all;
                    }

                    .figure .title a {
                        -o-text-overflow: ellipsis;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        display: -webkit-box;
                        overflow: hidden;
                        color: #172642;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 1.2;
                        text-overflow: ellipsis;
                    }

                    .job-item .figure .figcaption {
                        -webkit-box-flex: 0;
                        -ms-flex: 0 0 auto;
                        flex: 0 0 auto;
                        max-width: calc(100% - 79px);
                        padding-left: 15px;
                    }

                    .job-item .figure .caption .company-name {
                        -o-text-overflow: ellipsis;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        display: -webkit-box;
                        overflow: hidden;
                        color: #5d677a;
                        text-overflow: ellipsis;
                    }

                   .figure .image {
                        background-color: #fff;

                        display: flex;
                        flex: 0 0 79px;
                        align-items: center;
                        justify-content: center;
                        max-width: 79px;
                        height: 79px;
                        padding: 5px;
                        border: 1px solid #e5e5e5;
                        border-radius: 5px;
                    }
                </style>

                <div class="row">


                    <?php 

                        $outstanding_work= DB::table('job')->join('employ_info', 'job.employer_id', '=', 'employ_info.employ_id')->select('job.title', 'job.id', 'employ_info.name', 'employ_info.logo', 'employ_info.links', 'job.link','job.salaryunit', 'job.salary', 'job.address_job')->orderBy('id', 'desc')->take(10)->get();




                    ?>
                    @if($outstanding_work->count()>0)

                    @foreach($outstanding_work as $value)
                   
                    <div class="col-lg-6 ">
                        <div class="job-item">
                            <div class="figure">
                                <div class="image"><a target="_blank" href="{{ route('job_details', [$value->link, $value->id]) }}" title="{{  $value->title }}" class="swiper-lazy swiper-lazy-loaded" alt="{{  $value->title }}"></a></div>
                                <div class="figcaption">
                                    <div class="title"><a target="_blank" href="{{ route('job_details', [$value->link, $value->id]) }}" title="Senior Sales Manager">{{  $value->title }}</a></div>
                                    <div class="caption">


                                        <a class="company-name" href="{{  !empty($value->links)?Route('employ-details', $value->links):'#' }}" title="{{ $value->name }}" target="_blank">{{ $value->name }}</a>

                                         <?php 

                                            $salary =  explode('-', $value->salary);  

                                        ?>
                                        {{ @number_format(intval($salary[0]))   }} - {{ @number_format(intval($salary[1]))   }} {{ $value->salaryunit===0?'Đ':'usd' }}
                                        
                            
                                        @if (Auth::check()) 
                                        

                                        <div class="saves-icon">
                                            <span class="top save-job" onclick="saveJob('{{ $value->id }}')" id="job_{{ $value->id }}" data-id="{{ $value->id }}"><i class="fa fa-heart" aria-hidden="true"></i></span> 
                                           
                                        </div>
                                        @endif
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                   
                    @endforeach

                    @endif


                   
                </div>
            </div>  



            <div id="11977" class="section-page " >
                <div class="news-five-items">
                    <div class="container">
                        <header class="container-fluid">
                            <h2 class="section-title" >Tin Tức</h2>
                        </header>
                        <div class="row">

                            <?php 

                                $post =  App\Models\post::take(6)->get();
                            ?>

                            @if($post->count()>0)

                             @foreach($post as $posts)
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="box bg-size-cover" style="background-image:url({{  asset('images/1653372151_data-analyst-careerbuilder.jpg') }}">
                                    <div class="blurb">
                                        <p><a href="{{ route('blog_detail', $posts->link??'') }}">{{ $posts->title }}</a></p>
                                    </div>
                                    <div class="excerpt">
                                        <p class="title"><a href="{{ route('blog_detail', $posts->link??'') }}">{{ $posts->title }}</a></p>
                                        <p class="note"></p>
                                        <p class="viewmore"><a href="{{ route('blog_detail', $posts->link??'') }}">Xem chi tiết</a></p>
                                    </div>
                                </div>
                            </div>
                            @endforeach

                            @endif

                        </div>
                        <div class="row">
                            <div class="col-sm-2 col-sm-offset-5 btn-viewmore">
                                <a class="btn btn-block btn-primary" href="{{ route('list-news') }}" class="btn btn-block btn-primary weight-bold">Xem thêm</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

              
            <div id="media_section" class="section-page ImageService-pre"></div>
            <script type="text/javascript">
                // $(function(){
                //     loadMediaSection('media_section', 'index', 'index');
                // });
            </script>
        </div>
        <div class="section-page social-pre bg-odd">
            <header class="container-fluid">
                <h2 class="section-title">Kết nối với vieclamngon</h2>
            </header>
        </div>

        <footer>
            <div class="container">
                <section class="top-footer cb-section cb-section-border-bottom">
                    <div class="">
                        <div class="col-lg-12 logo"><img class="lazy-bg" data-src="{{ asset('images/template/logo/logo.png') }}" src="{{ asset('images/template/logo/logo.png') }}" alt="Tuyển dụng &amp; Tìm kiếm việc làm nhanh"></div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-links">
                                <h3>Dành Cho Ứng Viên</h3>
                                <ul>
                                    <li><a href="javascript:void(0)" title="Việc làm mới nhất">Việc làm mới nhất</a></li>
                                    <li><a href="javascript:void(0)" title="CV Hay">CV Hay</a></li>
                                    <li><a href="javascript:void(0)" title="VietnamSalary">VietnamSalary</a></li>
             
                                    <li><a href="javascript:void(0)" title="Cẩm Nang">Cẩm Nang</a></li>
                                    <li><a href="javascript:void(0)" title="IT Blogs">IT Blogs</a></li>
                                    <li><a href="javascript:void(0)" title="Ứng Dụng Di Động">Ứng Dụng Di Động</a></li>
                                    <li><a href="javascript:void(0)" title="Sơ Đồ Trang Web">Sơ Đồ Trang Web</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-links">
                                <h3>Nhà Tuyển Dụng</h3>
                                <ul>
                                    <li><a href="javascript:void(0)" title="Đăng Tuyển Dụng">Đăng Tuyển Dụng</a></li>
                                    <li><a href="javascript:void(0)" title="Tìm Hồ Sơ">Tìm Hồ Sơ</a></li>
                                    <li><a href="javascript:void(0)">Giải Pháp Talent Solution</a></li>
                                    <li><a href="javascript:void(0)" title="Sản Phẩm Dịch Vụ">Sản Phẩm Dịch Vụ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-links">
                                <h3>Trung tâm trợ giúp</h3>
                                <ul>
                                  
                                    <li><a href="javascript:void(0)" title="Chính Sách BV Thông Tin">Chính Sách BV Thông Tin</a></li>
                                    <li><a href="javascript:void(0)" title="Chính sách GDPR">Chính sách GDPR</a></li>
                                    <li><a href="javascript:void(0)" title="Quy chế sàn giao dịch">Quy chế sàn giao dịch</a></li>
                                    <li><a href="javascript:void(0)" title="Thỏa thuận sử dụng">Thỏa thuận sử dụng</a></li>
                                    <li><a href="javascript:void(0)" title="Quy định bảo mật">Quy định bảo mật</a></li>
                                    <li><a href="javascript:void(0)" title="QT Giải Quyết Tranh Chấp">QT Giải Quyết Tranh Chấp</a></li>
                                    <li><a href="javascript:void(0)" title="Trợ giúp">Trợ giúp</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer-links">
                                <h3>Website Đối Tác</h3>
                                <ul>
                                    <li><a href="javascript:void(0)">Vieclam.Tuoitre.vn</a></li>
                                    <li><a href="javascript:void(0)">Vieclam.Vietnamnet.vn</a></li>
                                    <li><a href="javascript:void(0)">Vieclam.Thanhnien.vn</a></li>
                                    <li><a href="javascript:void(0)">VieclamIT.vn</a></li>
                                    <li><a href="javascript:void(0)">Liên Hệ</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </section>
               
            </div>
        </footer>


        <div id="back-top" class="" style="display: none;"><a class="bgcolor_theme" id="topToPage" href="javascript:void(0);">_Top_</a></div>
        <div style="display: none">
            <div id="NoticePost" class="msgbox">
                <div class="msg_content">
                    <div class="i_alert"></div>
                    <h2 id="notice_title"></h2>
                    <div id="notice_desc"></div>
                    <div class="clear cp">
                        <input id="notice_ok" type="button" value="_Ok_" class="fl_left ui_btnCb" onClick="$.fancybox.close();">&nbsp;
                        <input id="notice_cancel" type="button" value="Bỏ qua" class="ui_btnCb" onClick="$.fancybox.close();"> 
                    </div>
                </div>
            </div>
        </div>
        <div style="display: none;">
            <div id="Join_Success" class="wrapDialog msgbox">
                <div class="container">
                    <h2>Cảm ơn bạn   gia nhập mạng lưới nhân tài của chúng tôi,</h2>
                    <p>Bằng cách tham gia mạng lưới nhân tài của chúng tôi, bạn chưa thực sự ứng tuyển vào các vị trí tuyển dụng.</p>
                    <p>Hãy ứng tuyển ngay để trở thành ứng viên sáng giá cho <a href="viec-lam/tat-ca-viec-lam/vi"><span style="color:#26a2d6">vị trí tuyển dụng</span></a> của chúng tôi hoặc tiếp tục <a href="vi/resume"><span style="color:#26a2d6">cập nhật hồ sơ.</span></a></p>
                </div>
            </div>
        </div>


        <script type="text/javascript">
            
            $('.click-drop').click(function () {

                if($('.dropdown-menu').is(":visible")){

                    $('.dropdown-menu').hide();
                }
                else{
                    $('.dropdown-menu').show();
                }   
                
            })
        </script>


        <script>
      

            async function getImageBlobFromUrl(url) {
              const fetchedImageData = await fetch(url)
              const blob = await fetchedImageData.blob()
              return blob
            }

           
        </script>


        <script type="text/javascript">
            $(document).ready(function(){
                var popup_success = ''; 
                if(popup_success == 1){
                    ga('send', 'event', 'jobseekers', 'register', 'join success', 1);
                    $.fancybox({
                        'href' : '#Join_Success',
                        'type' : 'inline',
                        'padding':0,
                        onComplete:(function(){
                            $("#fancybox-wrap").css({'width':($("#fancybox-content").width()+40)+"px", 'padding':0});
                        })
                    });     
                }
            });
        </script>
        <script type="text/javascript">

            

            if (typeof checkMobile!='undefined'){
                if (checkMobile()){
                    
                                            
                }
            }
            var arrCates = new Array();
            arrCates[31] = 'Bán hàng / Kinh doanh';arrCates[30] = 'Bán lẻ / Bán sỉ';arrCates[28] = 'Bất động sản';arrCates[74] = 'Bộ phận pháp lý';arrCates[63] = 'CNTT - Phần cứng / Mạng';arrCates[1] = 'CNTT - Phần mềm';arrCates[81] = 'Chưa có kinh nghiệm';arrCates[14] = 'Cơ khí / Ô tô / Tự động hóa';arrCates[3] = 'Hành chính / Thư ký';arrCates[2] = 'Kế toán / Kiểm toán';arrCates[6] = 'Kiến trúc';arrCates[44] = 'Lao động phổ thông';arrCates[24] = 'Luật / Pháp lý';arrCates[45] = 'Mới tốt nghiệp / Thực tập';arrCates[11] = 'Mỹ thuật / Nghệ thuật / Thiết kế';arrCates[22] = 'Nhân sự';arrCates[47] = 'Nội ngoại thất';arrCates[42] = 'Quản lý chất lượng (QA/QC)';arrCates[17] = 'Quản lý điều hành';arrCates[67] = 'Quảng cáo / Đối ngoại / Truyền Thông';arrCates[25] = 'Sản xuất / Vận hành sản xuất';arrCates[59] = 'Tài chính / Đầu tư';arrCates[36] = 'Thống kê';arrCates[43] = 'Thu mua / Vật tư';arrCates[4] = 'Tiếp thị';arrCates[68] = 'Tổ chức sự kiện';arrCates[9] = 'Tư vấn';arrCates[33] = 'Vận chuyển / Giao nhận / Kho vận';arrCates[8] = 'Xây dựng';arrCates[18] = 'Xuất nhập khẩu';
            var arrLocs = new Array();
            arrLocs[8] = 'Hồ Chí Minh';arrLocs[4] = 'Hà Nội';arrLocs[76] = 'An Giang';arrLocs[64] = 'Bà Rịa và Vũng Tàu';arrLocs[240] = 'Bắc Giang';arrLocs[281] = 'Bắc Kạn';arrLocs[781] = 'Bạc Liêu';arrLocs[241] = 'Bắc Ninh';arrLocs[75] = 'Bến Tre';arrLocs[56] = 'Bình Định';arrLocs[650] = 'Bình Dương';arrLocs[651] = 'Bình Phước';arrLocs[62] = 'Bình Thuận';arrLocs[78] = 'Cà Mau';arrLocs[71] = 'Cần Thơ';arrLocs[26] = 'Cao Bằng';arrLocs[511] = 'Đà Nẵng';arrLocs[50] = 'Đắk Lắk';arrLocs[1042] = 'Đắk Nông';arrLocs[900] = 'Điện Biên';arrLocs[61] = 'Đồng Nai';arrLocs[67] = 'Đồng Tháp';arrLocs[59] = 'Gia Lai';arrLocs[19] = 'Hà Giang';arrLocs[351] = 'Hà Nam';arrLocs[39] = 'Hà Tĩnh';arrLocs[320] = 'Hải Dương';arrLocs[31] = 'Hải Phòng';arrLocs[780] = 'Hậu Giang';arrLocs[18] = 'Hòa Bình';arrLocs[321] = 'Hưng Yên';arrLocs[58] = 'Khánh Hòa';arrLocs[77] = 'Kiên Giang';arrLocs[60] = 'Kon Tum';arrLocs[23] = 'Lai Châu';arrLocs[63] = 'Lâm Đồng';arrLocs[25] = 'Lạng Sơn';arrLocs[20] = 'Lào Cai';arrLocs[72] = 'Long An';arrLocs[350] = 'Nam Định';arrLocs[38] = 'Nghệ An';arrLocs[30] = 'Ninh Bình';arrLocs[68] = 'Ninh Thuận';arrLocs[210] = 'Phú Thọ';arrLocs[57] = 'Phú Yên';arrLocs[52] = 'Quảng Bình';arrLocs[510] = 'Quảng Nam';arrLocs[55] = 'Quảng Ngãi';arrLocs[33] = 'Quảng Ninh';arrLocs[53] = 'Quảng Trị';arrLocs[79] = 'Sóc Trăng';arrLocs[22] = 'Sơn La';arrLocs[66] = 'Tây Ninh';arrLocs[36] = 'Thái Bình';arrLocs[280] = 'Thái Nguyên';arrLocs[37] = 'Thanh Hóa';arrLocs[54] = 'Thừa Thiên Huế';arrLocs[73] = 'Tiền Giang';arrLocs[1065] = 'Toàn quốc';arrLocs[74] = 'Trà Vinh';arrLocs[27] = 'Tuyên Quang';arrLocs[70] = 'Vĩnh Long';arrLocs[211] = 'Vĩnh Phúc';arrLocs[29] = 'Yên Bái';
            function validateSearch(form){
                if($('input[name="q"]').val()=='Tìm việc'){
                    $('input[name="q"]').val('');
                }   
                var keyword = createKeyword($('input[name="q"]').val()),
                    category = parseInt($('select[name="cat"]').val()),
                    location = parseInt($('select[name="loc"]').val()),
                    
                    prep = new Array('en', 'vi');
                    prep['en'] = new Array('category', 'at');
                    prep['vi'] = new Array('nganh', 'tai');
                    if(LANGUAGE != 'vi' && LANGUAGE != 'en') prep[LANGUAGE] = prep['en'];
                
                if(!keyword && !category && !location){
                    searchLink = 'tim-viec-lam/tat-ca-viec-lam/vi';
                }
                else{
                    searchLink = 'tim-viec-lam';  
                    if(keyword != ''){
                        searchLink += '/'+ keyword;
                    }
                    if(keyword && category){
                        searchLink += '/'+prep[LANGUAGE][0]+'-'+ createKeyword(stripVietnamese(arrCates[category])) + '.' + category;   
                    }
                    else if(category){
                        searchLink += '/'+ createKeyword(stripVietnamese(arrCates[category])) + '.' + category; 
                    }
                    if(location){
                        searchLink += '/'+prep[LANGUAGE][1]+'-'+ createKeyword(stripVietnamese(arrLocs[location])) + '.' + location;
                    }
                    searchLink += '/'+ LANGUAGE;
                }
                window.location=searchLink;
                return false;
            }
            function checkIos(){
                    return /webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)
            }
            function windowsPhone(){
                    return /windows phone/i.test(navigator.userAgent)
            }


            $('.drop1').hide();
            
            $(".navbar-right").mouseenter(function() {
                $('.drop1').show();
            }).mouseleave(function() {
               $('.drop1').hide();
            });
   

            function callHoverEvent() {
              
                $('.drop1').show();
            }

            function saveJob(id){
                job =  JSON.parse(window.localStorage.getItem('job'));

                if(job==null){
                    job = [];
                }

                job.push(id);

                job =   [...new Set(job)];

                job = JSON.stringify(job);

                window.localStorage.setItem('job', job);

                 // localStorage.clear();

                $('#job_'+id).addClass('red');

                // alert('lưu công việc thành công');


            }
            
            job =  JSON.parse(window.localStorage.getItem('job'));

             for(i=0; i<job.length; i++){

                $('#job_'+job[i]).addClass('red');
             }

        </script>
        <script type="text/javascript" src="{{ asset('download/js/jquery.fancybox-1.3.4.js')}}"></script>
        <script type="text/javascript" src="{{ asset('download/js/jquery.validate.js')}}"></script>
        <script type="text/javascript" src="{{ asset('download/js/additional-methods.js')}}"></script>
        <!-- <script type="text/javascript" src="{{ asset('download/js/tn-validate-methods.js')}}"></script> -->
       <!--  <script type="text/javascript" src="{{ asset('download/js/common.js?27062018')}}"></script>
        <script type="text/javascript" src="{{ asset('download/js/common_premium.js?v=1')}}"></script> -->
    </body>
</html>