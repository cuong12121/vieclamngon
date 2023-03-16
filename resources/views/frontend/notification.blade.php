@extends('frontend.layout.app')
@section('content') 
<div class="content-inner">
        <div class="container-fluid">
            <div class="job-alerts-db-wrap">
                <div class="widget widget-10">
                    <div class="widget-head">
                        <div class="cb-title-h3">
                            <h3>Thông Báo Việc Làm</h3>
                        </div>
                    </div>
                    <div class="widget-body">
                        <div class="content">
                            <p>Bạn có thể tạo tối đa<font color="#ff0000"> 10 </font> thông báo việc làm và đăng kí nhận qua email tối đa <font color="#ff0000">3 </font>thông báo việc làm cùng một lúc. Để xem danh sách các công việc theo từng thông báo, bạn vui lòng click vào tên của từng thông báo trong danh sách bên dưới.</p>
                        </div>
                        <div class="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="job-alert">Tên thông báo</th>
                                        <th>Ngày tạo</th>
                                        <th>Công việc phù hợp</th>
                                        <th>Nhận email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                                                                                        </tbody>
                            </table>
                        </div>
                        <div class="button-add"><a class="btn-gradient" href="javascript:void(0)" onclick="pAddAlert('', 'vi');return false;"><em class="material-icons">add</em><span>Tạo mới</span></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

