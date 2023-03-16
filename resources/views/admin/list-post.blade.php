@extends('admin.layout.app')
@section('content') 

<section class="content">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Posts</h1>
                </div>
                <div class="col-sm-6"> <a class="btn btn-primary float-right" href="{{ route('create-post') }}"> Add New </a> </div>
            </div>
        </div>
    </section>
    <div class="content px-3">
        <div class="clearfix"></div>
        <div class="card">
            <div class="card-body p-0">
                <style type="text/css"> .content h3, .content h2{
                    font-size: 20px !important;
                    font-weight: 330 !important;
                    }
                    .content h3 a, .content h2 {
                    color: #212529;
                    }
                    .post-find{
                    width: 20%;
                    } 
                </style>
                <form class="form-inline active-pink-3 active-pink-4 post-find" method="get" action="http://localhost/pj5/admins/find-post"> <button><i class="fas fa-search" aria-hidden="true"></i></button> <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" name="searchPost" required=""> </form>
                <br> 
                <div class="table-responsive">
                    <table class="table" id="posts-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>ngày viết bài</th>
                                <th>Hiển thị</th>
                                
                                
                                <th colspan="3">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            @if(!empty($post) && $post->count()>0)
                            @foreach($post as $posts)

                            <tr>
                                <td><img src="http://localhost/pj5/uploads/1677814789_top dieu hoa lg 12000 2 chieu gia re dang mua nhat.jpg" style="width:200px"></td>
                                <td>{{ $posts->title }}</td>
                                <td>Tư vấn điều hòa</td>
                                <td>{{ $posts->created_at }}</td>
                                <td><a href="javascript:voi(0)" class="active-post" onclick="add_active('1830','0')"><b style="color:green">Hiển thị</b></a></td>
                                
                                
                                <td width="120">
                                    <form method="POST" action="http://localhost/pj5/admins/posts/1830" accept-charset="UTF-8">
                                        <input name="_method" type="hidden" value="DELETE">
                                        <input name="_token" type="hidden" value="6G67GQ6gb8e6hUuDNlQbDTg4qGdYvetfrnA3jYpf"> 
                                        <div class="btn-group"> 
                                            <a href="http://localhost/pj5/gia-dieu-hoa-dang-re-the-hien-o-2-dieu-hoa-lg-12000-2-chieu-tot-nhat" class="btn btn-default btn-xs" target="_blank"> 
                                            <i class="far fa-eye"></i> </a> 
                                            <a href="http://localhost/pj5/admins/posts/1830/edit" class="btn btn-default btn-xs hover-edit">sửa</a> 
                                            <button type="submit" class="btn btn-danger btn-xs" onclick="return confirm('Are you sure?')">
                                                <i class="far fa-trash-alt"></i>
                                            </button> 
                                        </div>
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                            @endif
                           
                            
                        </tbody>
                    </table>
                </div>
                <script type="text/javascript"> function add_active(id, active){
                    $.ajax({
                    
                    type: 'GET',
                        url: "http://localhost/pj5/admins/add-active-post",
                        data: {
                            id: id,
                            active:active,
                            
                        },
                        success: function(result){
                            
                            window.location.reload();
                           
                        }
                    });
                    }
                    
                    function add_hight_light(id, active){
                    
                    $.ajax({
                    
                    type: 'GET',
                        url: "http://localhost/pj5/admins/add-hight-light-post",
                        data: {
                            id: id,
                            active:active,
                            
                        },
                        success: function(result){
                            
                            
                            window.location.reload();
                           
                        }
                    });
                    } 
                </script> 
                
            </div>
        </div>
    </div>
</section>

@endsection