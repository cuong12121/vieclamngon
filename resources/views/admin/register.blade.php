<div class="register-form">
    <form name="frmRegister" id="frmRegister" method="POST" action="{{ route('post-register-admin') }}" autocomplete="off">
        @csrf
        <div class="form-group form-text">
            <input name="name" id="name" maxlength="15" type="text" autocomplete="off" value="">
            <label for="">* Tên</label>
            <span class="error_firstname" style="display:none"></span>
        </div>
        
        <div class="form-group form-text">
            <input name="email" id="email" maxlength="50" type="text" autocomplete="off" value="" class="label-active">
            <label for="">* Email</label>
            <span class="error_email" style="display:none"></span>
        </div>
        <div class="form-group form-text">
            <input type="password" name="password" id="password" maxlength="255" autocomplete="off" value="" class="valid label-active">
            <label for="">* Mật khẩu</label>
            <span class="error_password" style="display: none;"></span>
        </div>
        <div class="form-group form-text">
            <input type="password" name="confirm_password" id="confirm_password" maxlength="255" autocomplete="off" value="">
            <label for="">* Xác nhận mật khẩu</label>
            <span class="error_confirm_password" style="display:none"></span>
        </div>
       
        <button class="btn-gradient">Đăng ký</button>
        
    </form>
</div>