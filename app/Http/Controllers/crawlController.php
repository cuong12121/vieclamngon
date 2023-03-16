<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\crawl;

use App\Models\job;

use App\cpn;

use App\Models\employ_info;

use App\Models\linkpost;

use Illuminate\Support\Facades\Storage;

use DB;

class crawlController extends Controller
{


    public function FunctionName($id)
    {

        $data = DB::table('linkpost')->get();

        foreach ($data as $key => $value) {
            
            print_r($value->link);

        }
        
       //  $link =  file_get_html(trim($url));

       // summary p-summar

       //  content-detail  
    }

    public function updateCrawl()
    {
        $employ = job::where('employer_id', 16)->get();

        foreach ($employ as $key => $value) {

            $employ = job::find($value->id);

            $employ->employer_id = 19;

            $employ->save();

        }
        echo "thanh cong";

    }
    public function linkCpn()
    {
        $url = 'https://timviec365.vn/viec-lam-luong-cao.html';

        $html = file_get_html(trim($url));

        $cpn_link   = $html->find(".cpn_name a");

        foreach ($cpn_link as $link) {

            $cpn = new cpn();

            $cpn->link = trim($link->href);

            $cpn->save();


        } 

         echo "Thành Công";   

    }

      public function convertSlug($title)
    {
       
        $replacement = '-';
        $map = array();
        $quotedReplacement = preg_quote($replacement, '/');
        $default = array(
            '/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|å/' => 'a',
            '/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|ë/' => 'e',
            '/ì|í|ị|ỉ|ĩ|Ì|Í|Ị|Ỉ|Ĩ|î/' => 'i',
            '/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|ø/' => 'o',
            '/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|ů|û/' => 'u',
            '/ỳ|ý|ỵ|ỷ|ỹ|Ỳ|Ý|Ỵ|Ỷ|Ỹ/' => 'y',
            '/đ|Đ/' => 'd',
            '/ç/' => 'c',
            '/ñ/' => 'n',
            '/ä|æ/' => 'ae',
            '/ö/' => 'oe',
            '/ü/' => 'ue',
            '/Ä/' => 'Ae',
            '/Ü/' => 'Ue',
            '/Ö/' => 'Oe',
            '/ß/' => 'ss',
            '/[^\s\p{Ll}\p{Lm}\p{Lo}\p{Lt}\p{Lu}\p{Nd}]/mu' => ' ',
            '/\\s+/' => $replacement,
            sprintf('/^[%s]+|[%s]+$/', $quotedReplacement, $quotedReplacement) => '',
        );
        //Some URL was encode, decode first
        $title = urldecode($title);
        $map = array_merge($map, $default);
        return strtolower(preg_replace(array_keys($map), array_values($map), $title));


    }

    public function crawl_employer()
    {
        $link = cpn::get();

        foreach ($link as $key => $value) {

            $links = $value->link;

            $url  = 'https://timviec365.vn'.trim($links);

            $html = file_get_html($url);

            $employ_info = new employ_info();

            $employ_info->name = strip_tags( $html->find('.name_cty h1 p', 0));

            $employ_info->desc = html_entity_decode($html->find('.left_com', 0));

            $employ_info->address = strip_tags( $html->find('.text_ntd_2 span', 0));

            $employ_info->logo =$html->find('.anh_cty img', 0)->getAttribute('data-src');

            $employ_info->links = $this->convertSlug($employ_info->name);

            $employ_info->employ_id = 16;

            $employ_info->website = strip_tags($html->find('.text_ntd_2 span', 2))??'';

            $employ_info->save();

        
        }
        echo "thành công";

    }
    public function crawlJob()
    {

        for ($i=2; $i < 50; $i++) { 

            $urls = 'https://timviec365.vn/viec-lam-luong-cao.html?page='.$i;

            $html = file_get_html(trim($urls));

            $title_link   = $html->find("#nd_cate .title_cate");


            foreach ($title_link as $link) {

                $links = new crawl();

                $links->link = trim($link->href);

                $links->save();
              
            }
            
        }

        echo "Thành Công";
       
    }

   

    public function crawlJobDetail()
    {
        $link = crawl::get();


        foreach ($link as $key => $value) {

            $job = new job();

            $html = file_get_html('https://timviec365.vn'.trim($value->link));

            $job->title =  strip_tags($html->find('.right_tit h1', 0));

            $job->code  = '12345';

            $job->detail = html_entity_decode($html->find('.box_mota', 0));

            $job->requirements = @html_entity_decode($html->find('.box_yeucau', 0));

            $job->rights =  @html_entity_decode($html->find('.box_quyenloi', 0));

            $job->salary = @html_entity_decode($html->find('.dd_tuyen', 2));

            $job->career = 4;

            $job->linkCrawl = 'https://timviec365.vn'.trim($value->link);

            $job->address = 4;

            $job->employer_id = 16;

           

            $job->deadline = '28/6/2022';

            $job->link = $this->convertSlug($job->title);

            $job->save();
           
       }

       
    }

    public function changeGroupJob()
    {
        $job = job::get();

        foreach ($job as $key => $value) {

            $jobs = job::find($value->id);

            $jobs->career = rand(1,4);

            $jobs->save();
           
        }

        
    }

    public function getPostJob()
    {
        $link = 'https://timviec365.vn/cau-hoi-tuyen-dung/tl5/bo-cau-hoi-theo-vi-tri-lam-viec';

        $html = file_get_html($link);

        $links = $html->find('.cate_bv .title a');

        foreach ($links as $key => $value) {

            $linkpost = new linkpost();

            $linkpost->link = trim($value->href);

            $linkpost->save();
          
        }
       

    }

    // public function getPostDetails()
    // {
    //     $link  =  new linkpost()
    // }

    public function getImageJobCrawl()
    {
        $employ_info = employ_info::select('logo')->get();

       

        foreach ($employ_info as $key => $value) {

            $values = str_replace('..','', $value->logo);

            $logo =  file_get_contents('https://timviec365.vn/'. $values);

            file_put_contents(public_path().'/picture/'.basename($values), $logo);

           
        }
        echo "thanh cong";
    }


}
