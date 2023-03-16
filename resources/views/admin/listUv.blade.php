@extends('admin.layout.app')
@section('content') 

<style type="text/css">
    
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>


<h2>Danh sách ứng viên</h2>


<table>

    <?php 
        $data = App\User::get();
    ?>

    <tr>
        <th>Tên ứng viên</th>
        <th>Cv ứng viên</th>
        <th>Lịch sử nộp cv</th>
        <th>Chọn nổi bật</th>
        
        <th>Xóa</th>
    </tr>
    <tr>
        @if(!empty($data))
            @foreach($data as $value)
            <tr>
                <td>{{ $value->name }}</td>
                <td><a href="{{ route('viewCvadmin', $value->id) }}"> <button type="button" class="btn btn-primary">Xem</button> </a></td>
                <td>
                    <button type="button" class="btn btn-primary"  onclick="data_apply_cv({{ $value->id }})">Xem</button>
                </td>
                <td>chọn</td>
               
                <td><a href="javascript:void(0)" onclick="remove_user({{ $value->id }})">Xóa</a></td>
             </tr>    
            @endforeach
        @endif    
        
        

    
    
    </table>

    <!-- Modal -->

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Danh sách Job đã nộp </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                   
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
<script type="text/javascript">

    function data_apply_cv(id) {
       
    

        $.ajax({
            type: 'GET',
            url: "{{ route('view-apply-job') }}",
            data:{
                id:id
            },
           
            success: function(result){
              
               $('.modal-body').append(result);
                 $('#exampleModal').modal('show');
              
                
            }
        });
        
    }
    function remove_user(id) {
       
       $.ajax({
            type: 'GET',
            url: "{{ route('Remove-user') }}",
            data:{
                id:id
            },
           
            success: function(result){
              
                window.location.href;
                
            }
        });
    }
   
    
   
</script>
@endsection