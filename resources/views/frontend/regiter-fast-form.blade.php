@extends('frontend.layout.appfe')
@section('content')     

<main>
    <link href="https://static.careerbuilder.vn/js/datetimepicker/DateTimePicker.css" rel="stylesheet">
    <script src="https://static.careerbuilder.vn/js/datetimepicker/DateTimePicker.js" type="text/javascript"></script>
    <script src="https://static.careerbuilder.vn/js/datetimepicker/i18n/DateTimePicker-i18n.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/chosen.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/quick-upload-resume.css') }}">
       
   
    <script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" data-app-key="wpcl6nfph1hzjf2" id="dropboxjs"></script>
    <script src="https://static.careerbuilder.vn/2012/dropboxresume.js" type="text/javascript"></script>
    <script language="javascript">
        var resume_id = resume_id_fr = 0;
        var member_id = -1;
        var numListRefer = 0;
    </script>
    <form action="" method="post" name="frmResumeDetail" id="frmResumeDetail" enctype="multipart/form-data">
        <div class="step-1" id="QuickUpload_Step1">
            <section class="cb-section">
                <div class="container">
                    <div class="cb-title cb-title-center">
                        <h2>Tạo nhanh hồ sơ</h2>
                    </div>
                    <div class="main-quick-upload-resume">
                        <input type="hidden" name="resume_id" id="resume_id" value="">
                        <input type="hidden" name="member_id" id="member_id" value="">
                        <input type="hidden" name="private_info" id="private_info" value="1">
                        <input type="hidden" name="popup_resume" id="popup_resume" value="">
                        <input type="hidden" name="resume_kind" value="2">
                        <input type="hidden" name="is_change" id="is_change" value="1">
                        <input type="hidden" id="resume_path" name="resume_path" value="">
                        <input type="hidden" id="resume_path_convert" name="resume_path_convert" value="">
                        <input type="hidden" id="step_active" name="" value="1">
                        <input type="hidden" id="urgentjob" name="urgentjob" value="0">
                        <div class="quick-upload">
                            <div class="cb-title-h3">
                                <h3>Hồ sơ</h3>
                            </div>
                            <div class="form-group form-text">
                                <input type="text" onkeyup="this.setAttribute('value', this.value);" value="" name="resume_title" id="resume_title">
                                <label>* Tiêu đề hồ sơ</label>
                                <span class="error_resume_title"></span>
                                <div class="form-note">
                                    <p>Nhập vị trí hoặc chức danh. Ví dụ: Kế toán trưởng, Web designer</p>
                                </div>
                            </div>
                            <div class="form-choose">
                                <div class="form-group">
                                    <label>* Hồ sơ đính kèm</label>
                                </div>
                                <div class="form-group">
                                    <div class="list-choose">
                                        <div class="choose-mycomputer">
                                            <label for="attach_file"><em class="mdi mdi-folder-outline"></em>Tải hồ sơ từ máy tính</label>
                                            <input class="d-none" type="file" id="attach_file" name="attach_file" onchange=" return ajaxOnlyFile(this);">
                                        </div>
                                        <button type="button" name="dropbox_button" id="dropbox_button" class="choose-dropbox file">
                                        <img src="./img/quick-upload-resume/Dropbox_Logo.png" alt="">Tải hồ sơ từ Dropbox
                                        </button>
                                        <input type="hidden" name="dropbox_file" id="dropbox_file" value="">
                                        <input type="hidden" name="dfile_title" id="dfile_title" value="">
                                        <input type="hidden" name="dfile_size" id="dfile_size" value="">
                                    </div>
                                    <span class="error error_attach_file"></span>
                                </div>
                            </div>
                            <div class="form-show-file" id="uploadFile_file">
                                <em class="material-icons">picture_as_pdf</em>
                                <div class="form-group">
                                    <input type="text" value="" onkeyup="this.setAttribute('value', this.value);">
                                </div>
                                <a href="javascript:void(0)" onclick="removefile(); return false;"><em class="material-icons">highlight_off </em>Xoá</a>
                            </div>
                            <div class="form-group"> </div>
                            <div class="form-group form-note">
                                <div class="box-noti">
                                    <p class="name"><strong>Lưu ý:</strong></p>
                                    <p>Trong trường hợp bạn gặp phải bất kỳ vấn đề gì trong quá trình thực hiện như tải hồ sơ không thành công hoặc không nhấn được nút Gửi hồ sơ, vui lòng kiểm tra lại nguyên nhân và thử các bước gợi ý sau.</p>
                                    <div class="noti-content">
                                        <ul>
                                            <li>Hệ thống hiện chỉ hỗ trợ một tập tin được tải lên có các <strong>định dạng .doc, .docx hoặc .pdf</strong></li>
                                            <li>Nếu bạn có nhiều loại bằng cấp hay giấy tờ khác muốn đính kèm thêm, <strong>vui lòng gộp chung vào một tập tin theo đúng định dạng với tổng dung lượng không vượt quá 3MB</strong></li>
                                            <li><strong>Nâng cấp trình duyệt đang sử dụng lên phiên bản mới nhất</strong> (Firefox: 57 trở lên, Cốc Cốc: 75 trở lên, Microsoft Edge: MEdge 44 trở lên, Internet Explorer: 11 trở lên, Safari: 13.1 trở lên)</li>
                                            <li>Vào phần thiết lập của trình duyệt để<strong> tắt chức năng chặn quảng cáo (Ads Block)</strong></li>
                                            <li>Chụp ảnh màn hình cùng mô tả cụ thể và gửi về bộ phận chăm sóc ứng viên của CareerBuilder: <a href="mailto:support@careerbuilder.vn" class="passChk"><b style="
                                                font-size: 14px;
                                                font-weight: normal;
                                                ">support@careerbuilder.vn<b></b></b></a> để được hỗ trợ thêm
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="quick-upload">
                                <div class="cb-title-h3">
                                    <h3>Thông tin nghề nghiệp</h3>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group form-text">
                                            <input type="text" onkeyup="this.setAttribute('value', this.value);" name="lastname" id="lastname" value="">
                                            <label>* Họ và tên lót</label>
                                            <span class="error_lastname"></span> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-text">
                                            <input type="text" onkeyup="this.setAttribute('value', this.value);" name="firstname" id="firstname" value="">
                                            <label>* Tên</label>
                                            <span class="error_firstname"></span> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-radio">
                                            <p>* Giới tính</p>
                                            <div class="gender">
                                                <input type="radio" name="gender" value="1" id="gender_m">
                                                <label for="gender_m">Nam</label>
                                            </div>
                                            <div class="gender">
                                                <input type="radio" name="gender" value="2" id="gender_f">
                                                <label for="gender_f">Nữ</label>
                                            </div>
                                            <span class="error_gender"></span> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-birthday">
                                            <label>* Ngày sinh</label>
                                            <input type="text" data-field="date" data-max="31/12/2007" placeholder="DD/MM/YYYY" name="birthday" value="">
                                            <span class="error_birthday"></span> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-text">
                                            <input type="text" onkeyup="this.setAttribute('value', this.value);" id="mobile" name="mobile" value="" maxlength="20">
                                            <label>* Số điện thoại</label>
                                            <span class="error_mobile"></span> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-text">
                                            <input type="text" onkeyup="this.setAttribute('value', this.value);" name="email" id="email" value="">
                                            <label>* Địa chỉ email</label>
                                            <span class="error_email"></span> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-text">
                                            <input type="text" name="address" id="address" onkeyup="this.setAttribute('value', this.value);" value="">
                                            <label>* Địa chỉ</label>
                                            <span class="error_address"></span> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-select">
                                            <label>* Quốc gia</label>
                                            <select name="slcountry" id="slcountry" class="marital required" title="Vui lòng chọn quốc gia">
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
                                            <span class="error_slcountry"></span> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-select">
                                            <label>* Tỉnh/Thành phố</label>
                                            <select name="slcity" id="slcity" class="marital required" title="Xin vui lòng chọn tỉnh thành nơi bạn sinh sống." onchange="loadDistrictProfile(this.value);">
                                                <option value="4">Hà Nội</option>
                                                <option value="8">Hồ Chí Minh</option>
                                                <option value="18">Hòa Bình</option>
                                                <option value="19">Hà Giang</option>
                                                <option value="20">Lào Cai</option>
                                                <option value="22">Sơn La</option>
                                                <option value="23">Lai Châu</option>
                                                <option value="25">Lạng Sơn</option>
                                                <option value="26">Cao Bằng</option>
                                                <option value="27">Tuyên Quang</option>
                                                <option value="29">Yên Bái</option>
                                                <option value="30">Ninh Bình</option>
                                                <option value="31">Hải Phòng</option>
                                                <option value="33">Quảng Ninh</option>
                                                <option value="36">Thái Bình</option>
                                                <option value="37">Thanh Hóa</option>
                                                <option value="38">Nghệ An</option>
                                                <option value="39">Hà Tĩnh</option>
                                                <option value="50">Dak Lak</option>
                                                <option value="52">Quảng Bình</option>
                                                <option value="53">Quảng Trị</option>
                                                <option value="54">Thừa Thiên- Huế</option>
                                                <option value="55">Quảng Ngãi</option>
                                                <option value="56">Bình Định</option>
                                                <option value="57">Phú Yên</option>
                                                <option value="58">Khánh Hòa</option>
                                                <option value="59">Gia Lai</option>
                                                <option value="60">Kon Tum</option>
                                                <option value="61">Đồng Nai</option>
                                                <option value="62">Bình Thuận</option>
                                                <option value="63">Lâm Đồng</option>
                                                <option value="64">Bà Rịa - Vũng Tàu</option>
                                                <option value="66">Tây Ninh</option>
                                                <option value="67">Đồng Tháp</option>
                                                <option value="68">Ninh Thuận</option>
                                                <option value="70">Vĩnh Long</option>
                                                <option value="71">Cần Thơ</option>
                                                <option value="72">Long An</option>
                                                <option value="73">Tiền Giang</option>
                                                <option value="74">Trà Vinh</option>
                                                <option value="75">Bến Tre</option>
                                                <option value="76">An Giang</option>
                                                <option value="77">Kiên Giang</option>
                                                <option value="78">Cà Mau</option>
                                                <option value="79">Sóc Trăng</option>
                                                <option value="210">Phú Thọ</option>
                                                <option value="211">Vĩnh Phúc</option>
                                                <option value="240">Bắc Giang</option>
                                                <option value="241">Bắc Ninh</option>
                                                <option value="280">Thái Nguyên</option>
                                                <option value="281">Bắc Cạn</option>
                                                <option value="320">Hải Dương</option>
                                                <option value="321">Hưng Yên</option>
                                                <option value="350">Nam Định</option>
                                                <option value="351">Hà Nam</option>
                                                <option value="510">Quảng Nam</option>
                                                <option value="511">Đà Nẵng</option>
                                                <option value="650">Bình Dương</option>
                                                <option value="651">Bình Phước</option>
                                                <option value="780">Hậu Giang</option>
                                                <option value="781">Bạc Liêu</option>
                                                <option value="900">Điện Biên</option>
                                                <option value="901">Khác</option>
                                                <option value="1042">Dak Nông</option>
                                                <option value="1064">Đồng Bằng Sông Cửu Long</option>
                                                <option value="1065">Toàn quốc</option>
                                                <option value="1069">KV Đông Nam Bộ</option>
                                                <option value="1070">KV Nam Trung Bộ</option>
                                                <option value="1071">KV Bắc Trung Bộ</option>
                                                <option value="1072">KV Tây Nguyên</option>
                                            </select>
                                            <span class="error_slcity"></span> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-select">
                                            <label>* Quận/huyện</label>
                                            <select name="sldistrict" id="sldistrict" class="marital" title="Vui lòng chọn quận/huyện">
                                                <option value="">Lựa chọn</option>
                                                <option value="347">Huyện Ba Vì</option>
                                                <option value="353">Huyện Chương Mỹ</option>
                                                <option value="349">Huyện Đan Phượng</option>
                                                <option value="339">Huyện Đông Anh</option>
                                                <option value="340">Huyện Gia Lâm</option>
                                                <option value="350">Huyện Hoài Đức</option>
                                                <option value="344">Huyện Mê Linh</option>
                                                <option value="358">Huyện Mỹ Đức</option>
                                                <option value="357">Huyện Ứng Hòa</option>
                                                <option value="356">Huyện Phú Xuyên</option>
                                                <option value="348">Huyện Phúc Thọ</option>
                                                <option value="351">Huyện Quốc Oai</option>
                                                <option value="338">Huyện Sóc Sơn</option>
                                                <option value="352">Huyện Thạch Thất</option>
                                                <option value="354">Huyện Thanh Oai</option>
                                                <option value="342">Huyện Thanh Trì</option>
                                                <option value="355">Huyện Thường Tín</option>
                                                <option value="329">Quận Ba Đình</option>
                                                <option value="343">Quận Bắc Từ Liêm</option>
                                                <option value="333">Quận Cầu Giấy</option>
                                                <option value="334">Quận Đống Đa</option>
                                                <option value="345">Quận Hà Đông</option>
                                                <option value="335">Quận Hai Bà Trưng</option>
                                                <option value="330">Quận Hoàn Kiếm</option>
                                                <option value="336">Quận Hoàng Mai</option>
                                                <option value="332">Quận Long Biên</option>
                                                <option value="341">Quận Nam Từ Liêm</option>
                                                <option value="331">Quận Tây Hồ</option>
                                                <option value="337">Quận Thanh Xuân</option>
                                                <option value="346">Thị xã Sơn Tây</option>
                                            </select>
                                            <span class="error_sldistrict"></span> 
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group form-submit">
                                            <button type="button" onclick="checkValidForm(1);return false;" class="btn-gradient">Lưu và Tiếp tục</button>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group form-note">
                                            <p>* Thông tin bắt buộc</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="step-2" id="QuickUpload_Step2" style="display:none">
            <section class="cb-section">
                <div class="container">
                    <div class="cb-title cb-title-center">
                        <h2>Tạo nhanh hồ sơ</h2>
                    </div>
                    <div class="main-quick-upload-resume">
                        <div class="quick-upload quick-upload-2 ">
                            <div class="cb-title-h3">
                                <h3>Thông tin nghề nghiệp</h3>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group form-text">
                                        <input type="text" onkeyup="this.setAttribute('value', this.value);" name="yearOfExperience" id="year_experience" value="">
                                        <label>* Số năm kinh nghiệm</label>
                                        <span class="error_year_experience error_yearOfExperience"></span> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-checkbox">
                                        <input type="checkbox" id="cboExper">
                                        <label for="cboExper">Chưa có kinh nghiệm</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-select">
                                        <label>* Bằng cấp cao nhất</label>
                                        <select name="degree" id="degree" class="required width_186">
                                            <option value="">Chọn</option>
                                            <option value="0">Chưa tốt nghiệp</option>
                                            <option value="1">Trung học</option>
                                            <option value="2">Trung cấp</option>
                                            <option value="3">Cao đẳng</option>
                                            <option value="4">Đại học</option>
                                            <option value="5">Sau đại học</option>
                                            <option value="6">Khác</option>
                                        </select>
                                        <span class="error_degree"></span> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-select">
                                        <label>* Cấp bậc mong muốn</label>
                                        <select name="level_id" id="level_id">
                                            <option value="0">Chọn</option>
                                            <option value="1">Sinh viên/ Thực tập sinh</option>
                                            <option value="2">Mới tốt nghiệp</option>
                                            <option value="3">Nhân viên</option>
                                            <option value="4">Trưởng nhóm / Giám sát</option>
                                            <option value="5">Quản lý</option>
                                            <option value="6">Phó Giám đốc</option>
                                            <option value="7">Giám đốc </option>
                                            <option value="8">Tổng giám đốc</option>
                                            <option value="9">Chủ tịch / Phó Chủ tịch</option>
                                        </select>
                                        <span class="error_level_id"></span> 
                                    </div>
                                </div>
                                <div class="col-md-6 form-additional form-salary-cus">
                                    <label>Mức lương mong muốn</label>
                                    <div class="form-big">
                                        <div class="form-group form-select">
                                            <select name="salary_unit" id="salary_unit">
                                                <option value="ltt">Thỏa thuận</option>
                                                <option value="vnd">VNĐ</option>
                                                <option value="usd">USD</option>
                                            </select>
                                        </div>
                                        <div class="form-group form-text">
                                            <input type="text" disabled="" onkeyup="this.setAttribute('value', this.value);" name="salary_from" id="salary_from" value="">
                                            <label>Từ</label>
                                        </div>
                                        <div class="form-group form-text">
                                            <input type="text" disabled="" onkeyup="this.setAttribute('value', this.value);" name="salary_to" id="salary_to" value="">
                                            <label>Đến </label>
                                        </div>
                                        <span class="error_salary_unit"></span> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-select-chosen">
                                        <label for="">* Ngành nghề mong muốn</label>
                                        <select name="INDUSTRY_ID[]" id="select_industry_db" data-placeholder="Vui lòng chọn ngành nghề" multiple="" class="chosen-select-max-three" title="Vui lòng chọn ngành nghề" style="display: none;">
                                            <optgroup label="Bán hàng / Tiếp thị">
                                                <option value="4">Tiếp thị / Marketing</option>
                                                <option value="30">Bán lẻ / Bán sỉ</option>
                                                <option value="31">Bán hàng / Kinh doanh</option>
                                                <option value="37">Tiếp thị trực tuyến</option>
                                            </optgroup>
                                            <optgroup label="Chăm sóc sức khỏe">
                                                <option value="7">Dược phẩm</option>
                                                <option value="56">Y tế / Chăm sóc sức khỏe</option>
                                            </optgroup>
                                            <optgroup label="Dịch vụ">
                                                <option value="9">Tư vấn</option>
                                                <option value="12">Dịch vụ khách hàng</option>
                                                <option value="20">Phi chính phủ / Phi lợi nhuận</option>
                                                <option value="24">Luật / Pháp lý</option>
                                                <option value="32">Bưu chính viễn thông</option>
                                                <option value="33">Vận chuyển / Giao nhận /  Kho vận</option>
                                                <option value="44">Lao động phổ thông</option>
                                                <option value="51">An Ninh / Bảo Vệ</option>
                                            </optgroup>
                                            <optgroup label="Giáo dục / Đào tạo">
                                                <option value="13">Giáo dục / Đào tạo</option>
                                                <option value="57">Thư viện</option>
                                            </optgroup>
                                            <optgroup label="Hàng tiêu dùng">
                                                <option value="10">Hàng gia dụng / Chăm sóc cá nhân</option>
                                                <option value="21">Thực phẩm &amp; Đồ uống</option>
                                            </optgroup>
                                            <optgroup label="Hành chính / Nhân sự">
                                                <option value="3">Hành chính / Thư ký</option>
                                                <option value="17">Quản lý điều hành</option>
                                                <option value="22">Nhân sự</option>
                                                <option value="38">Biên phiên dịch</option>
                                            </optgroup>
                                            <optgroup label="Kế toán / Tài chính">
                                                <option value="2">Kế toán / Kiểm toán</option>
                                                <option value="19">Ngân hàng</option>
                                                <option value="23">Bảo hiểm</option>
                                                <option value="46">Chứng khoán</option>
                                                <option value="59">Tài chính / Đầu tư</option>
                                            </optgroup>
                                            <optgroup label="Khách sạn / Du lịch">
                                                <option value="29">Nhà hàng / Khách sạn</option>
                                                <option value="34">Du lịch</option>
                                                <option value="60">Hàng không</option>
                                            </optgroup>
                                            <optgroup label="Khoa học">
                                                <option value="5">Nông nghiệp</option>
                                                <option value="36">Thống kê</option>
                                                <option value="49">Thủy sản / Hải sản</option>
                                                <option value="50">Lâm Nghiệp</option>
                                                <option value="52">Chăn nuôi / Thú y</option>
                                                <option value="53">Thủy lợi</option>
                                                <option value="54">Trắc địa / Địa Chất</option>
                                                <option value="61">Hàng hải</option>
                                                <option value="69">Công nghệ sinh học</option>
                                                <option value="70">Công nghệ thực phẩm / Dinh dưỡng</option>
                                            </optgroup>
                                            <optgroup label="Kỹ thuật">
                                                <option value="14">Cơ khí&nbsp;/ Ô tô&nbsp;/ Tự động hóa</option>
                                                <option value="16">Môi trường</option>
                                                <option value="26">Dầu khí</option>
                                                <option value="41">Hóa học</option>
                                                <option value="48">Điện / Điện tử / Điện lạnh</option>
                                                <option value="65">Khoáng sản</option>
                                                <option value="71">Bảo trì / Sửa chữa</option>
                                            </optgroup>
                                            <optgroup label="Máy tính / Công nghệ thông tin">
                                                <option value="1">CNTT - Phần mềm</option>
                                                <option value="63">CNTT - Phần cứng / Mạng</option>
                                            </optgroup>
                                            <optgroup label="Truyền thông / Media">
                                                <option value="11">Mỹ thuật / Nghệ thuật / Thiết kế</option>
                                                <option value="15">Giải trí</option>
                                                <option value="66">Truyền hình / Báo chí / Biên tập</option>
                                                <option value="67">Quảng cáo / Đối ngoại / Truyền Thông</option>
                                                <option value="68">Tổ chức sự kiện</option>
                                            </optgroup>
                                            <optgroup label="Sản xuất">
                                                <option value="18">Xuất nhập khẩu</option>
                                                <option value="25">Sản xuất / Vận hành sản xuất</option>
                                                <option value="35">Đồ gỗ</option>
                                                <option value="39">Dệt may / Da giày / Thời trang</option>
                                                <option value="42">Quản lý chất lượng (QA/QC)</option>
                                                <option value="43">Thu mua / Vật tư</option>
                                                <option value="58">An toàn lao động</option>
                                                <option value="64">In ấn / Xuất bản</option>
                                            </optgroup>
                                            <optgroup label="Xây dựng">
                                                <option value="6">Kiến trúc</option>
                                                <option value="8">Xây dựng</option>
                                                <option value="28">Bất động sản</option>
                                                <option value="47">Nội ngoại thất</option>
                                            </optgroup>
                                            <optgroup label="Nhóm ngành khác">
                                                <option value="27">Ngành khác</option>
                                                <option value="45">Mới tốt nghiệp / Thực tập</option>
                                            </optgroup>
                                        </select>
                                        <div class="chosen-container chosen-container-multi" title="Vui lòng chọn ngành nghề" id="select_industry_db_chosen" style="width: 0px;">
                                            <ul class="chosen-choices">
                                                <li class="search-field">
                                                    <input class="chosen-search-input default" type="search" autocomplete="off" value="Vui lòng chọn ngành nghề" style="width: 185.75px;">
                                                </li>
                                            </ul>
                                            <div class="chosen-drop">
                                                <ul class="chosen-results"></ul>
                                            </div>
                                        </div>
                                        <span class="error_select_industry_db_1"></span> 
                                    </div>
                                </div>
                                <div class="col-md-6 form-additional">
                                    <div class="list-language" id="list-language">
                                        <div class="item active">
                                            <div class="form-group form-select">
                                                <label for="">Trình độ ngoại ngữ</label>
                                                <select name="rs_language[]" class="width_186">
                                                    <option value="">Chọn</option>
                                                    <option value="vn">Việt Nam</option>
                                                    <option value="en">Anh</option>
                                                    <option value="fr">Pháp</option>
                                                    <option value="de">Đức</option>
                                                    <option value="ru">Nga</option>
                                                    <option value="cn">Trung Quốc</option>
                                                    <option value="kr">Hàn Quốc</option>
                                                    <option value="jp">Nhật</option>
                                                    <option value="other">Khác</option>
                                                </select>
                                            </div>
                                            <div class="form-group form-select">
                                                <label for="">Trình độ</label>
                                                <select name="rs_language_level[]" class="width_125">
                                                    <option value="0">Chọn</option>
                                                    <option value="1">Bản ngữ</option>
                                                    <option value="2">Sơ cấp</option>
                                                    <option value="3">Trung cấp</option>
                                                    <option value="4">Cao cấp</option>
                                                </select>
                                            </div>
                                            <a class="btn-delete" style="display:none" href="javascript:void(0);"><em class="material-icons">highlight_off</em><span>
                                            </span></a> 
                                        </div>
                                        <div id="language_hide" style="display:none">
                                            <div class="item active">
                                                <div class="form-group form-select">
                                                    <label for="">Trình độ ngoại ngữ</label>
                                                    <select name="rs_language[]" class="width_186">
                                                        <option value="">Chọn</option>
                                                        <option value="vn">Việt Nam</option>
                                                        <option value="en">Anh</option>
                                                        <option value="fr">Pháp</option>
                                                        <option value="de">Đức</option>
                                                        <option value="ru">Nga</option>
                                                        <option value="cn">Trung Quốc</option>
                                                        <option value="kr">Hàn Quốc</option>
                                                        <option value="jp">Nhật</option>
                                                        <option value="other">Khác</option>
                                                    </select>
                                                </div>
                                                <div class="form-group form-select">
                                                    <label for="">Trình độ</label>
                                                    <select name="rs_language_level[]" class="width_125">
                                                        <option value="0">Chọn</option>
                                                        <option value="1">Bản ngữ</option>
                                                        <option value="2">Sơ cấp</option>
                                                        <option value="3">Trung cấp</option>
                                                        <option value="4">Cao cấp</option>
                                                    </select>
                                                </div>
                                                <a class="btn-delete" href="javascript:void(0);"><em class="material-icons">highlight_off</em><span>Xóa</span></a> 
                                            </div>
                                        </div>
                                        <a class="btn-add" href="javascript:void(0);"><em class="material-icons">add_circle_outline</em><span>Thêm </span></a> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-select">
                                        <label for="">Cấp bậc hiện tại</label>
                                        <select class="width_186" name="levelcurrent_id" id="levelcurrent_id">
                                            <option value="">Chọn</option>
                                            <option value="1">Sinh viên/ Thực tập sinh</option>
                                            <option value="2">Mới tốt nghiệp</option>
                                            <option value="3">Nhân viên</option>
                                            <option value="4">Trưởng nhóm / Giám sát</option>
                                            <option value="5">Quản lý</option>
                                            <option value="6">Phó Giám đốc</option>
                                            <option value="7">Giám đốc </option>
                                            <option value="8">Tổng giám đốc</option>
                                            <option value="9">Chủ tịch / Phó Chủ tịch</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="list-workplace-desired" id="list-workplace-desired">
                                        <div class="row item active">
                                            <div class="col-md-6">
                                                <div class="form-group form-select">
                                                    <label>* Nơi làm việc mong muốn</label>
                                                    <select name="LOCATION_ID[]" id="select_location_id_1">
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
                                                    <span class="error_location_id error_select_location_id_1"></span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group form-select-chosen">
                                                    <label for="">Quận</label>
                                                    <select name="DISTRICT_ID[]" id="select_district_id_1" class=" chosen-select-max-three" data-placeholder="Quận" multiple="" style="display: none;">
                                                        <option value="-1;">All</option>
                                                    </select>
                                                    <div class="chosen-container chosen-container-multi" title="" id="select_district_id_1_chosen" style="width: 0px;">
                                                        <ul class="chosen-choices">
                                                            <li class="search-field">
                                                                <input class="chosen-search-input default" type="search" autocomplete="off" value="Quận" style="width: 57.6875px;">
                                                            </li>
                                                        </ul>
                                                        <div class="chosen-drop">
                                                            <ul class="chosen-results"></ul>
                                                        </div>
                                                    </div>
                                                    <span class="error_DISTRICT_ID"></span>
                                                </div>
                                                <div class="delete"><a href="javascript:void(0)"><em class="material-icons">highlight_off</em>Xóa</a></div>
                                            </div>
                                        </div>
                                        <div class="row item ">
                                            <div class="col-md-6">
                                                <div class="form-group form-select">
                                                    <label for="">Nơi làm việc mong muốn</label>
                                                    <select name="LOCATION_ID[]" id="select_location_id_2">
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
                                                    <span class="error_location_id error_select_location_id_2"></span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group form-select-chosen">
                                                    <label for="">Quận</label>
                                                    <select name="DISTRICT_ID[]" id="select_district_id_2" class="chosen-select-max-three" multiple="" style="display: none;">
                                                        <option value="-1;">All</option>
                                                    </select>
                                                    <div class="chosen-container chosen-container-multi" title="" id="select_district_id_2_chosen" style="width: 0px;">
                                                        <ul class="chosen-choices">
                                                            <li class="search-field">
                                                                <input class="chosen-search-input default" type="search" autocomplete="off" value="Select Some Options" style="width: 154.734px;">
                                                            </li>
                                                        </ul>
                                                        <div class="chosen-drop">
                                                            <ul class="chosen-results"></ul>
                                                        </div>
                                                    </div>
                                                    <span class="error_DISTRICT_ID"></span>
                                                </div>
                                                <div class="delete active"><a href="javascript:void(0)"><em class="material-icons">highlight_off</em>Xóa</a></div>
                                            </div>
                                        </div>
                                        <div class="row item ">
                                            <div class="col-md-6">
                                                <div class="form-group form-select">
                                                    <label for="">Nơi làm việc mong muốn</label>
                                                    <select name="LOCATION_ID[]" id="select_location_id_3">
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
                                                    <span class="error_location_id error_select_location_id_3"></span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group form-select-chosen">
                                                    <label for="">Quận</label>
                                                    <select name="DISTRICT_ID[]" id="select_district_id_3" class=" chosen-select-max-three" multiple="" disabled="disabled" style="display: none;">
                                                        <option value="-1;">All</option>
                                                    </select>
                                                    <div class="chosen-container chosen-container-multi chosen-disabled" title="" id="select_district_id_3_chosen" style="width: 0px;">
                                                        <ul class="chosen-choices">
                                                            <li class="search-field">
                                                                <input class="chosen-search-input default" type="search" autocomplete="off" value="Select Some Options" disabled="" style="width: 154.734px;">
                                                            </li>
                                                        </ul>
                                                        <div class="chosen-drop">
                                                            <ul class="chosen-results"></ul>
                                                        </div>
                                                    </div>
                                                    <span class="error_DISTRICT_ID"></span>
                                                </div>
                                                <div class="delete active"><a href="javascript:void(0)"><em class="material-icons">highlight_off</em>Xóa</a></div>
                                            </div>
                                        </div>
                                        <script language="javascript">
                                            var location_id_1 = 0;
                                            $(document).ready(function(){
                                                $("#select_location_id_1").change(function(){
                                                    location_id_1 = $(this).val();
                                                    var str = '';
                                                    var i = 1;
                                                    for(k in districts) {
                                                        if(i == 1)
                                                            str+= '<option value="-1;'+location_id_1+'">All</option>';
                                                        if(location_id_1 == districts[k][1]){
                                                            str += '<option value="'+districts[k][0]+';'+districts[k][1]+'">'+districts[k][2]+'</option>';
                                                        }
                                                        i++;
                                                    }
                                                    $('#select_district_id_1 option').remove();
                                                    $('#select_district_id_1').append(str);
                                                    $('#select_district_id_1').trigger("chosen:updated");
                                                });
                                                $("#select_district_id_1").change(function(){
                                                    var district_id = $(this).val();
                                                    var district_all = '-1;'+location_id_1;
                                                    if($.inArray( district_all, district_id ) >= 0){
                                                        $('#select_district_id_1 option').prop('disabled', true);
                                                        $("#select_district_id_1 option[value='"+district_id+"']").prop('disabled', false);
                                                    }else{
                                                        $("#select_district_id_1 option[value='"+district_all+"']").prop('disabled', true);
                                                    }
                                                    if(jQuery.isEmptyObject(district_id)){
                                                        $('#select_district_id_1 option').prop('disabled', false);
                                                    }
                                                    $('#select_district_id_1').trigger("chosen:updated");
                                                });
                                                $("#select_location_id_2").change(function(){
                                                    location_id_2 = $(this).val();
                                                    var str = '';
                                                    var i = 1;
                                                    for(k in districts) {
                                                        if(i == 1)
                                                            str+= '<option value="-1;'+location_id_2+'">All</option>';
                                                        if(location_id_2 == districts[k][1]){
                                                            str += '<option value="'+districts[k][0]+';'+districts[k][1]+'">'+districts[k][2]+'</option>';
                                                        }
                                                        i++;
                                                    }
                                                    $('#select_district_id_2 option').remove();
                                                    $('#select_district_id_2').append(str);
                                                    $('#select_district_id_2').trigger("chosen:updated");
                                                });
                                                $("#select_district_id_2").change(function(){
                                                    var district_id = $(this).val();
                                                    var district_all = '-1;'+location_id_2;
                                                    if($.inArray( district_all, district_id ) >= 0){
                                                        $('#select_district_id_2 option').prop('disabled', true);
                                                        $("#select_district_id_2 option[value='"+district_id+"']").prop('disabled', false);
                                                    }else{
                                                        $("#select_district_id_2 option[value='"+district_all+"']").prop('disabled', true);
                                                    }
                                                    if(jQuery.isEmptyObject(district_id)){
                                                        $('#select_district_id_2 option').prop('disabled', false);
                                                    }
                                                    $('#select_district_id_2').trigger("chosen:updated");
                                                });
                                                $("#select_location_id_3").change(function(){
                                                    location_id_3 = $(this).val();
                                                    var str = '';
                                                    var i = 1;
                                                    for(k in districts) {
                                                        if(i == 1)
                                                            str+= '<option value="-1;'+location_id_3+'">All</option>';
                                                        if(location_id_3 == districts[k][1]){
                                                            str += '<option value="'+districts[k][0]+';'+districts[k][1]+'">'+districts[k][2]+'</option>';
                                                        }
                                                        i++;
                                                    }
                                                    $('#select_district_id_3 option').remove();
                                                    $('#select_district_id_3').append(str);
                                                    $('#select_district_id_3').trigger("chosen:updated");
                                                });
                                                $("#select_district_id_3").change(function(){
                                                    var district_id = $(this).val();
                                                    var district_all = '-1;'+location_id_3;
                                                    if($.inArray( district_all, district_id ) >= 0){
                                                        $('#select_district_id_3 option').prop('disabled', true);
                                                        $("#select_district_id_3 option[value='"+district_id+"']").prop('disabled', false);
                                                    }else{
                                                        $("#select_district_id_3 option[value='"+district_all+"']").prop('disabled', true);
                                                    }
                                                    if(jQuery.isEmptyObject(district_id)){
                                                        $('#select_district_id_3 option').prop('disabled', false);
                                                    }
                                                    $('#select_district_id_3').trigger("chosen:updated");
                                                });
                                            
                                            
                                                $("#select_location_id_1, #select_location_id_2, #select_location_id_3").change(function(){
                                            		
                                            		$('#list-workplace-desired .item.active').last().find('.chosen-select-max-three').prop('disabled', false);
                                            		$('#select_district_id_1,#select_district_id_2,#select_district_id_3').trigger("chosen:updated");
                                                    var location_id_1 = $("#select_location_id_1").val();
                                                    var location_id_2 = $("#select_location_id_2").val();
                                                    var location_id_3 = $("#select_location_id_3").val();
                                                    $("#select_location_id_1 option").prop('disabled', false);
                                                    $("#select_location_id_3 option").prop('disabled', false);
                                                    $("#select_location_id_3 option").prop('disabled', false);
                                                    if(location_id_2 != ''){
                                                        $("#select_location_id_1 option[value="+location_id_2+"]").prop('disabled', true);
                                                        $("#select_location_id_3 option[value="+location_id_2+"]").prop('disabled', true);
                                                    }
                                                    if(location_id_1 != ''){
                                                        $("#select_location_id_2 option[value="+location_id_1+"]").prop('disabled', true);
                                                        $("#select_location_id_3 option[value="+location_id_1+"]").prop('disabled', true);
                                                    }
                                                    if(location_id_3 != ''){
                                                        $("#select_location_id_2 option[value="+location_id_3+"]").prop('disabled', true);
                                                        $("#select_location_id_1 option[value="+location_id_3+"]").prop('disabled', true);
                                                    }
                                                });
                                            	$("#select_location_id_1, #select_location_id_2, #select_location_id_3").trigger('change');
                                            		$('#select_district_id_1,#select_district_id_2,#select_district_id_3').trigger("change");
                                            	$('#select_district_id_1,#select_district_id_2,#select_district_id_3').trigger("chosen:updated");
                                            });
                                        </script>
                                        <a class="btn-add" href="javascript:void(0);"><em class="material-icons">add_circle_outline</em><span>Thêm</span></a> 
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-select-chosen" id="outcountry" style="display: none">
                                                <select name="OUTCOUNTRY_ID[]" class="chosen-select-max-three" multiple="multiple" data-placeholder="Nước ngoài" style="display: none;">
                                                    <option value="22">Bangladesh</option>
                                                    <option value="14">Campuchia</option>
                                                    <option value="4">Canada</option>
                                                    <option value="25">Công Gô</option>
                                                    <option value="20">Đài Loan</option>
                                                    <option value="8">Hàn Quốc</option>
                                                    <option value="13">Hoa Kỳ</option>
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
                                                    <option value="3">Úc</option>
                                                    <option value="16">Ukraine</option>
                                                </select>
                                                <div class="chosen-container chosen-container-multi" title="" style="width: 0px;">
                                                    <ul class="chosen-choices">
                                                        <li class="search-field">
                                                            <input class="chosen-search-input default" type="search" autocomplete="off" value="Nước ngoài" style="width: 97.0156px;">
                                                        </li>
                                                    </ul>
                                                    <div class="chosen-drop">
                                                        <ul class="chosen-results"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 add-infor-hide"><a class="additional-information" href="javascript:void(0)"> <em class="material-icons">note_add </em><span>Bổ sung thêm thông tin</span></a></div>
                                <div class="col-md-12 form-of-work">
                                    <h6>* Hình thức làm việc</h6>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-checkbox">
                                                <input type="checkbox" name="chkResumeType_1" id="chkResumeType_1" checked="checked" value="1">
                                                <label for="chkResumeType_1">Nhân viên chính thức</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-checkbox">
                                                <input type="checkbox" name="chkResumeType_3" id="chkResumeType_3" value="3">
                                                <label for="chkResumeType_3">Bán thời gian</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-checkbox">
                                                <input type="checkbox" name="chkResumeType_2" id="chkResumeType_2" value="2">
                                                <label for="chkResumeType_2">Nghề tự do</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-checkbox">
                                                <input type="checkbox" name="chkResumeType_4" id="chkResumeType_4" value="4">
                                                <label for="chkResumeType_4">Thực tập</label>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="error_chkResumeType_1"></span> 
                                </div>
                            </div>
                        </div>
                        <div class="quick-upload quick-upload-2 ">
                            <div class="cb-title-h3">
                                <h3>Người tham khảo <span>Không bắt buộc</span></h3>
                            </div>
                            <div class="list-references">
                                <div class="row" id="list_refer">
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <a class="add-references" onclick="show_frmRefer(0);return false;" href="javascript:void(0);"> <em class="material-icons">note_add</em><span>Thêm người tham khảo</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="quick-upload quick-upload-2">
                            <div class="cb-title-h3">
                                <h3>Quyền riêng tư của hồ sơ</h3>
                            </div>
                            <div class="status-area">
                                <div class="switch-status switch-status-element">
                                    <a href="javascript:void(0);" data-type="1" class="lock switch-status-element-1 active"><em class="mdi mdi-lock"></em>Khóa</a>
                                    <a href="javascript:void(0);" data-type="2" class="public switch-status-element-2 "><em class="mdi mdi-web"></em>Công khai</a>
                                    <a href="javascript:void(0);" data-type="3" class="flash switch-status-element-3"><em class="mdi mdi-flash"></em>Khẩn cấp</a>
                                </div>
                                <div class="swap-content-1">
                                    <p class="content-1 active">
                                        Bạn đang <span>vô hiệu hóa</span> hồ sơ. Nhà tuyển dụng sẽ không thấy được hồ sơ này của bạn.													
                                    </p>
                                    <p class="content-2">
                                        Hồ sơ của bạn đang ở trạng thái <span>Công Khai</span>. Nhà tuyển dụng có thể tìm thấy Hồ sơ này của bạn.														
                                    </p>
                                    <p class="content-3">
                                        Hồ sơ của bạn đang ở trạng thái <span>Khẩn cấp</span>. Hồ sơ của bạn sẽ được ưu tiên tìm thấy bởi các nhà tuyển dụng.															
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <input type="hidden" value="0" id="rs_urgentjob" name="urgentjob">
                                    <input type="hidden" value="0" id="rs_chk_searchable" name="chk_searchable">
                                    <div class="form-group form-submit form-back"><a id="linkback" class="btn-back" href="javascript:void(0);"> <em class="mdi mdi-chevron-left"></em><span>Quay lại</span></a><a class="btn-gradient save-and-finish" href="javascript:void(0);" onclick="checkValidForm(2);">Lưu Và Hoàn Tất</a></div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group form-note">
                                        <p>* Thông tin bắt buộc</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <input type="hidden" value="000000" id="strConfidential" name="strConfidential">
    </form>
    <div class="hide-infor-modal" id="chooseresume" style="display: none">
        <div class="modal-title">
            <p>Chọn hồ sơ để lưu thay thế</p>
        </div>
        <div class="modal-body">
            <div id="lstResume">
            </div>
            <div class="button-modal">
                <a class="btn-gradient" onclick="chooseResumeReplace();" href="javascript:void(0);">Lưu</a>
            </div>
        </div>
    </div>
    <div class="saved-and-finish-modal-2" id="AlertUpdateResume" style="display: none">
        <div class="modal-title">
            <p>Thông báo</p>
        </div>
        <div class="modal-body">
            <p>Bạn có muốn cập nhật lại thông tin liên hệ không?</p>
            <div class="button-modal">
                <a class="btn-close-modal" href="javascript:void(0);">Đóng</a>
                <a class="btn-gradient" href="javascript:void(0);" id="btnOK">Đồng Ý</a>
            </div>
        </div>
    </div>
    <div class="hide-infor-modal" id="hide-info" style="display: none">
        <div class="modal-title">
            <p>Ẩn một số thông tin</p>
        </div>
        <div class="modal-body">
            <form action="">
                <div class="form-group form-checkbox">
                    <input class="input_confident" type="checkbox" id="chkConfidential_0" name="chkConfidential[0]" value="1">
                    <label for="chkConfidential_0">Ẩn Họ và tên</label>
                </div>
                <div class="form-group form-checkbox">
                    <input class="input_confident" type="checkbox" id="chkConfidential_1" name="chkConfidential[1]" value="1">
                    <label for="chkConfidential_1">Ẩn Địa chỉ</label>
                </div>
                <div class="form-group form-checkbox">
                    <input class="input_confident" id="chkConfidential_2" type="checkbox" name="chkConfidential[3]" value="1">
                    <label for="chkConfidential_2">Ẩn Số điện thoại</label>
                </div>
            </form>
            <div class="button-modal"><a class="btn-gradient" onclick="$.fancybox.close();" href="javascript:void(0);">Lưu lại</a></div>
        </div>
    </div>
    <script type="text/javascript">
        $(document).ready(function() {
        	$('#btnOK').click(function(){
        		if($('#popup_resume').val() == 1){
        			showboxchooseresume();
        		}else{
        			submitForm();
        			$.fancybox.close();
        		}
        	});
        	$('#btnClose, .btn-close-modal').click(function(){
        		$.fancybox.close();
        	});
        
        	$('.input_confident').click(
        		function(){
        			var cR = '';
        			var name = $(this).attr('name');
        			var vS = $('#strConfidential').val();
        			if($(this).is(':checked'))
        				cR = '1';
        			else
        				cR = '0';
        
        			if(name == 'chkConfidential[0]')
        				vS = vS.replaceAt(0, cR);
        			else if(name == 'chkConfidential[1]')
        				vS = vS.replaceAt(1, cR);
        			else if(name == 'chkConfidential[3]')
        				vS = vS.replaceAt(3, cR);
        			$('#strConfidential').val(vS);
        		}
        	);
        
        	String.prototype.replaceAt=function(index, char) {
        		var a = this.split("");
        		a[index] = char;
        		return a.join("");
        	}
        });
        function showConfident() {
        	$.fancybox.close();
        	$.fancybox.open({
        		'src': '#confidential',
        	});
        }
        function showboxchooseresume() {
        	$.fancybox.close();
        	$.fancybox.open({
        		'src': '#chooseresume',
        	});
        }
        function showboxupdateinfor() {
        	$.fancybox.close();
        	$.fancybox.open({
        		'src': '#AlertUpdateResume',
        	});
        }
        function chooseResumeReplace()
        {
        	var resume = $('input[name=resume]:checked').val();
        	if(parseInt(resume) > 0){
        		$.ajax({
        			type: "POST",
        			url: PATH_KIEMVIEC+'jobseekers/myresume/choseresumereplace',
        			data: 'resume='+resume+'&jobseeker_id='+$('#member_id').val(),
        			beforeSend:function(){$("#loading").show();},
        			complete:function(){$("#loading").hide();},
        			success: function(data){
        				if(parseInt(data) > 0){
        					submitForm();
        				}
        				$.fancybox.close();
        			}
        		});
        	}else{
        		alert(language.js_resume_save_choose_resume_required);
        	}
        }
    </script>
    <script src="{{ asset('js/employ/chosen.jquery')}}">/*chosen.jquery.js*/</script>
    <div id="date_time_picker" class="dtpicker-overlay dtpicker-mobile">
        <div class="dtpicker-bg">
            <div class="dtpicker-cont">
                <div class="dtpicker-content">
                    <div class="dtpicker-subcontent"></div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="https://careerbuilder.vn/vi/jobseekers/getdistricts"></script>
    <script type="text/javascript" src="https://static.careerbuilder.vn/js/jquery.formatcurrency.js"></script>
    <script language="javascript">
        var language_save_resume = {job_message_profile_update:"Cập nhật thông tin cá nhân thành công",
        				job_message_delete:"Bạn có muốn xóa không?	",
        				job_message_delete_succ:"Xóa thành công",
        				job_message_error:"Lỗi trong quá trình thực thi",
        				js_resume_upload_success:"Upload thành công",
        				js_resume_upload_unsuccess:"Tập tin bạn vừa tải lên không thành công do sai định dạng. Hệ thống hiện chỉ hỗ trợ các tập tin có đuôi *.doc, *.docx hoặc *.pdf với dung lượng không vượt quá 3MB",
        				job_upload_not_found:"Not found",
        				js_resume_skill_success:"Cập nhật kỹ năng thành công",
        				js_resume_select_skill:"Vui lòng chọn kỹ năng làm việc",
        				js_resume_action_not_success:"Thực hiện không thành công",
        				js_resume_exp_insert_success:"Thêm kinh nghiệm thành công",
        				js_resume_exp_edit_success:"Thành công. (Thêm kinh nghiệm làm việc nếu số năm >0)",
        				js_resume_education_insert_success:"Thêm bằng cấp thành công",
        				js_resume_education_edit_success:"Cập nhật bằng cấp thành công",
        				job_message_delete_exp:"Bạn có muốn xóa kinh nghiệm này?",
        				job_message_delete_edu:"Bạn có muốn xóa học vấn này?",
        				job_message_delete_refer:"Bạn có muốn xóa người tham khảo này?",
        				js_resume_delete2:"Xóa",
        				js_resume_limit_check	:"Tối đa 3 lựa chọn",
        				LANG_ERROR_RESUME_SALARY_FROM_TO:" Bạn vui lòng nhập mức lương tối thiểu là 500,000(VND) và tối đa 999,000,000(VND) hoặc tối thiểu 25(USD) và tối đa 99.999(USD).",
        				js_resume_Choice:"Chọn",
        				js_resume_All_Choice:"Chọn",
        				js_resume_selected:"# lựa chọn",
        				js_resume_exp_select:"Vui lòng chọn kinh nghiệm",
        				js_resume_jobtype_select:"Vui lòng chọn loại hình làm việc",
        				js_resume_workingtype_select:"Vui lòng chọn hình thức làm việc",
        				js_resume_currentlevel_select:"Vui lòng chọn cấp bậc hiện tại",
        				js_resume_degree_select:"Vui lòng chọn bằng cấp cao nhất",
        				js_resume_resume_title_required:"Vui lòng nhập vị trí mong muốn",
        				js_resume_level_required:"Vui lòng chọn cấp bậc",
        				js_resume_industry_required:"Vui lòng chọn ngành nghề",
        				js_resume_location_required:"Vui lòng chọn nơi muốn làm việc",
        				js_resume_objective_job_required:"Vui lòng nhập mục tiêu nghề nghiệp",
        				job_upload_max:"Dung lượng hồ sơ vượt quá giới hạn cho phép (<3 MB). Bạn vui lòng gửi hồ sơ có dung lượng nhỏ hơn.",
        				job_message_update:"Cập nhật thành công",
        				message_common:"Vui lòng thao tác đầy đủ để hoàn thành",
        				job_message_update_resume:"<strong>Thông tin nghề nghiệp</strong> của bạn đã được cập nhật thành công. Vui lòng bấm <strong>Tiếp tục</strong> để đến bước tạo hồ sơ tiếp theo.",
        				js_resume_do_you_want_resume_searchable:"Chúc mừng bạn đã tạo hồ sơ thành công.<br / >Bạn vui lòng chọn <strong>Mặc định hồ sơ</strong> trong trường hợp muốn sử dụng hồ sơ này cho Nhà Tuyển Dụng tìm thấy bạn.<br / >Hoặc chọn <strong>Không mặc định hồ sơ</strong> trong trường hợp bạn không muốn Nhà Tuyển dụng tìm thấy bạn.<br / >(*) Bạn vẫn có thể sử dụng hồ sơ Không mặc định để nộp đơn trực tuyến cho Nhà Tuyển dụng.",
        				job_message_info_hotresume:'Chúc bạn sẽ trở thành chủ nhân của iPad 2, Nokia E72 và nhiều giải thưởng hấp dẫn khác tại chương trình  <strong> <a href="https://www.hotresume.careerbuilder.vn" > HOT Resume </a> </strong>!',
        				js_resume_experience_resume_required:'Vui lòng nhập Kinh nghiệm làm việc.',
        				js_resume_education_resume_required:'Vui lòng nhập mục quá trình học vấn.',
        				js_resume_skill_resume_required:'Vui lòng nhập Kỹ năng làm việc.',
        				job_createresume_input_full_charater:'Bạn đã nhập quá số lượng ký tự cho phép.',
        				job_createresume_input_addtitioninfo2:'ký tự',
        				job_createresume_input_over_charater:'Vui lòng nhập tối đa không quá',
        				job_createresume_input_email_phone_exist:'Vui lòng không nhập email hoặc số điện thoại',
        				js_plaese_resume_exp_company:'Vui lòng nhập tên công ty',
        				js_plaese_resume_exp_position:'Vui lòng nhập Vị trí / Chức danh',
        				js_plaese_resume_exp_city:'js_plaese_resume_exp_city',
        				js_plaese_resume_exp_month_start:'Vui lòng chọn tháng bắt đầu',
        				js_plaese_resume_exp_year_start:'Vui lòng chọn năm bắt đầu',
        				js_plaese_resume_exp_finish_end:'Vui lòng chọn thời gian kết thúc lớn hơn thời gian bắt đầu',
        				js_resume_notcomplete_status:'Chưa hoàn tất',
        				js_resume_complete_status:'Hoàn tất',
        				js_plaese_resume_edu_school:'Vui lòng nhập Trường / khóa học',
        				js_plaese_resume_edu_country:'js_plaese_resume_edu_country',
        				js_plaese_resume_edu_city:'js_plaese_resume_edu_city',
        				js_plaese_resume_edu_graduation:'js_plaese_resume_edu_graduation',
        				js_create_resume_edu_des:'Mô tả chi tiết',
        				js_alert_successful_achievement:'Cập nhật thành công',
        				js_alert_failed_achievement:'js_alert_failed_achievement',
        				js_create_resume_max_des:'Bạn nhập quá số ký tự cho phép nhập',
        				js_create_resume_refer_name:'Vui lòng nhập họ và tên',
        				js_create_resume_refer_phone:'Vui lòng nhập số điện thoại',
        				js_create_resume_refer_company:'Vui lòng nhập tên công ty',
        				js_create_resume_refer_level:'Vui lòng nhập chức vụ',
        				job_createresume_incountry:'Trong nước',
        				job_createresume_outcountry:'Nước ngoài',
        				js_resume_exp_des_required:'Vui lòng nhập mô tả công việc',
        				js_resume_attachfile_select:'Vui lòng chọn file attach',
        				js_resume_attachfile_correct_select:'Chỉ hỗ trợ định dạng <b>*.doc, .*docx, *.pdf</b>',
        				js_resume_attachfile_capacity_select:'Vui lòng chọn file có dung lượng < 3 MB',
        				job_upload_unsuccess:'Vui lòng kiểm tra lại tập đã chọn ứng tuyển. Tập tin bạn vừa tải lên không thành công do sai định dạng. Hệ thống hiện chỉ hỗ trợ các tập tin có đuôi *.doc, *.docx hoặc *.pdf với dung lượng không vượt quá 3MB',
        				member_register_write_lastname:"Họ và tên lót",
        				js_register_max_num_industry:"Bạn chỉ được chọn tối đa 5 ngành nghề",
        				js_register_not_chose_industry:"Bạn chưa chọn ngành để nhận cơ hội nghề nghiệp.",
        				member_register_view_all:"Xem tất cả",
        				member_register_view_collapse:"Thu gọn",
        				message_common:"Thông báo",
        				js_register_bday_required:"Vui lòng nhập ngày tháng năm sinh",
        				js_register_bday_valid:"Ngày tháng năm sai định dạng hoặc năm >2000",
        				js_register_bday_choose:"Chọn ngày tháng năm sinh từ lịch",
        				js_resume_save_login_fail:"Mật khẩu của bạn chưa chính xác.",
        				js_resume_save_choose_resume_required:"Vui lòng chọn hồ sơ bạn muốn thay thế",
        				LANG_ERROR_EMAIL_NULL:"Xin vui lòng nhập email của bạn.",
        				LANG_ERROR_EMAIL_IS_VALID:"Email của bạn không hợp lệ.",
        				LANG_ERROR_EMAIL_UNICODE:"Email không được nhập unicode",
        				job_message_member_inactive: " ",
        				LANG_ERROR_NAME_NULL:"Vui lòng nhập đầy đủ họ và tên của bạn.",
        				ERROR_FULL_NAME_CHARACTER:"Tên đầy đủ không cho phép nhập số và ký tự đặt biệt.",
        				LANG_ERROR_MOBILE_NULL:"Vui lòng nhập số điện thoại liên lạc của bạn",
        				LANG_ERROR_MOBILE:"Không nhập chữ cái và ký tự đặc biệt",
        				LANG_ERROR_GENDER_NULL:"Bạn cần chọn giới tính",
        				member_register_write_firstname:"Tên",
        				member_select:"Lựa chọn",
        				js_resume_resume_title_maxlength:"js_resume_resume_title_maxlength",
        				LANG_ERROR_LASTNAME:"Không nhập số và ký tự đặc biệt",
        				LANG_ERROR_LASTNAME_NULL:"Nhập Họ và Tên Lót của bạn",
        				LANG_ERROR_FIRSTNAME:"Không nhập đầu khoảng trắng, ký tự đặc biệt",
        				LANG_ERROR_FIRSTNAME_NULL:"Nhập Tên của bạn",
        				js_common_contact_information_not_complete:"Vui lòng cập nhật thông tin cá nhân"
        };
        if(typeof language === 'undefined')	var language = language_save_resume;  else	$.extend(language, language_save_resume);
        
        var arrAllCities = {0:'','14':{'1098':'Banteay Meanchey','1096':'Battambang','1092':'Kampong Chhnang','1090':'Kampong Speu','1085':'Kampot','1088':'Kandal','1084':'Kep','1091':'Koh Kong','1093':'Kratie','1104':'Otdar Meanchey','1103':'Pailin','1041':'Phnompenh','1099':'Preah Vihear','1089':'Prey Veng','1097':'Siem Reap','1100':'Stung Treng','1087':'Svay Rieng','1082':'Tbong Khmum'},'13':{'1034':'Chicago','1077':'Florida','1033':'Miami','1039':'San Diego'},'24':{'1079':'Hồng Kông'},'169':{'1318':'Khác'},'19':{'1106':'Attapeu','1107':'Bokeo','1109':'Champasak','1110':'Houaphanh','1111':'Khammouane','1113':'Luang Prabang','1115':'Phongsaly','1059':'Vientiane','1120':'Xiangkhouang'},'9':{'1019':'Kuala Lumpur','1078':'Malaysia'},'21':{'1320':'Yangon'},'2':{'1043':'Hokkaido','1001':'Tokyo','1002':'Yokohama'},'17':{'1055':'Qatar'},'23':{'1073':'Quốc tế'},'10':{'1040':'Singapore'},'16':{'1053':'Kharkiv'},'1':{'4':'Hà Nội','8':'Hồ Chí Minh','76':'An Giang','64':'Bà Rịa - Vũng Tàu','781':'Bạc Liêu','281':'Bắc Cạn','240':'Bắc Giang','241':'Bắc Ninh','75':'Bến Tre','650':'Bình Dương','56':'Bình Định','651':'Bình Phước','62':'Bình Thuận','78':'Cà Mau','26':'Cao Bằng','71':'Cần Thơ','50':'Dak Lak','1042':'Dak Nông','511':'Đà Nẵng','900':'Điện Biên','1064':'Đồng Bằng Sông Cửu Long','61':'Đồng Nai','67':'Đồng Tháp','59':'Gia Lai','19':'Hà Giang','351':'Hà Nam','39':'Hà Tĩnh','320':'Hải Dương','31':'Hải Phòng','780':'Hậu Giang','18':'Hòa Bình','321':'Hưng Yên','901':'Khác','58':'Khánh Hòa','77':'Kiên Giang','60':'Kon Tum','1071':'KV Bắc Trung Bộ','1069':'KV Đông Nam Bộ','1070':'KV Nam Trung Bộ','1072':'KV Tây Nguyên','23':'Lai Châu','25':'Lạng Sơn','20':'Lào Cai','63':'Lâm Đồng','72':'Long An','350':'Nam Định','38':'Nghệ An','30':'Ninh Bình','68':'Ninh Thuận','210':'Phú Thọ','57':'Phú Yên','52':'Quảng Bình','510':'Quảng Nam','55':'Quảng Ngãi','33':'Quảng Ninh','53':'Quảng Trị','79':'Sóc Trăng','22':'Sơn La','66':'Tây Ninh','36':'Thái Bình','280':'Thái Nguyên','37':'Thanh Hóa','54':'Thừa Thiên- Huế','73':'Tiền Giang','1065':'Toàn quốc','74':'Trà Vinh','27':'Tuyên Quang','70':'Vĩnh Long','211':'Vĩnh Phúc','29':'Yên Bái'}};
        
        $(document).ready(function()
        {
        	$('#date_time_picker').DateTimePicker({
        		dateFormat: "dd/MM/yyyy",
        		language:CURRENT_LANGUAGE,
        		dateSeparator:"/",
        		showHeader:false,
        	});
        	$('#linkback').click(function(e) {
        		e.preventDefault();
        		$('#QuickUpload_Step2').hide();
        		$('#QuickUpload_Step1').show();
        		$('html,body').animate({scrollTop: $("#QuickUpload_Step1").offset().top},'slow');
        	});
        	$('#slcountry').change(function()
        	{
        		var opt_city = arrAllCities[$('#slcountry').val()];
        		$(".error_sldistrict").html('');
        		if (typeof opt_city === "undefined") {
        			$('#slcity option').remove();
        			$('#sldistrict option').remove();
        			$('#slcity').prop('disabled', true);
        			$('#sldistrict').prop('disabled', true);
        		}else{
        			$('#slcity').prop('disabled', false);
        			$('#sldistrict').prop('disabled', false);
        			$('#slcity option').remove();
        			$('#sldistrict option').remove();
        			$.each(opt_city, function(val, text) {
        				$('#slcity').append('<option value="'+val+'">' + text + '</option>');
        			});
        			var sl_country_id  = $('#slcountry').val();
        			if(sl_country_id == 1){
        				var sl_city_id  = $('#slcity').val();
        				var str = '';
        				for(k in districts) {
        					if(sl_city_id == districts[k][1]){
        						str += '<option value="'+districts[k][0]+'">'+districts[k][2]+'</option>';
        					}
        				}
        				$('#sldistrict option').remove();
        				$('#sldistrict').append('<option value="">' + language.member_select + '</option>');
        				if(str !== ''){
        					$('#sldistrict').append(str);
        				}else{
        					$('#sldistrict').prop('disabled', true);
        				}
        			}else{
        				$('#sldistrict option').remove();
        				$('#sldistrict').prop('disabled', true);
        			}
        		}
        	});
        
        	var sl_country_id  = $('#slcountry').val();
        	var sl_city_id  = 0;
        	var sl_district_id  = 0;
        
        	var opt_city = arrAllCities[sl_country_id];
        	if (typeof opt_city === "undefined") {
        		$('#slcity option').remove();
        		$('#slcity').prop('disabled', true);
        		$('#sldistrict option').remove();
        		$('#sldistrict').prop('disabled', true);
        		$(".error_sldistrict").html('');
        	}else{
        		$(".error_sldistrict").html('');
        		$('#slcity').prop('disabled', false);
        		$('#slcity option').remove();
        		$('#sldistrict').prop('disabled', false);
        		$('#sldistrict option').remove();
        		$.each(opt_city, function(val, text) {
        			$('#slcity').append('<option value="'+val+'">' + text + '</option>');
        		});
        
        		if(sl_country_id == 1){
        			if(sl_city_id > 0){
        				$("#slcity option[value='"+sl_city_id+"']").attr('selected', 'selected');
        			}else{
        				var sl_city_id  = $('#slcity').val();
        			}
        			var str = '';
        			for(k in districts) {
        				if(sl_city_id == districts[k][1]){
        					str += '<option value="'+districts[k][0]+'">'+districts[k][2]+'</option>';
        				}
        			}
        
        			$('#sldistrict option').remove();
        			$(".error_sldistrict").html('');
        			$('#sldistrict').append('<option value="">' + language.member_select + '</option>');
        			if(str !== ''){
        				$('#sldistrict').append(str);
        				$("#sldistrict option[value='"+sl_district_id+"']").attr('selected', 'selected');
        			}else{
        				$('#sldistrict').prop('disabled', true);
        			}
        
        		}else{
        			$('#sldistrict option').remove();
        			$('#sldistrict').append('<option value="">' + language.member_select + '</option>');
        			$('#sldistrict').prop('disabled', true);
        		}
        
        	}
        
        	var rowCountChoice = $('#table_language_choice tr').length;
        	var rowCount 	   = $('#table_language tr').length;
        	if(rowCountChoice+rowCount < 10){
        		$('.addlangauge').click(
        			function(){
        				$(this).parent('div').html('<span class="ic_remove"></span><span class="addlangauge"><a href="javascript:void(0);" onclick="return RemoveRow(this);">'+language.js_resume_delete2+'</a></span>');
        			}
        		);
        	}
        
        	$("#salary_from, #salary_to").ForceNumericOnly();
        	$("#year_experience").ForceNumericOnly();
        	$("#salary_from").blur(function(){
        		if($('#salary_unit option:selected').val() == 'usd')
        			$(this).formatCurrency({digitGroupSymbol:'.'});
        		else
        			$(this).formatCurrency();
        		});
        
        	$("#salary_to").blur(function(){
        		if($('#salary_unit option:selected').val() == 'usd')
        			$(this).formatCurrency({digitGroupSymbol:'.'});
        		else
        			$(this).formatCurrency();
        	});
        
        	$('#salary_unit').change(function()
        	{
        		$('#salary_from').val('');
        		$('#salary_to').val('');
        
        		if($(this).val() == 'ltt' || $(this).val() == 'lct'){
        			$('#salary_from').prop('disabled', true);
        			$('#salary_to').prop('disabled', true);
        			return false;
        		}else{
        			$('#salary_from').prop('disabled', false);
        			$('#salary_to').prop('disabled', false);
        		}
        	});
        
        	$("#select_industry_db").chosen({ max_selected_options: 3 }).change( function() {
        		if($("#select_industry_db").val().length > 0)
        			$(".error_select_industry_db_1").html('');
        	});
        
        	$('.ui-multiselect-optgroup-label').click(function() {return false;});
        	$.validator.addMethod("exprequire", function(val, element) {
        		if($.trim(val) == '' && !($('#cboExper').is(':checked')))
        			return false;
        		return true;
        	}, language.js_resume_exp_select);
        
        	$('.fileContainer input[type=file]').css({'cursor':'pointer','display': 'block','filter': 'alpha(opacity=0)', 'opacity': '0', 'position':'absolute', 'right': '0', 'text-align': 'right', 'top': '-5px','height':'auto','border-width': '0 0 10px 200px'});
        
        
        });
        function show_frmRefer(rref_id){
        	var email=$('#email').val();
        	if(typeof email==='undefined')
        		email="";
        	$.fancybox.open({
        		'src'  : PATH_KIEMVIEC+'jobseekers/myresume/referform?resume_id='+resume_id+'&rref_id='+rref_id+'&email='+email,
        		'type' : 'ajax'
        	});
        }
        function deleteRefer(refer_id) {
        	var r = confirm(language.job_message_delete_refer);
        	if (r == true) {
        		var email = $('#email').val();
        		if(typeof email === 'undefined')
        			email = "";
        		$.ajax({
        			type: "POST",
        			url: PATH_KIEMVIEC + 'jobseekers/myresume/deleterefer',
        			data: 'resume_id=' + resume_id + '&refer_id=' + refer_id + '&email=' + email,
        			cache: false,
        			beforeSend: function () {
        				$('#referList_' + refer_id).animate({
        					opacity: 0.35
        				}, "slow");
        			},
        			success: function (data) {
        				if (parseInt(data) == 1) {
        					numListRefer--;
        					if ($("#list_refer div.col-md-6").length == 0) {
        						$("#list_refer").hide();
        					}
        					$('#referList_' + refer_id).slideUp('slow', function () {
        						$('#referList_' + refer_id).remove();
        					});
        				} else {
        					show_noti(2, language.job_message_error);
        				}
        			}
        		});
        	}
        }
        $('#cboExper').click(function(){
        	if($('#cboExper').is(':checked'))
        	{
        		$('#year_experience').attr("disabled", "disabled");
        		$('#year_experience').val("");
        		$('.error_year_experience').html('');
        	}else{
        		$('#year_experience').attr("disabled", false);
        	}
        });
        function loadDistrictProfile(location_id)
        {
        	var str = '';
        	for(k in districts) {
        		if(location_id == districts[k][1]){
        			str += '<option value="'+districts[k][0]+'">'+districts[k][2]+'</option>';
        		}
        	}
        	$('#sldistrict option').remove();
        	if(str != ''){
        		$('#sldistrict').prop('disabled', false);
        		$('#sldistrict').append(str);
        	}
        	else
        		$('#sldistrict').prop('disabled', true);
        }
        function updateAccount(){
        	if($("#form_editaccount").valid()){
        		$.ajax({
        			type:"POST",
        			url:PATH_KIEMVIEC+'jobseekers/member/updateaccount',
        			dataType:'JSON',
        			data:$('#form_editaccount').serialize(),
        			success:function(rs){
        				if(rs==1){
        					LoadInfoAccount();
        					checkCompleteAccount();
        					$.fancybox.close();
        				}else{
        					show_noti(language.js_resume_action_not_success,language.message_common);
        				}
        			}
        		});
        	}
        }
        function changLanguage(e){
        	if(e.value == '')
        		$('#add_language').hide();
        	else
        		$('#add_language').show();
        }
        
        function ajaxOnlyFile(e)
        {
        	if(e.value != ''){
        		$('#dropbox_button').attr('disabled', 'disabled');
        		$('#upload_text1').html(e.value);
        		$(".error_attach_file").html('');
        		$("#uploadFile_file").addClass('active');
        		$("#uploadFile_file input").val(e.value.replace(/.*(\/|\\)/, ''));
        	}
        }
        function removefile(e)
        {
        	$('#dropbox_button').prop('disabled', false);
        	$('#attach_file').prop('disabled', false);
        	$('#upload_text1').html('');
        	$("#uploadFile_file").removeClass('active');
        	$("#uploadFile_file input").val('');
        	$('#attach_file').val('');
        	$("#dropbox_file").val('');
        	$("#dfile_title").val('');
        	$("#dfile_size").val('');
        }
        function removeAscent (str) {
          if (str === null || str === undefined) return str;
          str = str.toLowerCase();
          str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
          str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
          str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
          str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
          str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
          str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
          str = str.replace(/đ/g, "d");
          return str;
        }
        function checkValidForm(isCont)
        {
        	$("#step_active").val(isCont);
        	var sel_location = $('select[name="LOCATION_ID[]"]');
        	sel_location.children('option').each(function(){
        		if($(this).is(':selected') && $(this).val() != ''){
        			$(this).removeAttr('disabled');
        		}
        	});
        
        	$('#salary_from').val($('#salary_from').val().replace(/[^0-9\s]/gi, ''));
        	if($('#salary_from').val() == 0) $('#salary_from').val('');
        	$('#salary_to').val($('#salary_to').val().replace(/[^0-9\s]/gi, ''));
        	if($('#salary_to').val() == 0) $('#salary_to').val('');
        
        	$.validator.addMethod('checkSalary', function(value) {
        		var unit_valid = $('#salary_unit option:selected').val();
        		if(unit_valid == 'vnd' || unit_valid == 'usd'){
        			var salary_from_valid = $('#salary_from').val();
        			var salary_to_valid = $('#salary_to').val();
        
        			if(salary_from_valid == '' && salary_to_valid == '') return false;
        			if(parseInt(salary_to_valid) < parseInt(salary_from_valid) && parseInt(salary_to_valid) > 0)
        				return false;
        
        			if(isNaN(parseInt(salary_to_valid)))
        				salary_to_valid = 0;
        			if(isNaN(parseInt(salary_from_valid)))
        				salary_from_valid = 0;
        
        			var salary_max = parseInt(salary_to_valid)>parseInt(salary_from_valid)?salary_to_valid:salary_from_valid;
        			var salary_min = parseInt(salary_from_valid)>0 ? salary_from_valid: salary_to_valid;
        
        
        			if(unit_valid == 'usd' && parseInt(salary_max) >= 100000 ) return false;
        			if(unit_valid == 'usd' && parseInt(salary_min) < 25 ) return false;
        			if(unit_valid == 'vnd' && parseInt(salary_min) < 500000 ) return false;
        			if(unit_valid == 'vnd' && parseInt(salary_max) >= 999000000 ) return false;
        
        		}
        		return true;
        	 }, language.LANG_ERROR_RESUME_SALARY_FROM_TO);
        
        	$.validator.addMethod('checkemailinactive',function(value){
        		var email = $.trim($('#email').val());
        		var result = true;
        		$.ajax({
        			async:false,
        			url:PATH_KIEMVIEC+"jobseekers/jobs/checkemailinactive",
        			data:{'email':email},
        			success:function(rs){
        				if(rs == 0)
        					result = false;
        			}
        		});
        		return result;
        	},language.message_common);
        
        	$.validator.addMethod('checkUnicode', function(value, element) {
                return (!/\s/g.test(value) && !/[ạáàảãâậấầẩẫăặắằẳẫẠÁÀẢÃÂẬẤẦẨẪĂẶẮẰẲẪêẹéèẻẽếềểễệÊẸÉÈẺẼẾỀỂỄỆọộổỗốồôóòỏõơợớờởỡỌỘỔỖỐỒÔÓÒỎÕƠỢỚỜỞỠụưứừửữựúùủũỤƯỨỪỬỮỰÚÙỦŨịíìỉĩỊÍÌỈĨỵýỳỷỹỴÝỲỶỸđĐ]/.test(value));
          	}, language.message_common);
        
        	$.validator.addMethod('check_resume_type', function (value) {
        		var checkResumeType_1 = $('#chkResumeType_1:checked').val();
        		var checkResumeType_2 = $('#chkResumeType_2:checked').val();
        		var checkResumeType_3 = $('#chkResumeType_3:checked').val();
        		var checkResumeType_4 = $('#chkResumeType_4:checked').val();
        		if(checkResumeType_1 != 1 && checkResumeType_2 != 2 && checkResumeType_3 != 3 && checkResumeType_4 != 4)
        			return false;
        		else
        			return true;
        	},"");
        
        	$.validator.addMethod('requiredlastname',function(value){
        		return ($('#lastname').val() != language.member_register_write_lastname)?true:false;
        	}, language.message_common);
        	$.validator.addMethod('requiredfirstname',function(value){
        		if($('#lastname').val() == language.member_register_write_lastname)
        			return true;
        		return ($('#firstname').val() != language.member_register_write_firstname)?true:false;
        	}, language.message_common);
        
        
        	$.validator.addMethod('check_exist_file', function (value) {
        		var aLength 	= $('#attach_file').val();
        		var dLength 	= $('#dropbox_file').val();
        		if(aLength != '' || dLength != '')
        			return true;
        		else
        			return false;
        
        	}, "");
        
        	$.validator.addMethod('check_radio_gender', function (value) {
        		if ($("#gender_m").prop("checked")) {
        			return true;
        		}else if($("#gender_f").prop("checked")) {
        			return true;
        		}
        		return false;
        
        	}, "");
        
        	$.validator.addMethod('check_industry_select', function (value) {
        		if($("#select_industry_db").val().length > 0)
        			return true;
        		return false;
        	}, language.js_resume_industry_required);
        
        	$.validator.addMethod('check_level_id', function (value) {
        		if($("#level_id").val() > 0)
        			return true;
        		return false;
        	}, language.js_resume_level_required);
        
            $.validator.addMethod("noCharsetSpecial", function (value, element) {
            	var regNoChaSpec = /^[a-zA-Z0-9\s]+$/;
            	if (!regNoChaSpec.test(removeAscent(value))) {
        		    return false;
        		}
        		return true;
            });
            $.validator.addMethod("phoneNumber", function (value, element) {
            	var regNoChaSpec = /^[0-9]{1,12}$/;
            	if (!regNoChaSpec.test(value)) {
        		    return false;
        		}
        		return true;
            });
        
        	if($("#frmResumeDetail").validate({
        		ignore: ":hidden:not(.chosen-select-max-three,#attach_file,#dropbox_file,:radio,:checkbox),:disabled",
        		onkeyup: false,
        		rules: {
        			attach_file:{check_exist_file:true,accept: "doc|DOC|docx|DOCX|pdf|PDF"},
        			resume_title:{required: true,maxlength:500},
        			select_location_db:{required: true},
        			email:{required:true, checkUnicode: true, email:true,isemail:true,checkemailinactive:true},
        			gender:{check_radio_gender: true},
        			address:{required: true, maxlength: 200},
        
        			lastname:{required:true, noCharsetSpecial: true},
        			firstname:{required:true, noCharsetSpecial: true},
        
        			sldistrict:{required: true},
        			chkResumeType_1:{check_resume_type:true},
        
        			mobile:{required: true,phoneNumber: true},
        
        			birthday:{required: true},
        			salary_unit:{checkSalary:true},
        			level_id:{check_level_id: true},
        			year_experience:{exprequire:true, max:55},
        			'INDUSTRY_ID[]':{check_industry_select: true},
        			'LOCATION_ID[]':{required: true}
        		},
        		errorPlacement: function(error, element){
        			var name = element.attr('name');
        
        			if(name == 'LOCATION_ID[]'){
        				$(".error_location_id").html(error.html());
        			}else if(name == 'INDUSTRY_ID[]'){
        				$(".error_select_industry_db_1").html(error.html());
        			}else{
        				var errorSelector = '.error_'+name;
        				var $element = $(errorSelector);
        				$(errorSelector).html(error.html()).show();
        			}
        		},
        		success: function (element) {
        			$('.error_' + element[0].htmlFor).hide();
        			element.remove();
        		},
        		messages: {
        			levelcurrent_id:{
        				required: language.js_resume_currentlevel_select
        			},
        			degree:{
        				required: language.js_resume_degree_select
        			},
        			resume_title:{
        				required:language.js_resume_resume_title_required,
        				maxlength:language.js_resume_resume_title_maxlength
        			},
        			select_location_db:{
        				required:language.js_resume_location_required
        			},
        			chkResumeType_1:{
        				check_resume_type:language.js_resume_workingtype_select
        			},
        			email: {
        				required: language.LANG_ERROR_EMAIL_NULL,
        				checkemailinactive:language.job_message_member_inactive,
        				checkUnicode: language.LANG_ERROR_EMAIL_UNICODE,
        				email: language.LANG_ERROR_EMAIL_IS_VALID,
        				isemail:language.LANG_ERROR_EMAIL_IS_VALID
        			},
        			lastname: {
        				required: language.LANG_ERROR_LASTNAME_NULL,
        				noCharsetSpecial: language.LANG_ERROR_LASTNAME
        			},
        			firstname: {
        				required: language.LANG_ERROR_FIRSTNAME_NULL,
        				noCharsetSpecial: language.LANG_ERROR_FIRSTNAME
        			},
        			mobile: {
        				required: language.LANG_ERROR_MOBILE_NULL,
        				phoneNumber: language.LANG_ERROR_MOBILE
        			},
        			gender: {check_radio_gender: language.LANG_ERROR_GENDER_NULL},
        			birthday: {required: language.js_register_bday_required},
        			attach_file:{check_exist_file:language.js_resume_attachfile_select}
        		},
        	  	invalidHandler: function(form, validator) {
        			var errors = validator.numberOfInvalids();
        			if (errors  && $("#step_active").val() == 1)
        			{
        				switch(validator.errorList[0].element.getAttribute("name"))
        				{
        					case 'INDUSTRY_ID[]':
        						$('html,body').animate({scrollTop: $(".error_select_industry_db_1").offset().top},'slow');
        						validator.resetForm();
        						break;
        					case 'LOCATION_ID[]':
        						$('html,body').animate({scrollTop: $("#error_location").offset().top},'slow');
        						validator.resetForm();
        						break;
        					default:
        						validator.errorList[0].element.focus();
        						$('html,body').animate({scrollTop: $('[name="'+validator.errorList[0].element.name+'"]').offset().top - 100},'slow');
        						break;
        				}
        			}else{
        				validator.errorList[0].element.focus();
        				$('html,body').animate({scrollTop: $('[name="'+validator.errorList[0].element.name+'"]').offset().top - 100},'slow');
        			}
        		}
        	}).form() == false) return false;
        
        	func_strip_tags_input($('#resume_title'));
        	func_strip_tags_input($('#firstname'));
        	func_strip_tags_input($('#lastname'));
        	func_strip_tags_input($('#mobile'));
        
        	if(isCont == 1){
        		if($('#private_info').val() == 1){
        			$('#QuickUpload_Step1').hide();
        			$('#QuickUpload_Step2').show();
        			$('html,body').animate({scrollTop: $("#QuickUpload_Step2").offset().top},'slow');
        			$(".error_select_industry_db_1").html('');
        
        			var chk_email_exist = false;
        			// $.ajax({
        			// 	type: "POST",
        			// 	async:false,
        			// 	url: PATH_KIEMVIEC + "jobseekers/member/emailexist",data: 'email='+$.trim($('#email').val()),
        			// 	success: function (data) {
        			// 		if (data > 0) {
        			// 			chk_email_exist = true;
        			// 		}
        			// 	}
        			// });
        			// smartech('contact', '', {
        			// 	'pk^email': $("#email").val(),
        			// 	'FIRST_NAME': $("#firstname").val(),
        			// 	'LAST_NAME': $("#lastname").val(),
        			// 	'EXISTING': chk_email_exist
        			// });
        			// smartech('identify', $("#email").val());
        			// return false;
        		}else{
        			show_noti(2, language.js_common_contact_information_not_complete, language.message_common);
        			return false;
        		}
        	}
        
        	$.ajax({
        		type: "POST",
        		url: PATH_KIEMVIEC+'jobseekers/member/registerquick',
        		data: 'email=' + $('#email').val() + '&firstname=' + $('#firstname').val() + '&lastname=' +  $('#lastname').val(),
        		beforeSend:function(){$("#loading").show();},
        		complete:function(){$("#loading").hide();},
        		success: function(result)
        		{
        			var obj = $.parseJSON(result);
        			var popup_resume = obj.popup;
        			$('#popup_resume').val(popup_resume);
        			var exist_member = obj.exist_member;
        			if($('#popup_resume').val() == 1 && obj.arrResume && $('#lstResume li').length == 0){
        				$('#lstResume').html('');
        				$.each(obj.arrResume, function(val, key) {
        					if(key.RESUME_KIND == 0)
        						$('#lstResume').append('<div class="form-group form-checkbox"><input type="radio" id="hide-infor-'+key.RESUME_ID+'" name="resume" disabled ><label for="hide-infor-'+key.RESUME_ID+'">'+key.RESUME_HEADLINE_VN+'</label></div>');
        					else
        						$('#lstResume').append('<div class="form-group form-checkbox"><input type="radio" id="hide-infor-'+key.RESUME_ID+'" name="resume" value="'+key.RESUME_ID+'" ><label for="hide-infor-'+key.RESUME_ID+'">'+key.RESUME_HEADLINE_VN+'</label></div>');
        				});
        			}
        			if(obj.member_id > 0){
        				var m_id = obj.member_id
        				$('#member_id').val(m_id);
        			}else{
        				$('#member_id').val(0);
        			}
        
        			if(exist_member == 1 && member_id < 0){
        				showboxupdateinfor();
        			}else if(exist_member == 1 && member_id > 0 && $('#private_info').val() != 1){
        				show_noti(2, language.js_common_contact_information_not_complete, language.message_common);
        				return false;
        			}else{
        				if(popup_resume == 1){
        					showboxchooseresume();
        				}else{
        					if($('#member_id').val()>0){
        						submitForm();
        					}
        				}
        			}
        		},
        		error: function (data, status, e)
        		{
        			alert(e);
        		}
        	});
        	return false;
        }
        
        function submitForm()
        {
        	if($('#dropbox_file').val() != ''){
        		var path = PATH_KIEMVIEC+'jobseekers/myresume/uploadresumedropbox';
        		$.ajax({
        			type: "POST",
        			url: path,
        			data: 'dropbox_file=' + $('#dropbox_file').val() + '&dfile_title=' + $('#dfile_title').val() + '&dfile_size=' + $('#dfile_size').val(),
        			beforeSend:function(){$("#loading").show();},
        			complete:function(){$("#loading").hide();},
        			success: function(data)
        			{
        				var obj = $.parseJSON(data);
        				if(obj.msg == '' || data.msg == 'fail' || data.msg == 'notexists' || data.msg == 'convertfail'){
        					show_noti(2, language.job_upload_unsuccess, language.message_common,	'error');
        					return false;
        				}else if(obj.msg == 'max'){
        					show_noti(2, language.job_upload_max, language.message_common,	'error');
        					return false;
        				}else if(obj.msg == 'success'){
        					$('#resume_path').val(obj.path_root_file);
        					$('#resume_path_convert').val(obj.path_convert_file);
        					$('#is_change').val(1);
        					$('#btn_SaveComplete').attr('disabled', 'disabled');
        					$('#frmResumeDetail').submit();
        				}
        			},
        			error: function (data, status, e)
        			{
        				alert(e);
        			}
        		});
        		return false;
        	}else if($('#attach_file').val() != ''){
        		var data = new FormData();
        		data.append('attach_file', $('#attach_file')[0].files[0]);
        
        		$.ajax({
        			url:PATH_KIEMVIEC+'jobseekers/myresume/uploadresume',
        			secureuri:false,
        			type: 'POST',
        			data: data,
        			enctype: 'multipart/form-data',
        			processData: false,  // tell jQuery not to process the data
        			contentType: false,   // tell jQuery not to set contentType
        			dataType:'json',
        		})
        		.done(function (data){
        			if(data.msg == '' || data.msg == 'fail' || data.msg == 'notexists' || data.msg == 'convertfail'){
        				show_noti(2, language.job_upload_unsuccess, language.message_common);
        				return false;
        			}else if(data.msg == 'max'){
        				show_noti(2, language.job_upload_max, language.message_common);
        				return false;
        			}else if(data.msg == 'success'){
        				$('#resume_path').val(data.path_root_file);
        				$('#resume_path_convert').val(data.path_convert_file);
        				$('#is_change').val(1);
        				$('#btn_SaveComplete').attr('disabled', 'disabled');
        				$('#frmResumeDetail').submit();
        			}
        		});
        
        		return false;
        	}
        }
        
    </script>
    <div class="back-drop"></div>
</main>
@endsection