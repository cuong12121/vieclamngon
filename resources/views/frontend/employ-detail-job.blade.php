@extends('frontend.layout.appfe')
@section('content')

    <main>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/swiper.css') }}">

        <style type="text/css">
            
            .jobsby-company .company-introduction {
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
                padding: 20px;
                background: #f1f9fd;
            }
        </style>
        
        <section class="jobsby-company cb-section">
            <div class="container">
                <div class="main-banner">
                    <div class="image"><img src="https://images.careerbuilder.vn/employer_folders/lot6/83506/85614jotun-banner1380x290px.jpg" alt="Jotun Paints Vietnam Company Limited"></div>
                </div>
                <div class="company-introduction">
                    <div class="company-info">
                        <div class="info">
                            <div class="img">

                               
                                <img src="{{ asset('picture/'.basename(str_replace('..','',$findID->logo))) }}" alt="{{ @$findID->name }}" / style="width: 125px;">
                            </div>
                            <div class="content">
                                <h1 class="name">{{ @$findID->name }}</h1>
                                <strong>Địa điểm</strong>
                                {!!  @$findID->address !!}
                                <hr>
                                <!-- <strong>Thông tin công ty</strong>
                                <ul>
                                    <li> <span class="mdi mdi-account-supervisor"></span> Qui mô công ty: 100 - 499 </li>
                                    <li> <span class="mdi mdi-gavel"></span> Loại hình hoạt động:
                                        Trách nhiệm hữu hạn 
                                    </li>
                                    <li> <span class="mdi mdi-link"></span>{{ @$findID->website }} </li>
                                </ul> -->
                            </div>
                        </div>
                    </div>
                    <input type="hidden" name="isTS" id="isTS" value="0" />
                    <input type="hidden" name="emp_websitets" id="emp_websitets" value="" />
                    <div class="company-follow">
                        <span id="totalFollowers"  class="follower-number"><strong id="countFollowers">1.133</strong> followers</span>       
                        <div class="btn-follow  icon-follow"><a class="btn-gradient" href="javascript:void(0);" id="follow_act"  rel="1" title="Follow"><em class="fa fa-check-circle-o"></em></a></div>
                    </div>
                </div>

                @if(!$data->isEmpty())
                <div class="company-jobs-opening">
                    <h2 class="company-heading-title">Việc làm đang tuyển</h2>
                    <div class="row cus-row">

                        @foreach($data as $value)

                        <div class="col-sm-6 cus-col">
                            <div class="job-item">
                                <div class="figure">
                                    <div class="figcaption">
                                   <!--      <div class="timeago"> <span><font color="FF0000">(Mới)</font></span>  </div> -->
                                        <h3 class="title"><a href="{{ route('job_details', [$value->link, $value->id]) }}" title="{{ $value->title }}">{{ $value->title }}</a></h3>
                                        <div class="caption">
                                            <p class="company-name">{{ $value->name }}</p>
                                            <p class="salary">{!! $value->salary !!}</p>
                                            <div class="location">
                                                <ul>
                                                    <li>Hà Nội</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        @endforeach
                        
                      
                    </div>
                </div>
                @endif

                <div class="main-about-us">
                    <h3 class="company-heading-title">Giới thiệu về công ty</h3>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="content">
                               {!!  @$findID->desc  !!}
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </section>
        <div class="login-modal" style="display: none">
            <div class="modal-title">
                <p>Vui lòng đăng nhập để thực hiện chức năng này</p>
            </div>
            <div class="modal-body">
                <form method="POST" id="popup_login_form" action="https://careerbuilder.vn/vi/jobseekers/member/login" autocomplete="off">
                    <div class="row">
                        <div class="form-group col-12">
                            <input type="text" id="username" name="username" placeholder="Username / Email" autocomplete="off">
                        </div>
                        <div class="form-group col-8">
                            <input type="password" name="password" id="password"  placeholder="Mật khẩu" autocomplete="off">
                        </div>
                        <div class="form-group col-4">
                            <input type="hidden" name="csrf_token" value= "4fef15cd0265bbef110cdfa9a0bf04967c01e1cef6af512cd361371eba6e938a" />  
                            <button type="submit">Đăng nhập</button>
                        </div>
                        <div class="form-group form-check col-12">
                            <input type="checkbox" name="chkSave" value="1" />
                            <label>Tự động đăng nhập</label>
                        </div>
                    </div>
                    <a class="register" href="https://careerbuilder.vn/vi/jobseekers/register" title="Đăng ký">Đăng ký </a><a class="forget-password" href="https://careerbuilder.vn/vi/jobseekers/forgotpassword" title="Quên mật khẩu?" rel="nofollow">Quên mật khẩu?</a>
                </form>
                <div class="sign-in-by">
                    <span>Đăng nhập bằng:</span>
                    <ul>
                        <li><a href="javascript:void(0);" onclick="popupapi('facebook','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5mYWNlYm9vaw==');"><i class="fa fa-facebook-official"></i></a></li>
                        <li><a href="javascript:void(0);" onclick="popupapi('linkedin','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5saW5rZWRpbg==');"><i class="fa fa-linkedin-square"></i></a></li>
                        <li><a href="javascript:void(0);" onclick="popupapi('google','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5nb29nbGU=');"><i class="fa fa-google-plus-square"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
       <script src="{{ asset('js/jquery.validate_vi.js') }}">/*jquery.validate_vi.js*/</script>
        <script>
            $(document).ready(function(){
              $("#popup_login_form").validate({
                rules: {
                    username: {
                      required: true,
                    },
                    password: {
                      required: true,
                    }
                },
                errorPlacement: function(error, element) {
            return true;
                },
                success: function (error) {
                  error.remove();
                }
              });
            });
        </script>
        <script type="text/javascript">
            var emp_id 		= '35A62F32';
            var empIdDec 		= '83506';
            var jsk_id 		= '35A4E900';
            var member_id 	= '-1';
            var language_premium = {followed_link:PATH_KIEMVIEC+'jobseekes/mykiemviec/following',followed_link_txt:"Danh sách Nhà tuyển dụng bạn quan tâm",follow_delete_success:"Xóa thành công"
            		};
            		if(typeof language === 'undefined')	var language = language_premium;	else $.extend(language, language_premium);
        </script>

        <script type="text/javascript" src="{{ asset('js/employ/swiper.js') }}"></script>
        <script>/*swiper.js*/
           
            /*profile.js*/
            
            var companyPhotoSlide=new Swiper('.main-company-photo .swiper-container',{slidesPerView:4,spaceBetween:6,lazy:{loadPrevNext:true},breakpoints:{1200:{slidesPerView:2}},navigation:{prevEl:'.main-company-photo .swiper-prev',nextEl:'.main-company-photo .swiper-next'}})
        </script>
        <div class="back-drop"></div>
    </main>
@endsection    
    