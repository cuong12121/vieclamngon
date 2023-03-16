
@extends('frontend.layout.appfe')
@section('content')

<!-- route job-details -->
<main>

    <?php 

        $careers = LIST_JOB;

        $address = ADDRESS;


    ?>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/common-job-detail.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/chosen.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/search-result-list-detail.css') }}">
    @include('frontend.layout.search')

   
    <section class="search-result-list-detail template-2">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-12 mb-15">
                    <section class="apply-now-banner  ">
                        <div class="image"></div>
                        <div class="apply-now-content">
                            <div class="job-desc">
                                <h1 class="title">{{ @$data->title }}</h1>
                                <a class="employer job-company-name" href="{{ route('employ-details',  $data->link) }}">{{ @$data->name }}</a>  
                            </div>

                            <div class="apply-now-btn ">        
                                <a href="javascript:void(0);" class="btn-gradient " onclick="apply('{{ $data->id }}')"> Nộp Đơn Ứng Tuyển </a>        
                            </div>
                        </div>
                    </section>
                </div>


                <div class="col-lg-7 col-custom-xxl-9">
                    <div class="tabs">
                        <nav class="job-result-nav">
                            <ul class="tabs-toggle">
                                <li id="tabs-job-detail"><a href="javascript:void(0)" data-href="#tab-1">Chi tiết</a></li>
                                <li id="tabs-job-company"><a href="javascript:void(0)" data-href="#tab-2">Tổng quan công ty</a></li>
                            </ul>
                            <div class="job-detail-tool">
                                <ol class="tabs-saved">
                                    <li>
                                        <a class="toollips save-job chk_save_35B9A7C0 " href="javascript:void(0);" data-id="35B9A7C0"  onclick="popuplogin()">
                                            <i class="mdi mdi-heart-outline"></i>
                                            <div class="toolip">
                                                <p>Lưu việc làm</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div class="dropdown">
                                            <i class="mdi mdi-share-variant"></i>
                                            <div class="dropdown-menu">
                                                <div class="social-list">
                                                    <a target="_blank" href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B9A7C0.html&pubid=ra-559220ee7f9c15d6&title=Nhân Viên Tuyển Dụng&ct=1&pco=tbxnj-1.0"><i class="fa fa-facebook"></i></a>
                                                    <a target="_blank" href="https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B9A7C0.html&pubid=ra-559220ee7f9c15d6&title=Nhân Viên Tuyển Dụng&ct=1&pco=tbxnj-1.0"><i class="fa fa-linkedin"></i></a>
                                                    <a target="_blank" href="https://api.addthis.com/oexchange/0.8/forward/email/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B9A7C0.html&pubid=ra-559220ee7f9c15d6&title=Nhân Viên Tuyển Dụng&ct=1&pco=tbxnj-1.0"><i class="fa fa-envelope"></i></a>
                                                    <a target="_blank" href="https://api.addthis.com/oexchange/0.8/forward/gmail/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B9A7C0.html&pubid=ra-559220ee7f9c15d6&title=Nhân Viên Tuyển Dụng&ct=1&pco=tbxnj-1.0"><i class="fa fa-google"></i></a>
                                                    <div class="zalo-share-button" data-href="" data-oaid="579745863508352884" data-layout="2" data-color="white" data-customize=false></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="report-job toollips" href="javascript:void(0)">
                                            <i class="fa fa-flag-o"></i>
                                            <div class="toolip">
                                                <p> Báo xấu </p>
                                            </div>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </nav>
                        <div class="tab-content" id="tab-1">
                            <section class="job-detail-content">
                                <div class="bg-blue">
                                    <div class="row">
                                        <div class="col-lg-4 col-sm-6 item-blue">
                                            <div class="detail-box">
                                                <div class="map">
                                                    <strong><em class="mdi mdi-map-marker"></em>Địa điểm</strong>
                                                    <p><a href="javascript:void(0)">{{ $address[$data->address_job] }}</a></p>
                                                    <a href="javascript:void(0)" onclick="show_map_detail_job();"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6 item-blue">
                                            <div class="detail-box has-background">
                                                <ul>
                                                    <li>
                                                        <strong><em class="mdi mdi-update"> </em>Ngày cập nhật</strong>
                                                        <p>{{ $data->updated_at }}</p>
                                                    </li>
                                                    <li>
                                                        <strong> <em class="mdi mdi-briefcase"></em>Ngành nghề</strong>
                                                        <p>  
                                                                     
                                                            <a href="javascript:void(0)" >
                                                             {{ $careers[$data->career]??'' }}
                                                            </a>

                                                        </p>
                                                    </li>
                                                    <li>
                                                        <strong><em class="mdi mdi-briefcase-edit"> </em>Hình thức</strong>
                                                        <p>Nhân viên chính thức</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-sm-6 item-blue">
                                            <div class="detail-box has-background">
                                                <ul>
                                                    <li>
                                                        <strong><i class="fa fa-usd"></i>Lương</strong>
                                                        {!! $data->salary   !!}
                                                    </li>
                                                    <li>
                                                        <strong><i class="fa fa-briefcase"></i>Kinh nghiệm</strong>
                                                        <p>
                                                            0 - 5 Năm
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <strong><i class="mdi mdi-account"></i>Cấp bậc</strong>
                                                        <p>Nhân viên</p>
                                                    </li>
                                                    <li>
                                                        <strong><i class="mdi mdi-calendar-check"></i>Hết hạn nộp</strong>
                                                        <p>15/07/2022</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="detail-row">
                                    <h3 class="detail-title">Phúc lợi </h3>
                                    <ul class="welfare-list">
                                        <li><span class="fa fa-medkit"></span> Chế độ bảo hiểm</li>
                                        <li><span class="fa fa-money"></span> Phụ cấp</li>
                                        <li><span class="fa fa-black-tie"></span> Đồng phục</li>
                                        <li><span class="fa fa-usd"></span> Chế độ thưởng</li>
                                        <li><span class="fa fa-line-chart"></span> Tăng lương</li>
                                        <li><span class="fa fa-credit-card"></span> Công tác phí</li>
                                        <li><span class="fa fa-money"></span> Phụ cấp thâm niên</li>
                                        <li><span class="fa fa-briefcase"></span> Nghỉ phép năm</li>
                                    </ul>
                                </div>
                                <div class="detail-row">
                                    <h3 class="detail-title">Mô tả Công việc</h3>
                                    {!!  str_replace('<h2>Mô tả công việc</h2>', '', $data->detail)!!}
                                </div>
                                <div class="detail-row">
                                    <h3 class="detail-title">Yêu Cầu Công Việc</h3>
                                    {!!  str_replace('<h2>Yêu cầu công việc</h2>', '', $data->requirements)!!}
                                </div>
                                <div class="detail-row">
                                    <h3 class="detail-title">Quyền lợi được hưởng</h3>
                                    {!!str_replace('<h2>Quyền lợi được hưởng</h2>', '', $data->rights)!!}
                                </div>
                                <div class="share-this-job">
                                    <span>Chia sẻ việc làm này:</span> 
                                    <a target="_blank" href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B9A7C0.html&pubid=ra-559220ee7f9c15d6&title=Nhân Viên Tuyển Dụng&ct=1&pco=tbxnj-1.0"> <i class="fa fa-facebook"></i> </a>
                                    <a target="_blank" href="https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B9A7C0.html&pubid=ra-559220ee7f9c15d6&title=Nhân Viên Tuyển Dụng&ct=1&pco=tbxnj-1.0">  <i class="fa fa-linkedin"></i></a>
                                    <a target="_blank" href="https://api.addthis.com/oexchange/0.8/forward/email/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B9A7C0.html&pubid=ra-559220ee7f9c15d6&title=Nhân Viên Tuyển Dụng&ct=1&pco=tbxnj-1.0">  <i class="fa fa-envelope"></i></a> 
                                    <a target="_blank" href="https://api.addthis.com/oexchange/0.8/forward/gmail/offer?url=https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B9A7C0.html&pubid=ra-559220ee7f9c15d6&title=Nhân Viên Tuyển Dụng&ct=1&pco=tbxnj-1.0">  <i class="fa fa-google"></i></a>
                                    <div class="zalo-share-button" data-href="" data-oaid="579745863508352884" data-layout="2" data-color="white" data-customize=false></div>
                                </div>
                                
                                <input type="hidden" id="salary_taskbar" name="salary_taskbar" value="0" />
                                <input type="hidden" id="industry_taskbar" name="industry_taskbar" value="22,39,3" />
                                <input type="hidden" id="location_taskbar" name="location_taskbar" value="8" />
                                <input type="hidden" id="keyword_taskbar" name="keyword_taskbar" value="Nhân Viên Tuyển Dụng" />
                                <input type="hidden" id="title_alert" value="Nhân Viên Tuyển Dụng" />
                                <script>
                                    $(document).on('click', '.btnApplyClick', function(){
                                        
                                                $('#apply_url').attr('href', "https://careerbuilder.vn/vi/jobseekers/jobs/apply?job_id=35B9A7C0&s=cbnon");
                                            $('#span_title').html("Nhân Viên Tuyển Dụng");
                                            $.fancybox.close('all');
                                            $.fancybox.open($("#apply-job-modal"));
                                            
                                    });
                                </script>
                                <div class="job-detail-bottom-banner " id="">
                                    <div class="adsBannerOA" data-id="852"></div>
                                </div>
                                <script type="text/javascript">
                                    $(document).ready(function () { loadBannerOA(); });
                                </script>
                            </section>
                            <div class="maps-modal" style="display: none">
                                <div class="d-flex box-modal">
                                    <div class="map" id="jobMap" style="display: none;"></div>
                                    <div class="info">
                                        <div class="tabs-toggle">
                                            <a href="javascript:void(0);" class="item active" data-tab="1">Thông Tin Tuyển Dụng</a>
                                            <a href="javascript:void(0);" class="item" data-tab="2">Các công việc tương tự</a>
                                        </div>
                                        <div class="main-content">
                                            <div class="tab-content active" id="maps-tab-1">
                                                <div class="box-about">
                                                    <div class="title-h4">
                                                        <h4>Giới thiệu về công ty</h4>
                                                    </div>
                                                    <div class="figure">
                                                        <div class="image">
                                                            <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-may-theu-giay-an-phuoc.35A4F400.html" target="_blank">
                                                            
                                                            </a>
                                                        </div>
                                                        <div class="figcaption">
                                                            <h5>Công Ty TNHH May Thêu Giày An Phước</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-info">
                                                    <div class="title-h4">
                                                        <h4>Thông Tin Tuyển Dụng</h4>
                                                    </div>
                                                    <div class="content">
                                                        <p class="blue">Nhân Viên Tuyển Dụng</p>
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Cấp bậc</td>
                                                                    <td>Nhân viên</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Lương</td>
                                                                    <td>$
                                                                        Cạnh tranh
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Hết hạn nộp</td>
                                                                    <td>15/07/2022</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Ngành nghề</td>
                                                                    <td>
                                                                        <a href="javascript:void(0)" >
                                                                        Nhân sự
                                                                        ,                                                </a>
                                                                        <a href="javascript:void(0)" >
                                                                        Dệt may / Da giày / Thời trang
                                                                        ,                                                </a>
                                                                        <a href="javascript:void(0)" >
                                                                        Hành chính / Thư ký
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Kinh nghiệm</td>
                                                                    <td>
                                                                        0 - 5 Năm
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="box-local">
                                                    <div class="title-h4">
                                                        <h4>Địa điểm</h4>
                                                    </div>
                                                    <div class="content">
                                                        <p>{{ $address[$data->address_job] }}</p>
                                                       <!--  <ul class="clearall">
                                                            <li>
                                                                <em class="mdi mdi-map-marker"></em>
                                                                <a href="javascript:void(0);" onclick="movetoCenter(0)">100 An Dương Vương, phường 9, Quận 5, Hồ Chí Minh</a>
                                                            </li>
                                                        </ul> -->
                                                    </div>
                                                </div>
                                                <div class="box-apply ">
                                                    <a href="javascript:void(0);" class="btn-gradient btnApplyClick">
                                                    Nộp Đơn Ứng Tuyển
                                                    </a>
                                                </div>
                                                <div class="box-contact">
                                                    <ul>
                                                        <li>
                                                            <a class="toollips save-job chk_save_35B9A7C0 " href="javascript:void(0);" data-id="35B9A7C0"  onclick="popuplogin()">
                                                                <i class="mdi mdi-heart-outline"></i>
                                                                <div class="toolip">
                                                                    <p>Lưu việc làm</p>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li> <a class="email" href="javascript:void(0);" onclick="showboxJobalert()"><i class="mdi mdi-email"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="tab-content" id="maps-tab-2">
                                                <section class="jobs-side-list"></section>
                                                <div class="jobs-list">
                                                    <div class="job-item">
                                                        <div class="figure">
                                                            <div class="image">
                                                                <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/he-thong-nha-hang-nhat-tokyo-deli.35A77DB7.html" target="_blank"  title="Hệ thống nhà hàng Nhật Tokyo Deli">
                                                                
                                                                </a>
                                                            </div>
                                                            <div class="figcaption">
                                                                <div class="timeago"></div>
                                                                <div class="title"><a target="_blank" title="Nhân Viên Tuyển Dụng" href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B99B3A.html?s=rec">Nhân Viên Tuyển Dụng</a></div>
                                                                <div class="caption">
                                                                    <p class="company-name">Hệ thống nhà hàng Nhật Tokyo Deli</p>
                                                                    <p class="salary">$ 7 Tr - 8,5 Tr VND</p>
                                                                    <div class="location">
                                                                        <ul>
                                                                            <li>Hồ Chí Minh</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-item">
                                                        <div class="figure">
                                                            <div class="image">
                                                                <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-dich-vu-hum-viet-nam.35A87FA0.html" target="_blank"  title="CÔNG TY TNHH ĐẦU TƯ DỊCH VỤ HUM VIỆT NAM">
                                                                
                                                                </a>
                                                            </div>
                                                            <div class="figcaption">
                                                                <div class="timeago"></div>
                                                                <div class="title"><a target="_blank" title="Nhân viên Tuyển dụng" href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B99BD8.html?s=rec">Nhân viên Tuyển dụng</a></div>
                                                                <div class="caption">
                                                                    <p class="company-name">CÔNG TY TNHH ĐẦU TƯ DỊCH VỤ HUM VIỆT NAM</p>
                                                                    <p class="salary">$ Cạnh tranh</p>
                                                                    <div class="location">
                                                                        <ul>
                                                                            <li>Hồ Chí Minh</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-item">
                                                        <div class="figure">
                                                            <div class="image">
                                                                <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/mf-viet-nam-information-technology-co-ltd.35A80ECC.html" target="_blank"  title="MF Viet Nam Information Technology Co.,Ltd">
                                                                
                                                                </a>
                                                            </div>
                                                            <div class="figcaption">
                                                                <div class="timeago"></div>
                                                                <div class="title"><a target="_blank" title="NHÂN VIÊN TUYỂN DỤNG" href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B929B8.html?s=rec">NHÂN VIÊN TUYỂN DỤNG</a></div>
                                                                <div class="caption">
                                                                    <p class="company-name">MF Viet Nam Information Technology Co.,Ltd</p>
                                                                    <p class="salary">$ 10 Tr - 20 Tr VND</p>
                                                                    <div class="location">
                                                                        <ul>
                                                                            <li>Hà Nội | Hồ Chí Minh</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-item">
                                                        <div class="figure">
                                                            <div class="image">
                                                                <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dtsx-bao-ngoc.35A8F06A.html" target="_blank"  title="Công Ty Cổ Phần ĐTSX Bảo Ngọc">
                                                                
                                                                </a>
                                                            </div>
                                                            <div class="figcaption">
                                                                <div class="timeago"></div>
                                                                <div class="title"><a target="_blank" title="Nhân viên tuyển dụng" href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B98BD0.html?s=rec">Nhân viên tuyển dụng</a></div>
                                                                <div class="caption">
                                                                    <p class="company-name">Công Ty Cổ Phần ĐTSX Bảo Ngọc</p>
                                                                    <p class="salary">$ 10 Tr - 15 Tr VND</p>
                                                                    <div class="location">
                                                                        <ul>
                                                                            <li>Hồ Chí Minh</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-item">
                                                        <div class="figure">
                                                            <div class="image">
                                                                <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-binh-viet-duc-bivid.35A8D45E.html" target="_blank"  title="Công ty TNHH Bình Việt Đức (BIVID)">
                                                                
                                                                </a>
                                                            </div>
                                                            <div class="figcaption">
                                                                <div class="timeago"></div>
                                                                <div class="title"><a target="_blank" title="Nhân Viên Tuyển Dụng" href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B98C34.html?s=rec">Nhân Viên Tuyển Dụng</a></div>
                                                                <div class="caption">
                                                                    <p class="company-name">Công ty TNHH Bình Việt Đức (BIVID)</p>
                                                                    <p class="salary">$ 9 Tr - 11 Tr VND</p>
                                                                    <div class="location">
                                                                        <ul>
                                                                            <li>Hồ Chí Minh</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-item">
                                                        <div class="figure">
                                                            <div class="image">
                                                                <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-lien-doanh-vinh-hung-tmi-viet-nam.35A8E27D.html" target="_blank"  title="Công ty TNHH, Liên Doanh Vĩnh Hưng (TMI Việt Nam)">
                                                                
                                                                </a>
                                                            </div>
                                                            <div class="figcaption">
                                                                <div class="timeago"></div>
                                                                <div class="title"><a target="_blank" title="Nhân viên tuyển dụng" href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B95596.html?s=rec">Nhân viên tuyển dụng</a></div>
                                                                <div class="caption">
                                                                    <p class="company-name">Công ty TNHH, Liên Doanh Vĩnh Hưng (TMI Việt Nam)</p>
                                                                    <p class="salary">$ 10 Tr - 13 Tr VND</p>
                                                                    <div class="location">
                                                                        <ul>
                                                                            <li>Hồ Chí Minh</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-item">
                                                        <div class="figure">
                                                            <div class="image">
                                                                <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-bat-dong-san-grandland.35A8B759.html" target="_blank"  title="CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN GRANDLAND">
                                                                
                                                                </a>
                                                            </div>
                                                            <div class="figcaption">
                                                                <div class="timeago"></div>
                                                                <div class="title"><a target="_blank" title="Nhân Viên Tuyển Dụng" href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B9592D.html?s=rec">Nhân Viên Tuyển Dụng</a></div>
                                                                <div class="caption">
                                                                    <p class="company-name">CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN GRANDLAND</p>
                                                                    <p class="salary">$ 8 Tr - 13 Tr VND</p>
                                                                    <div class="location">
                                                                        <ul>
                                                                            <li>Hồ Chí Minh</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-item">
                                                        <div class="figure">
                                                            <div class="image">
                                                                <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thoi-trang-an-viet-vm-style.35A8D54D.html" target="_blank"  title="Công ty TNHH Thời trang An Việt (VM STYLE)">
                                                                
                                                                </a>
                                                            </div>
                                                            <div class="figcaption">
                                                                <div class="timeago"></div>
                                                                <div class="title"><a target="_blank" title="Nhân viên tuyển dụng" href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B971F0.html?s=rec">Nhân viên tuyển dụng</a></div>
                                                                <div class="caption">
                                                                    <p class="company-name">Công ty TNHH Thời trang An Việt (VM STYLE)</p>
                                                                    <p class="salary">$ 8 Tr - 10 Tr VND</p>
                                                                    <div class="location">
                                                                        <ul>
                                                                            <li>Hồ Chí Minh</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-item">
                                                        <div class="figure">
                                                            <div class="image">
                                                                <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-ktg.35A882DE.html" target="_blank"  title="Tập đoàn KTG">
                                                                
                                                                </a>
                                                            </div>
                                                            <div class="figcaption">
                                                                <div class="timeago"></div>
                                                                <div class="title"><a target="_blank" title="NHÂN VIÊN TUYỂN DỤNG" href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B95692.html?s=rec">NHÂN VIÊN TUYỂN DỤNG</a></div>
                                                                <div class="caption">
                                                                    <p class="company-name">Tập đoàn KTG</p>
                                                                    <p class="salary">$ 9 Tr - 12 Tr VND</p>
                                                                    <div class="location">
                                                                        <ul>
                                                                            <li>Hồ Chí Minh</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-item">
                                                        <div class="figure">
                                                            <div class="image">
                                                                <a href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-dau-tu-quoc-te-newa-group.35A8F2CC.html" target="_blank"  title="Công Ty Cổ Phần Tập Đoàn Đầu Tư Quốc Tế Newa Group">
                                                                
                                                                </a>
                                                            </div>
                                                            <div class="figcaption">
                                                                <div class="timeago"></div>
                                                                <div class="title"><a target="_blank" title="Nhân Viên Tuyển Dụng" href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tuyen-dung.35B96BD6.html?s=rec">Nhân Viên Tuyển Dụng</a></div>
                                                                <div class="caption">
                                                                    <p class="company-name">Công Ty Cổ Phần Tập Đoàn Đầu Tư Quốc Tế Newa Group</p>
                                                                    <p class="salary">$ 7 Tr - 10 Tr VND</p>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <script src='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.js'></script>
                            <link href='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.css' rel='stylesheet' /> -->
                            <script>
                                var map_container = 'jobMap';
                                var option_zoom = 14;
                                var strMapGoongAccess = 'KxinmQjfV9bpwUkrhqJuIrkq00hataFG2LVS13yY#cb';
                                var strMapGoongApi = 'LDLS1XzFyZxDWcxOJgXnU9DhFl2UnrOZp0qAymJG';
                                var arrPostion = [10.7574202,106.6705781];
                                var init_map = false;
                                var pinData = [
                                    
                                                                                                                                            {
                                    address: "100 An Dương Vương, phường 9, Quận 5, Hồ Chí Minh",
                                    location_id : '8',
                                    position:'10.7574202,106.6705781',
                                    title : '<div class="maps-tooltip"><div class="figure"><div class="image"><img src="https://images.careerbuilder.vn/employer_folders/lot6/2816/110x55/74705logoap.jpg" alt="Performance Marketing Specialist" style="max-height: 50px"></div><div class="caption"><p class="title">Nhân Viên Tuyển Dụng</p><p class="company"><a href="javascript:void(0);"">Công Ty TNHH May Thêu Giày An Phước</a></p></div></div><p class="location">100 An Dương Vương, phường 9, Quận 5, Hồ Chí Minh</p><p class="salary">$ \
                                     Cạnh tranh \
                                    </p></div>'
                                },
                                                                                                                    
                                
                                ];
                                
                            </script>
                            <script>
                                $(document).ready(function(){
                                    $("div .map a").click(function(){
                                        $("#jobMap").fadeIn("fast");
                                        init_map = true;
                                        $.getScript(DOMAIN_STATIC+"/themes/careerbuilder/js/maps.js");
                                    });
                                });
                            </script>
                            <script>/*maps.js*/
                                if(typeof strMapGoongAccess!=='undefined'&&typeof strMapGoongApi!=='undefined'){goongjs.accessToken=strMapGoongAccess;if(typeof map_container==='undefined')
                                map_container='map';if(typeof opt_draggable==='undefined')
                                opt_draggable=true;if(typeof option_zoom==='undefined')
                                option_zoom=14;if(isNaN(option_zoom))
                                option_zoom=14;var map_api="https://rsapi.goong.io/Place/[FUNCTION]?api_key="+strMapGoongApi;if(typeof arrPostion==='undefined'){arrPostion=[10.783353464561465,106.69269561767578];}
                                var position=[parseFloat(arrPostion[1]),parseFloat(arrPostion[0])];if(typeof init_map==='undefined')
                                init_map=true;if(init_map==true){var map=new goongjs.Map({container:map_container,style:'https://tiles.goong.io/assets/goong_map_web.json',center:position,zoom:option_zoom});}
                                if(typeof pinData!=='undefined'&&init_map==true){var marker=new goongjs.Marker({draggable:false});var arrData=[];$.each(pinData,function(key,val){var strPosition=val.position;var arrPosition=strPosition.split(",");var objData={'type':'Feature','properties':{'description':val.title},'geometry':{'type':'Point','coordinates':[$.trim(arrPosition[1]),$.trim(arrPosition[0])]}};arrData.push(objData);});map.on('load',function(){map.loadImage('https://images.careerbuilder.vn/content/images/icon/custom_marker.png',function(error,image){if(error)throw error;map.addImage('custom-marker',image);map.addSource('places',{'type':'geojson','data':{'type':'FeatureCollection','features':arrData}});map.addLayer({'id':'places','type':'symbol','source':'places','layout':{'icon-image':'custom-marker','icon-allow-overlap':true}});});var popup=new goongjs.Popup({closeButton:false,closeOnClick:false});map.on('mouseenter','places',function(e){var coordinates=e.features[0].geometry.coordinates.slice();var description=e.features[0].properties.description;while(Math.abs(e.lngLat.lng-coordinates[0])>180){coordinates[0]+=e.lngLat.lng>coordinates[0]?360:-360;}
                                new goongjs.Popup().setLngLat(coordinates).setHTML(description).addTo(map);});map.on('mouseleave','places',function(){});});$.each(pinData,function(key,val){var strPosition=val.position;var arrPosition=strPosition.split(",");var coordinates=[$.trim(arrPosition[1]),$.trim(arrPosition[0])];new goongjs.Popup().setLngLat(coordinates).setHTML(val.title).addTo(map);});}else if(init_map==true){var marker=new goongjs.Marker({draggable:opt_draggable}).setLngLat(position).addTo(map);function onDragEnd(){var lngLat=marker.getLngLat();$("#lng").val(lngLat.lng);$("#lat").val(lngLat.lat);}
                                marker.on('dragend',onDragEnd);var strAddress=$("#address").val();if(typeof strAddress!=='undefined'&&strAddress!='')
                                callListGoongmap($("#address").val());}}
                                function movetoCenter(i){if(typeof pinData[i].position!="undefined"&&typeof map!="undefined"){var strPosition=pinData[i].position;var arrPosition=strPosition.split(",");position=[$.trim(arrPosition[1]),$.trim(arrPosition[0])];marker.setLngLat(position).addTo(map);map.setCenter(position);map.setZoom(14);}}
                                function autoSuggest(){let address=$("#address").val();callListGoongmap(address);}
                                function callListGoongmap(addr){let funcname="AutoComplete";let suggest_addr_api=map_api.replace("[FUNCTION]",funcname)+"&input="+encodeURI(addr);$.get(suggest_addr_api,function(resp){if(resp.status=="OK"){displayList(resp.predictions);}},"json");}
                                function displayList(data){var matched=[];var matchedID=[];for(var i=0;i<data.length;i++){matched.push(data[i].description);matchedID[data[i].description]=data[i].place_id;}
                                if(data.length>0){$("#address").autocomplete({source:function(request,response){response(matched);},focus:function(event,ui){return false;},select:function(event,ui){$("#address").val(ui.item.value);pointListMapTile(matchedID[ui.item.value]);return false;},create:function(){$(this).data('ui-autocomplete')._renderItem=function(ul,item){return $("<li></li>").data("item.autocomplete",item).append("<a>"+item.value+"</a>").appendTo(ul);};}});}}
                                function pointListMapTile(id){let funcname="Detail";let detail_addr_api=map_api.replace("[FUNCTION]",funcname)+"&place_id="+encodeURI(id);$.get(detail_addr_api,function(resp){if(resp.status=="OK"&&typeof resp.result.geometry!="undefined"){initListMap(resp.result.geometry.location);}},'json')}
                                function initListMap(location){$("#lng").val(location.lng);$("#lat").val(location.lat);position=[location.lng,location.lat];marker.setLngLat(position).addTo(map);map.setCenter(position);map.setZoom(14);}
                            </script>
                            <script src="https://sp.zalo.me/plugins/sdk.js"></script>
                        </div>
                        <div class="tab-content" id="tab-2"></div>
                    </div>
                </div>
                <div class="col-lg-5 col-custom-xxl-3">
                    <div class="side-wrapper">
                        <div class="banner-ad">
                            <script type='text/javascript'>OA_show(854);</script>
                        </div>
                        <div class="similar-jobs">
                            <p>Các công việc tương tự</p>
                        </div>

                        <?php  

                         
                            $jobtt= DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')->where('job.career', $data->career)->take(3)->get();
                        ?>
                        <section class="jobs-side-list">
                            <div class="jobs-list">

                                @foreach($jobtt as $val)

                                <div class="job-item">
                                    <div class="figure">
                                        <div class="image"> <a href="{{ route('job_details', [$val->link, $val->id]) }}" target="_blank" title="Hệ thống nhà hàng Nhật Tokyo Deli"> <img  class="lazy-bg" data-src="{{ asset('picture/'.basename(str_replace('..','',$val->logo))) }}" src="{{ asset('images/1653372151_data-analyst-careerbuilder.jpg') }}" alt="{{ $val->title }}"> </a> </div>
                                        <div class="figcaption">
                                            <div class="timeago"></div>
                                            <div class="title"> <a class="job_link" href="{{ route('job_details', [$val->link, $val->id]) }}" target="_blank" title="{{ $val->title }}"> {{ $val->title }}</a> </div>
                                            <div class="caption">
                                                <a class="company-name" href="{{ route('employ-details', $val->links) }}" title="{{ $val->name }}">{{ $val->name }}</a>
                                                <p class="salary"><em class="fa fa-usd"></em>thương lượng</p>
                                                <div class="location">
                                                    <em class="mdi mdi-map-marker"></em>
                                                    <ul>
                                                        <li>Hồ Chí Minh</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="top-icon"></div>
                                    </div>
                                </div>

                                @endforeach
                            </div>
                            <div class="load-more"><a href="javascript:void(0)">Xem tất cả</a></div>
                        </section>
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
                        <input type="hidden" name="csrf_token" value= "e57f5b8fd1a24dcf6fb904aba69d2bfa002775400a2d77104213ffdb8beb76d9" />  
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
    <script src="{{ asset('js/jquery-validate.js') }}"></script>
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
    <div class="apply-job-modal" id="apply-job-modal" style="display: none">
        <h3>Apply for: <span class="job-title" id="span_title">Nhân Viên Tuyển Dụng</span></h3>
        <h4>Công Ty TNHH May Thêu Giày An Phước</h4>
        <div class="login-form">
            <form id="frmLogin" name="frmLogin" method="POST" action="https://careerbuilder.vn/vi/jobseekers/member/login" >
                <p class="note"> Thành viên đăng nhập <span class="note" style="font-weight:100">(Nếu bạn đã có hồ sơ tại CareerBuilder)</span></p>
                <div class="form-group">
                    <input type="text" placeholder="Email" name="username" value=""  title="Email">
                    <span class="error_username"></span>
                </div>
                <div class="form-group">
                    <input type="password" name="password" placeholder="Mật khẩu">
                    <span class="error_password"></span>
                </div>
                <div class="form-group form-submit">
                    <input type="hidden" name="csrf_token_apply" value= "f42d61ec3a243618e076913f21732e37bdc1bd79da25322bd98a4f0233b81614" />
                    <input type="submit" value="Sign in and Apply">
                </div>
            </form>
        </div>
        <div class="apply-not-login">
            <strong>Nộp đơn ứng tuyển nhanh không cần đăng ký tài khoản</strong>
            <p class="note">Bạn có thể nộp đơn ứng tuyển không cần đăng nhập hoặc chưa là thành viên của CareerBuilder.</p>
            <div class="btn-group">
                <a class="btn-apply-non-member"  id="apply_url" href="https://careerbuilder.vn/vi/jobseekers/jobs/apply?s=cbnon&job_id=35B9A7C0"  rel="nofollow" >Ứng Tuyển Ngay</a>
                <span class="or-text">hoặc</span>
                <a class="btn-apply-facebook" href="javascript:void(0);" onclick="popupapi('facebook','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5mYWNlYm9vaz9hcHBseV91cmw9aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvam9icy9hcHBseT9qb2JfaWQ9MzVCOUE3QzA=');" rel="nofollow"> Apply with <strong>Facebook</strong><i class="fa fa-facebook"></i></a>
            </div>
        </div>
    </div>
    <script>
        var language_plogin = {
                            LANG_ERROR_P_PASSWORD_NULL:"Vui lòng nhập mật khẩu!",
                            LANG_ERROR_P_PASSWORD_LENGTH:"Vui lòng nhập mật khẩu của bạn từ 6-15 ký tự.",
                            LANG_ERROR_P_USERNAME_NULL:"Vui lòng nhập email!",
                            job_index_username:"Email"
                        };
        
        if(typeof language === 'undefined') var language = language_plogin;
        else    $.extend(language, language_plogin);
        $(document).ready(function(){
            $("#frmLogin").validate({
                rules: {
                    username: {
                        required: true,
                    },
                    password: {
                        required: true,
                        rangelength: [6, 15]
                    }
                },
                messages: {
                    username: {required: language.LANG_ERROR_P_USERNAME_NULL}   ,
        password: {required: language.LANG_ERROR_P_PASSWORD_NULL,rangelength:language.LANG_ERROR_P_PASSWORD_LENGTH}
                },
                errorPlacement: function(error, element) {
                    var name = element.attr('name');
                    var errorSelector = '.error_'+name;
                    var $element = $(errorSelector);
                    $(errorSelector).html(error.html());
                },
                success: function (error) {
                    error.remove();
                },
            });
        });
    </script>
    <script>
        function showboxJobalert() {
               var win = window.open('https://careerbuilder.vn/thong-bao-viec-lam', '_blank');
               if (win) {
                   win.focus();
               } else {
                   console.log('error open tab');
               }
               return false;
            //$.fancybox.open($("#popup-jobalert"));
        }
    </script>
    <input type="hidden" value="" name="from_action" id="from_action" />
    <script src="{{ asset('js/footer2.js') }}">/*jquery.tabslet.js*/</script>
    <script type="text/javascript">
        var flag_load_company = 0;
        $(document).ready(function () {
            $(".search-result .tabs, .search-result-list-detail .tabs").on("_before", function(event){
                if(event.target.id == 'tabs-job-company'){
                    if(flag_load_company == 0){
                        var link_company = $(".apply-now-content a.job-company-name").attr('href');
                        load_company(link_company);
                    }
                }
            });
        });
        $(document).on('click', 'a.job-company-name', function(e){
            e.preventDefault();
            var link_company = $(this).attr('href');
            load_company(link_company);
        });
        function load_company(link){
            if(flag_load_company == 0){
                if($.trim(link) != '' && $.trim(link) != '#'){
                    $("#tab-2").html('Loading....');
        var from_action = $("#from_action").val();
                    $.ajax({
                    url: link+'?ajax=1&from_action='+from_action,
                    type: 'POST',
                    dataType: 'json',
                    }).done(function(data){
                        if(data.layout_profile == 1){
                            var win = window.open(link, '_blank');
                            $("#tabs-job-detail").click();
                            $("#tab-2").html('');
                        }else{
                            flag_load_company = 1;
                            $("#tab-2").html(data.html_detail);
                            companyPhotoSlide();
                            $("#tabs-job-company").click();
                        }
                    });
                }
            }else{
                $("#tabs-job-company").click();
            }
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        }
    </script>
    <script type="text/javascript">
        var language_pdetail = {
         job_chk_save_jobs_saved:"Việc làm đã lưu",
         job_chk_save_jobs_save:"Lưu việc làm"
        };
        if(typeof language === 'undefined') var language = language_pdetail;
        else    $.extend(language, language_pdetail);
    </script>
    <script>
        if ($.isFunction(window.smartech)) {
            smartech('dispatch', 'p_detail_page', {
                    "job_title_id"      : '1359552',
                    "job_title"         : 'Nhân Viên Tuyển Dụng',
                    "job_location_id"   : '8',
                    "job_location"      : 'Hồ Chí Minh',
                    "employer_name_id"  : '2816',
                    "employer_name"     : "Công Ty TNHH May Thêu Giày An Phước",
                    "job_level_id"      : '3',
                    "job_level"         : 'Nhân viên',
                    "salary"            : 'cạnh tranh',
                    "from_salary"       : 0,
                    "to_salary"         : 0,
                    "unit_salary"       : 'VND',
                    "member"            : 'no'
                }
            );
        }
        var product = {
            identifier: '35B9A7C0'
        };
    </script>
    <script type="application/ld+json">{"@context": "http://schema.org","@type": "JobPosting","baseSalary" : {"@type": "MonetaryAmount","currency": "VND","value": {"@type": "QuantitativeValue","value":"Cạnh tranh","unitText":"MONTH"}},"industry": "Nhân sự, Dệt may / Da giày / Thời trang, Hành chính / Thư ký","jobBenefits": "Chế độ bảo hiểm, Phụ cấp, Đồng phục, Chế độ thưởng, Tăng lương, Công tác phí, Phụ cấp thâm niên, Nghỉ phép năm","datePosted": "2022-06-14","validThrough": "2022-07-15","occupationalCategory": "Nhân viên","description": "<p>Đề xuất các kênh tuyển dụng phù hợp nhằm đáp ứng nhu cầu nhân sự cho nhà máy<br/>Triển khai các kế hoạch tuyển mộ, tuyển chọn ứng viên<br/>Phỏng vấn, đánh giá, tham vấn ra quyết định tuyển chọn ứng viên<br/>Xây dựng và cải tiến quy trình tuyển dụng<br/>Thực hiện các hoạt động hướng dẫn và đào tạo hội nhập cho nhân viên mới</p><p>Một số công việc khác trao đổi trong phỏng vấn</p>","experienceRequirements": {"@type": "OccupationalExperienceRequirements","monthsOfExperience": "60","description":"<p>Nam, nữ kinh nghiệm 05 năm tuyển dụng hệ thống, td lao động số lượng lớn<br/>Ngoại hình khá, nhanh nhẹn, giao tiếp tốt.<br/>Thông thạo các kênh tuyển dụng<br/>Có kinh nghiệm quản lý nhân sự công ty quy mô 1000 lđ trở lên</p>"},"qualifications": "Cao đẳng","identifier": {"@type":"PropertyValue","name":"Công Ty TNHH May Thêu Giày An Phước","value":"35A4F400"},"hiringOrganization" : {"@type" : "Organization","name" : "Công Ty TNHH May Thêu Giày An Phước","sameAs":"https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-may-theu-giay-an-phuoc.35A4F400.html","logo":"https://images.careerbuilder.vn/employer_folders/lot6/2816/110x55/74705logoap.jpg"},"employmentType": ["FULL_TIME"],"jobLocation" : {"@type": "Place","address": {"@type": "PostalAddress","streetAddress": "Hồ Chí Minh","addressLocality": "Hồ Chí Minh","addressRegion": "Hồ Chí Minh","addressCountry": "Việt Nam","postalCode": "70000"}},"title" : "Nhân Viên Tuyển Dụng","skills" : "","workHours" : "8 giờ"}</script>
    <div class="back-drop"></div>
</main>
@endsection