@extends('frontend.layout.appfe')
@section('content')
    <main>


<?php
    $ar_ex = ['Sinh viên/ Thực tập sinh', 'Mới tốt nghiệp', 'Nhân viên', 'Trưởng nhóm / Giám sát', 'Quản lý', 'Phó Giám đốc', 'Giám đốc', 'Tổng giám đốc', 'Chủ tịch / Phó Chủ tịch'];
    $i=0;


    $exp = ['Chưa tốt nghiệp', 'Trung học', 'Trung cấp', 'Cao đẳng', 'Đại học', 'Sau đại học','Khác'];

    $slMarritial =['Độc thân', 'Đã kết hôn'];

    $checkTitle = App\Models\application::where('users_id', Auth::user()->id)->first();

    if(!empty(json_decode($checkTitle->title)) &&!empty(json_decode($checkTitle->experience))&&!empty(json_decode($checkTitle->objective)) && !empty(json_decode($checkTitle->info)) && !empty(json_decode($checkTitle->education))&&!empty(json_decode($checkTitle->experience_details))){
        $checksucess = true;
    }
    else{
        $checksucess = false;
    }



    ?>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/employ/index.css') }}">
    <link href="https://static.careerbuilder.vn/js/datetimepicker/DateTimePicker.css" rel="stylesheet"/>
    <script src="https://static.careerbuilder.vn/js/datetimepicker/DateTimePicker.js" type="text/javascript"></script>
    <script src="https://static.careerbuilder.vn/js/datetimepicker/i18n/DateTimePicker-i18n.js" type="text/javascript"></script>
    <script src="https://static.careerbuilder.vn/js/autoNumeric.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="https://careerbuilder.vn/cv-hay/getdistricts"></script>
    <script type="text/javascript" src="https://careerbuilder.vn/cv-hay/init-cv-building"></script>
    <div class="page-content d-flex align-items-stretch">
    <div class="default-sidebar sticky">

        @include('frontend.layout.sidebar.sidebar1')

    </div>
    <div class="content-inner">
        <div class="container-fluid">
            <div class="db-my-profile">
                <div class="row">
                    <div class="col-lg-8 col-xl-9 main-widget">
                        <div class="widget widget-2 widget-11" id="widget-11">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <h3>Profile</h3>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="row">
                                    <div class="col-lg-4 col-xl-3">
                                        <div class="img-info">
                                            <div class="figure">
                                                <div class="image img-result hide"><img id="img_mem_avatar" class="cropped" src="./img/dash-board/1.png" alt=""></div>
                                            </div>
                                            <div class="mobile-show">
                                                <div class="cb-name">
                                                    <h2>{{ Auth::user()->name }}</h2>
                                                </div>
                                                <div class="information">

                                                    @if($checksucess===true)
                                                    <div class="assistant">Đã cập nhật</div>

                                                    @else

                                                    <div class="assistant">Chưa cập nhật</div>

                                                    @endif
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="action-profile">
                                            <ul>
                                                <li class="edit-pro">
                                                    <input class="hidden" onchange="return ajaxFileUpload();" type="file" class="file" id="fileAvatar" name="fileAvatar">
                                                    <a href="javascript:void(0);" onclick="choose_file();" id="upload-image"><span>Tải hình ảnh</span></a> 
                                                </li>
                                                <!-- <li class="view-pro"><a href="javascript:void(0);" onclick="removeAvarta();"> <em class="material-icons">highlight_off</em><span>Xóa hình ảnh</span></a></li> -->
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-xl-9">
                                        <div class="cb-name">
                                            <h2 id="section_name">{{ Auth::user()->name }}</h2>
                                        </div>
                                        <div class="information">
                                             @if($checksucess===true)
                                            <div class="assistant">Đã cập nhật</div>

                                            @else

                                            <div class="assistant">Chưa cập nhật</div>

                                            @endif
                                        </div>
                                        <div id="complete_section">
                                            <div class="progress-bar-status incomplete">
                                                <div class="profile-strength">
                                                    <p>Mức độ hoàn thành:<span> {{ ($checksucess===true)?'Đã hoàn tất':'Chưa Hoàn Tất'}}</span></p>
                                                </div>

                                                @if($checksucess===false)
                                                <div class="noti">
                                                    <em class="mdi mdi-alert-circle-outline"></em>
                                                    <p>Chưa hoàn thành. Bạn vui lòng cập nhật và hoàn thành hồ sơ</p>
                                                </div>
                                                @endif
                                                <div class="progress-bar">
                                                    <div class="progress">
                                                        <progress class="progress-main" max="7" value="0"></progress>
                                                    </div>
                                                    <div class="progress-row">
                                                        <div class="line active"></div>
                                                        <div class="line "></div>
                                                        <div class="line "></div>
                                                        <div class="line "></div>
                                                        <div class="line "></div>
                                                        <div class="line "></div>
                                                        <div class="line "><span class="success"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                          

                                            @if(!empty(Auth::user()->cv))
                                            <div class="check-box">
                                                <div class="form-group form-check-box job-alerts">
                                                    <label for="cv_jobalert_16167824">Tải cv xuống
                                                    <button><a href="{{ asset(Auth::user()->cv) }}">download</a></button>
                                                </div>
                                            </div>

                                            @endif
                                            <script>
                                                var intComCBProfile = 0;
                                                $(document).ready(function(){
                                                    if(intComCBProfile >=2)
                                                        $('#btn_download').css('display', 'block');
                                                    else
                                                        $('#btn_download').css('display', 'none');
                                                    $('.list-tag li a').on('click', function (event) {
                                                        event.preventDefault();
                                                        $("html, body").animate({
                                                            scrollTop: $($(this).data("href")).offset().top - $('header').height() - 40
                                                        }, 1000)
                                                    });
                                                
                                                
                                                    $(".group_searchable a").on('click', function(event) {
                                                        event.preventDefault();
                                                        var objThis = $(this);
                                                        var objParent = objThis.closest('div.group_searchable');
                                                
                                                        var rs_id = objParent.data('id');
                                                        var rs_complete = objParent.data('complete');
                                                        var rs_status = parseInt(objThis.data('type'));
                                                        console.log(rs_complete);
                                                        if(rs_complete == 0){
                                                            show_noti(2,language.js_resume_can_not_searchable);
                                                            return false;
                                                        }
                                                
                                                        var resume_title        = $("#titleresume_"+rs_id).html();
                                                
                                                        if(rs_status == 3){
                                                            $.alerts.okButton       = language.js_default_resume_urgentjob;
                                                            $.alerts.cancelButton   = language.js_none_default_resume_urgentjob;
                                                            jConfirm(language.js_resume_urgentjob_searchable1+' <strong>"' + resume_title + '"</strong> '+ language.js_resume_urgentjob_searchable2, language.message_common, function(r){
                                                                if(r == true){
                                                                    resume_active = 3;
                                                                    intResult = updateStatusResume(rs_id, resume_active);
                                                                    if(intResult == 1){
                                                                        active_searchable(objParent, 'flash');
                                                                        show_noti(1,language.js_resume_urgentjob_success);
                                                                    }else{
                                                                        show_noti(2,language.js_resume_urgentjob_unsuccess);
                                                                    }
                                                                }
                                                            });
                                                            $.alerts.okButton       = language.okButton;
                                                            $.alerts.cancelButton   = language.cancelButton;
                                                        }else if(rs_status == 1){
                                                            $.alerts.okButton       = language.js_default_resume;
                                                            $.alerts.cancelButton   = language.js_none_default_resume;
                                                            jConfirm(language.js_resume_active_searchable1+' <strong>"' + resume_title + '"</strong> '+ language.js_resume_active_searchable2, language.message_common, function(r){
                                                                if(r == true){
                                                                    resume_active = 1;
                                                                    intResult = updateStatusResume(rs_id, resume_active);
                                                                    if(intResult == 1){
                                                                        active_searchable(objParent, 'public');
                                                                        show_noti(1,language.js_resume_searchable_success);
                                                                    }else{
                                                                        show_noti(2,language.js_resume_active_searchable_unsuccess);
                                                                    }
                                                                }
                                                            });
                                                            $.alerts.okButton       = language.okButton;
                                                            $.alerts.cancelButton   = language.cancelButton;
                                                        }else{
                                                            $.alerts.okButton = language.js_default_resume_inactive;
                                                            $.alerts.cancelButton = language.js_none_default_resume_inactive;
                                                            jConfirm(language.js_resume_inactive_searchable1+' <strong>"' + resume_title + '"</strong> '+language.js_resume_inactive_searchable2, language.message_common, function(r){
                                                                if(r == true){
                                                                    resume_active = 2;
                                                                    updateStatusResume(rs_id, resume_active);
                                                                    show_noti(1,language.js_resume_unsearchable_success);
                                                                    active_searchable(objParent, 'lock');
                                                                }
                                                            });
                                                            $.alerts.okButton       = language.okButton;
                                                            $.alerts.cancelButton   = language.cancelButton;
                                                        }
                                                    });
                                                });
                                            </script>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="widget widget-20" id="desired-salarys">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i14.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Mức lương mong muốn </h3>

                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('desired-salary')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-edit"><a href="javascript:void(0)" onclick="openTipSlide('desired-salary');"><span>Chỉnh sửa</span></a></div>
                                    </div>
                                </div>
                            </div>

                           

                            <div class="widget-body">
                                <div class="no-content">
                                    <p>Mức lương mong muốn</p>
                                    <a href="javascript:void(0)" onclick="openTipSlide('desired-salary');"><span>Chỉnh sửa</span></a>
                                </div>
                                <input type="hidden" id="title_hidden_value" value="">
                            </div>
                        </div>




                        <div class="widget widget-20" id="work-recents">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i14.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Công việc gần đây </h3>

                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('work-recent')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-edit"><a href="javascript:void(0)" onclick="openTipSlide('work-recent');"><span>Chỉnh sửa</span></a></div>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i14.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Số năm kinh nghiệm </h3>

                                        </div>
                                    </div>

                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('work-recent')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-edit"><a href="javascript:void(0)" onclick="openTipSlide('work-recent');"><span>Chỉnh sửa</span></a></div>
                                    </div>
                                </div>
                            </div> -->


                            <div class="widget-body">
                                <div class="no-content">
                                    <p>Công việc gần đây</p>
                                    <a href="javascript:void(0)" onclick="openTipSlide('work-recent');"><span>Chỉnh sửa</span></a>
                                </div>
                                <input type="hidden" id="title_hidden_value" value="">
                            </div>
                        </div>

                       
                        <div class="widget widget-20" id="t-resume-sections">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i14.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Tiêu đề hồ sơ *</h3>

                                           
                                            @if(!empty(json_decode($checkTitle->title)))
                                            <div class="status success">
                                                <p>Đã hoàn thành</p>
                                            </div>
                                            @else
                                            <div class="status error">
                                                <p>Chưa hoàn thành</p>
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-t-resume')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-edit"><a href="javascript:void(0)" onclick="openTipSlide('tip-t-modal');"><span>Chỉnh sửa</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="no-content">
                                    <p>Tiêu đề hồ sơ</p>
                                    <a href="javascript:void(0)" onclick="openTipSlide('tip-t-modal');"><span>Chỉnh sửa</span></a>
                                </div>
                                <input type="hidden" id="title_hidden_value" value="">
                            </div>
                        </div>




                        <div class="widget widget-13" id="personalinfo-section">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i2.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Thông tin cá nhân *</h3>
                                           @if(!empty(json_decode($checkTitle->info)))
                                            <div class="status success">
                                                <p>Đã hoàn thành</p>
                                            </div>
                                            @else
                                            <div class="status error">
                                                <p>Chưa hoàn thành</p>
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-personalinfo')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-edit"><a href="javascript:void(0);" onclick="openTipSlide('tip-personalinfo-modal')"> <span>Chỉnh sửa</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="table">
                                    <table>
                                        <tbody>
                                           
                                            <tr>
                                                <td>Tên</td>
                                                <td>{{ json_decode($checkTitle->info)->firstname??Auth::user()->name }}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{{ json_decode($checkTitle->info)->email??Auth::user()->email }}</td>
                                            </tr>
                                            <tr>
                                                <td>Quốc tịch</td>
                                                <td>Việt Nam</td>
                                            </tr>
                                            <tr>
                                                <?php 

                                                    if(!empty(json_decode($checkTitle->info))){

                                                        $mar = @json_decode($checkTitle->info)->slMarritial;
                                                    }
                                                    else{
                                                        $mar ='';
                                                    }
                                                    
                                                ?>
                                                <td>Tình trạng hôn nhân</td>
                                                <td>{{ $mar?$slMarritial[$mar]:'' }}</td>
                                            </tr>
                                            <tr>
                                                <td>Quốc gia</td>
                                                <td>Việt Nam</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="widget widget-14" id="widget-14">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i3.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Mục tiêu nghề nghiệp</h3>

                                            @if(!empty(json_decode($checkTitle->objective)))
                                            <div class="status success">
                                                <p>Đã hoàn thành  </p>
                                            </div>
                                            @else
                                             <div class="status">
                                                <p>Không bắt buộc</p>
                                            </div>
                                            @endif 
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-objective')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-edit"><a href="javascript:void(0);" onclick="openTipSlide('tip-objective-modal');"> <span>Thêm mới</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="no-content">
                                    <p>Vui lòng thêm Mục tiêu nghề nghiệp</p>
                                    <a href="javascript:;" onclick="openTipSlide('tip-objective-modal');"><span>Thêm mới</span></a> 
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="content">
                                </div>
                            </div>
                            <script type="text/javascript">
                                $('.widget-14 .widget-body .list-action .view-more a').on('click', function () {
                                    $('.widget-14 .widget-body .content').addClass('active');
                                    $('.widget-14 .widget-body .list-action .view-less').css('display', 'block');
                                    $('.widget-14 .widget-body .list-action .view-more').css('display', 'none');
                                });
                                $('.widget-14 .widget-body .list-action .view-less a').on('click', function () {
                                    $('.widget-14 .widget-body .content').removeClass('active');
                                    $('.widget-14 .widget-body .list-action .view-less').css('display', 'none');
                                    $('.widget-14 .widget-body .list-action .view-more').css('display', 'block');
                                });
                            </script>
                        </div>
                       <!--  <div class="widget widget-18" id="widget-18">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i5.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Thông tin nghề nghiệp *</h3>
                                            <div class="status error">
                                                <p>Chưa hoàn thành</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-desired-job')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-edit"><a title="Chỉnh sửa" href="javascript:void(0)" onclick="editDesiredJob();"> <em class="material-icons">create</em><span>Chỉnh sửa</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Mức lương</td>
                                            <td>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hình thức làm việc</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Ngành nghề</td>
                                            <td>
                                                <ul>
                                                    <li></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nơi làm việc</td>
                                            <td>
                                                <ul>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <style>
                                #desired-form .chosen-container .chosen-results{ max-height: 100px!important;}
                            </style>
                        </div> -->
                        <div class="widget widget-15" id="widget-15">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i4.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Kinh nghiệm làm việc *</h3>

                                           @if(!empty(json_decode($checkTitle->experience)))
                                            <div class="status success">
                                                <p>Đã hoàn thành</p>
                                            </div>
                                            @else
                                            <div class="status error">
                                                <p>Chưa hoàn thành</p>
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-experience')">
                                            
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-add"><a href="javascript:void(0);" onclick="openTipSlide('tip-experience-modal')" title="Thêm mới"> <span>Thêm mới</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="no-content">
                                    <p>Bạn hãy thêm kinh nghiệp làm việc của mình để nhà tuyển dụng tham khảo</p>
                                   <!--  <a href="javascript:void(0);" onclick="openTipSlide('tip-experience-modal');"><em class="mdi mdi-plus-circle"></em><span>Thêm mới</span></a>  -->
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="experience">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Số năm kinh nghiệm</td>
                                                <td id="txt-experience">{{ (json_decode($checkTitle->experience))->yearOfExperience??'Chưa có kinh nghiệm' }}</td>
                                                <td>
                                                    <div class="link-edit"><a href="javascript:void(0);" onclick="editFrmExperience();"></a></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cấp bậc hiện tại</td>
                                                <?php 

                                                    $int_num_levelcurrent_id = '';
                                                    if(!empty(json_decode($checkTitle->experience))&&(json_decode($checkTitle->experience))->levelcurrent_id != null){

                                                        $int_num_levelcurrent_id = (int)(json_decode($checkTitle->experience))->levelcurrent_id;

                                                        

                                                        $number_levelcurrent_id = $ar_ex[(int)(json_decode($checkTitle->experience))->levelcurrent_id-1];

                                                    }
                                                    else{
                                                        $number_levelcurrent_id = 'chưa cập nhật';
                                                    }
                                                    
                                                ?>
                                                <td id="cbprofile_levelpresent">{{ $number_levelcurrent_id }}</td>
                                                <td>
                                                    <div class="link-edit"><a href="javascript:void(0);" onclick="editFrmExperience();"> </a></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <script type="text/javascript">
                                $(document).ready(function(){
                                    widget15Toggle();
                                  
                                });
                            </script>
                        </div>
                        <div class="widget widget-16" id="widget-16">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i7.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Học vấn *</h3>


                                            @if(!empty(json_decode($checkTitle->education)))
                                            <div class="status success">
                                                <p>Đã hoàn thành  </p>
                                            </div>
                                            @else
                                             <div class="status error">
                                                <p>Chưa hoàn thành</p>
                                            </div>
                                            @endif 
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-education')">
                                            
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-add"><a href="javascript:void(0)" onclick="openTipSlide('tip-education-modal')" title="Thêm mới"> <span>Thêm mới</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="no-content">
                                    <p>Nhập thông tin học vấn của bạn</p>
                                    <a href="javascript:void(0)" onclick="openTipSlide('tip-education-modal');" title="Thêm mới"><span>Thêm mới</span></a> 
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="experience">
                                    <table>
                                        <tbody>
                                            <?php 


                                                if(!empty(json_decode($checkTitle->education))){

                                                    $redu_degree = (json_decode($checkTitle->education))->redu_degree??'';

                                                }
                                                else{
                                                    $redu_degree ='chưa cập nhật';
                                                }
                                                

                                            ?>
                                            <tr>
                                                <td>Bằng cấp cao nhất</td>
                                                <td>
                                                    <div class="box-edit-degree" id="cbprofile_degree_name">
                                                        {{ @$exp[$redu_degree] }}                  
                                                        <div class="link-edit link-highest-degree"><a href="javascript:void(0);"></a></div>
                                                    </div>
                                                    <div class="highest-degree">
                                                        <div class="select-group">
                                                            <form id="resume-degree-form">
                                                                <select name="degree" id="degree">

                                                                    
                                                                   @foreach($exp as $key => $value)
                                                                    <option value="{{ $key }}"  {{ $redu_degree== $key?'selected':''}}>{{ $value }}</option>
                                                                    @endforeach
                                                                </select>
                                                            </form>
                                                        </div>
                                                        <div class="link-save"> <a href="javascript:void(0);" onclick="saveEduLevel();"><em class="material-icons">save</em>Lưu Lại</a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="sticker">
                                    <ul class="list-sticker">
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="widget widget-16" id="certificate-section">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i10.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Chứng chỉ khác</h3>
                                            <div class="status">
                                                <p>Không bắt buộc</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-certificate')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-add"><a href="javascript:void(0)" onclick="editResumeCertificate(0);"> <em class="material-icons">add</em><span>Thêm mới</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="no-content">
                                    <p>Vui lòng nhập chứng chỉ</p>
                                    <a href="javascript:void(0)" onclick="editResumeCertificate(0);"><em class="mdi mdi-plus-circle"></em><span>Thêm mới</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="widget widget-22 widget-17" id="language-section">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image icon-translate"><span class="material-icons">translate</span></div>
                                        <div class="figcaption">
                                            <h3>Ngôn ngữ </h3>
                                            <div class="status">
                                                <p>Không bắt buộc</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-language')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-add-lang"><a href="javascript:void(0)" onclick="editResumeLanguage(0);"> <em class="material-icons">add</em><span>Thêm mới</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="list-progress">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Trình độ ngoại ngữ</th>
                                                <th>Trình độ</th>
                                                <th>Chứng chỉ ngoại ngữ</th>
                                                <th> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="title">
                                                        <h4>Việt Nam</h4>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="progress">
                                                        <progress class="progress-main" max="5" value="1"></progress>
                                                        <div class="lavel">Bản ngữ</div>
                                                        <div class="progress-row">
                                                            <div class="line success"></div>
                                                            <div class="line success"></div>
                                                            <div class="line success"></div>
                                                            <div class="line success"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span></span>
                                                </td>
                                                <td>
                                                    <ul class="list-action">
                                                        <li class="edit-link"><a href="javascript:void(0)" onclick="editResumeLanguage(191018);"> <em class="material-icons">create</em><span>Chỉnh sửa</span></a></li>
                                                        <li class="delete"><a href="javascript:void(0)" onclick="deleteResumeLanguageProfile(191018);"> <em class="material-icons">highlight_off</em><span>Xoá</span></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <script>
                                $('#language-section .widget-body > .list-action .view-more a').on('click', function () {
                                    $('#language-section .widget-body .list-progress').addClass('active')
                                    $('#language-section .widget-body > .list-action .view-less').css('display', 'block')
                                    $('#language-section .widget-body > .list-action .view-more').css('display', 'none')
                                })
                                $('#language-section .widget-body > .list-action .view-less a').on('click', function () {
                                    $('#language-section .widget-body .list-progress').removeClass('active')
                                    $('#language-section .widget-body > .list-action .view-less').css('display', 'none')
                                    $('#language-section .widget-body > .list-action .view-more').css('display', 'block')
                                })
                            </script>
                        </div>
                        <div class="widget widget-17" id="widget-17">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i9.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Kỹ năng chuyên môn *</h3>
                                            <div class="status error">
                                                <p>Chưa hoàn thành</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-skill')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-add"><a href="javascript:void(0);" onclick="show_frmSkill(0);"> <em class="material-icons">add</em><span>Thêm mới</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="list-progress" id="list-progress-skill">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Skill </th>
                                                <th>Mức độ</th>
                                                <th> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <script>
                                $(document).ready(function() {
                                    $(".lst-action-skill .view-more").on('click', function(){
                                        $("#list-progress-skill tr").show();
                                        $(this).hide();
                                        $(this).next('li').show();
                                    });
                                    $(".lst-action-skill .view-less").on('click', function(){
                                        $("#list-progress-skill tr").hide();
                                        $("#list-progress-skill tr:nth-child(-n+3)").show();
                                        $("html, body").animate({scrollTop: $("#widget-17").offset().top-$('header').innerHeight()-40},1000);
                                        $(this).hide();
                                        $(this).prev('li').show();
                                    });
                                });
                            </script>
                        </div>
                        <div class="widget widget-19" id="widget-19">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i6.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Thành tích nổi bật</h3>
                                            <div class="status default">
                                                <p>Không bắt buộc</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-award')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-edit"><a href="javascript:void(0);" onclick="editResumeAdditioninfo();"> <em class="material-icons">create</em><span>Thêm mới</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body" id="no-content" >
                                <div class="no-content">
                                    <p>Vui lòng thêm Thành tích nổi bật của bạn</p>
                                    <a href="javascript:void(0);" onclick="editResumeAdditioninfo();"><em class="mdi mdi-plus-circle"></em><span>Thêm mới</span></a> 
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="content" id="content">     Chưa cập nhật
                                </div>
                            </div>
                            <script type="text/javascript">
                                $('.widget-19 .widget-body .list-action .view-more a').on('click', function () {
                                  $('.widget-19 .widget-body .content').addClass('active');
                                  $('.widget-19 .widget-body .list-action .view-less').css('display', 'block');
                                  $('.widget-19 .widget-body .list-action .view-more').css('display', 'none');
                                });
                                $('.widget-19 .widget-body .list-action .view-less a').on('click', function () {
                                  $('.widget-19 .widget-body .content').removeClass('active');
                                  $('.widget-19 .widget-body .list-action .view-less').css('display', 'none');
                                  $('.widget-19 .widget-body .list-action .view-more').css('display', 'block');
                                });
                            </script>
                        </div>
                        <div class="widget widget-23 widget-15" id="other-activity-section">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i13.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Hoạt động khác</h3>
                                            <div class="status">
                                                <p>Không bắt buộc</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-other-activity')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-add"><a href="javascript:void(0)" onclick="editResumeActivity(0);"> <em class="material-icons">add</em><span>Thêm mới</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="no-content">
                                    <p>Mô tả hoạt động</p>
                                    <a href="javascript:void(0)" onclick="editResumeActivity(0);"><em class="mdi mdi-plus-circle"></em><span>Thêm mới</span></a>
                                </div>
                            </div>
                            <script type="text/javascript">
                                $(document).ready(function(){
                                    widgetActivityToggle();
                                });
                            </script>
                        </div>
                        <div class="widget widget-20" id="widget-20">
                            <div class="widget-head">
                                <div class="cb-title-h3">
                                    <div class="figure">
                                        <div class="image"><img src="./img/dash-board/i8.png" alt=""></div>
                                        <div class="figcaption">
                                            <h3>Người tham khảo</h3>
                                            <div class="status default">
                                                <p>Không bắt buộc</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-action">
                                        <div class="tips p1" onclick="openTipSlide('tip-references')">
                                            <div class="icon">
                                                <em class="mdi mdi-lightbulb"></em>
                                            </div>
                                            <p>Tips</p>
                                        </div>
                                        <div class="link-add"><a href="javascript:void(0);" onclick="show_frmRefer(0);"> <em class="material-icons">add</em><span>Thêm mới</span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-body">
                                <div class="no-content">
                                    <p>Vui lòng thêm thông tin người tham khảo</p>
                                    <a href="javascript:void(0);" onclick="show_frmRefer(0);"><em class="mdi mdi-plus-circle"></em><span>Thêm mới</span></a> 
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <!-- <div class="col-lg-4 col-xl-3 main-menu">
                        <div class="menu-shortchut">
                            <div class="list-button">
                                <ul>
                                    <li><a class="share-profile" href="javascript:void(0);"><em class="mdi mdi-share"></em><span>Chia sẻ hồ sơ</span> <span class="new-label"> New </span> </a></li>
                                    <li> <a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/changetemplate"> <em class="material-icons">edit</em><span>Chỉnh Mẫu Hồ Sơ</span></a></li>
                                    <li> <a href="{{ route('viewCv', Auth::user()->id) }}" id="btn_view_cbprofile"> <em class="material-icons">remove_red_eye</em><span>Xem CV </span></a></li>
                                    <li id="btn_download" style="display:none"> <a href="javascript:void(0);" onclick="downloadCvProfile(16167824)" > <em class="material-icons">get_app</em><span>Tải hồ sơ</span></a>
                                    </li>
                                    <li><a class="hidden-info" href="javascript:void(0);" onclick="showHideInfor();"><em class="fa fa-eye-slash"></em><span>Ẩn thông tin</span></a></li>
                                </ul>
                            </div>
                            <div class="head-menu">
                                <div class="name-shortchut"><a class="active" href="javascript:void(0);">Careerbuilder Profile</a></div>
                                <div class="toggle-menu"><em class="material-icons">list</em></div>
                            </div>
                           
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="hidden-edit-modal edit-modal-dashboard" style="display: none">
                <div class="modal-title">
                    <h3>Ẩn một số thông tin</h3>
                </div>
                <div class="body-modal main-form">
                    <form name="frmConfident" id="frmConfident" method="POST" class="form-horizontal">
                        <input type="hidden" name="r_id" value="0" />
                        <input type="hidden" name="type_id" value="profile" />
                        <div class="line">
                            <p>Thông tin cá nhân</p>
                        </div>
                        <div class="row data-list">
                            <div class="col-md-6">
                                <div class="form-group form-checkbox">
                                    <input type="checkbox" id="chkConfidential_6" name="chkConfidential[6]" value="1" >
                                    <label for="chkConfidential_6">Tình trạng hôn nhân</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-checkbox">
                                    <input type="checkbox" id="chkConfidential_0" name="chkConfidential[0]" value="1" >
                                    <label for="chkConfidential_0">Ẩn Họ và tên</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-checkbox">
                                    <input type="checkbox" id="chkConfidential_1" name="chkConfidential[1]" value="1" >
                                    <label for="chkConfidential_1">Địa chỉ (Số nhà, Đường)</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-checkbox">
                                    <input type="checkbox" id="chkConfidential_3" name="chkConfidential[3]" value="1" >
                                    <label for="chkConfidential_3">Số điện thoại</label>
                                </div>
                            </div>
                        </div>
                        <div class="line">
                            <p>Thông tin nghề nghiệp</p>
                        </div>
                        <div class="row data-list">
                            <div class="col-md-6">
                                <div class="form-group form-checkbox">
                                    <input type="checkbox" id="chkConfidential_7" name="chkConfidential[7]" value="1" >
                                    <label for="chkConfidential_7">Hình thức làm việc</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-checkbox">
                                    <input type="checkbox" id="chkConfidential_9" name="chkConfidential[9]" value="1" >
                                    <label for="chkConfidential_9">Mức lương</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-checkbox">
                                    <input type="checkbox" id="chkConfidential_8" name="chkConfidential[8]" value="1" >
                                    <label for="chkConfidential_8">Phúc lợi mong muốn</label>
                                </div>
                            </div>
                        </div>
                        <div class="button-modal"><a class="btn-gradient" href="javascript:;" onclick="saveConfResume();">Lưu Lại</a></div>
                    </form>
                </div>
            </div>



            <div class="edit-db-work-experience-1 edit-modal-dashboard" style="display:none">
                <div class="modal-title">
                    <h3>Kinh nghiệm làm việc</h3>
                </div>
                <div class="modal-body">
                    <form name="frm_Experience" id="frm_Experience" method="post" action="{{ route('postProfile', 'experience') }}">
                        @csrf
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label for="">Số năm kinh nghiệm</label>
                            </div>
                          
                            <div class="col-lg-8">
                                <div class="input-group">
                                    <input type="number" class="exp-yet" maxlength="2" name="yearOfExperience" id="yearOfExperience" min="1" max="55" value="{{ (json_decode($checkTitle->experience))->yearOfExperience??'0' }}"  >
                                </div>
                                <div class="form-error"><span class="err_yearOfExperience" style="display:none"></span></div>
                                <!-- <div class="form-group form-checkbox mt-1">
                                    <input type="checkbox" id="not_experence" name="not_experence"  checked="checked" value="1" style="margin-right: 5px;">
                                    <label class="no-exp-yet" for="not_experence">Chưa có kinh nghiệm</label>
                                </div> -->
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-4">
                                <label for="">Cấp bậc hiện tại</label>
                            </div>
                            <div class="col-lg-8">
                                <div class="select-group">
                                    
                                    <select name="levelcurrent_id" id="levelcurrent_id" style="float: left; width: 200px; margin-bottom:5px">
                                        <option value="" >Chọn</option>
                                        @foreach($ar_ex as $value)
                                        <?php  

                                            $i++;
                                        ?>
                                        <option value="{{ $i }}"   {{ $int_num_levelcurrent_id== $i?'selected':'' }}>{{ $value }}</option>
                                        @endforeach
                                        
                                    </select>
                                </div>
                                <div class="form-error"><span class="err_levelcurrent_id" style="display:none"></span></div>
                            </div>
                        </div>
                        <div class="form-group form-button">
                            <div class="button-save button-center">
                                <button class="btn-gradient" type="submit" >Lưu Lại</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
           <!--  <div id="popup-modal" class="popup-modal intro-modal edit-modal-dashboard" style="display: none">
                <div class="modal-title">
                    <h3>TÍNH NĂNG "CHIA SẺ HỒ SƠ" ĐÃ SẴN SÀNG!</h3>
                </div>
                <div class="modal-body">
                    <div class="box-intro">
                        <div class="box-img">
                            <img src="https://static.careerbuilder.vn/themes/careerbuilder/images/cv-profile/banner_popup_share_profile.jpg">
                        </div>
                        <div class="text-intro">
                            <p>
                                Bạn đã sẵn sàng "khoe" thương hiệu cá nhân trên mọi nền tảng? Trải nghiệm ngay tính năng "Chia sẻ profile" đến bất cứ nơi đâu nhé!
                            </p>
                        </div>
                        <div class="action">
                            <label class="container-ckb">Không hiển thị lại
                            <input type="checkbox" name="ckb-1" id="sp_popup_chk">
                            <span class="checkmark"></span>
                            </label>
                            <button class="btn-close-modal btn-close-popup">
                            Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- <script>
                $(document).ready(function() {
                    $.fancybox.open($(".popup-modal"), {});
                    var sppopup = getCookie(sppopup);
                    if (sppopup != 1) {
                        if ($(window).width() > 1200) {
                            $('#popup-modal').show();
                            $('.popup-modal').css('display', 'inline-block');
                            $('#sp-popup-chk').prop('checked', false);
                        } else {
                            $('#popup-modal').hide();
                            $('.popup-modal').css('display', 'none');
                        }
                
                        $('#sp_popup_chk').change(function() {
                            if ($(this).is(":checked"))
                            {$('.popup-modal .box-intro .action .btn-close-popup').on('click', function () 
                                {
                                    $('#popup-modal, .popup-modal').hide();
                                    document.cookie = "sppopup=1"; 
                                });
                            }        
                        })
                    }
                });
            </script> -->
            <div class="tips-modal" id="tip_cvsetting" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="cb-title-h3">
                                            <h3>Hồ sơ  </h3>
                                        </div>
                                        <div class="content">
                                            <p>Phông chữ trong CV phần nào thể hiện phong thái của bạn khi làm
                                                việc và Nhà tuyển dụng thường mong muốn được đọc các thông tin
                                                bạn đưa ra ở một cỡ chữ vừa phải, rõ ràng, không quá to cũng
                                                không quá nhỏ.
                                                Cỡ chữ gợi ý cho một CV chuẩn là tầm 12 đến 14 và bạn có thể
                                                kiểm tra thử bằng cách in CV ra trên khổ giấy A4 trước khi gửi
                                                đi ứng tuyển nhé.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal" id="tip-t-resume" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Tiêu đề hồ sơ:<br>
                                    Bạn nên để tiêu đề là vị trí bạn đang ứng tuyển hoặc muốn làm việc. Giúp Nhà tuyển dụng hiểu ngay vị trí mong muốn khi nhận hồ sơ của bạn.<br>
                                    Ví dụ: "Nhân viên kinh doanh" hoặc "Marketing Manager"<br>
                                    Lưu ý: hãy điều chỉnh tiêu đề theo từng công việc ứng tuyển nhé!
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tips-modal" id="work-recent" style="display: none">
                <div class="add-title-modal edit-modal-dashboard fancybox-content" style="">
                    <div class="modal-title">
                        <h3>Công việc gần đây</h3>
                    </div>
                    <div class="modal-body">
                        <form autocomplete="on" name="t-resume-form" id="t-resume-form" method="post" action="{{ route('postProfile', 'workrc') }}">
                            @csrf
                            <div class="form-group row">
                                <div class="col-lg-4">
                                    <label for="">Công việc gần đây<span>*</span></label>
                                </div>
                               
                                <div class="col-lg-8">
                                    <div class="input-group">
                                        <input type="text"  name="resume_title" id="resume_title" maxlength="400" value="{{ @json_decode($checkTitle->title)->workrc }}">
                                    </div>
                                    <div class="form-error"><span class="err_resume_title"></span></div>
                                </div>
                            </div>
                            <div class="form-group form-button">
                                <div class="button-save button-center">
                                    <button class="btn-gradient" type="submit">Lưu Lại</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                            <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="tips-modal" id="desired-salary" style="display: none">
                <div class="add-title-modal edit-modal-dashboard fancybox-content" style="">
                    <div class="modal-title">
                        <h3>Mức lương mong muốn</h3>
                    </div>
                    <div class="modal-body">
                        <form autocomplete="on" name="t-resume-form" id="t-resume-form" method="post" action="{{ route('postProfile', 'desired_salary') }}">
                            @csrf
                            <div class="form-group row">
                                <div class="col-lg-4">
                                    <label for="">Mức lương mong muốn<span>*</span></label>
                                </div>
                               
                                <div class="col-lg-8">
                                    <div class="input-group">
                                        <input type="text"  name="resume_title" id="resume_title" maxlength="400" value="{{ @json_decode($checkTitle->title)->desired_salary }}">
                                    </div>
                                    <div class="form-error"><span class="err_resume_title"></span></div>
                                </div>
                            </div>
                            <div class="form-group form-button">
                                <div class="button-save button-center">
                                    <button class="btn-gradient" type="submit">Lưu Lại</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                            <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                        </svg>
                    </button>
                </div>
            </div>



            <div class="tips-modal" id="tip-t-modal" style="display: none">
                <div class="add-title-modal edit-modal-dashboard fancybox-content" style="">
                    <div class="modal-title">
                        <h3>Tiêu đề hồ sơ</h3>
                    </div>
                    <div class="modal-body">
                        <form autocomplete="on" name="t-resume-form" id="t-resume-form" method="post" action="{{ route('postProfile', 'title') }}">
                            @csrf
                            <div class="form-group row">
                                <div class="col-lg-4">
                                    <label for="">Tiêu đề hồ sơ <span>*</span></label>
                                </div>
                               
                                <div class="col-lg-8">
                                    <div class="input-group">
                                        <input type="text"  name="resume_title" id="resume_title" maxlength="400" value="{{ @json_decode($checkTitle->title)->resume_title }}">
                                    </div>
                                    <div class="form-error"><span class="err_resume_title"></span></div>
                                </div>
                            </div>
                            <div class="form-group form-button">
                                <div class="button-save button-center">
                                    <button class="btn-gradient" type="submit">Lưu Lại</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                            <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                        </svg>
                    </button>
                </div>
            </div>


            <div class="tips-modal" id="tip-personalinfo" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Thông tin cá nhân:<br>
                                    - Hãy sử dụng địa chỉ email chuyên nghiệp phù hợp dùng cho công việc, hạn chế sử dụng email khó đọc hoặc dùng nhiều ký tự đặc biệt.<br>
                                    - Ảnh đại diện trên hồ sơ cũng như lần đầu tiên tạo ấn tượng với Nhà tuyển dụng. Nên chọn ảnh đại diện chụp từ vai trở lên, có ánh sáng tốt, không gian hạn chế nhiều chi tiết, nên mặc trang phục công sở.<br>
                                    - Kiểm tra thông tin cá nhân để tránh trường hợp Nhà Tuyển Dụng không liên hệ được
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal" id="tip-personalinfo-modal" style="display: none">
                <div class="edit-db-infor edit-modal-dashboard fancybox-content" style="">
                    <div class="modal-title">
                        <h3>Thông Tin Cá Nhân</h3>
                    </div>
                    <div class="modal-body">
                        <form name="personalInfoForm" id="personalInfoForm" autocomplete="off" method="post" action="{{ route('postProfile', 'info') }}">
                            @csrf
                            <div class="row">
                                
                                <div class="col-md-6">
                                    <div class="form-group form-text">
                                        <input type="text" onkeyup="this.setAttribute('value', this.value);" name="firstname" id="firstname" value="{{ @json_decode($checkTitle->info)->firstname??Auth::user()->name  }}" maxlength="30">
                                        <label>* Tên</label>
                                        <span class="err_firstname" style="display:none"></span> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-radio">
                                        <p>* Giới tính</p>

                                  


                                        <?php 

                                            $gender = ['Nam', 'Nữ'];

                                            $map = ['m', 'f']
                                        ?>
                                        @foreach($gender as $key => $value)
                                        <div class="gender">
                                            <input type="radio"  id="gender_{{ $map[$key] }}" value="{{ $key }}" name="gender" {{ @json_decode($checkTitle->info)->gender==$key?'checked':''  }}>
                                            <label for="gender_{{ $map[$key]  }}">{{ $value }}</label>
                                        </div>
                                        @endforeach
                                       

                     


                                        <span class="err_gender" style="display:none"></span> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-birthday">
                                        <label for="">* Ngày sinh</label>
                                        <input type="text" data-field="date" name="date" value="{{ @json_decode($checkTitle->info)->date??'' }}">
                                        <div id="date_time_picker" class="dtpicker-overlay dtpicker-mobile">
                                            <div class="dtpicker-bg">
                                                <div class="dtpicker-cont">
                                                    <div class="dtpicker-content">
                                                        <div class="dtpicker-subcontent"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="err_birthday" style="display:none"></span> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-text">
                                        <input type="text" onkeyup="this.setAttribute('value', this.value);" name="mobile" id="mobile" value="{{ @json_decode($checkTitle->info)->mobile??'' }}" maxlength="20" style="margin-top:5px">
                                        <label for="">* Số điện thoại</label>
                                        <span class="err_mobile" style="display:none"></span> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-text">
                                        <input type="text" onkeyup="this.setAttribute('value', this.value);" id="email_member_edit" value="{{ @json_decode($checkTitle->info)->email??Auth::user()->email  }}" readonly="readonly" disabled="disabled" style="margin-top:5px" name="email">
                                        <label for="">* Email</label>
                                    </div>
                                </div>
                               <!--  <div class="col-md-6">
                                    <div class="form-group form-select">
                                        <label for="">* Quốc tịch</label>
                                        <select name="slnationality" id="slnationality">
                                            <option value="1">Người Việt Nam</option>
                                            <option value="22">Người Bangladesh</option>
                                            <option value="14">Người Campuchia</option>
                                            <option value="4">Người Canada</option>
                                            <option value="25">Người Công gô</option>
                                            <option value="13">Người Hoa Kỳ</option>
                                            <option value="8">Người Hàn Quốc</option>
                                            <option value="24">Người Hồng Kong</option>
                                            <option value="169">Người Khác</option>
                                            <option value="19">Người Lào</option>
                                            <option value="9">Người Malaysia</option>
                                            <option value="21">Người Myanmar</option>
                                            <option value="2">Người Nhật</option>
                                            <option value="17">Người Qatar</option>
                                            <option value="23">Người Nước Ngoài</option>
                                            <option value="10">Người Singapore</option>
                                            <option value="5">Người Trung Quốc</option>
                                            <option value="16">Người Ukraine</option>
                                            <option value="3">Người Úc</option>
                                            <option value="20">Người Đài Loan</option>
                                        </select>
                                        <span class="err_slnationality" style="display:none"></span> 
                                    </div>
                                </div> -->
                                <div class="col-md-6">
                                    <div class="form-group form-select">
                                        <label for="">* Tình trạng hôn nhân</label>
                                        <select name="slMarritial">
                                            @foreach($slMarritial as $key => $value )
                                           
                                            <option value="{{ $key  }}" >{{ $value }}</option>
                                            @endforeach
                                        </select>
                                        <span class="err_slMarritial" style="display:none"></span> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-select">
                                        <label for="">* Quốc gia</label>
                                        <select name="slcountry" id="slcountry" class="select-nation">
                                            <option value="1">Việt Nam</option>
                                            <option value="22">Bangladesh</option>
                                            <option value="14">Campuchia</option>
                                            <option value="4">Canada</option>
                                            <option value="25">Công Gô</option>
                                            <option value="13">Hoa Kỳ</option>
                                            <option value="8">Hàn Quốc</option>
                                            <option value="24">Hồng Kông</option>
                                            <option value="169">Khác</option>
                                            <option value="19">Lào</option>
                                            <option value="9">Malaysia</option>
                                            <option value="21">Myanmar</option>
                                            <option value="2">Nhật Bản</option>
                                            <option value="17">Qatar</option>
                                            <option value="23">Quốc tế</option>
                                            <option value="10">Singapore</option>
                                            <option value="5">Trung Quốc</option>
                                            <option value="16">Ukraine</option>
                                            <option value="3">Úc</option>
                                            <option value="20">Đài Loan</option>
                                        </select>
                                        <span class="err_slcountry" style="display:none"></span>
                                    </div>
                                </div>
                                <!-- <div class="col-md-6">
                                    <div class="form-group form-select">
                                        <label for="">* Tỉnh / Thành phố</label>
                                        <select name="slcity" id="slcity" class="select-province-city" onchange="loadDistrictProfile(this.value);">
                                            <option value="">Chọn</option>
                                            <option value="4">Hà Nội</option>
                                            <option value="8">Hồ Chí Minh</option>
                                            <option value="76">An Giang</option>
                                            <option value="64">Bà Rịa - Vũng Tàu</option>
                                            <option value="781">Bạc Liêu</option>
                                            <option value="281">Bắc Cạn</option>
                                            <option value="240">Bắc Giang</option>
                                            <option value="241">Bắc Ninh</option>
                                            <option value="75">Bến Tre</option>
                                            <option value="650">Bình Dương</option>
                                            <option value="56">Bình Định</option>
                                            <option value="651">Bình Phước</option>
                                            <option value="62">Bình Thuận</option>
                                            <option value="78">Cà Mau</option>
                                            <option value="26">Cao Bằng</option>
                                            <option value="71">Cần Thơ</option>
                                            <option value="50">Dak Lak</option>
                                            <option value="1042">Dak Nông</option>
                                            <option value="511">Đà Nẵng</option>
                                            <option value="900">Điện Biên</option>
                                            <option value="61">Đồng Nai</option>
                                            <option value="67">Đồng Tháp</option>
                                            <option value="59">Gia Lai</option>
                                            <option value="19">Hà Giang</option>
                                            <option value="351">Hà Nam</option>
                                            <option value="39">Hà Tĩnh</option>
                                            <option value="320">Hải Dương</option>
                                            <option value="31">Hải Phòng</option>
                                            <option value="780">Hậu Giang</option>
                                            <option value="18">Hòa Bình</option>
                                            <option value="321">Hưng Yên</option>
                                            <option value="58">Khánh Hòa</option>
                                            <option value="77">Kiên Giang</option>
                                            <option value="60">Kon Tum</option>
                                            <option value="23">Lai Châu</option>
                                            <option value="25">Lạng Sơn</option>
                                            <option value="20">Lào Cai</option>
                                            <option value="63">Lâm Đồng</option>
                                            <option value="72">Long An</option>
                                            <option value="350">Nam Định</option>
                                            <option value="38">Nghệ An</option>
                                            <option value="30">Ninh Bình</option>
                                            <option value="68">Ninh Thuận</option>
                                            <option value="210">Phú Thọ</option>
                                            <option value="57">Phú Yên</option>
                                            <option value="52">Quảng Bình</option>
                                            <option value="510">Quảng Nam</option>
                                            <option value="55">Quảng Ngãi</option>
                                            <option value="33">Quảng Ninh</option>
                                            <option value="53">Quảng Trị</option>
                                            <option value="79">Sóc Trăng</option>
                                            <option value="22">Sơn La</option>
                                            <option value="66">Tây Ninh</option>
                                            <option value="36">Thái Bình</option>
                                            <option value="280">Thái Nguyên</option>
                                            <option value="37">Thanh Hóa</option>
                                            <option value="54">Thừa Thiên- Huế</option>
                                            <option value="73">Tiền Giang</option>
                                            <option value="74">Trà Vinh</option>
                                            <option value="27">Tuyên Quang</option>
                                            <option value="70">Vĩnh Long</option>
                                            <option value="211">Vĩnh Phúc</option>
                                            <option value="29">Yên Bái</option>
                                        </select>
                                        <span class="err_slcity" style="display:none"></span> 
                                    </div>
                                </div> -->
                                <div class="col-md-6">
                                    <!--id="areaDistrict"-->
                                    <!-- <div class="form-group form-select">
                                        <label for="">* Quận/huyện</label>
                                        <select name="sldistrict" id="sldistrict" class="select-district" disabled="">
                                            <option value="">Chọn</option>
                                        </select>
                                        <span class="err_sldistrict" style="display:none"></span> 
                                    </div> -->
                                </div>
                                <div class="col-md-6">
                                    <label></label>
                                    <div class="form-group form-text">
                                        <input type="text" onkeyup="this.setAttribute('value', this.value);" name="address" value=" {{ @json_decode($checkTitle->info)->address??'' }} ">
                                        <label for="">* Địa chỉ </label>
                                        <span class="err_address" style="display:none"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group form-button">
                                <div class="button-save button-center">
                                    <button class="btn-gradient" type="submit" >Lưu lại</button>
                                </div>
                            </div>
                        </form>
                    </div>


                    
                </div>
            </div>
            <div class="tips-modal" id="tip-objective-modal" style="display: none">
                <div class="edit-db-career-goals editor-modal-dashboard fancybox-content" style="display: block;">
                    <button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg></button>
                    <div class="modal-title">
                        <h3>Mục Tiêu Nghề Nghiệp</h3>
                    </div>
                    <div class="modal-body">
                        <form name="objective-form" id="objective-form" method="post" action="{{ route('postProfile', 'objective') }}">
                            @csrf
                            <div class="form-group">
                                <div class="ql-toolbar ql-snow">
                                    <span class="ql-formats">
                                        <button type="button" class="ql-bold">
                                            <svg viewBox="0 0 18 18">
                                                <path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path>
                                                <path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" class="ql-italic">
                                            <svg viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line>
                                                <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line>
                                                <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line>
                                            </svg>
                                        </button>
                                        <button type="button" class="ql-underline">
                                            <svg viewBox="0 0 18 18">
                                                <path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path>
                                                <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect>
                                            </svg>
                                        </button>
                                    </span>
                                    <span class="ql-formats">
                                        <button type="button" class="ql-list" value="ordered">
                                            <svg viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"></line>
                                                <line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"></line>
                                                <line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"></line>
                                                <line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line>
                                                <path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path>
                                                <path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path>
                                                <path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path>
                                            </svg>
                                        </button>
                                        <button type="button" class="ql-list" value="bullet">
                                            <svg viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"></line>
                                                <line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"></line>
                                                <line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"></line>
                                                <line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"></line>
                                                <line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"></line>
                                                <line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"></line>
                                            </svg>
                                        </button>
                                    </span>
                                    <span class="ql-formats">
                                        <button type="button" class="ql-clean">
                                            <svg class="" viewBox="0 0 18 18">
                                                <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line>
                                                <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line>
                                                <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line>
                                                <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line>
                                                <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect>
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                                <div id="editor" class="ql-container ql-snow">
                                    <textarea data-placeholder="Mục Tiêu Nghề Nghiệp" style="width: 100%;" name="objective">{{ @json_decode($checkTitle->objective)->objective }}</textarea>
                                   
                                    <div class="ql-clipboard" contenteditable="true" tabindex="-1"></div>
                                    <div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div>
                                </div>
                               <!--  <textarea name="objective_job" id="objective_job" style="display:none"></textarea> -->
                                <span class="error err_objective_job" style="display:none"></span> 
                            </div>
                            <div class="form-group form-button">
                                <div class="button-save button-center">
                                    <button class="btn-gradient" type="submit">Lưu Lại</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="tips-modal" id="tip-objective" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Mục tiêu nghề nghiệp: <br>
                                    - Hãy trình bày mục tiêu của bản thân một cách ngắn gọn, rõ ràng nhưng cũng thể hiện được mong muốn của bản thân đối với vị trí/ngành nghề mà bạn ứng tuyển.<br>
                                    - Trong trường hợp bạn muốn nói thêm về sự nghiệp và kinh nghiệm làm việc trong quá khứ để nhà tuyển dụng có thể hình dung rõ hơn, thì cũng đừng quên trình bày thật tóm tắt nhé!
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal" id="tip-desired-job" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Thông tin nghề nghiệp:<br>
                                    Hãy điền thật đầy đủ và chính xác những thông tin này để Nhà tuyển dụng có được cái nhìn tổng quan về mong muốn của bạn.
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal" id="tip-experience" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Kinh nghiệm làm việc:<br>
                                    - Kinh nghiệm nên trình bày theo thứ tự gần nhất đến xa nhất.<br>
                                    - Nếu bạn có rất nhiều kinh nghiệm, hãy chọn lọc mô tả chi tiết những công việc có liên quan đến vị trí đang ứng tuyển<br>
                                    - Hãy đọc thật kĩ bản mô tả và yêu cầu công việc của Nhà tuyển dụng, sử dụng các từ khóa liên quan và trình bày những kinh nghiệm của bạn thân bằng những từ khóa đó, điều này sẽ giúp cho nhà tuyển dụng thấy độ phù hợp của bạn với công việc hoặc vị trí đó. Tất nhiên hãy luôn đảm bảo sự trung thực trong quá trình viết.<br>
                                    - Đừng quên, thể hiện năng lực thông qua các thành tích của từng công việc bạn đã trải qua nhé.
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tips-modal" id="tip-experience" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Kinh nghiệm làm việc:<br>
                                    - Kinh nghiệm nên trình bày theo thứ tự gần nhất đến xa nhất.<br>
                                    - Nếu bạn có rất nhiều kinh nghiệm, hãy chọn lọc mô tả chi tiết những công việc có liên quan đến vị trí đang ứng tuyển<br>
                                    - Hãy đọc thật kĩ bản mô tả và yêu cầu công việc của Nhà tuyển dụng, sử dụng các từ khóa liên quan và trình bày những kinh nghiệm của bạn thân bằng những từ khóa đó, điều này sẽ giúp cho nhà tuyển dụng thấy độ phù hợp của bạn với công việc hoặc vị trí đó. Tất nhiên hãy luôn đảm bảo sự trung thực trong quá trình viết.<br>
                                    - Đừng quên, thể hiện năng lực thông qua các thành tích của từng công việc bạn đã trải qua nhé.
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tips-modal" id="tip-experience-modal" style="display: none">
                <div class="edit-db-work-experience-2 edit-modal-dashboard fancybox-content" style="">
                    <div class="modal-title">
                        <h3>Kinh Nghiệm Làm Việc</h3>
                    </div>
                    <div class="modal-body">
                        <form name="experience-form" id="experience-form"  method="post" action="{{ route('postProfile', 'experience_details') }}">
                            @csrf
                            <input type="hidden" value="0" name="rexp_id" id="rexp_id">
                            <div class="form-group row">
                                <div class="col-lg-3 col-xl-3">
                                    <label for="">Vị trí / Chức danh<span>*</span></label>
                                </div>
                                <div class="col-lg-9 col-xl-9">
                                    <div class="input-group">
                                        <input type="text" value="{{ @json_decode($checkTitle->experience_details)->rexp_title }}" class="form-control" name="rexp_title" maxlength="100">
                                    </div>
                                    <div class="form-error"><span class="err_rexp_title" style="display:none"></span></div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-lg-3 col-xl-3">
                                    <label for="">Công ty<span>*</span></label>
                                </div>
                                <div class="col-lg-9 col-xl-9">
                                    <div class="input-group">
                                        <input type="text" value="{{ @json_decode($checkTitle->experience_details)->rexp_company }}" class="form-control" name="rexp_company" maxlength="200">
                                    </div>
                                    <div class="form-error"><span class="err_rexp_company" style="display:none"></span></div>
                                </div>
                            </div>
                           
                            <div class="form-group row">
                                <div class="col-lg-3 col-xl-3">
                                    <label for="">Mô tả công việc</label>
                                </div>
                                <div class="col-lg-9 col-xl-9">
                                    <div class="textarea-group">
                                        <textarea name="rexp_workdesc" rows="3" class="form-control" placeholder="Vui lòng nhập tối đa không quá 4.000 ký tự" maxlength="4000">{{  @json_decode($checkTitle->experience_details)->rexp_workdesc  }}</textarea>
                                    </div>
                                    <div class="form-error">
                                        <span class="err_rexp_workdesc" style="display:none"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group form-button">
                                <div class="button-save button-center">
                                    <button class="btn-gradient" type="submit" onclick="updateResumeExperience(this);">Lưu Lại</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                            <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                        </svg>
                    </button>
                </div>
            </div>


            <div class="tips-modal" id="tip-education" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Học vấn: <br>
                                    - Hãy nêu ra những bậc học đạt được như cao đẳng, đại học, thạc sĩ,... <br>
                                    - Bạn cũng có thể kể thêm những khóa học ngắn hạn, khóa đào tạo chuyên nghiệp (có phí) mà bạn đã từng được học. <br>
                                    - Lưu ý chọn lọc những khóa học liên quan đến công việc mà bạn ứng tuyển thôi nhé
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tips-modal" id="tip-education-modal" style="display: none">
                <div class="add-db-education edit-modal-dashboard fancybox-content" style="">
                    <div class="modal-title">
                        <h3>Quá Trình Học Tập</h3>
                    </div>
                    <div class="modal-body">
                        <form name="education-form" id="education-form" method="post" action="{{ route('postProfile', 'education') }}">
                            @csrf
                            <input type="hidden" name="redu_id" id="redu_id" value="0">
                            <div class="form-group row">
                                <div class="col-lg-4">
                                    <label for="">Trường / khóa học<span>*</span></label>
                                </div>
                                <div class="col-lg-8">
                                    <div class="input-group">
                                        <input type="text" name="redu_name" id="redu_name" value="{{ (json_decode($checkTitle->education))->redu_name??'' }}" maxlength="200">
                                    </div>
                                    <div class="form-error"><span class="err_redu_name" style="display:block"></span></div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-lg-4">
                                    <label for="">Bằng cấp<span>*</span></label>
                                </div>
                                <div class="col-lg-8">
                                    <div class="select-group">
                                        <select name="redu_degree" id="redu_degree">
                                            @foreach($exp as $key => $value)
                                            <option value="{{ $key }}"  {{ $redu_degree== $key?'selected':''}}>{{ $value }}</option>
                                            @endforeach
                                          
                                        </select>
                                    </div>
                                    <div class="form-error"><span class="err_redu_degree" style="display:block"></span></div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-lg-4">
                                    <label for="">Tốt nghiệp</label>
                                </div>

                                @if(!empty(json_decode($checkTitle)->education))
                                <div class="col-lg-8">
                                    <div class="select-graduating">
                                        <div class="select-group">


                                            <select name="redu_month" id="redu_month">

                                                <option value="">Tháng</option>
                                              
                                                @for($i =1; $i <13; $i++)

                                                @if(!empty(json_decode($checkTitle->education)) && !empty(json_decode($checkTitle->education)->redu_month))
                                                <option value="{{ $i }}" {{ json_decode($checkTitle->education)->redu_month==$i?'selected':''}}>{{ $i }}</option>
                                                @endif
                                                @endfor
                                               
                                               
                                            </select>
                                        </div>
                                        <div class="select-group">
                                            <select name="redu_year" id="redu_year">
                                                <option value="">Năm</option>

                                                @for($k = 1975; $k <2023; $k++)
                                                @if(!empty(json_decode($checkTitle->education)) && !empty(json_decode($checkTitle->education)->redu_year))
                                                <option value="{{ $k }}" {{ json_decode($checkTitle->education)->redu_year==$k?'selected':'' }}>{{ $k }}</option>
                                                @endif
                                                @endfor
                                               
                                                
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-error"><span class="err_redu_month" style="display:block"></span></div>
                                </div>
                                @endif
                            </div>
                            <div class="form-group row">
                                <div class="col-lg-4">
                                    <label for="">Mô tả chi tiết</label>
                                </div>
                                <div class="col-lg-8">
                                    <div class="textarea-group">
                                        <textarea name="redu_desc" id="redu_desc" placeholder="Vui lòng nhập tối đa không quá 4.000 ký tự" maxlength="40000">{{ (json_decode($checkTitle->education))->redu_desc??'' }}</textarea>
                                    </div>
                                    <div class="form-error"><span class="err_redu_desc" style="display:block"></span></div>
                                </div>
                            </div>
                            <div class="form-group form-button">
                                <div class="button-save button-center">
                                    <button class="btn-gradient" type="submit" >Lưu Lại</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24">
                            <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="tips-modal" id="tip-certificate" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Chứng chỉ khác: <br>
                                    Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên CV<br>
                                    - Chỉ nên đề cập đến những chứng chỉ liên quan đến công việc bạn đang ứng tuyển hoặc những chứng chỉ có kĩ năng nổi bật.<br>
                                    - Hãy điền đầy đủ các thông tin như ngày hoàn thành, tổ chức cấp.<br>
                                    - Bạn cũng có thể kể tên các hội thảo, hội nghị có uy tín mà bạn đã từng được tham dự
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal" id="tip-skill" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Kĩ năng khác:<br>
                                    - Nêu nổi bật 6 đến 8 kĩ năng liên quan nhất đến công việc bạn ứng tuyển<br>
                                    - Nếu bạn chưa có nhiều kĩ năng cứng, hãy xem xét tới việc nêu ra các kĩ năng mềm như: "kỹ năng thuyết trình", "kỹ năng phân tích"<br>
                                    - Nên sử dụng những cụm từ ngắn, ưu tiên sử dụng những kĩ năng có nhắc đến trong bản mô tả công việc
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal" id="tip-award" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Thành tích nổi bật:<br>
                                    Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên CV<br>
                                    Phần này bạn có thể kể đến những dự án cá nhân có liên quan đến công việc bạn ứng tuyển, hãy cố gắng trình bày thật chi tiết kèm theo những số liệu và kĩ năng, thành tích bạn đạt được từ dự án. 
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal" id="tip-references" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Người tham khảo:<br>
                                    Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên CV<br>
                                    - "Người tham khảo" có thể là cấp trên hoặc người làm việc trực tiếp với bạn.<br>
                                    - Hãy luôn đảm bảo rằng "Người tham khảo" biết rằng họ có thể sẽ nhận được cuộc gọi từ nhà tuyển dụng hiện tại của bạn.<br>
                                    - Nếu "Người tham khảo" có các chức danh công việc như Bác sĩ, Luật sư,... thì hãy để nó trước tên của họ. Trong trường hợp không có, hãy để tín ngữ Ông/Bà/Mr/Ms/... trước tên của họ nhé!
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal" id="tip-language" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Ngôn ngữ khác:<br>
                                    -Bạn nên liệt kê các ngôn ngữ bạn có thể sử dụng, bao gồm cả giấy chứng nhận về ngoại ngữ đó hoặc đề cập thêm về khoảng thời gian bạn du học, tham gia chường trình trao đổi ngôn ngữ để giúp nhà tuyển dụng hình dung rõ thêm về khả năng ngôn ngữ của bạn.  <br>
                                    -Nên liệt kê ngôn ngữ theo thứ tự từ thành thục nhất đến ít thành thục nhất
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tips-modal" id="tip-other-activity" style="display: none">
                <div class="head-modal">
                    <div class="icon"><em class="mdi mdi-lightbulb-outline"></em></div>
                    <div class="title">
                        <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
                    </div>
                </div>
                <div class="body-modal">
                    <div class="widget widget-12">
                        <div class="widget-body">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    Những hoạt động khác:<br>
                                    Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên CV<br>
                                    - Hãy liệt kê các hoạt động ngoại khóa mà bạn tham gia, đặc biệt là những hoạt động thể hiện khả năng lãnh đạo.<br>
                                    - Tóm tắt những thành tích và kết quả thu được từ hoạt động nhé
                                </div>
                                <div class="main-button">
                                    <div class="button-prev"><em class="mdi mdi-chevron-left"></em></div>
                                    <div class="button-next"><em class="mdi mdi-chevron-right"></em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                function openTipSlide(idTip) {


                    $.fancybox.open($("#"+idTip), {});

                   
                    if($('#'+idTip+' .widget-12 .swiper-container .swiper-slide').length > 1){
                        setTimeout(() => {
                            widgetTipSlide(idTip)
                        }, 100);
                    }else{
                        // $('#'+idTip+' .widget-12 .swiper-container .main-button').hide();
                    }
                    
                }
                function widgetTipSlide(idTip) {
                        let tipSlide =  new Swiper('#'+idTip+' .widget-12 .swiper-container', {
                                navigation: {
                                        nextEl: '#'+idTip+' .widget-12 .button-next',
                                        prevEl: '#'+idTip+' .widget-12 .button-prev',
                                },
                                loop: true
                        });
                }
            </script>
        </div>
    </div>


