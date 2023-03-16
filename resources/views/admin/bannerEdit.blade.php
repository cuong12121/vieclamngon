@extends('admin.layout.app')
@section('content')

<div class="content px-3">
    <div class="card">
        <form method="POST" action="{{ route('postEditBanner', $bannerId->id) }}" accept-charset="UTF-8" enctype="multipart/form-data">
            @csrf
            <div class="card-body">
                <div class="row">
                </div>
                <!-- Image Field -->
                <div class="form-group col-sm-6">
                    <label for="image">Image:</label>
                    <div class="input-group">
                        <div class="custom-file">
                            <input class="custom-file-input" name="image" type="file" id="image">
                            <label for="image" class="custom-file-label">Choose file</label>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <!-- Title Field -->
                <div class="form-group col-sm-6">
                    <label for="title">Title:</label>
                    <input class="form-control" name="title" type="text" value="{{ @$bannerId->title }}" id="title">
                </div>
                <!-- slogan Field -->
                <div class="form-group col-sm-6">
                    <label for="slogan">Slogan:</label>
                    <input class="form-control" name="slogan" type="text" id="slogan" value="{{ @$bannerId->slogan }}">
                </div>
                <!-- stt Field -->
                <div class="form-group col-sm-6">
                    <label for="stt">STT:</label>
                    <input class="form-control" name="stt" type="text" value="3" id="stt" value="{{ @$bannerId->stt }}">
                </div>
                <!-- Link Field -->
                <div class="form-group col-sm-6">
                    <label for="link">Link:</label>
                    <input class="form-control" name="link" type="text" value="#" id="link" value="{{ @$bannerId->link }}">
                </div>
            </div>

             <div class="card-footer">
                <input class="btn btn-primary" type="submit" value="Save">
                <a href="https://dienmaynguoiviet.vn/admins/banners" class="btn btn-default">Cancel</a>
            </div>
        </form>
    </div>
   
</div>

@endsection