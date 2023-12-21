<?php

namespace App\Http\Middleware;

use Closure;

class blockip
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Địa chỉ IP mà bạn muốn cho phép truy cập
        $allowedIP = '118.70.129.255';

        // Lấy địa chỉ IP của người dùng
        $userIP = $_SERVER['REMOTE_ADDR'];

        // Kiểm tra nếu địa chỉ IP của người dùng không phải là địa chỉ IP được phép
        if ($userIP !== $allowedIP) {
           
           return abort('403')
        }
         return $next($request);

     
    }
}
