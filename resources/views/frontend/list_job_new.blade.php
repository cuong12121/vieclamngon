@extends('frontend.layout.appfe')
@section('content')
<main>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/swiper.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/jquery.auto-complete.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/common.css') }}">
    <section class="jobsby-company cb-section">
        <div class="container">
            <div class="company-introduction">
                <div class="company-info">
                    <div class="info">
                        <div class="img">
                            <img src="https://images.careerbuilder.vn/employer_folders/lot7/154767/148x148/936461.png" alt="Công Ty CP Việt Tinh Anh" />
                        </div>
                        <div class="content">
                            <h1 class="name">Công Ty CP Việt Tinh Anh</h1>
                            <strong>Địa điểm</strong>
                            <p>33-35 Đường D4, KDC Him Lam, P.Tân Hưng Q7 TPHCM</p>
                            <hr>
                            <strong>Thông tin công ty</strong>
                            <ul>
                                <li> <span class="mdi mdi-gavel"></span> Loại hình hoạt động:
                                    Cổ phần 
                                </li>
                                <li> <span class="mdi mdi-link"></span> Website: viettinhanh.com.vn </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="isTS" id="isTS" value="0" />
                <input type="hidden" name="emp_websitets" id="emp_websitets" value="" />
                <div class="company-follow">
                    <span id="totalFollowers"  class="follower-number"><strong id="countFollowers">1.115</strong> followers</span>       
                    <div class="btn-follow  icon-follow"><a class="btn-gradient" href="javascript:void(0);" id="follow_act"  rel="1" title="Follow"><em class="fa fa-check-circle-o"></em></a></div>
                </div>
            </div>
            <div class="company-jobs-opening">
                <h2 class="company-heading-title">Việc làm đang tuyển</h2>
                <div class="row cus-row">
                    <div class="col-sm-6 cus-col">
                        <div class="job-item">
                            <div class="figure">
                                <div class="figcaption">
                                    <div class="timeago"> </div>
                                    <h3 class="title"><a href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kiem-ke.35B97BA2.html" title="Nhân Viên Kiểm Kê">Nhân Viên Kiểm Kê</a></h3>
                                    <div class="caption">
                                        <p class="company-name">Công Ty CP Việt Tinh Anh</p>
                                        <p class="salary">$                                     6 Tr - 6,5 Tr
                                            VND
                                        </p>
                                        <div class="location">
                                            <ul>
                                                <li>Hồ Chí Minh</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 cus-col">
                        <div class="job-item">
                            <div class="figure">
                                <div class="figcaption">
                                    <div class="timeago"> </div>
                                    <h3 class="title"><a href="https://careerbuilder.vn/vi/tim-viec-lam/php-web-developer.35B97BFE.html" title="PHP Web Developer">PHP Web Developer</a></h3>
                                    <div class="caption">
                                        <p class="company-name">Công Ty CP Việt Tinh Anh</p>
                                        <p class="salary">$                   Cạnh tranh
                                        </p>
                                        <div class="location">
                                            <ul>
                                                <li>Hồ Chí Minh</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 cus-col">
                        <div class="job-item">
                            <div class="figure">
                                <div class="figcaption">
                                    <div class="timeago"> </div>
                                    <h3 class="title"><a href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-doi-soat-cong-no.35B990D3.html" title="Nhân Viên Đối Soát Công Nợ">Nhân Viên Đối Soát Công Nợ</a></h3>
                                    <div class="caption">
                                        <p class="company-name">Công Ty CP Việt Tinh Anh</p>
                                        <p class="salary">$                   Cạnh tranh
                                        </p>
                                        <div class="location">
                                            <ul>
                                                <li>Hồ Chí Minh</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 cus-col">
                        <div class="job-item">
                            <div class="figure">
                                <div class="figcaption">
                                    <div class="timeago"> </div>
                                    <h3 class="title"><a href="https://careerbuilder.vn/vi/tim-viec-lam/brand-manager.35B9911F.html" title="Brand Manager">Brand Manager</a></h3>
                                    <div class="caption">
                                        <p class="company-name">Công Ty CP Việt Tinh Anh</p>
                                        <p class="salary">$                   Cạnh tranh
                                        </p>
                                        <div class="location">
                                            <ul>
                                                <li>Hồ Chí Minh</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 cus-col">
                        <div class="job-item">
                            <div class="figure">
                                <div class="figcaption">
                                    <div class="timeago"> </div>
                                    <h3 class="title"><a href="https://careerbuilder.vn/vi/tim-viec-lam/qc-tester.35B990F7.html" title="QC Tester">QC Tester</a></h3>
                                    <div class="caption">
                                        <p class="company-name">Công Ty CP Việt Tinh Anh</p>
                                        <p class="salary">$                                     7 Tr - 15 Tr
                                            VND
                                        </p>
                                        <div class="location">
                                            <ul>
                                                <li>Hồ Chí Minh</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 cus-col">
                        <div class="job-item">
                            <div class="figure">
                                <div class="figcaption">
                                    <div class="timeago"> </div>
                                    <h3 class="title"><a href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-kinh-doanh-khu-vuc-mien-bac.35B990DE.html" title="Trưởng Phòng Kinh Doanh Khu Vực Miền Bắc">Trưởng Phòng Kinh Doanh Khu Vực Miền Bắc</a></h3>
                                    <div class="caption">
                                        <p class="company-name">Công Ty CP Việt Tinh Anh</p>
                                        <p class="salary">$                   Cạnh tranh
                                        </p>
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
                </div>
                <div class="view-more"><a href="https://careerbuilder.vn/viec-lam/cong-ty-cp-viet-tinh-anh-p35A7458F-vi.html" title="Công Ty CP Việt Tinh Anh">Xem thêm<em class="mdi mdi-arrow-right"></em></a></div>
            </div>
            <div class="main-about-us">
                <h3 class="company-heading-title">Giới thiệu về công ty</h3>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="content">
                            <p>Công ty Việt Tinh Anh là nhà phân phối độc quyền sản phẩm đồ chơi LEGO tại thị trường Việt Nam đồng thời cũng là đối tác phân phối của những thương hiệu đồ chơi nổi tiếng trên khắp thế giới như SIKU-mô hình xe đến từ Đức; búp bê Moxie Girlz của tập đoàn MGA Hoa Kỳ; Pink Poppy, Champion, đồ chơi cho trẻ sơ sinh K’s Kids, nhạc cụ Janod của Pháp.</p>
                            <p>Công ty được thành lập từ giữa năm 2009 bởi một nhóm doanh nhân trẻ, nhiệt huyết và yêu trẻ em nhằm cung cấp đồ chơi chất lượng mang tính giáo dục cao cho trẻ em tại Việt Nam.</p>
                            <p>Mục tiêu của Việt Tinh Anh là giúp trẻ rèn luyện ý thức, giáo dục nhân cách, đánh thức tiềm năng sáng tạo và khẳng định cá tính riêng của trẻ thông qua đồ chơi cho trẻ.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-about-us">
                <h3 class="company-heading-title">Thông điệp từ Công Ty CP Việt Tinh Anh</h3>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="content">
                            <p><strong>Tầm nhìn</strong>: Việt Tinh Anh mong muốn trở thành người bạn thân thiết, đáng tin cậy của mọi gia đình Việt Nam, giúp các bậc&nbsp; phụ huynh trong việc phát triển toàn diện về trí não, sự sáng tạo và khả năng vận động của trẻ thông qua những món đồ chơi chất lượng cao mà công ty mang lại.</p>
                            <p><strong>Sứ mệnh</strong>: Công ty Việt Tinh Anh cung cấp các sản phẩm đồ chơi mang tính giáo dục, giải trí&nbsp; và an toàn nhằm phát triển khả năng tư duy sáng tạo và trí tưởng tượng của trẻ em.</p>
                            <p>Việt Tinh Anh cam kết mang đến cho trẻ em Việt Nam nhiều niềm vui trong quá trình phát triển một cách tích cực nhất.</p>
                            <p>Phương châm: vừa học-vừa chơi, phát triển trí tuệ-tư duy sáng tạo !&nbsp;</p>
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
                        <input type="hidden" name="csrf_token" value= "93769be6488ecf0b97c0528f8a988715f3c763bf00bbf27e52cc34445ee38349" />  
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
        var emp_id 		= '35A7458F';
        var empIdDec 		= '154767';
        var jsk_id 		= '35A4E900';
        var member_id 	= '-1';
        var language_premium = {followed_link:PATH_KIEMVIEC+'jobseekes/mykiemviec/following',followed_link_txt:"Danh sách Nhà tuyển dụng bạn quan tâm",follow_delete_success:"Xóa thành công"
        		};
        		if(typeof language === 'undefined')	var language = language_premium;	else $.extend(language, language_premium);
    </script>
    <script src="{{ asset('js/swiper.js') }}"></script>
    <script>
        var companyPhotoSlide=new Swiper('.main-company-photo .swiper-container',{slidesPerView:4,spaceBetween:6,lazy:{loadPrevNext:true},breakpoints:{1200:{slidesPerView:2}},navigation:{prevEl:'.main-company-photo .swiper-prev',nextEl:'.main-company-photo .swiper-next'}})
    </script>
    <div class="back-drop"></div>
</main>
@endsection