@extends('admin.layout.app')
@section('content') 

<section class="content">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1>Edit Product</h1>
                </div>
            </div>
        </div>
    </section>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-12">
                    <h1>Edit Post</h1>
                </div>
            </div>
        </div>
    </section>
    <!-- <div class="btn btn-info seo-click"> Dùng cho SEO </div> -->
   <!--  <div class="content px-3">
        <div class="card seo">
            <form method="POST" action="http://localhost/pj5/admins/metaSeos/7497" accept-charset="UTF-8">
                <input name="_method" type="hidden" value="PATCH"><input name="_token" type="hidden" value="MQgWIv7EFoiEm5CLK0j09bgrSf63qHzFneKKNrnX"> 
                <div class="card-body">
                    <div class="row">
                        
                        <div class="form-group col-sm-6"> <label for="meta_title" class="form-title">Meta Title: Khuyến nghị 60 kí tự</label> <input class="form-control" name="meta_title" type="text" value="Giá điều hòa đang rẻ thể hiện ở 2 điều hòa LG 12000 2 chiều tốt nhất" id="meta_title"> </div>
                       
                        <div class="form-group col-sm-6"> <label for="meta_content" class="form-content">Meta Content:Khuyến nghị 160 kí tự</label> <input class="form-control" name="meta_content" type="text" id="meta_content"> </div>
                       
                        <div class="form-group col-sm-6"> <label for="meta_og_title" class="form-ogtitle">Meta Og Title:Khuyến nghị 60 kí tự</label> <input class="form-control" name="meta_og_title" type="text" value="Giá điều hòa đang rẻ thể hiện ở 2 điều hòa LG 12000 2 chiều tốt nhất" id="meta_og_title"> </div>
                       
                        <div class="form-group col-sm-6"> <label for="meta_og_content" class="form-ogcontent">Meta Og Content:Khuyến nghị 160 kí tự</label> <input class="form-control" name="meta_og_content" type="text" id="meta_og_content"> </div>
                        
                        <div class="form-group col-sm-6"> <label for="meta_key_words" class="form-keywords">Meta Keywords:Khuyến nghị 60 kí tự</label> <input class="form-control" name="meta_key_words" type="text" id="meta_key_words"> </div>
                        <script type="text/javascript"> $('#meta_title').bind("keydown", function(){
                            const valueTitle = $('#meta_title').val();
                            number_text      = valueTitle.length;
                            $('.form-title').text('Meta Title: Khuyến nghị 60 kí tự:Kí tự nhập '+number_text)
                            
                            
                            });
                            
                            $('#meta_content').bind("keydown", function(){
                            const valuecontent = $('#meta_content').val();
                            number_text      = valuecontent.length;
                            $('.form-content').text('Meta Content: Khuyến nghị 160 kí tự:Kí tự nhập '+number_text)
                            
                            });
                            
                            $('#meta_og_title').bind("keydown", function(){
                            const valuecontent = $(this).val();
                            number_text      = valuecontent.length;
                            $('.form-ogtitle').text('Meta Og Title: Khuyến nghị 60 kí tự:Kí tự nhập '+number_text)
                            
                            });
                            
                            $('#meta_og_content').bind("keydown", function(){
                            const valuecontent = $(this).val();
                            number_text      = valuecontent.length;
                            $('.form-ogcontent').text('Meta ogContent: Khuyến nghị 160 kí tự:Kí tự nhập '+number_text)
                            
                            });
                            
                            $('#meta_key_words').bind("keydown", function(){
                            const valuecontent = $(this).val();
                            number_text      = valuecontent.length;
                            $('.form-keywords').text('Meta Keywords:Khuyến nghị 60 kí tự:Kí tự nhập '+number_text)
                            
                            }); 
                        </script> 
                    </div>
                </div>
                <div class="card-footer"> <input class="btn btn-primary" type="submit" value="Save"> <a href="http://localhost/pj5/admins/metaSeos" class="btn btn-default">Cancel</a> </div>
            </form>
        </div>
    </div> -->
    <div class="content px-3">
        <div class="card">
            <form method="post" action="{{ !empty($data)?route('update-post/'.$data->id):route('create-posts') }}" accept-charset="UTF-8" enctype="multipart/form-data">
               
                @csrf
                <div class="card-body">
                    <div class="row">
                        <style type="text/css"> .border1{
                            border: 2px solid #e74032;
                            } 
                        </style>
                        <div class="col-md-12 draft-article" style="display: none;">  </div>
                        <!-- Title Field --> 
                        <div class="form-group col-sm-6"> <label for="title">Title:</label> <input class="form-control ui-autocomplete-input" name="title" type="text" value="{{ @$data->title }}" id="title" autocomplete="off"> </div>
                        <div class="form-group col-sm-6">
                            <label for="category">category:</label> 
                            <select id="category" class="form-control" name="category">
                                <option value="3">Kỹ năng công sở</option>
                                <option value="4">Chuyên ngành</option>
                                <option value="5">Chuyện công sở</option>
                               
                              
                            </select>
                        </div>
                        <!-- shortcontent Field --> 
                        <div class="form-group col-sm-12 col-lg-12"> <label for="shortcontent">Mô tả ngắn:</label> 
                            <textarea class="form-control content-input" name="shortcontent" cols="50" rows="10" id="shortcontent">{{ @$data->shortcontent  }}</textarea> 
                        </div>
                        <div id="article_media_holder">
                            <style type="text/css"> a.preview_media{
                                position:relative; /*this is the key*/
                                z-index:24;}
                                a.preview_media:hover{z-index:25; cursor:pointer}
                                a.preview_media span{display: none}
                                a.preview_media:hover span{
                                display:block;
                                position:absolute;
                                top:-120px; left:50px; width:auto;
                                text-align: center} 
                            </style>
                            <br> 
                        </div>
                        <style type="text/css"> .button{
                            cursor: pointer;
                            border-radius: 5px;
                            padding: 5px;
                            } 
                        </style>
                        <!-- Content Field --> 
                        
                        <div class="form-group col-sm-12 col-md-12">
                            <label for="content">Content:</label> 
                            <textarea class="form-control content-input" name="content" cols="50" rows="10" id="content" style="visibility: hidden; display: none;">
                                {!! @$data->content  !!}
                            </textarea>
                            
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div id="article_media_holder">
                                <style type="text/css"> a.preview_media{
                                    position:relative; /*this is the key*/
                                    z-index:24;}
                                    a.preview_media:hover{z-index:25; cursor:pointer}
                                    a.preview_media span{display: none}
                                    a.preview_media:hover span{
                                    display:block;
                                    position:absolute;
                                    top:-120px; left:50px; width:auto;
                                    text-align: center} 
                                </style>
                                <table class="big_table" border="1" bordercolor="#CCCCCC" cellspacing="0" cellpadding="3">
                                    <tbody>
                                        <tr> </tr>
                                    </tbody>
                                </table>
                                <br> <br> 
                            </div>
                            
                            <table class="big_table" border="1" bordercolor="#CCCCCC" cellspacing="0" cellpadding="3">
                                <tbody>
                                    <tr> </tr>
                                </tbody>
                            </table>
                            <!-- Image Field --> 
                            <div class="form-group col-sm-6">
                                <label for="image">Image:</label> 
                                <div class="input-group">
                                    <div class="custom-file"> <input class="custom-file-input" name="image" type="file" id="image"> <label for="image" class="custom-file-label">Choose file</label> </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <script type="text/javascript"> $(document).ready(function() {
                                $( "#title" ).autocomplete({  
                                    source: function( request, response ) {
                                        $.ajax({
                                            type: "GET",
                                            url: 'http://localhost/pj5/admins/seachtitlePost',
                                            data: {
                                                title: $("#title").val(),
                                
                                            },
                                            dataType: "json",
                                            
                                
                                            success: function(data) {
                                              
                                                var items = data;
                                
                                                response(items[0]);
                                               
                                            }
                                        });
                                    
                                    },
                                    minLength: 3,
                                    html:true,  
                                    autofocus: true   
                                });  
                                
                                });
                                var activeReplace = [];
                                
                                
                                
                                
                                function clicks(id,src) {
                                editor = CKEDITOR.instances.content;
                                var documentWrapper = editor.document; // replace by your CKEDitor instance ID
                                var documentNode = documentWrapper.$; // or documentWrapper['$'] ;
                                var edata = editor.getData();
                                documentNode.getElementById(id).scrollIntoView();
                                ids = id.replace('images', 'img');
                                $('.tdimg').removeClass('border1');
                                activeReplace.push(src);
                                activeReplace.push(id);
                                activeReplace.push(ids);
                                $('.'+ids).addClass('border1');
                                }
                                
                                function click1(id, src) {
                                if(activeReplace.length==0){
                                    img = '<img src="'+src+'">';
                                    CKEDITOR.instances['content'].insertHtml(img);
                                }
                                else{
                                    editor = CKEDITOR.instances.content;
                                    var documentWrapper = editor.document; // replace by your CKEDitor instance ID
                                    var documentNode = documentWrapper.$; // or documentWrapper['$'] ;
                                    var edata = editor.getData();
                                    var replaced_text = edata.replace(activeReplace[0], src); // you could also use a regex in the replace 
                                    editor.setData(replaced_text);
                                    documentNode.getElementById(activeReplace[1]).scrollIntoView();
                                    $('#'+activeReplace[2]).attr('src', src);
                                    activeReplace.pop();
                                    activeReplace.pop();
                                    activeReplace.pop();
                                    $('.tdimg').removeClass('border1');
                                }
                                
                                
                                } 
                            </script> <script> var item_local_store =  JSON.parse(localStorage.getItem('infopost'));
                                if(item_local_store!=null){
                                    $('.draft-article').show();
                                }
                                else{
                                    $('.draft-article').hide();
                                }
                                
                                
                                
                                
                                function getDataform(){
                                
                                    if(item_local_store !=null){
                                
                                        localStorage.removeItem('infopost');
                                
                                    }
                                
                                    const title = $('#title').val();
                                    const shortcontent = $('#shortcontent').val();
                                    const content = CKEDITOR.instances.content.getData();
                                
                                    infopost = [title, shortcontent, content];
                                
                                    localStorage.setItem('infopost', JSON.stringify(infopost));
                                
                                     $('.draft-article').show();
                                
                                }
                                
                                $('#shortcontent').bind("change", function() { 
                                    getDataform();
                                
                                });
                                
                                
                                let ar_image = [];
                                
                                // function getBase64(file) {
                                //    var reader = new FileReader();
                                //    reader.readAsDataURL(file);
                                //    reader.onload = function () {
                                //         ar_image.push(reader.result);
                                //         console.log(ar_image);
                                       
                                //         const max = parseInt((ar_image.length)/2)
                                //         for (i = 0; i <= max; i++) {
                                            
                                //                 for(j=i; j<=i*2; j++){
                                //                     '<td width="50%" align="center"><a href="javascript:void(0); title="Click để chuyển ảnh vào mô tả"><img src="++" height="60"></a></td>';
                                //                 } 
                                           
                                //         }
                                     
                                //    };
                                //    reader.onerror = function (error) {
                                //      // console.log('Error: ', error);
                                //    };
                                // }
                                
                                $('#file-image-content').bind("change", function() { 
                                    
                                    var file = document.querySelector('#file-image-content').files[0];
                                    getBase64(file);
                                
                                });
                                
                                editor = CKEDITOR.replace( 'content', {
                                    filebrowserBrowseUrl: 'http://localhost/ckfinder.html',
                                    filebrowserImageBrowseUrl: 'http://localhost/ckfinder.html?Type=Images',
                                    filebrowserUploadUrl: 'http://localhost/js/core/connector/php/connector.php?command=QuickUpload&type=Files',
                                    filebrowserImageUploadUrl: 'http://localhost/js/core/connector/php/connector.php?command=QuickUpload&type=Images',
                                    filebrowserWindowWidth : '1000',
                                    filebrowserWindowHeight : '700',
                                    on: {
                                        change: function( evt ) {
                                
                                            getDataform();
                                        },
                                    },
                                    
                                });
                                
                                
                                
                                function removeHref_byselected(text1) {
                                
                                    check = $('#cke_74').hasClass('cke_button_off');
                                
                                    // nếu button xóa link hiển thị thì click1
                                    // còn không thì customn click
                                
                                    if(check==true){
                                        $( "#cke_74" ).click();
                                
                                    }
                                    else{
                                        var text1 =  CKEDITOR.instances.content.getSelection().getSelectedText();
                                
                                        CKEDITOR.instances.content.insertText(text1);
                                    }
                                }
                                
                                
                                function removeHref() {
                                
                                    let content = CKEDITOR.instances.content.getData();
                                
                                    var regex = /(<\s*a([^>]+)>|<\/\s*a\s*>)/ig;
                                
                                    contents = content.replace(regex, ""); 
                                
                                    CKEDITOR.instances.content.setData(contents);
                                }
                                
                                function setDataForm() {
                                
                                    item_local_stores =  JSON.parse(localStorage.getItem('infopost'));
                                    console.log(item_local_stores)
                                    
                                    CKEDITOR.instances.content.setData(item_local_stores[2]);
                                    $('#title').val(item_local_stores[0]);
                                    $('#shortcontent').val(item_local_stores[1]);
                                    $('.article-but').css('color', 'red');
                                
                                }
                                
                                
                                
                                // $(document).ready(function()
                                // {
                                //     $(window).bind("beforeunload", function() { 
                                //         return confirm("Do you really want to close?"); 
                                
                                //     });
                                
                                   
                                // }); 
                            </script> 
                        </div>
                    </div>
                    <div class="card-footer"> <input class="btn btn-primary" type="submit" value="Save"> <a href="http://localhost/pj5/admins/posts" class="btn btn-default">Cancel</a> </div>
                </div>
            </form>
        </div>
    </div>
</section>

@endsection