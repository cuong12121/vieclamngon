    @extends('frontend.layout.appfe')
    @section('content')   

    <link rel="stylesheet" type="text/css" href="{{ asset('css/employ/autocomplete-sugest.css') }}"> 
    <script src='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.js'></script>
    <link href='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.6/dist/goong-js.css' rel='stylesheet' />
    
    <section class="employer-navbar-2-1">
        <div class="container">
            <div class="category-nav">
                <p>Danh Mục</p>
                <em class="mdi mdi-chevron-down"></em> 
            </div>
           
        </div>
    </section>

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

    @endsection    

    <div class="html_post_job_worklocation" id="html_post_job_worklocation" style="display: none">
        <div class="item_post_job_location">
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group form-select">
                        <label>
                            Nơi làm việc <font style="color: red">*</font>
                        </label>
                        <select name="LOCATION_ID[]"  class="select_location">
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
                            <optgroup label="Campuchia" >
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
                        </optgroup>                                                                                                                                                                                                                               >
                            <option value="1018" >Seoul</option>
                        </optgroup>
                                                                                <optgroup label="Hoa Kỳ" >
                            <option value="1034" >Chicago</option>
                            <option value="1077" >Florida</option>
                            <option value="1033" >Miami</option>
                            <option value="1039" >San Diego</option>
                        </optgroup>
                                                                                <optgroup label="Hồng Kông" >
                            <option value="1079" >Hồng Kông</option>
                        </optgroup>
                                                                                <optgroup label="Khác" >
                            <option value="1318" >Khác</option>
                        </optgroup>
                                                                                <optgroup label="Lào" >
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
                                                                                <optgroup label="Malaysia" >
                            <option value="1019" >Kuala Lumpur</option>
                            <option value="1078" >Malaysia</option>
                        </optgroup>
                                                                                <optgroup label="Myanmar" >
                            <option value="1320" >Yangon</option>
                        </optgroup>
                                                                                <optgroup label="Nhật Bản" >
                            <option value="1319" >Aichi</option>
                            <option value="1043" >Hokkaido</option>
                            <option value="1000" >Osaka</option>
                            <option value="1001" >Tokyo</option>
                            <option value="1002" >Yokohama</option>
                        </optgroup>
                                                                                <optgroup label="Qatar" >
                            <option value="1055" >Qatar</option>
                        </optgroup>
                                                                                <optgroup label="Quốc tế" >
                            <option value="1073" >Quốc tế</option>
                        </optgroup>
                                                                                <optgroup label="Singapore" >
                            <option value="1040" >Singapore</option>
                        </optgroup>
                                                                                                                                            <optgroup label="Úc" >
                            <option value="1004" >Melbourne</option>
                            <option value="1005" >Sydney</option>
                        </optgroup>
                                                                                <optgroup label="Ukraine" >
                            <option value="1053" >Kharkiv</option>
                        </optgroup>
                    </select>
                        <span class="form-error"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group form-select-chosen">
                        <label>Địa chỉ làm việc</label>
                        <select name="work_location[]" class="work_location select_worklocation" multiple data-placeholder="Địa điểm làm việc">
                            <option value="" >Chọn địa điểm làm việc</option>
                        </select>
                        <span class="form-error"></span>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-center">
                    <div class="form-group form-checkbox mt-5">
                        <input type="checkbox" id="0-1">
                        <label for="0-1">Bảo mật địa điểm làm việc</label>
                    </div>
                    <a class="btn-delete ml-40 mt-5 delete-location-more" href="javascript:void(0)"><em class="material-icons">highlight_off</em>Xóa</a>
                </div>
            </div>
        </div>
    </div>
    
      
    </main>
           

<script src="{{ asset('js/employ/employ-form-js2.js') }}"></script>

<script src="{{ asset('js/employ/auto-employ.js') }}"></script>
