    @extends('frontend.layout.appfe')
    @section('content')   

    <style type="text/css">
        .formality select{
            height: 56px;
        }
        .font-semibold{
            text-align: center;
        }
    </style>



    <link rel="stylesheet" type="text/css" href="{{ asset('css/employ/autocomplete-sugest.css') }}?ver=2"> 
    <script src='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.js'></script>
    <link href='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.css' rel='stylesheet' />
    <link rel="stylesheet" type="text/css" href="https://static-cdn.vieclam24h.vn/recruiter/230316114925/_next/static/css/116ba476cc1d5646.css">
   
    
    <div class="row">
        @include('employer.layout.sidebar')
        <div class="col-md-10">
            <section class="manage-job-posting-post-jobs cb-section bg-manage">
                <div class="container">
                    <div class="box-manage-job-posting">
                        <div class="heading-manage">
                            <div class="left-heading">
                                <h1 class="title-manage">Đăng Tuyển Dụng</h1>
                            </div>
                        </div>
                        <form name="frmEditJob" id="frmEditJob"  method="post" action="{{!empty($data)?route('update-job', $data->id):route('postJob')  }}">
                            @csrf

                        <div class="main-tabslet">
                            <ul class="tabslet-tab">
                                <li class="active"> <a href="javascript:void(0);">Thông Tin Tuyển Dụng</a></li>
                            </ul>
                            <div class="tabslet-content active" id="tab-1">
                                <input name="ispublic" type="hidden" value="0">
                                <input name="emp_id" type="hidden" value="35A90CF3">
                                <input name="job_id" type="hidden" value="35A4E900">
                                <input type="hidden" id="jobsamp_id" name="jobsamp_id"  value="" />
                                <input type="hidden" id="lang" name="lang"  value="" />
                                <input name="intSave" id="intSave" type="hidden" value="1">
                                <input name="job_source" id="job_source" type="hidden" value="1">
                                <input name="work_location_0" id="work_location_0" type="hidden" value="">
                                <input name="work_location_1" id="work_location_1" type="hidden" value="">
                                <input name="work_location_2" id="work_location_2" type="hidden" value="">
                                <div class="main-application-information">
                                    <h2 class="title-application">Thông tin tuyển dụng</h2>
                                    <div class="form-wrap">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group form-text">
                                                    <input type="text"id="job_title" class="keyword" name="job_title" value="{{ @$data->title }}" onblur="loadTagKey()" placeholder="Chức danh tuyển dụng">
                                                    <span class="form-error"></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="noti mt-20">
                                                    <div class="toolip">
                                                        Lưu ý: Chức danh nên mô tả chính xác vị trí tuyển dụng cần tuyển. Đây là một phần quan trọng thu hút người tìm việc ứng tuyển và hệ thống gợi ý hồ sơ phù hợp.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <div class="form-group form-text">
                                                    <input type="text" id="job_code" name="job_code" maxlength="12" value="{{ @$data->code }}" placeholder="Mã công việc">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="d-flex mt-20 align-center">
                                                    <div class="noti">
                                                        <div class="toolip">
                                                            Quý khách có thể chọn <strong>Mẫu Quảng Cáo Tuyển  Dụng</strong> có sẵn của chúng tôi.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group form-editor" id="div_jobdesc">
                                            <label>Mô Tả Công Việc <font style="color: red">*</font></label>
                                            <textarea cols="80" rows="5" id="job_desc" name="job_desc" class="editor">{{ @$data->detail }}</textarea>
                                            <span class="form-error"></span>
                                            <div class="note">
                                                <p>Nhỏ hơn 10 000 kí tự</p>
                                            </div>
                                        </div>
                                        <div class="form-group form-editor" id="div_jobreq">
                                            <label>Yêu cầu công việc <font style="color: red">*</font></label>
                                            <textarea cols="80" rows="5" id="job_req" name="job_req" class="editor">{{ @$data->requirements }}</textarea>
                                            <span class="form-error"></span>
                                            <div class="note">
                                                <p>Nhỏ hơn 10 000 kí tự</p>
                                            </div>
                                        </div>
                                        <div class="form-group form-editor" id="div_jobreq">
                                            <label>Quyền lợi ứng viên<font style="color: red">*</font></label>
                                            <textarea cols="80" rows="5" id="rights" name="rights" class="editor">{!! @$data->rights !!}</textarea>
                                            <span class="form-error"></span>
                                            <div class="note">
                                                <p>Nhỏ hơn 10 000 kí tự</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group ">
                                                    <label>Ngành nghề <font style="color: red">*</font></label>
                                                    <select name="INDUSTRY_ID[]" data-placeholder="Chọn" id="select_industry_db" class="chosen-select-max-three" multiple>

                                                        <?php 
                                                            $list_job = LIST_JOB;
                                                        ?>
                                                        @foreach($list_job as $key =>$value)

                                                        <option value="{{ $key }}" {{ !empty($data)&& $data->career==$key?'selected':'' }}>{{ $value }}</option>
                                                           
                                                        @endforeach
                                                       
                                                    </select>
                                                    <span class="form-error error_select_industry_db_1" ></span>
                                                </div>
                                            </div>
                                        </div>

                                        <?php

                                            $address_job = ADDRESS;

                                        ?>
                                        <div id="post_job_location">
                                            <div class="item_post_job_location">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group form-select">
                                                            <label>
                                                            Nơi làm việc <font style="color: red">*</font>
                                                            </label>
                                                            <select name="LOCATION_ID[]"  class="select_location" >
                                                                <option value="">Chọn</option>


                                                                @foreach($address_job as $key => $value)
                                                                <option value="{{ $key }}" {{ !empty($data)&& $data->address_job==$key?'selected':'' }}>{{ $value }}</option>
                                                                @endforeach
                                                                    
                                                            </select>
                                                            <span class="form-error"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--  <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group form-select-chosen">
                                                            <label>Địa chỉ làm việc</label>
                                                            <select name="work_location[]" class="chosen-select work_location" multiple data-placeholder="Địa điểm làm việc">
                                                                <option value="" >Chọn địa điểm làm việc</option>
                                                            </select>
                                                            <span class="form-error"></span>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 d-flex align-center">
                                                        <div class="form-group form-checkbox mt-5">
                                                            <input class="input_margin" id="hidden_worklocation_" type="checkbox" name="hidden_worklocation[]" value="1"    />
                                                            <label for="hidden_worklocation_">Bảo mật địa điểm làm việc</label>
                                                        </div>
                                                        <a class="btn-add-location ml-40 mt-5 add-location-more" href="javascript:void(0)"><em class="material-icons">add_circle </em>Thêm</a>
                                                    </div>
                                                    </div> -->
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <label for="">Mức lương <font style="color: red">*</font></label>
                                                <div class="form-salary d-flex align-center">
                                                    <div class="form-group form-select">
                                                        <select name="job_salaryunit" id="job_salaryunit">
                                                            <option value="0">VNĐ</option>
                                                            <option value="1">USD</option>
                                                        </select>
                                                    </div>

                                                    <?php 

                                                        if(!empty($data)){

                                                            $salary_from = explode('-', $data->salary)[0];


                                                            $salary_to = explode('-', $data->salary)[1]??'';
                                                        }

                                                    ?>
                                                    <div class="form-group form-text">
                                                        <input type="text" name="salary_from" id="salary_from" maxlength="12" value="{{ @$salary_from }}"  placeholder="Tối Thiểu *">
                                                    </div>
                                                    <div class="form-group form-text">
                                                        <input type="text" name="salary_to" id="salary_to" maxlength="12"  value="{{ @$salary_to }}"  placeholder="Tối Đa *">
                                                    </div>
                                                    <span class="form-error" id="error_salary" style="width: 100%;max-width: none;flex: 1;"></span>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 d-flex align-center salaryOnPostJob">
                                                <div class="noti">
                                                    <div class="toolip">
                                                        <p class="width_62 fl_left"><b>Lưu ý:</b></p>
                                                        </br>- 72% ứng viên chia sẻ rằng thông tin lương ảnh hưởng đến quyết định ứng tuyển của họ.
                                                        </br>- Bạn có thể quyết định “hiển thị thông tin lương” để thu hút thêm nhiều hồ sơ ứng tuyển vào vị trí tuyển dụng.
                                                        <p style="color:black ; font-weight: bold;">- Bạn nên nhập cả hai mức lương tối thiểu và tối đa cho vị trí cần đăng tuyển.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="formality">
                                            <div class="form-group">
                                                <p class="title-label">Hình thức <font style="color: red">*</font></p>
                                            </div>
                                            <div class="row" style="width:50%">

                                                <?php

                                                    $type = TYPE;
                                                ?>


                                                <select name="type">

                                                    @foreach($type as $key => $value)
                                                    <option value="{{ $key }}" {{ !empty($data) && $data->type==$key?'selected':'' }}>{{ $value }}</option>
                                                    @endforeach
                                                   
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <div class="form-group form-date">
                                                    <label>Hạn nhận hồ sơ <font style="color: red">*</font></label>
                                                    <input type="date" name="JOB_LASTDATE" id="JOB_LASTDATE" class="dates_cus_select_postjob required" value="{{ @$data->deadline }}" />
                                                    <span class="form-error error_job_lastdate"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                    <h2 class="title-application">Phúc lợi</h2>
                                    <div class="checkbox-wrap">
                                        <div class="row">
                                            <?php 
                                                $benefit = BENEFIT_ID;

                                                $benefit_selected = [];

                                                if(!empty($data)){



                                                    $benefit_selected = json_decode($data->benefit);

                                                }
                                            ?>
                                            @foreach($benefit as $key => $value)
                                            <div class="col-sm-6 col-lg-3">


                                                <div class="">
                                                    <input type="checkbox"  name="BENEFIT_ID[]" value="{{ $key }}"  {{ in_array($key, $benefit_selected)?'checked':'' }}>
                                                    <label for="{{ $key }}"> {{ $value }}</label>
                                                </div>
                                            </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-submit form-continue form-back-continue">

                                    <button type="submit" class="btn-gradient">{{  !empty($data)?'Sửa tin':'Đăng tin' }}</button>
                                   
                                </div>
                            </div>
                        </div>
                        

                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
   
    

    @endsection   

     <script type="text/javascript" src="http://js.nicedit.com/nicEdit-latest.js"></script> 

    <script type="text/javascript">
        bkLib.onDomLoaded(function() {
             new nicEditor().panelInstance('job_req');
        }); 

        bkLib.onDomLoaded(function() {
             new nicEditor().panelInstance('job_desc');
        }); 

        bkLib.onDomLoaded(function() {
             new nicEditor().panelInstance('rights');
        }); 
    </script>

  
    
      
    </main>
           

<script src="{{ asset('js/employ/employ-form-js2.js') }}"></script>

<script src="{{ asset('js/employ/auto-employ.js') }}"></script>