<script type="text/javascript">
var numListExp = 0;
var numListEdu = 0;
var numListSkill = 0;
var numListRefer = 0;

var lang_resume = {
  js_default_resume:"Chọn mặc định",
    js_none_default_resume:"Không chọn mặc định",
    js_resume_active_searchable1:"Bạn có thực sự muốn chọn Hồ sơ ",
    js_resume_active_searchable2:"làm Hồ sơ mặc định cho Nhà tuyển dụng tìm kiếm hay không?",
    js_default_resume_inactive:"Không chọn mặc định",
    js_none_default_resume_inactive:"Bỏ qua",
    js_resume_inactive_searchable1:"Bạn có thực sự muốn bỏ trạng thái Mặc định (cho phép Nhà tuyển dụng tìm kiếm) của hồ sơ ",
    js_resume_inactive_searchable2:"không?",
    js_resume_active_jobalert:"Nhận thông báo việc làm",
    js_resume_inactive_jobalert:"Từ chối nhận thông báo việc làm",
    job_message_success:"Nhận thông báo việc làm theo tiêu chí tìm kiếm của bạn.",
    job_message_nosuccess:"Không nhận thông báo việc làm",
    job_savesearch_max_3_active:"Bạn chỉ được nhận tối đa 3 thông báo việc làm",
    job_my_createresume_max:"Hiện nay bạn đã có 03 hồ sơ & bạn không thể tạo thêm hồ sơ được nữa.",
    js_resume_complete_to_duplicate:"Bạn vui lòng cập nhật lại hồ sơ này trước khi thực hiện nhân bản",
    js_resume_action_refresh_resume:"Hồ sơ của bạn sẽ thay đổi ngày cập nhật mới nhất. Bạn có muốn cập nhật hồ sơ ?",
    js_resume_refresh_resume_success:"Hồ sơ của bạn đã được cập nhật thành công !",
    js_resume_refresh_resume_fail:"js_resume_refresh_resume_fail",
    js_resume_active_searchable_unsuccess:"Hồ sơ của bạn chưa được kiểm duyệt nên chưa thể bật chế độ tìm kiếm.</br> Vui lòng kiểm tra email hướng dẫn từ CareerBuilder và cập nhật hồ sơ theo hướng dẫn.",
    js_resume_delete_success:"Xóa hồ sơ thành công",
    job_alert_by_week:"Nhận mỗi tuần",
    js_resume_delete:"Xóa hồ sơ",
    js_none_resume_delete:"Không xóa hồ sơ",
    job_message_delete_resume:"Bạn có muốn <strong>xóa hồ sơ</strong> có tên",
    job_message_delete_resume_note:"<br /><strong>Lưu ý</strong>: Sau khi xóa hồ sơ thì bạn sẽ không lấy lại được tất cả những thông tin của bạn nằm trong hồ sơ mà bạn đã xóa.",
    js_resume_searchable_success:"Bật chế độ tìm kiếm hồ sơ thành công",
    js_resume_unsearchable_success:"Tắt chế độ tìm kiếm hồ sơ thành công",
    js_resume_can_not_searchable:"Hiện tại bạn không thể bật chế độ tìm kiếm hồ sơ, vui lòng cập nhật hồ sơ",
    js_default_resume_urgentjob:"Chọn mặc định",
    js_none_default_resume_urgentjob:"Bỏ qua",
    js_resume_urgentjob_success:"Chọn thành công!",
    js_resume_urgentjob_unsuccess:"Rất tiếc, hồ sơ của bạn không được duyệt!",
    js_resume_urgentjob_searchable1:"Bạn muốn hồ sơ",
    js_resume_urgentjob_searchable2:"chọn làm hồ sơ tìm việc Khẩn cấp ? Nhà tuyển dụng có thể dễ dàng tìm ra hồ sơ của bạn. Chế độ sẽ được bật trong 30 ngày tới. Bạn có thể chủ động tắt chế độ Khẩn cấp sau khi tìm được việc làm phù hợp",
    job_message_delete:"Bạn có muốn xóa không?  ",
    job_message_error:"Lỗi trong quá trình thực thi",
    job_message:"Thông báo",
    job_message_add_success:"Bạn đã thêm thành công",
    job_message_add_success:"Bạn đã thêm thành công",
    job_blacklist_choose_emp:"Vui lòng chọn công ty bạn muốn thêm vào danh sách hạn chế tìm kiếm",
    job_blacklist_choose_domain:"Domain email không hợp lệ",

    js_default_resume:"Chọn mặc định",
    js_none_default_resume:"Không chọn mặc định",
    js_resume_active_searchable1:"Bạn có thực sự muốn chọn Hồ sơ ",
    js_resume_active_searchable2:"làm Hồ sơ mặc định cho Nhà tuyển dụng tìm kiếm hay không?",
    js_default_resume_inactive:"Không chọn mặc định",
    js_none_default_resume_inactive:"Bỏ qua",
    js_resume_inactive_searchable1:"Bạn có thực sự muốn bỏ trạng thái Mặc định (cho phép Nhà tuyển dụng tìm kiếm) của hồ sơ ",
    js_resume_inactive_searchable2:"không?",
    js_resume_active_jobalert:"Nhận thông báo việc làm",
    js_resume_inactive_jobalert:"Từ chối nhận thông báo việc làm",
    job_message_success:"Nhận thông báo việc làm theo tiêu chí tìm kiếm của bạn.",
    job_message_nosuccess:"Không nhận thông báo việc làm",
    job_savesearch_max_3_active:"Bạn chỉ được nhận tối đa 3 thông báo việc làm",
    job_my_createresume_max:"Hiện nay bạn đã có 03 hồ sơ & bạn không thể tạo thêm hồ sơ được nữa.",
    js_resume_complete_to_duplicate:"Bạn vui lòng cập nhật lại hồ sơ này trước khi thực hiện nhân bản",
    js_resume_action_refresh_resume:"Hồ sơ của bạn sẽ thay đổi ngày cập nhật mới nhất. Bạn có muốn cập nhật hồ sơ ?",
    js_resume_refresh_resume_success:"Hồ sơ của bạn đã được cập nhật thành công !",
    js_resume_refresh_resume_fail:"js_resume_refresh_resume_fail",
    js_resume_active_searchable_unsuccess:"Hồ sơ của bạn chưa được kiểm duyệt nên chưa thể bật chế độ tìm kiếm.</br> Vui lòng kiểm tra email hướng dẫn từ CareerBuilder và cập nhật hồ sơ theo hướng dẫn.",
    js_resume_delete_success:"Xóa hồ sơ thành công",
    job_alert_by_week:"Nhận mỗi tuần",
    js_resume_delete:"Xóa hồ sơ",
    js_none_resume_delete:"Không xóa hồ sơ",
    job_message_delete_resume:"Bạn có muốn <strong>xóa hồ sơ</strong> có tên",
    job_message_delete_resume_note:"<br /><strong>Lưu ý</strong>: Sau khi xóa hồ sơ thì bạn sẽ không lấy lại được tất cả những thông tin của bạn nằm trong hồ sơ mà bạn đã xóa.",
    js_resume_searchable_success:"Bật chế độ tìm kiếm hồ sơ thành công",
    js_resume_unsearchable_success:"Tắt chế độ tìm kiếm hồ sơ thành công",
    js_resume_complete_status:"Hoàn tất",
    js_resume_limit_check:"Tối đa 3 lựa chọn",
    js_resume_All_Choice:"Chọn",
    js_resume_Choice:"Chọn",
    js_resume_selected:"# lựa chọn",
    js_resume_notcomplete_status:"Chưa hoàn tất",
    js_resume_workingtype_select:"Vui lòng chọn hình thức làm việc",
    job_createresume_input_email_phone_exist:"Vui lòng không nhập email hoặc số điện thoại",
    LANG_ERROR_NAME_NULL:"Vui lòng nhập họ tên",
    LANG_ERROR_LASTNAME_NULL:"Vui lòng nhập  họ và tên lót",
    LANG_ERROR_FIRSTNAME_NULL:"Vui lòng nhập tên ",
    ERROR_FULL_NAME_CHARACTER:"Vui lòng không được nhập số và ký tự đặc biệt",
    LANG_ERROR_ADDRESS_NULL:"Vui lòng nhập địa chỉ",
    LANG_ERROR_MOBILE_NULL:"Vui lòng nhập số điện thoại",
    js_register_bday_valid:"Ngày tháng năm sai định dạng hoặc năm >2000",
    resume_incomplete:"resume_incomplete",
    js_resume_enter_skill_name:"Vui lòng nhập kỹ năng hoặc chuyên môn",
    js_create_resume_refer_name:"Vui lòng nhập họ và tên",
    js_create_resume_refer_phone:"Vui lòng nhập số điện thoại",
    js_create_resume_refer_company:"Vui lòng nhập tên công ty",
    js_create_resume_refer_level:"Vui lòng nhập chức vụ",
    js_create_resume_refer_email:"Vui lòng nhập email người giới thiệu",
    js_create_resume_refer_email_incorrect:"Email không đúng định dạng",
    js_resume_delete2:"Xóa",
    js_resume_limit_check:"Tối đa 3 lựa chọn",
    js_resume_All_Choice:"Chọn",
    js_resume_selected:"# lựa chọn",
    js_resume_action_not_success:"Thực hiện không thành công",
    message_common:"Vui lòng thao tác đầy đủ để hoàn thành",
    member_select:"Chọn",
    job_message:"Thông báo",
    alert_empty_job_title:"Vui lòng nhập chức danh , vị trí",
    jsk_jobs_in:"tại",
    alert_empty_email:"Vui lòng nhập email của bạn ",
    alert_vald_email:"alert_vald_email",
    alert_save_success:" <h1>Đăng ký nhận email thông báo việc làm thành công!</h1><p>Mỗi tuần bạn sẽ nhận được email những việc làm mới nhất từ nhà tuyển dụng theo tiêu chí của bạn.</p>",
    alert_save_unsuccess:"alert_save_unsuccess",
    js_addalert_bt_success:"Xem Ngay!",
    jsk_jobs_industry:"Ngành",
    js_addalert_find:"<h4>Có %s việc làm phù hợp với bạn.</h4>",
    js_plaese_resume_exp_company:"Vui lòng nhập tên công ty",
    js_plaese_resume_exp_position:"Vui lòng nhập Vị trí / Chức danh",
    js_plaese_resume_exp_month_start:"Vui lòng chọn tháng bắt đầu",
    js_plaese_resume_exp_year_start:"Vui lòng chọn năm bắt đầu",
    js_plaese_resume_exp_finish_end:"Vui lòng chọn thời gian kết thúc lớn hơn thời gian bắt đầu",
    js_resume_exp_des_required:"Vui lòng nhập mô tả công việc",
    js_create_resume_max_des:"Không được quá 4.000 ký tự",
    js_plaese_resume_edu_school:"Vui lòng nhập Trường / khóa học",
    js_resume_degree_select:"Vui lòng chọn bằng cấp cao nhất",
    js_resume_objective_job_required:"Vui lòng nhập mục tiêu nghề nghiệp",
    js_resume_resume_title_required:"Vui lòng nhập vị trí mong muốn",
    js_resume_level_required:"Vui lòng chọn cấp bậc",
    js_resume_industry_required:"Vui lòng chọn ngành nghề",
    LANG_ERROR_RESUME_SALARY_FROM_TO:" Bạn vui lòng nhập mức lương tối thiểu là 500,000(VND) và tối đa 999,000,000(VND) hoặc tối thiểu 25(USD) và tối đa 99.999(USD).",
    member_register_write_firstname:"member_register_write_firstname",
    member_nospace:"Vui lòng không nhập khoảng trắng vào tên của bạn",
    msg_invalid_file_avatar:"msg_invalid_file_avatar",
    js_resume_workingtype_select:"Vui lòng chọn hình thức làm việc",
    cvhay_exit_page:"Thoát",
    cvhay_delete_edu:"Bạn có muốn xóa quá trình học tập này không?",
    cvhay_delete_exp:"Bạn có muốn xóa kinh nghiệm làm việc này không?",
    cvhay_delete_skill:"Bạn có muốn xóa kỹ năng này không?",
    cvhay_delete_ref:"Bạn có muốn xóa thông tin tham khảo này không?",
    cv_resume_work_location_limit:"Bạn chỉ được chọn tối đa 3 địa điểm ",
    cvhay_confirm_replace_resume:"Bạn có muốn chọn CV này thay thế không?",
    job_createresume_input_full_charater:"Bạn đã nhập quá số lượng ký tự cho phép.",
    js_please_resume_exp_valid:"Vui lòng chọn ngày và tháng bắt đầu làm việc nhỏ hơn ngày hiện tại ",
    cvhay_complete_step3:"Hoàn Tất",
    cvhay_next:"Tiếp Theo",
    cvhay_resume_active_searchable:"Bạn có thực sự muốn chọn Hồ sơ này làm Hồ sơ mặc định cho Nhà tuyển dụng tìm kiếm hay không?",
    cvhay_resume_inactive_searchable:"Bạn có thực sự không muốn chọn Hồ sơ này làm Hồ sơ mặc định cho Nhà tuyển dụng tìm kiếm hay không?",
    cvhay_default_resume_inactive:"Chọn mặc định",
    cvhay_none_default_resume_inactive:"Không chọn mặc định",
    cvhay_default_resume:"Chọn mặc định",
    cvhay_none_default_resume:"Không chọn mặc định",
    cvhay_resume_update_template_success:"Lưu thành công",
    cvhay_message_delete_exp:"Bạn có muốn xóa kinh nghiệm này không ?",
    cvhay_message_delete_edu:"Bạn có muốn xóa quá trình học tập  này không ?",
    cvhay_message_delete_resume_skill:"Bạn có muốn xóa kỹ năng  này không ?",
    cvhay_message_delete_refer:"Bạn có muốn xóa thông tin tham khảo  này không ?",
    cv_resume_save_resumelang_fail:"Vui lòng chọn trình độ",
    cbprofile_updating:"Chưa cập nhật",
    cbprofile_edit:"Chỉnh sửa",
    cbprofile_add:"Thêm mới",
    js_resume_resume_title_maxlength:"js_resume_resume_title_maxlength",
    cvhay_message_delete_additioninfo:"Ban có muốn xóa thông tin bổ sung này không ?",
    cvhay_message_delete_resume_object:"Ban có muốn xóa mục tiêu nghề nghiệp này không ?",
    js_common_notyet:"Chưa có kinh nghiệm",
    js_resume_active_searchable_unsuccess:"Hồ sơ của bạn chưa được kiểm duyệt nên chưa thể bật chế độ tìm kiếm.</br> Vui lòng kiểm tra email hướng dẫn từ CareerBuilder và cập nhật hồ sơ theo hướng dẫn.",
    js_common_year:" ",
    job_createresume_input_min_charater:"Vui lòng nhập nội dung trên 10 ký tự ",
        cbprofile_save:"Lưu Lại",
        cbprofile_delete:"Xóa",
        js_resume_language_level:"Trình độ",
        js_resume_activity_time_required:"Vui lòng điền thời gian",
    cvhay_message_delete_activity:"Bạn có chắc chắn muốn xóa?",
    js_resume_cer_to_required:"Vui lòng chọn ngày kết thúc",
    cvhay_message_delete_certificate:"Bạn có chắc chắn muốn xóa?",
    cvhay_message_delete_language:"Bạn có chắc chắn muốn xóa?",
  js_resume_cer_title_required:"Vui lòng nhập chứng chỉ",
  js_resume_cer_by_required:"Chọn nơi cung cấp chứng chỉ",
  js_resume_cer_from_required:"Vui lòng chọn ngày ",
  js_resume_cer_to_required:"Vui lòng chọn ngày kết thúc",
  job_createresume_input_year_experience:"job_createresume_input_year_experience",
    js_resume_can_not_searchable:"Hiện tại bạn không thể bật chế độ tìm kiếm hồ sơ, vui lòng cập nhật hồ sơ",
  csrf_token_error:"csrf_token_error",
  cvhay_message_delete_resume_additioninfo:"Hiện tại bạn không thể bật chế độ tìm kiếm hồ sơ, vui lòng cập nhật hồ sơ"
};
if(typeof language === 'undefined')
    var language = lang_resume;
else
    $.extend(language, lang_resume);
var member_email = 'chiensi26045@gmail.com';
var msg = '';
if($.isFunction(window.smartech)) smartech('dispatch', 'bt_begin_update_profile', {});
</script>

<script src="{{ asset('js/employ/fancybox.js') }}">/*jquery.fancybox.js*/
</script>

            <div class="back-drop"></div>
        </main>
     @endsection   
       