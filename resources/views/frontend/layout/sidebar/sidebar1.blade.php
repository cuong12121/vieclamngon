<nav class="side-navbar">
    <div class="head-nav">
        <div class="my-cb-center">
            <h2>Vieclamngon Center</h2>
        </div>
        <?php  

            $routeName = \Request::route()->getName();
        ?>


        <ul class="list-unstyled">
            <li> <a  class="{{ $routeName==='user-dashboard'?'active':'' }}" href="{{ route('user-dashboard') }}" title="Quản lý hồ sơ"> <span>Quản lý hồ sơ</span></a></li>
            <li style="display:none"> <a href="{{ route('my-profile') }}"> <span>Hồ sơ</span></a></li>
            <li> <a href="{{ route('my-profile') }}"  class="{{ $routeName==='my-profile'?'active':'' }}"> <span>Hồ sơ </span></a></li>
           
            <li>
                <a class="collapse {{ $routeName=='work-save'||$routeName=='work-apply'?'active':'' }}" href="javascript:;"><span>Việc làm của tôi</span></a>
                <ul class="list-unstyled collapse {{ $routeName=='work-save'||$routeName=='work-apply'?'display':'' }}"  >
                    <li><a href="{{ route('work-save') }}" class="{{ $routeName =='work-save'?'active':'' }}">Việc làm đã lưu</a></li>
                    <li><a href="{{ route('work-apply') }}"  class="{{ $routeName =='work-apply'?'active':'' }}">Việc làm đã nộp</a></li>
                </ul>
            </li>
            <li> <a href="{{ route('notification-user') }}" class="{{ $routeName=='notification-user'?'active':'' }}"><span>Thông Báo Việc Làm</span></a></li>
       
            
            <li> <a href="{{ route('logoutUser') }}" title="Thoát"> <span>Thoát</span></a></li>
        </ul>
    </div>
    <div class="toggle-nav"></div>
</nav>