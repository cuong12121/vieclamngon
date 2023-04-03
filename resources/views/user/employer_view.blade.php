

@extends('frontend.layout.app')
@section('content') 
<div class="content-inner">
    <div class="container-fluid">
        <div class="applied-jobs-wrap">
            <div class="widget widget-10">
                <div class="widget-head">
                    <div class="cb-title-h3">
                        <h3>Nhà tuyển dụng đã xem </h3>
                    </div>
                </div>
                <div class="widget-body">
                   

                    <?php
                        $id = Auth::user()->id;

                        $data_view_cv =  Cache::get('employer_post_'. $id);
                    ?>
                    <div class="table">
                        <form name="frmJobapplied" id="frmJobapplied" method="post" action="">
                            <input type="hidden" name="intIsHide" id="intIsHide" value="1">
                            <input type="hidden" name="jobapplied_id" id="jobapplied_id">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="title">Nhà tuyển dụng</th>
                                        <th>Thời gian xem</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                   
                                    <style type="text/css">
                                        .center{
                                            text-align: center;
                                        }
                                    </style>
                                    
                                    @if(isset($data_view_cv))
                                    @foreach($data_view_cv as $val)

                                    <?php
                                        $data_employ =  DB::table('employ_info')->where('employ_id', $val['id'])->get()->first();

                                        
                                    ?>  
                                    <tr class="record-tbl">
                                        <td colspan="1">{{ $data_employ->name??'' }}</td>
                                        <td colspan="1" class="center">{{ $val['created_at']->format('d/m/Y, H:i:s') }}</td>
                                        
                                    </tr>
                                    @endforeach
                                    @endif
                                  
                                </tbody>
                            </table>
                            <div class="main-pagination">  </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection