    @extends('frontend.layout.appfe')
    @section('content')   

    <style type="text/css">
        .formality select{
            height: 56px;
        }
    </style>

    <link rel="stylesheet" type="text/css" href="{{ asset('css/employ/autocomplete-sugest.css') }}"> 
    <script src='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.js'></script>
    <link href='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.css' rel='stylesheet' />
    <link rel="stylesheet" type="text/css" href="https://static-cdn.vieclam24h.vn/recruiter/230316114925/_next/static/css/116ba476cc1d5646.css">
    
    <div class="row">
         <div class="col-md-2 side-bar">
            <div class="scrollbar-container pr-[10px] ps">
                <div class="flex items-center justify-between px-[11px] py-[18px] h-8 rounded-[3px] border border-grey-bright">
                    <div class="flex-1 text-[13px] font-semibold"><a href="{{ route('user-dashboard') }}">Cổng người tìm việc</a> </div>
                    <button class="text-primary font-semibold text-[10px]"><a href="{{ route('user-dashboard') }}">Chuyển</a> </button>
                </div>
                <div>
                    <div class="flex items-center cursor-pointer select-none dropdown-wrapper">
                        
                        <div class="pl-4 select-none font-semibold text-13 leading-[24px] tracking-[-0.5px] py-2">Tổng quan</div>
                    </div>
                    
                </div>
                
                <div class="flex items-center justify-between px-[11px] py-[18px] h-8 rounded-[3px] border border-grey-bright">
                    <div class="flex-1 text-[13px] font-semibold"><a href="{{ route('user-dashboard') }}">Cổng người tìm việc</a> </div>
                    <button class="text-primary font-semibold text-[10px]"><a href="{{ route('user-dashboard') }}">Chuyển</a> </button>
                </div>
                <div>
                    <div class="flex items-center cursor-pointer select-none dropdown-wrapper">
                        
                        <div class="pl-4 select-none font-semibold text-13 leading-[24px] tracking-[-0.5px] py-2">Tổng quan</div>
                    </div>
                    
                </div>
                <div>
                    <div class="flex items-center cursor-pointer select-none dropdown-wrapper">
                        
                        <div class="pl-4 select-none font-semibold text-13 leading-[24px] tracking-[-0.5px] py-2">Quản lý đăng tuyển</div>
                    </div>
                    <div class="child-wrapper overflow-hidden transition-all ease-in-out duration-300 " style="height: 65px;">
                        <div class="dropdown-child">
                            <div class="py-2 select-none cursor-pointer hover:bg-pale-turquoise hover:bg-opacity-30 bg-pale-turquoise">
                                <div id="" class="flex items-center" style="margin-left: 28px;">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0997 0H4.80948C4.38385 0.00102546 3.9709 0.144959 3.63685 0.408716C3.3028 0.672474 3.06701 1.04077 2.96729 1.45455H11.6801C12.4393 1.45685 13.1668 1.75949 13.7037 2.29637C14.2406 2.83325 14.5432 3.56076 14.5455 4.32002V13.0328C14.9593 12.9331 15.3276 12.6973 15.5914 12.3632C15.8551 12.0292 15.9991 11.6162 16.0001 11.1906V1.90037C16.0001 1.39636 15.7999 0.912996 15.4435 0.556606C15.0871 0.200217 14.6037 0 14.0997 0Z" fill="#451DA0"></path>
                                        <path d="M11.1906 2.90918H1.90037C1.39654 2.90976 0.913508 3.11016 0.557244 3.46642C0.20098 3.82269 0.00057746 4.30572 0 4.80955V14.0998C0.00057746 14.6036 0.20098 15.0866 0.557244 15.4429C0.913508 15.7992 1.39654 15.9996 1.90037 16.0002H11.1906C11.6944 15.9996 12.1775 15.7992 12.5337 15.4429C12.89 15.0866 13.0904 14.6036 13.091 14.0998V4.80955C13.0904 4.30572 12.89 3.82269 12.5337 3.46642C12.1775 3.11016 11.6944 2.90976 11.1906 2.90918ZM9.45459 10.1819H7.27277V12.3638C7.27277 12.5567 7.19614 12.7416 7.05975 12.878C6.92336 13.0144 6.73837 13.0911 6.54549 13.0911C6.3526 13.0911 6.16762 13.0144 6.03123 12.878C5.89484 12.7416 5.81821 12.5567 5.81821 12.3638V10.1819H3.63638C3.4435 10.1819 3.25851 10.1053 3.12212 9.96893C2.98573 9.83254 2.90911 9.64755 2.90911 9.45467C2.90911 9.26178 2.98573 9.0768 3.12212 8.94041C3.25851 8.80402 3.4435 8.72739 3.63638 8.72739H5.81821V6.54556C5.81821 6.35268 5.89484 6.16769 6.03123 6.0313C6.16762 5.89491 6.3526 5.81829 6.54549 5.81829C6.73837 5.81829 6.92336 5.89491 7.05975 6.0313C7.19614 6.16769 7.27277 6.35268 7.27277 6.54556V8.72739H9.45459C9.64748 8.72739 9.83247 8.80402 9.96886 8.94041C10.1052 9.0768 10.1819 9.26178 10.1819 9.45467C10.1819 9.64755 10.1052 9.83254 9.96886 9.96893C9.83247 10.1053 9.64748 10.1819 9.45459 10.1819Z" fill="#451DA0"></path>
                                    </svg>
                                    <div class="ml-[10px] text-13 leading-[16.5px] tracking-[-0.5px]"><a href="{{ route('form_recruit') }}">Tạo tin tuyển dụng</a></div>
                                </div>
                            </div>
                            <div class="py-2 select-none cursor-pointer hover:bg-pale-turquoise hover:bg-opacity-30 ">
                                <div id="" class="flex items-center" style="margin-left: 28px;">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                            <path d="M12.8002 4.80005H3.2002V6.40006H12.8002V4.80005Z" fill="#451DA0"></path>
                                            <path d="M12.8 0.802246V2.40225H14.4V14.4001H1.6V2.40225H3.1744V0.802246H1C0.447715 0.802246 0 1.24996 0 1.80225V15.0001C0 15.5524 0.447715 16.0001 1 16.0001H15C15.5523 16.0001 16 15.5524 16 15.0001V1.80225C16 1.24996 15.5523 0.802246 15 0.802246H12.8Z" fill="#451DA0"></path>
                                            <path d="M12.8002 8H3.2002V9.59999H12.8002V8Z" fill="#451DA0"></path>
                                            <path d="M12.8002 11.2H3.2002V12.8H12.8002V11.2Z" fill="#451DA0"></path>
                                            <path d="M11.1998 0H4.7998V3.2H11.1998V0Z" fill="#451DA0"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="16" height="16" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <a href="{{ route('employers-info-list') }}">
                                        <div class="ml-[10px] text-13 leading-[16.5px] tracking-[-0.5px]"> Danh sách tin đăng</div>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center cursor-pointer select-none dropdown-wrapper">
                        
                        <div class="pl-4 select-none font-semibold text-13 leading-[24px] tracking-[-0.5px] py-2">Quản lý ứng viên</div>
                    </div>
                    <div class="child-wrapper overflow-hidden transition-all ease-in-out duration-300 " style="height: 98px;">
                        <div class="dropdown-child">
                            <div class="py-2 select-none cursor-pointer hover:bg-pale-turquoise hover:bg-opacity-30">
                                <div id="" class="flex items-center" style="margin-left: 28px;">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                            <path d="M15.0906 10.4657C13.7189 9.60027 12.1484 9.12544 10.5254 9.03662C10.9006 9.21228 11.272 9.39777 11.6243 9.62001C12.4729 10.1547 13.0002 11.1229 13.0002 12.1464V14.9999H16.0002V12.1464C16.0002 11.4638 15.6516 10.8197 15.0906 10.4657Z" fill="#451DA0"></path>
                                            <path d="M11.0903 10.4658C8.05031 8.54785 3.94923 8.54785 0.910147 10.4658C0.348641 10.8193 0 11.4634 0 12.1465V15H12V12.1465C12 11.4634 11.6514 10.8193 11.0903 10.4658Z" fill="#451DA0"></path>
                                            <path d="M8.99414 7.83439C9.3174 7.93224 9.65098 8.00005 9.99994 8.00005C11.9296 8.00005 13.4999 6.42974 13.4999 4.50004C13.4999 2.57035 11.9296 1 9.99994 1C9.65098 1 9.3174 1.06781 8.99414 1.16566C9.9113 1.99 10.4999 3.17251 10.4999 4.50001C10.4999 5.82751 9.91133 7.01002 8.99414 7.83439Z" fill="#451DA0"></path>
                                            <path d="M8.47489 2.02513C9.84174 3.39198 9.84174 5.60802 8.47489 6.97487C7.10803 8.34172 4.89199 8.34172 3.52514 6.97487C2.15829 5.60802 2.15829 3.39198 3.52514 2.02513C4.89199 0.658276 7.10803 0.658307 8.47489 2.02513Z" fill="#451DA0"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="16" height="16" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div class="ml-[10px] text-13 leading-[16.5px] tracking-[-0.5px]"><a href="{{ route('cv-apply-employer') }}">Hồ sơ ứng tuyển</a></div>
                                </div>
                            </div>
                           <!--  <div class="py-2 select-none cursor-pointer hover:bg-pale-turquoise hover:bg-opacity-30">
                                <div id="" class="flex items-center" style="margin-left: 28px;">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.75 1.36987C9.85484 1.36987 8.63722 2.60997 8 3.72415C7.36278 2.60997 6.14516 1.36987 4.25 1.36987C1.84491 1.36987 0 3.2119 0 5.655C0 8.30409 2.31137 10.1081 5.76291 12.8396C7.45297 14.1759 7.56156 14.2774 8 14.6299C8.35781 14.3422 8.55584 14.1689 10.2371 12.8396C13.6886 10.1081 16 8.30409 16 5.655C16 3.21194 14.1551 1.36987 11.75 1.36987Z" fill="#451DA0"></path>
                                    </svg>
                                    <div class="ml-[10px] text-13 leading-[16.5px] tracking-[-0.5px]">Hồ sơ đã lưu</div>
                                </div>
                            </div> -->
                            <div class="py-2 select-none cursor-pointer">
                                <div id="" class="flex items-center" style="margin-left: 28px;">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                            <path d="M11.1667 0H1.83333C0.82 0 0 0.82 0 1.83333V12.1667C0 13.18 0.82 14 1.83333 14H9.22352C8.63686 13.2 8.14183 12.0763 8.14183 11.0163C8.14183 8.3496 10.1667 6.66 12.8334 6.66C12.8867 6.66 12.9467 6.66 13 6.66667V1.83333C13 0.82 12.18 0 11.1667 0ZM2.66667 2.66667H6.33335C6.70002 2.66667 7.00002 2.96667 7.00002 3.33333C7.00002 3.7 6.70002 4 6.33335 4H2.66667C2.3 4 2 3.7 2 3.33333C2 2.96667 2.3 2.66667 2.66667 2.66667ZM7.00002 9.33333H2.66667C2.3 9.33333 2 9.03333 2 8.66667C2 8.3 2.3 8 2.66667 8H7.00002C7.36669 8 7.66669 8.3 7.66669 8.66667C7.66669 9.03333 7.36669 9.33333 7.00002 9.33333ZM8.33335 6.66667H2.66667C2.3 6.66667 2 6.36667 2 6C2 5.63333 2.3 5.33333 2.66667 5.33333H8.33335C8.70002 5.33333 9.00002 5.63333 9.00002 6C9.00002 6.36667 8.70002 6.66667 8.33335 6.66667Z" fill="#451DA0"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29443 10.9067C9.29443 12.7047 10.7571 14.1674 12.5551 14.1674C13.2302 14.1674 13.858 13.9612 14.3788 13.6085L15.9978 15.2276C16.119 15.3487 16.278 15.4096 16.437 15.4096C16.596 15.4096 16.755 15.3487 16.8761 15.2276C17.1189 14.9847 17.1189 14.5922 16.8761 14.3494L15.257 12.7303C15.6097 12.2095 15.8158 11.5817 15.8158 10.9067C15.8158 9.10865 14.3532 7.646 12.5551 7.646C10.7571 7.646 9.29443 9.10865 9.29443 10.9067ZM14.0222 12.2917C14.3639 11.93 14.5736 11.4424 14.5736 10.9067C14.5736 9.79371 13.6681 8.88817 12.5551 8.88817C11.4421 8.88817 10.5366 9.79371 10.5366 10.9067C10.5366 12.0197 11.4421 12.9252 12.5551 12.9252C13.0908 12.9252 13.5784 12.7154 13.9402 12.3737C13.9524 12.359 13.9655 12.3447 13.9793 12.3308C13.9931 12.317 14.0075 12.304 14.0222 12.2917Z" fill="#451DA0"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="16" height="16" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div class="ml-[10px] text-13 leading-[16.5px] tracking-[-0.5px]"><a href="{{  route('list-ung-vien') }}">Tìm ứng viên mới</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>

        <div class="col-md-10">
            <section class="manage-job-posting-post-jobs cb-section bg-manage">
                <div class="container">
                    <div class="box-manage-job-posting">
                        <div class="heading-manage">
                            <div class="left-heading">
                                <h1 class="title-manage">Đăng Tuyển Dụng</h1>
                            </div>
                        </div>
                        <form name="frmEditJob" id="frmEditJob"  method="post" action="{{ route('postJob') }}">
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
                                                    <input type="text"id="job_title" class="keyword" name="job_title" value="" onblur="loadTagKey()" placeholder="Chức danh tuyển dụng">
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
                                                    <input type="text" id="job_code" name="job_code" maxlength="12" value="" placeholder="Mã công việc">
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
                                            <textarea cols="80" rows="5" id="job_desc" name="job_desc" class="editor"></textarea>
                                            <span class="form-error"></span>
                                            <div class="note">
                                                <p>Nhỏ hơn 10 000 kí tự</p>
                                            </div>
                                        </div>
                                        <div class="form-group form-editor" id="div_jobreq">
                                            <label>Yêu cầu công việc <font style="color: red">*</font></label>
                                            <textarea cols="80" rows="5" id="job_req" name="job_req" class="editor"></textarea>
                                            <span class="form-error"></span>
                                            <div class="note">
                                                <p>Nhỏ hơn 10 000 kí tự</p>
                                            </div>
                                        </div>
                                        <div class="form-group form-editor" id="div_jobreq">
                                            <label>Quyền lợi ứng viên<font style="color: red">*</font></label>
                                            <textarea cols="80" rows="5" id="rights" name="rights" class="editor"></textarea>
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
                                                        <optgroup label="Bán hàng / Tiếp thị">
                                                            <option value="4" >Tiếp thị / Marketing</option>
                                                            <option value="30" >Bán lẻ / Bán sỉ</option>
                                                            <option value="31" >Bán hàng / Kinh doanh</option>
                                                            <option value="37" >Tiếp thị trực tuyến</option>
                                                        </optgroup>
                                                        <optgroup label="Chăm sóc sức khỏe">
                                                            <option value="7" >Dược phẩm</option>
                                                            <option value="56" >Y tế / Chăm sóc sức khỏe</option>
                                                        </optgroup>
                                                        <optgroup label="Dịch vụ">
                                                            <option value="9" >Tư vấn</option>
                                                            <option value="12" >Dịch vụ khách hàng</option>
                                                            <option value="20" >Phi chính phủ / Phi lợi nhuận</option>
                                                            <option value="24" >Luật / Pháp lý</option>
                                                            <option value="32" >Bưu chính viễn thông</option>
                                                            <option value="33" >Vận chuyển / Giao nhận /  Kho vận</option>
                                                            <option value="44" >Lao động phổ thông</option>
                                                            <option value="51" >An Ninh / Bảo Vệ</option>
                                                        </optgroup>
                                                        <optgroup label="Giáo dục / Đào tạo">
                                                            <option value="13" >Giáo dục / Đào tạo</option>
                                                            <option value="57" >Thư viện</option>
                                                        </optgroup>
                                                        <optgroup label="Hàng tiêu dùng">
                                                            <option value="10" >Hàng gia dụng / Chăm sóc cá nhân</option>
                                                            <option value="21" >Thực phẩm &amp; Đồ uống</option>
                                                        </optgroup>
                                                        <optgroup label="Hành chính / Nhân sự">
                                                            <option value="3" >Hành chính / Thư ký</option>
                                                            <option value="17" >Quản lý điều hành</option>
                                                            <option value="22" >Nhân sự</option>
                                                            <option value="38" >Biên phiên dịch</option>
                                                        </optgroup>
                                                        <optgroup label="Kế toán / Tài chính">
                                                            <option value="2" >Kế toán / Kiểm toán</option>
                                                            <option value="19" >Ngân hàng</option>
                                                            <option value="23" >Bảo hiểm</option>
                                                            <option value="46" >Chứng khoán</option>
                                                            <option value="59" >Tài chính / Đầu tư</option>
                                                        </optgroup>
                                                        <optgroup label="Khách sạn / Du lịch">
                                                            <option value="29" >Nhà hàng / Khách sạn</option>
                                                            <option value="34" >Du lịch</option>
                                                            <option value="60" >Hàng không</option>
                                                        </optgroup>
                                                        <optgroup label="Khoa học">
                                                            <option value="5" >Nông nghiệp</option>
                                                            <option value="36" >Thống kê</option>
                                                            <option value="49" >Thủy sản / Hải sản</option>
                                                            <option value="50" >Lâm Nghiệp</option>
                                                            <option value="52" >Chăn nuôi / Thú y</option>
                                                            <option value="53" >Thủy lợi</option>
                                                            <option value="54" >Trắc địa / Địa Chất</option>
                                                            <option value="61" >Hàng hải</option>
                                                            <option value="69" >Công nghệ sinh học</option>
                                                            <option value="70" >Công nghệ thực phẩm / Dinh dưỡng</option>
                                                        </optgroup>
                                                        <optgroup label="Kỹ thuật">
                                                            <option value="14" >Cơ khí / Ô tô / Tự động hóa</option>
                                                            <option value="16" >Môi trường</option>
                                                            <option value="26" >Dầu khí</option>
                                                            <option value="41" >Hóa học</option>
                                                            <option value="48" >Điện / Điện tử / Điện lạnh</option>
                                                            <option value="65" >Khoáng sản</option>
                                                            <option value="71" >Bảo trì / Sửa chữa</option>
                                                        </optgroup>
                                                        <optgroup label="Máy tính / Công nghệ thông tin">
                                                            <option value="1" >CNTT - Phần mềm</option>
                                                            <option value="63" >CNTT - Phần cứng / Mạng</option>
                                                        </optgroup>
                                                        <optgroup label="Truyền thông / Media">
                                                            <option value="11" >Mỹ thuật / Nghệ thuật / Thiết kế</option>
                                                            <option value="15" >Giải trí</option>
                                                            <option value="66" >Truyền hình / Báo chí / Biên tập</option>
                                                            <option value="67" >Quảng cáo / Đối ngoại / Truyền Thông</option>
                                                            <option value="68" >Tổ chức sự kiện</option>
                                                        </optgroup>
                                                        <optgroup label="Sản xuất">
                                                            <option value="18" >Xuất nhập khẩu</option>
                                                            <option value="25" >Sản xuất / Vận hành sản xuất</option>
                                                            <option value="35" >Đồ gỗ</option>
                                                            <option value="39" >Dệt may / Da giày / Thời trang</option>
                                                            <option value="42" >Quản lý chất lượng (QA/QC)</option>
                                                            <option value="43" >Thu mua / Vật tư</option>
                                                            <option value="58" >An toàn lao động</option>
                                                            <option value="64" >In ấn / Xuất bản</option>
                                                        </optgroup>
                                                        <optgroup label="Xây dựng">
                                                            <option value="6" >Kiến trúc</option>
                                                            <option value="8" >Xây dựng</option>
                                                            <option value="28" >Bất động sản</option>
                                                            <option value="47" >Nội ngoại thất</option>
                                                        </optgroup>
                                                        <optgroup label="Nhóm ngành khác">
                                                            <option value="27" >Ngành khác</option>
                                                            <option value="45" >Mới tốt nghiệp / Thực tập</option>
                                                        </optgroup>
                                                    </select>
                                                    <span class="form-error error_select_industry_db_1" ></span>
                                                </div>
                                            </div>
                                        </div>
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
                                                                <optgroup label="Việt Nam" >
                                                                    <option value="4" >Hà Nội</option>
                                                                    <option value="8" >Hồ Chí Minh</option>
                                                                    <option value="76" >An Giang</option>
                                                                    <option value="64" >Bà Rịa - Vũng Tàu</option>
                                                                    <option value="781" >Bạc Liêu</option>
                                                                    <option value="281" >Bắc Cạn</option>
                                                                    <option value="240" >Bắc Giang</option>
                                                                    <option value="241" >Bắc Ninh</option>
                                                                    <option value="75" >Bến Tre</option>
                                                                    <option value="650" >Bình Dương</option>
                                                                    <option value="56" >Bình Định</option>
                                                                    <option value="651" >Bình Phước</option>
                                                                    <option value="62" >Bình Thuận</option>
                                                                    <option value="78" >Cà Mau</option>
                                                                    <option value="26" >Cao Bằng</option>
                                                                    <option value="71" >Cần Thơ</option>
                                                                    <option value="50" >Dak Lak</option>
                                                                    <option value="1042" >Dak Nông</option>
                                                                    <option value="511" >Đà Nẵng</option>
                                                                    <option value="900" >Điện Biên</option>
                                                                    <option value="1064" >Đồng Bằng Sông Cửu Long</option>
                                                                    <option value="61" >Đồng Nai</option>
                                                                    <option value="67" >Đồng Tháp</option>
                                                                    <option value="59" >Gia Lai</option>
                                                                    <option value="19" >Hà Giang</option>
                                                                    <option value="351" >Hà Nam</option>
                                                                    <option value="39" >Hà Tĩnh</option>
                                                                    <option value="320" >Hải Dương</option>
                                                                    <option value="31" >Hải Phòng</option>
                                                                    <option value="780" >Hậu Giang</option>
                                                                    <option value="18" >Hòa Bình</option>
                                                                    <option value="321" >Hưng Yên</option>
                                                                    <option value="901" >Khác</option>
                                                                    <option value="58" >Khánh Hòa</option>
                                                                    <option value="77" >Kiên Giang</option>
                                                                    <option value="60" >Kon Tum</option>
                                                                    <option value="1071" >KV Bắc Trung Bộ</option>
                                                                    <option value="1069" >KV Đông Nam Bộ</option>
                                                                    <option value="1070" >KV Nam Trung Bộ</option>
                                                                    <option value="1072" >KV Tây Nguyên</option>
                                                                    <option value="23" >Lai Châu</option>
                                                                    <option value="25" >Lạng Sơn</option>
                                                                    <option value="20" >Lào Cai</option>
                                                                    <option value="63" >Lâm Đồng</option>
                                                                    <option value="72" >Long An</option>
                                                                    <option value="350" >Nam Định</option>
                                                                    <option value="38" >Nghệ An</option>
                                                                    <option value="30" >Ninh Bình</option>
                                                                    <option value="68" >Ninh Thuận</option>
                                                                    <option value="210" >Phú Thọ</option>
                                                                    <option value="57" >Phú Yên</option>
                                                                    <option value="52" >Quảng Bình</option>
                                                                    <option value="510" >Quảng Nam</option>
                                                                    <option value="55" >Quảng Ngãi</option>
                                                                    <option value="33" >Quảng Ninh</option>
                                                                    <option value="53" >Quảng Trị</option>
                                                                    <option value="79" >Sóc Trăng</option>
                                                                    <option value="22" >Sơn La</option>
                                                                    <option value="66" >Tây Ninh</option>
                                                                    <option value="36" >Thái Bình</option>
                                                                    <option value="280" >Thái Nguyên</option>
                                                                    <option value="37" >Thanh Hóa</option>
                                                                    <option value="54" >Thừa Thiên- Huế</option>
                                                                    <option value="73" >Tiền Giang</option>
                                                                    <option value="1065" >Toàn quốc</option>
                                                                    <option value="74" >Trà Vinh</option>
                                                                    <option value="27" >Tuyên Quang</option>
                                                                    <option value="70" >Vĩnh Long</option>
                                                                    <option value="211" >Vĩnh Phúc</option>
                                                                    <option value="29" >Yên Bái</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1098" >Banteay Meanchey</option>
                                                                <option value="1096" >Battambang</option>
                                                                <option value="1092" >Kampong Chhnang</option>
                                                                <option value="1090" >Kampong Speu</option>
                                                                <option value="1085" >Kampot</option>
                                                                <option value="1088" >Kandal</option>
                                                                <option value="1094" >Kâmpóng Thum, Cambodia</option>
                                                                <option value="1084" >Kep</option>
                                                                <option value="1091" >Koh Kong</option>
                                                                <option value="1093" >Kratie</option>
                                                                <option value="1102" >Mondulkiri</option>
                                                                <option value="1104" >Otdar Meanchey</option>
                                                                <option value="1103" >Pailin</option>
                                                                <option value="1041" >Phnompenh</option>
                                                                <option value="1105" >Preah Sihanouk</option>
                                                                <option value="1099" >Preah Vihear</option>
                                                                <option value="1089" >Prey Veng</option>
                                                                <option value="1095" >Pursat</option>
                                                                <option value="1101" >Rotanak Kiri</option>
                                                                <option value="1097" >Siem Reap</option>
                                                                <option value="1083" >Sihanoukville</option>
                                                                <option value="1100" >Stung Treng</option>
                                                                <option value="1087" >Svay Rieng</option>
                                                                <option value="1082" >Tbong Khmum</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1018" >Seoul</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1034" >Chicago</option>
                                                                <option value="1077" >Florida</option>
                                                                <option value="1033" >Miami</option>
                                                                <option value="1039" >San Diego</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1079" >Hồng Kông</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1318" >Khác</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1106" >Attapeu</option>
                                                                <option value="1107" >Bokeo</option>
                                                                <option value="1108" >Bolikhamsai</option>
                                                                <option value="1109" >Champasak</option>
                                                                <option value="1110" >Houaphanh</option>
                                                                <option value="1111" >Khammouane</option>
                                                                <option value="1112" >Louang Namtha</option>
                                                                <option value="1113" >Luang Prabang</option>
                                                                <option value="1115" >Phongsaly</option>
                                                                <option value="1119" >Sekong</option>
                                                                <option value="1059" >Vientiane</option>
                                                                <option value="1120" >Xiangkhouang</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1019" >Kuala Lumpur</option>
                                                                <option value="1078" >Malaysia</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1320" >Yangon</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1319" >Aichi</option>
                                                                <option value="1043" >Hokkaido</option>
                                                                <option value="1000" >Osaka</option>
                                                                <option value="1001" >Tokyo</option>
                                                                <option value="1002" >Yokohama</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1055" >Qatar</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1073" >Quốc tế</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1040" >Singapore</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1004" >Melbourne</option>
                                                                <option value="1005" >Sydney</option>
                                                                </optgroup>
                                                                >
                                                                <option value="1053" >Kharkiv</option>
                                                                </optgroup>
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
                                                            <option value="vnd">VNĐ</option>
                                                            <option value="usd">USD</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group form-text">
                                                        <input type="text" name="salary_from" id="salary_from" maxlength="12" value="" onblur="checkAlertSalary();" placeholder="Tối Thiểu *">
                                                    </div>
                                                    <div class="form-group form-text">
                                                        <input type="text" name="salary_to" id="salary_to" maxlength="12"  value="" onblur="checkAlertSalary();" placeholder="Tối Đa *">
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
                                                <select name="type">
                                                    <option value="0">Nhân viên chính thức</option>
                                                    <option value="1">Bán thời gian</option>
                                                    <option value="2">Thời vụ - Nghề tự do</option>
                                                    <option value="3">Thực tập</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <div class="form-group form-date">
                                                    <label>Hạn nhận hồ sơ <font style="color: red">*</font></label>
                                                    <input type="date" name="JOB_LASTDATE" id="JOB_LASTDATE" class="dates_cus_select_postjob required" value="" />
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
                                                ?>
                                            @foreach($benefit as $key => $value)
                                            <div class="col-sm-6 col-lg-3">
                                                <div class="form-group form-checkbox">
                                                    <input type="checkbox"  name="BENEFIT_ID[]" value="{{ $key }}">
                                                    <label for="{{ $key }}"> {{ $value }}</label>
                                                </div>
                                            </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-submit form-continue form-back-continue">
                                    <a class="btn-gradient btn-save" href="javascript:void(0);" onclick="is_Filter_Form2()">Tiếp tục</a>
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

  
    
      
    </main>
           

<script src="{{ asset('js/employ/employ-form-js2.js') }}"></script>

<script src="{{ asset('js/employ/auto-employ.js') }}"></script>
