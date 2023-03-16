@extends('frontend.layout.appfe')
@section('content')
<main>
    
    <link rel="stylesheet" type="text/css" href="{{ asset('css/common-job-detail.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/chosen.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/search-result-list-detail.css') }}">
    <section class="page-heading-tool">
        <div class="container">
            <div class="tool-wrapper">
                <div class="close-input-filter"><em class="lnr lnr-cross"></em></div>
                <div class="search-job">
                    <form>
                        <div class="form-wrap">
                            <div class="form-group form-keyword">
                                <input type="search" class="keyword" name="keyword" id="keyword" placeholder="Chức danh, Kỹ năng, Tên công ty">
                                <div class="cleartext"><em class="mdi mdi-close-circle"></em></div>
                            </div>
                            <div class="form-group form-select-chosen">
                                <select id="industry" name="industry" class="chosen-select chosen-select-max-three" data-placeholder="Tất cả ngành nghề" multiple>
                                    <option value="">Chọn ngành nghề</option>
                                    <option value="an-ninh-bao-ve_51">An Ninh / Bảo Vệ</option>
                                    <option value="an-toan-lao-dong_58">An toàn lao động</option>
                                    <option value="ban-hang-kinh-doanh_31">Bán hàng / Kinh doanh</option>
                                    <option value="ban-le-ban-si_30">Bán lẻ / Bán sỉ</option>
                                    <option value="bao-hiem_23">Bảo hiểm</option>
                                    <option value="bat-dong-san_28">Bất động sản</option>
                                    <option value="bien-phien-dich_38">Biên phiên dịch</option>
                                    <option value="buu-chinh-vien-thong_32">Bưu chính viễn thông</option>
                                    <option value="chan-nuoi-thu-y_52">Chăn nuôi / Thú y</option>
                                    <option value="chung-khoan_46">Chứng khoán</option>
                                    <option value="cntt-phan-cung-mang_63">CNTT - Phần cứng / Mạng</option>
                                    <option value="cntt-phan-mem_1">CNTT - Phần mềm</option>
                                    <option value="cong-nghe-sinh-hoc_69">Công nghệ sinh học</option>
                                    <option value="cong-nghe-thuc-pham-dinh-duong_70">Công nghệ thực phẩm / Dinh dưỡng</option>
                                    <option value="co-khi-o-to-tu-dong-hoa_14">Cơ khí / Ô tô / Tự động hóa</option>
                                    <option value="dau-khi_26">Dầu khí</option>
                                    <option value="det-may-da-giay-thoi-trang_39">Dệt may / Da giày / Thời trang</option>
                                    <option value="dich-vu-khach-hang_12">Dịch vụ khách hàng</option>
                                    <option value="du-lich_34">Du lịch</option>
                                    <option value="duoc-pham_7">Dược phẩm</option>
                                    <option value="dien-dien-tu-dien-lanh_48">Điện / Điện tử / Điện lạnh</option>
                                    <option value="do-go_35">Đồ gỗ</option>
                                    <option value="giai-tri_15">Giải trí</option>
                                    <option value="giao-duc-dao-tao_13">Giáo dục / Đào tạo</option>
                                    <option value="hang-gia-dung-cham-soc-ca-nhan_10">Hàng gia dụng / Chăm sóc cá nhân</option>
                                    <option value="hang-hai_61">Hàng hải</option>
                                    <option value="hang-khong_60">Hàng không</option>
                                    <option value="hanh-chinh-thu-ky_3">Hành chính / Thư ký</option>
                                    <option value="hoa-hoc_41">Hóa học</option>
                                    <option value="in-an-xuat-ban_64">In ấn / Xuất bản</option>
                                    <option value="ke-toan-kiem-toan_2">Kế toán / Kiểm toán</option>
                                    <option value="khoang-san_65">Khoáng sản</option>
                                    <option value="kien-truc_6">Kiến trúc</option>
                                    <option value="lao-dong-pho-thong_44">Lao động phổ thông</option>
                                    <option value="lam-nghiep_50">Lâm Nghiệp</option>
                                    <option value="luat-phap-ly_24">Luật / Pháp lý</option>
                                    <option value="moi-truong_16">Môi trường</option>
                                    <option value="moi-tot-nghiep-thuc-tap_45">Mới tốt nghiệp / Thực tập</option>
                                    <option value="my-thuat-nghe-thuat-thiet-ke_11">Mỹ thuật / Nghệ thuật / Thiết kế</option>
                                    <option value="ngan-hang_19">Ngân hàng</option>
                                    <option value="nha-hang-khach-san_29">Nhà hàng / Khách sạn</option>
                                    <option value="nhan-su_22">Nhân sự</option>
                                    <option value="noi-ngoai-that_47">Nội ngoại thất</option>
                                    <option value="nong-nghiep_5">Nông nghiệp</option>
                                    <option value="phi-chinh-phu-phi-loi-nhuan_20">Phi chính phủ / Phi lợi nhuận</option>
                                    <option value="quan-ly-chat-luong-qa-qc_42">Quản lý chất lượng (QA/QC)</option>
                                    <option value="quan-ly-dieu-hanh_17">Quản lý điều hành</option>
                                    <option value="quang-cao-doi-ngoai-truyen-thong_67">Quảng cáo / Đối ngoại / Truyền Thông</option>
                                    <option value="san-xuat-van-hanh-san-xuat_25">Sản xuất / Vận hành sản xuất</option>
                                    <option value="tai-chinh-dau-tu_59">Tài chính / Đầu tư</option>
                                    <option value="thong-ke_36">Thống kê</option>
                                    <option value="thu-mua-vat-tu_43">Thu mua / Vật tư</option>
                                    <option value="thuy-loi_53">Thủy lợi</option>
                                    <option value="thuy-san-hai-san_49">Thủy sản / Hải sản</option>
                                    <option value="thu-vien_57">Thư viện</option>
                                    <option value="thuc-pham-do-uong_21">Thực phẩm &amp; Đồ uống</option>
                                    <option value="tiep-thi-marketing_4">Tiếp thị / Marketing</option>
                                    <option value="tiep-thi-truc-tuyen_37">Tiếp thị trực tuyến</option>
                                    <option value="to-chuc-su-kien_68">Tổ chức sự kiện</option>
                                    <option value="trac-dia-dia-chat_54">Trắc địa / Địa Chất</option>
                                    <option value="truyen-hinh-bao-chi-bien-tap_66">Truyền hình / Báo chí / Biên tập</option>
                                    <option value="tu-van_9">Tư vấn</option>
                                    <option value="van-chuyen-giao-nhan-kho-van_33">Vận chuyển / Giao nhận /  Kho vận</option>
                                    <option value="xay-dung_8">Xây dựng</option>
                                    <option value="xuat-nhap-khau_18">Xuất nhập khẩu</option>
                                    <option value="y-te-cham-soc-suc-khoe_56">Y tế / Chăm sóc sức khỏe</option>
                                    <option value="bao-tri-sua-chua_71">Bảo trì / Sửa chữa</option>
                                    <option value="nganh-khac_27">Ngành khác</option>
                                </select>
                            </div>
                            <div class="form-group form-select-chosen">
                                <select id="location" name="location" class="chosen-select chosen-select-max-three" data-placeholder="Tất cả địa điểm" multiple>
                                    <option value="">Chọn địa điểm</option>
                                    <option value="ha-noi_4">Hà Nội</option>
                                    <option value="ho-chi-minh_8">Hồ Chí Minh</option>
                                    <option value="an-giang_76">An Giang</option>
                                    <option value="ba-ria-vung-tau_64">Bà Rịa - Vũng Tàu</option>
                                    <option value="bac-lieu_781">Bạc Liêu</option>
                                    <option value="bac-can_281">Bắc Cạn</option>
                                    <option value="bac-giang_240">Bắc Giang</option>
                                    <option value="bac-ninh_241">Bắc Ninh</option>
                                    <option value="ben-tre_75">Bến Tre</option>
                                    <option value="binh-duong_650">Bình Dương</option>
                                    <option value="binh-dinh_56">Bình Định</option>
                                    <option value="binh-phuoc_651">Bình Phước</option>
                                    <option value="binh-thuan_62">Bình Thuận</option>
                                    <option value="ca-mau_78">Cà Mau</option>
                                    <option value="cao-bang_26">Cao Bằng</option>
                                    <option value="can-tho_71">Cần Thơ</option>
                                    <option value="dak-lak_50">Dak Lak</option>
                                    <option value="dak-nong_1042">Dak Nông</option>
                                    <option value="da-nang_511">Đà Nẵng</option>
                                    <option value="dien-bien_900">Điện Biên</option>
                                    <option value="dong-bang-song-cuu-long_1064">Đồng Bằng Sông Cửu Long</option>
                                    <option value="dong-nai_61">Đồng Nai</option>
                                    <option value="dong-thap_67">Đồng Tháp</option>
                                    <option value="gia-lai_59">Gia Lai</option>
                                    <option value="ha-giang_19">Hà Giang</option>
                                    <option value="ha-nam_351">Hà Nam</option>
                                    <option value="ha-tinh_39">Hà Tĩnh</option>
                                    <option value="hai-duong_320">Hải Dương</option>
                                    <option value="hai-phong_31">Hải Phòng</option>
                                    <option value="hau-giang_780">Hậu Giang</option>
                                    <option value="hoa-binh_18">Hòa Bình</option>
                                    <option value="hung-yen_321">Hưng Yên</option>
                                    <option value="khac_901">Khác</option>
                                    <option value="khanh-hoa_58">Khánh Hòa</option>
                                    <option value="kien-giang_77">Kiên Giang</option>
                                    <option value="kon-tum_60">Kon Tum</option>
                                    <option value="kv-bac-trung-bo_1071">KV Bắc Trung Bộ</option>
                                    <option value="kv-dong-nam-bo_1069">KV Đông Nam Bộ</option>
                                    <option value="kv-nam-trung-bo_1070">KV Nam Trung Bộ</option>
                                    <option value="kv-tay-nguyen_1072">KV Tây Nguyên</option>
                                    <option value="lai-chau_23">Lai Châu</option>
                                    <option value="lang-son_25">Lạng Sơn</option>
                                    <option value="lao-cai_20">Lào Cai</option>
                                    <option value="lam-dong_63">Lâm Đồng</option>
                                    <option value="long-an_72">Long An</option>
                                    <option value="nam-dinh_350">Nam Định</option>
                                    <option value="nghe-an_38">Nghệ An</option>
                                    <option value="ninh-binh_30">Ninh Bình</option>
                                    <option value="ninh-thuan_68">Ninh Thuận</option>
                                    <option value="phu-tho_210">Phú Thọ</option>
                                    <option value="phu-yen_57">Phú Yên</option>
                                    <option value="quang-binh_52">Quảng Bình</option>
                                    <option value="quang-nam_510">Quảng Nam</option>
                                    <option value="quang-ngai_55">Quảng Ngãi</option>
                                    <option value="quang-ninh_33">Quảng Ninh</option>
                                    <option value="quang-tri_53">Quảng Trị</option>
                                    <option value="soc-trang_79">Sóc Trăng</option>
                                    <option value="son-la_22">Sơn La</option>
                                    <option value="tay-ninh_66">Tây Ninh</option>
                                    <option value="thai-binh_36">Thái Bình</option>
                                    <option value="thai-nguyen_280">Thái Nguyên</option>
                                    <option value="thanh-hoa_37">Thanh Hóa</option>
                                    <option value="thua-thien-hue_54">Thừa Thiên- Huế</option>
                                    <option value="tien-giang_73">Tiền Giang</option>
                                    <option value="toan-quoc_1065">Toàn quốc</option>
                                    <option value="tra-vinh_74">Trà Vinh</option>
                                    <option value="tuyen-quang_27">Tuyên Quang</option>
                                    <option value="vinh-long_70">Vĩnh Long</option>
                                    <option value="vinh-phuc_211">Vĩnh Phúc</option>
                                    <option value="yen-bai_29">Yên Bái</option>
                                    <option value="banteay-meanchey_1098">Banteay Meanchey</option>
                                    <option value="battambang_1096">Battambang</option>
                                    <option value="kampong-chhnang_1092">Kampong Chhnang</option>
                                    <option value="kampong-speu_1090">Kampong Speu</option>
                                    <option value="kampot_1085">Kampot</option>
                                    <option value="kandal_1088">Kandal</option>
                                    <option value="kep_1084">Kep</option>
                                    <option value="koh-kong_1091">Koh Kong</option>
                                    <option value="kratie_1093">Kratie</option>
                                    <option value="otdar-meanchey_1104">Otdar Meanchey</option>
                                    <option value="pailin_1103">Pailin</option>
                                    <option value="phnompenh_1041">Phnompenh</option>
                                    <option value="preah-vihear_1099">Preah Vihear</option>
                                    <option value="prey-veng_1089">Prey Veng</option>
                                    <option value="siem-reap_1097">Siem Reap</option>
                                    <option value="stung-treng_1100">Stung Treng</option>
                                    <option value="svay-rieng_1087">Svay Rieng</option>
                                    <option value="tbong-khmum_1082">Tbong Khmum</option>
                                    <option value="chicago_1034">Chicago</option>
                                    <option value="florida_1077">Florida</option>
                                    <option value="miami_1033">Miami</option>
                                    <option value="san-diego_1039">San Diego</option>
                                    <option value="hong-kong_1079">Hồng Kông</option>
                                    <option value="khac_1318">Khác</option>
                                    <option value="attapeu_1106">Attapeu</option>
                                    <option value="bokeo_1107">Bokeo</option>
                                    <option value="champasak_1109">Champasak</option>
                                    <option value="houaphanh_1110">Houaphanh</option>
                                    <option value="khammouane_1111">Khammouane</option>
                                    <option value="luang-prabang_1113">Luang Prabang</option>
                                    <option value="phongsaly_1115">Phongsaly</option>
                                    <option value="vientiane_1059">Vientiane</option>
                                    <option value="xiangkhouang_1120">Xiangkhouang</option>
                                    <option value="kuala-lumpur_1019">Kuala Lumpur</option>
                                    <option value="malaysia_1078">Malaysia</option>
                                    <option value="yangon_1320">Yangon</option>
                                    <option value="hokkaido_1043">Hokkaido</option>
                                    <option value="tokyo_1001">Tokyo</option>
                                    <option value="yokohama_1002">Yokohama</option>
                                    <option value="qatar_1055">Qatar</option>
                                    <option value="quoc-te_1073">Quốc tế</option>
                                    <option value="singapore_1040">Singapore</option>
                                    <option value="kharkiv_1053">Kharkiv</option>
                                </select>
                            </div>
                            <div class="form-group form-submit">
                                <button class="btn-gradient" onClick="return validataSearchHomePage('vi');">
                                    <p>Tìm Ngay</p>
                                    <span class="mdi mdi-magnify"></span> 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="mobile-filter-2"><span class="mdi mdi-filter-outline"></span></div>
                <div class="mobile-filter toollips">
                    <span class="mdi mdi-filter-outline"></span>
                    <p>Lọc</p>
                    <div class="toolip">
                        <p>Lọc</p>
                    </div>
                </div>
                <div class="switch-group toollips">
                    <div class="form-group">
                        <label for="work-home-fli">Work from home
                        <input id="work-home-fli" type="checkbox"                 onclick="validFilterdataSearch('vi', 'homework', this);">
                        <span class="slider"></span> </label>
                    </div>
                    <div class="toolip">
                        <p>Bật để hiển thị công việc "Việc Làm Từ Nhà"</p>
                    </div>
                </div>
                <input type="hidden" name="url_page_search" id="url_page_search"
                    value="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html" />
                <div class="change-display">
                    <ul>
                        <li class="list-view-mode  active">
                            <a
                                href="javascript:;"><span
                                class="mdi mdi-view-list"></span></a>
                            <div class="toolip">
                                <p>Chuyển qua chế độ xem danh sách</p>
                            </div>
                        </li>
                        <li class="quick-view-mode ">
                            <a
                                href="javascript:searchJobView('detail');"><span
                                class="mdi mdi-view-quilt"></span></a>
                            <div class="toolip">
                                <p>Chuyển qua chế độ xem nhanh</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="filters-wrapper">
            <div class="container">
                <div class="title-filter">
                    <div class="close-filter"><em class="lnr lnr-cross"></em></div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-lg-2">
                        <div class="form-group form-select">
                            <label> Mức lương</label>
                            <select name="salary" id="salary">
                                <option value="">Tất cả</option>
                                <option value=3 >Từ  3.000.000 đ</option>
                                <option value=5 >Từ  5.000.000 đ</option>
                                <option value=7 >Từ  7.000.000 đ</option>
                                <option value=10 >Từ  10.000.000 đ</option>
                                <option value=15 >Từ  15.000.000 đ</option>
                                <option value=20 >Từ  20.000.000 đ</option>
                                <option value=30 >Từ  30.000.000 đ</option>
                                <option value=40 >Từ 40.000.000 đ</option>
                                <option value=50 >Từ 50.000.000 đ</option>
                                <option value=60 >Từ 60.000.000 đ</option>
                                <option value=70 >Từ 70.000.000 đ</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-2">
                        <div class="form-group form-select">
                            <label>Cấp bậc</label>
                            <select id="level" name="level">
                                <option value="">Tất cả</option>
                                <option
                                    value="sinh-vien-thuc-tap-sinh_1">
                                    Sinh viên/ Thực tập sinh
                                </option>
                                <option
                                    value="moi-tot-nghiep_2">
                                    Mới tốt nghiệp
                                </option>
                                <option
                                    value="nhan-vien_3">
                                    Nhân viên
                                </option>
                                <option
                                    value="truong-nhom-giam-sat_4">
                                    Trưởng nhóm / Giám sát
                                </option>
                                <option
                                    value="quan-ly_5">
                                    Quản lý
                                </option>
                                <option
                                    value="quan-ly-cap-cao_11">
                                    Quản lý cấp cao
                                </option>
                                <option
                                    value="dieu-hanh-cap-cao_12">
                                    Điều hành cấp cao
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-2">
                        <div class="form-group form-select">
                            <label>Đăng trong vòng</label>
                            <select name="days" id="days">
                                <option value="">Tất cả</option>
                                <option value="3" >
                                    3 ngày trước
                                </option>
                                <option value="7" >
                                    1 tuần trước
                                </option>
                                <option value="14" >
                                    2 tuần trước
                                </option>
                                <option value="30" >
                                    1 tháng trước 
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-2">
                        <div class="form-group form-select">
                            <label>Hình thức việc làm</label>
                            <select name="job_type" id="job_type">
                                <option value="">Tất cả</option>
                                <option value="nhan-vien-chinh-thuc_1000"
                                    >Nhân viên chính thức
                                </option>
                                <option value="tam-thoi-du-an_0100"
                                    >Tạm thời/Dự án
                                </option>
                                <option value="thoi-vu-nghe-tu-do_0010"
                                    >Thời vụ - Nghề tự do
                                </option>
                                <option value="thuc-tap_0001"
                                    >Thực tập
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-2">
                        <div class="form-group">
                            <label>Phúc lợi mong muốn</label>
                            <div class="edit-multiselect">
                                <select multiple="multiple" name="benefit" id="benefit" size="1" class="multiselect2" title="Chọn"
                                    style="width: 240px">
                                    <option value="che-do-bao-hiem_2"
                                        >Chế độ bảo hiểm</option>
                                    <option value="du-lich_3"
                                        >Du Lịch</option>
                                    <option value="che-do-thuong_8"
                                        >Chế độ thưởng</option>
                                    <option value="cham-soc-suc-khoe_9"
                                        >Chăm sóc sức khỏe</option>
                                    <option value="dao-tao_10"
                                        >Đào tạo</option>
                                    <option value="tang-luong_11"
                                        >Tăng lương</option>
                                    <option value="laptop_1"
                                        >Laptop</option>
                                    <option value="phu-cap_4"
                                        >Phụ cấp</option>
                                    <option value="xe-dua-don_5"
                                        >Xe đưa đón</option>
                                    <option value="du-lich-nuoc-ngoai_6"
                                        >Du lịch nước ngoài</option>
                                    <option value="dong-phuc_7"
                                        >Đồng phục</option>
                                    <option value="cong-tac-phi_12"
                                        >Công tác phí</option>
                                    <option value="phu-cap-tham-nien_13"
                                        >Phụ cấp thâm niên</option>
                                    <option value="nghi-phep-nam_14"
                                        >Nghỉ phép năm</option>
                                    <option value="clb-the-thao_15"
                                        >CLB thể thao</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!--<div class="col-sm-6 col-lg-6">
                        <div class="switch-group toollips">
                        	<div class="form-group">
                        		<label for="fast-recruitment">Tuyển gấp
                        			<input id="fast-recruitment" type="checkbox"><span class="slider"></span>
                        		</label>
                        	</div>
                        	<div class="toolip">
                        		<p>Tuyển gấp</p>
                        	</div>
                        </div>
                        </div>-->
                    <div class="col-sm-12 col-lg-12">
                        <div class="form-group form-submit">
                            <button class="btn-reset"
                                onClick="return clearFilter();">Xóa bộ lọc</button>
                            <button class="btn-gradient" type="submit"
                                onClick="return validataSearchHomePage('vi');">Tìm Ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input type="hidden" id="recommend" name="recommend" value="" />
    </section>
    <script>
        var searchlist = {
          multi_select:"Tất cả",
          multi_head_select:"Tối đa 3 lựa chọn",
          multi_max_select:"multi_max_select",
          multi_select_num:"Lựa chọn",
        };
        if (typeof language === 'undefined') var language = searchlist;
        else $.extend(language, searchlist);
    </script>
    <section class="search-result-list">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-custom-xxl-9">
                    <div class="job-found">
                        <div class="job-found-amout">
                            <h1>35,479 việc làm</h1>
                        </div>
                        <div class="job-found-sort">
                            <span class="sort-title dropdown">
                                Sắp xếp theo<em class="mdi mdi-chevron-down"></em>
                                <div class="dropdown-menu">
                                    <ul>
                                        <li> <a title="Cập nhật" class="active" href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-sortdv-vi.html">Cập nhật</a></li>
                                        <li><a title="Mức lương"  href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-sortlg-vi.html">Mức lương</a></li>
                                    </ul>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div class="main-slide">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="jobs-side-list">

                                        <?php 
                                            $job= DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')->paginate(16);

                                        ?>

                                        @foreach($job as $jobs)
                                               
                                            <div class="job-item">
                                                <div class="figure">
                                                    <div class="image"><a target="_blank" href="{{ route('job_details', [$jobs->link, $jobs->id]) }}" title="{{ $jobs->title }}"><img src="https://dxwd4tssreb4w.cloudfront.net/web/images/common/no-logo.png" class="swiper-lazy" data-src="https://dxwd4tssreb4w.cloudfront.net/web/images/common/no-logo.png" alt="{{ $jobs->title }} " /></a></div>
                                                    <div class="figcaption">
                                                        <div class="title">
                                                            <a target="_blank" href="{{ route('job_details', [$jobs->link, $jobs->id]) }}" title="{{ $jobs->title  }}">{{ $jobs->title  }}</a>
                                                        </div>


                                                        <div class="caption">
                                                            <a class="company-name" href="/nha-tuyen-dung/{{ $jobs->links }}" title="{{ $jobs->links }}" target="_blank">{{ $jobs->name }} </a>
                                                            <p class="salary">{!! $jobs->salary  !!}</p>
                                                            <div class="location">
                                                                <em class="mdi mdi-map-marker"></em>
                                                                <p> Hà Nội</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    @if (Auth::check()) 
                                                    <div class="top-icon"> <span class="top apply-job" onclick="apply('{{ $jobs->id }}')">Apply</span> </div>

                                                   

                                                    <div class="saves-icon"> <span class="top save-job" onclick="saveJob('{{ $jobs->id }}')">Save</span> </div>
                                                    @endif
                                                </div>
                                            </div>
                                        
                                        @endforeach


                                       
                                        <script>
                                            $(document).ready(function(){
                                              if(memberLogin == 'yes'){
                                            	checkApply();
                                              }
                                            });
                                        </script>
                                    </div>
                                    <!-- <div class="pagination">
                                        <ul>
                                            <li class="active"><a href="javascript:void(0);">1</a></li>
                                            <li><a href=https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-2-vi.html>2</a></li>
                                            <li><a href=https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-3-vi.html>3</a></li>
                                            <li><a href=https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-4-vi.html>4</a></li>
                                            <li><a href=https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-5-vi.html>5</a></li>
                                            <li class="next-page"><a href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-trang-2-vi.html"> <span class="mdi mdi-chevron-right"></span></a></li>
                                        </ul>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sticker-jobs">
                        <div class="icons"><em class="material-icons">access_alarms</em></div>
                        <div class="content">
                            <p>Gửi tôi việc làm tương tự</p>
                        </div>
                        <div class="button"> <a href="javascript:;" onclick="return adVanceJobalert();">Đăng ký ngay</a></div>
                    </div>
                    <div class="job-bottom-banner" style="text-align:center;">
                        <script type='text/javascript'><!--// <![CDATA[
                            /* [id853] CB_JSK_SearchResult_Banner_1410x140_01 */
                            OA_show(853);
                            // ]]> -->
                        </script>
                    </div>
                </div>
                <div class="col-lg-4 col-custom-xxl-3">
                    <div class="list-banner-search-result">
                        <!-- remve class sticky-->
                        <div class="banner-ad">
                            <script type='text/javascript'><!--// <![CDATA[
                                /* [id854] CB_JSK_SearchResult_Banner_390x270_01 */
                                OA_show(854);
                                // ]]> -->
                            </script>
                        </div>
                        <div class="banner-ad">
                            <script type='text/javascript'><!--// <![CDATA[
                                /* [id855] CB_JSK_SearchResult_Banner_390x270_02 */
                                OA_show(855);
                                // ]]> -->
                            </script>
                        </div>
                        <div class="banner-ad">
                            <script type='text/javascript'><!--// <![CDATA[
                                /* [id856] CB_JSK_SearchResult_Banner_390x270_03 */
                                OA_show(856);
                                // ]]> -->
                            </script>
                        </div>
                        <div class="banner-ad" style="text-align:center">
                            <script type='text/javascript'><!--// <![CDATA[
                                /* [id772] CB_JSK_SearchResult_Banner_390x270_04 */
                                OA_show(772);
                                // ]]> -->
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="advanced-search-modal" style="display: none">
    </div>
     <script src="{{ asset('js/footer2.js') }}">/*swiper.js*/</script>
    <script>/*swiper.js*/
        
        /*search-result-list.js*/
        
        $(document).ready(function(){$('.page-heading-tool .tool-wrapper .mobile-filter').on('click',function(){$('.page-heading-tool .filters-wrapper').slideToggle()})
        $('.page-heading-tool .tool-wrapper .mobile-filter-2').on('click',function(){$('.page-heading-tool .filters-wrapper').slideToggle()})
        $('.page-heading-tool .filters-wrapper .close-filter').on('click',function(){$('.page-heading-tool .filters-wrapper').slideToggle()});setInterval(function(){var text=$.trim($("#keyword").val());if(text!=""){$('.cleartext').addClass('active');}else{$('.cleartext').removeClass('active');}},100);$('.cleartext').click(function(){$('#keyword').val('');});if($(window).width()<1025){$('.page-heading-tool .search-job .form-keyword').on('click',function(){if($('.page-heading-tool').hasClass('mobile-hide')){$('.page-heading-tool .search-job .form-select-chosen').css('margin-bottom','5px')
        $('.page-heading-tool .search-job .form-select-chosen, .page-heading-tool .search-job .form-submit').slideDown()
        $('.page-heading-tool .close-input-filter').addClass('active')
        $('.page-heading-tool .tool-wrapper').addClass('mobile-show')
        setTimeout(function(){$('.page-heading-tool .search-job .form-select-chosen').css('overflow','initial');fixWidthChosen();},1000)}})
        $('.page-heading-tool .close-input-filter').on('click',function(){$(this).removeClass('active')
        $('.page-heading-tool .search-job .form-select-chosen, .page-heading-tool .search-job .form-submit').slideUp()
        $('.page-heading-tool .tool-wrapper').removeClass('mobile-show')})}
        $('.filter-item .view-more ').on('click',function(){$(this).prev().slideToggle()
        $(this).children('span').toggleClass('hidden')})
        $('.Advanced-Search-Popup').on('click',function(e){e.preventDefault()
        $.fancybox.open($('.advanced-search-modal'))})
        $(".jobs-side-list img.lazy-img").lazy();var fixWidth=fixWidth1=0;$(document).on('scroll',function(){$(window).scroll(function(event){var heightFilter=$('.page-heading-tool').height()
        var scroll=$(window).scrollTop();if(scroll<=60){$('.page-heading-tool').addClass('mobile-show-all')
        if(fixWidth==0)
        {fixWidth=1;fixWidthChosen();}}else{fixWidth=0;$('.page-heading-tool').removeClass('mobile-show-all')}
        if(scroll>=(heightFilter+60)){fixWidth1=0;$('.page-heading-tool').addClass('mobile-hide');$('.tool-wrapper').addClass('mobile-height');}else{$('.page-heading-tool').removeClass('mobile-hide');$('.tool-wrapper').removeClass('mobile-height');if(fixWidth1==0)
        {fixWidth1=1;fixWidthChosen();}}});})
        $('.multiselect2').multiselect({header:language.multi_head_select,noneSelectedText:language.multi_select,selectedText:"# "+language.multi_select_num,click:function(event,ui){var id=$(this).attr('id');count=$(this).multiselect("widget").find("input:checked").length;if(count>3){return false;}
        if(count>0)$('.'+id+'_selected').show();else $('.'+id+'_selected').hide();if(ui.checked){var parent_id='.'+id+'_selected ul';var str='<li id="'+id+'_'+ui.value+'">';str+='<span class="asmListItemLabel">'+ui.text+'</span>';str+='<a href="javascript:void(0);" onclick="removeSelected(this, \''+id+'\', \''+ui.value+'\')" class="asmListItemRemove">Delete</a>';str+='</li>';$(parent_id).append(str);}else{$('#'+id+'_'+ui.value).remove();}}});$(".ui-multiselect-menu").appendTo('.edit-multiselect');});$(function(){$(".btn-close-modal").on("click",function(){$.fancybox.close();});});
    </script>
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
                        <input type="hidden" name="csrf_token" value= "e562d79a584b02f36a34bfe53506f732ca97103772b7a7c1ac041d7731b851f1" />  
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
    <script type="text/javascript"></script>
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
    <script>
        var language_psearchlist = {
        	job_chk_save_jobs_saved:"Việc làm đã lưu",
        	job_chk_save_jobs_save:"Lưu việc làm"
        };
        if(typeof language === 'undefined')	var language = language_psearchlist;
        else	$.extend(language, language_psearchlist);
        var list_job_id = [];
        $(document).ready(function(){
          if(memberLogin == 'yes'){
        	$('.save-job').each(function(){
        	  var id = $(this).data('id');
        	  list_job_id.push(id);
        	});
        	var check_job = $.ajax({
        	  url: ROOT_KIEMVIEC+'jobseekers/check-save-job',
        	  dataType: 'json',
        	  data: 'lst_id='+list_job_id.join()
        	});
        	var finish_chk = check_job.then(function(data){
        	  if(data.status = 1){
        		$.each(data.result, function(i, item) {
        		  if(item.status == 1){
        			$(".chk_save_"+item.id).addClass('saved');
        			$(".chk_save_"+item.id).find('.text').html(language.job_chk_save_jobs_saved);
        			$(".chk_save_value_"+item.id).val(1);
        		  }else{
        			$(".chk_save_value_"+item.id).val(0);
        			$(".chk_save_"+item.id).find('.text').html(language.job_chk_save_jobs_save);
        		  }
        		});
        	  }
        	});
          }
        });
    </script>
    <script type="text/javascript">
        var arrData = {"similar":0,"OWNER":"kiemviec","COUNT_SEARCH":true,"SORT":"dv","SORT_BY":"desc","SORT_TITLE":"dv"};
    </script> 
    <div class="back-drop"></div>
</main>
@endsection