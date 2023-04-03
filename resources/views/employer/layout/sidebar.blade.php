 <div class="col-md-2 side-bar">
        <div class="scrollbar-container pr-[10px] ps">
            <div class="flex items-center justify-between px-[11px] py-[18px] h-8 rounded-[3px] border border-grey-bright">
                <div class="flex-1 text-[13px] font-semibold"><a href="{{ route('user-dashboard') }}">Cổng người tìm việc</a> </div>
                <button class="text-primary font-semibold text-[10px]"><a href="{{ route('user-dashboard') }}">Chuyển</a> </button>
            </div>
            <div>
                <div class="flex items-center cursor-pointer select-none dropdown-wrapper">
                    
                    <div class="pl-4 select-none font-semibold text-13 leading-[24px] tracking-[-0.5px] py-2">Tổng quan</div>
                </div>
                
            </div>
            <div>
                <div class="flex items-center cursor-pointer select-none dropdown-wrapper">
                    
                    <div class="pl-4 select-none font-semibold text-13 leading-[24px] tracking-[-0.5px] py-2">Quản lý đăng tuyển</div>
                </div>
                <div class="child-wrapper overflow-hidden transition-all ease-in-out duration-300 " style="height: 65px;">
                    <div class="dropdown-child">

                      
                        <div class="py-2 select-none cursor-pointer hover:bg-pale-turquoise hover:bg-opacity-30  {{ \Request::route()->getName()==='form_recruit'?'bg-pale-turquoise':''  }}" >
                            <div id="" class="flex items-center" style="margin-left: 28px;">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0997 0H4.80948C4.38385 0.00102546 3.9709 0.144959 3.63685 0.408716C3.3028 0.672474 3.06701 1.04077 2.96729 1.45455H11.6801C12.4393 1.45685 13.1668 1.75949 13.7037 2.29637C14.2406 2.83325 14.5432 3.56076 14.5455 4.32002V13.0328C14.9593 12.9331 15.3276 12.6973 15.5914 12.3632C15.8551 12.0292 15.9991 11.6162 16.0001 11.1906V1.90037C16.0001 1.39636 15.7999 0.912996 15.4435 0.556606C15.0871 0.200217 14.6037 0 14.0997 0Z" fill="#451DA0"></path>
                                    <path d="M11.1906 2.90918H1.90037C1.39654 2.90976 0.913508 3.11016 0.557244 3.46642C0.20098 3.82269 0.00057746 4.30572 0 4.80955V14.0998C0.00057746 14.6036 0.20098 15.0866 0.557244 15.4429C0.913508 15.7992 1.39654 15.9996 1.90037 16.0002H11.1906C11.6944 15.9996 12.1775 15.7992 12.5337 15.4429C12.89 15.0866 13.0904 14.6036 13.091 14.0998V4.80955C13.0904 4.30572 12.89 3.82269 12.5337 3.46642C12.1775 3.11016 11.6944 2.90976 11.1906 2.90918ZM9.45459 10.1819H7.27277V12.3638C7.27277 12.5567 7.19614 12.7416 7.05975 12.878C6.92336 13.0144 6.73837 13.0911 6.54549 13.0911C6.3526 13.0911 6.16762 13.0144 6.03123 12.878C5.89484 12.7416 5.81821 12.5567 5.81821 12.3638V10.1819H3.63638C3.4435 10.1819 3.25851 10.1053 3.12212 9.96893C2.98573 9.83254 2.90911 9.64755 2.90911 9.45467C2.90911 9.26178 2.98573 9.0768 3.12212 8.94041C3.25851 8.80402 3.4435 8.72739 3.63638 8.72739H5.81821V6.54556C5.81821 6.35268 5.89484 6.16769 6.03123 6.0313C6.16762 5.89491 6.3526 5.81829 6.54549 5.81829C6.73837 5.81829 6.92336 5.89491 7.05975 6.0313C7.19614 6.16769 7.27277 6.35268 7.27277 6.54556V8.72739H9.45459C9.64748 8.72739 9.83247 8.80402 9.96886 8.94041C10.1052 9.0768 10.1819 9.26178 10.1819 9.45467C10.1819 9.64755 10.1052 9.83254 9.96886 9.96893C9.83247 10.1053 9.64748 10.1819 9.45459 10.1819Z" fill="#451DA0"></path>
                                </svg>
                                <div class="ml-[10px] text-13 leading-[16.5px] tracking-[-0.5px]"><a href="{{ route('form_recruit') }}">Tạo tin tuyển dụng</a></div>
                            </div>
                        </div>
                        <div class="py-2 select-none cursor-pointer hover:bg-pale-turquoise hover:bg-opacity-30 {{ \Request::route()->getName()==='employers-info-list'?'bg-pale-turquoise':''  }} ">
                            <div id="" class="flex items-center" style="margin-left: 28px;">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M12.8002 4.80005H3.2002V6.40006H12.8002V4.80005Z" fill="#451DA0"></path>
                                        <path d="M12.8 0.802246V2.40225H14.4V14.4001H1.6V2.40225H3.1744V0.802246H1C0.447715 0.802246 0 1.24996 0 1.80225V15.0001C0 15.5524 0.447715 16.0001 1 16.0001H15C15.5523 16.0001 16 15.5524 16 15.0001V1.80225C16 1.24996 15.5523 0.802246 15 0.802246H12.8Z" fill="#451DA0"></path>
                                        <path d="M12.8002 8H3.2002V9.59999H12.8002V8Z" fill="#451DA0"></path>
                                        <path d="M12.8002 11.2H3.2002V12.8H12.8002V11.2Z" fill="#451DA0"></path>
                                        <path d="M11.1998 0H4.7998V3.2H11.1998V0Z" fill="#451DA0"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="16" height="16" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <a href="{{ route('employers-info-list') }}">
                                    <div class="ml-[10px] text-13 leading-[16.5px] tracking-[-0.5px]"> Danh sách tin đăng</div>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex items-center cursor-pointer select-none dropdown-wrapper">
                    
                    <div class="pl-4 select-none font-semibold text-13 leading-[24px] tracking-[-0.5px] py-2">Quản lý ứng viên</div>
                </div>
                <div class="child-wrapper overflow-hidden transition-all ease-in-out duration-300 " style="height: 98px;">
                    <div class="dropdown-child">
                        <div class="py-2 select-none cursor-pointer hover:bg-pale-turquoise hover:bg-opacity-30 {{ \Request::route()->getName()==='cv-apply-employer'?'bg-pale-turquoise':''}}" >
                            <div id="" class="flex items-center" style="margin-left: 28px;">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M15.0906 10.4657C13.7189 9.60027 12.1484 9.12544 10.5254 9.03662C10.9006 9.21228 11.272 9.39777 11.6243 9.62001C12.4729 10.1547 13.0002 11.1229 13.0002 12.1464V14.9999H16.0002V12.1464C16.0002 11.4638 15.6516 10.8197 15.0906 10.4657Z" fill="#451DA0"></path>
                                        <path d="M11.0903 10.4658C8.05031 8.54785 3.94923 8.54785 0.910147 10.4658C0.348641 10.8193 0 11.4634 0 12.1465V15H12V12.1465C12 11.4634 11.6514 10.8193 11.0903 10.4658Z" fill="#451DA0"></path>
                                        <path d="M8.99414 7.83439C9.3174 7.93224 9.65098 8.00005 9.99994 8.00005C11.9296 8.00005 13.4999 6.42974 13.4999 4.50004C13.4999 2.57035 11.9296 1 9.99994 1C9.65098 1 9.3174 1.06781 8.99414 1.16566C9.9113 1.99 10.4999 3.17251 10.4999 4.50001C10.4999 5.82751 9.91133 7.01002 8.99414 7.83439Z" fill="#451DA0"></path>
                                        <path d="M8.47489 2.02513C9.84174 3.39198 9.84174 5.60802 8.47489 6.97487C7.10803 8.34172 4.89199 8.34172 3.52514 6.97487C2.15829 5.60802 2.15829 3.39198 3.52514 2.02513C4.89199 0.658276 7.10803 0.658307 8.47489 2.02513Z" fill="#451DA0"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="16" height="16" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="ml-[10px] text-13 leading-[16.5px] tracking-[-0.5px]"><a href="{{ route('cv-apply-employer') }}">Hồ sơ ứng tuyển</a></div>
                            </div>
                        </div>
                       <!--  <div class="py-2 select-none cursor-pointer hover:bg-pale-turquoise hover:bg-opacity-30">
                            <div id="" class="flex items-center" style="margin-left: 28px;">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.75 1.36987C9.85484 1.36987 8.63722 2.60997 8 3.72415C7.36278 2.60997 6.14516 1.36987 4.25 1.36987C1.84491 1.36987 0 3.2119 0 5.655C0 8.30409 2.31137 10.1081 5.76291 12.8396C7.45297 14.1759 7.56156 14.2774 8 14.6299C8.35781 14.3422 8.55584 14.1689 10.2371 12.8396C13.6886 10.1081 16 8.30409 16 5.655C16 3.21194 14.1551 1.36987 11.75 1.36987Z" fill="#451DA0"></path>
                                </svg>
                                <div class="ml-[10px] text-13 leading-[16.5px] tracking-[-0.5px]">Hồ sơ đã lưu</div>
                            </div>
                        </div> -->
                        <div class="py-2 select-none cursor-pointer {{ \Request::route()->getName()==='list-ung-vien'?'bg-pale-turquoise':''}}" >
                            <div id="" class="flex items-center" style="margin-left: 28px;">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M11.1667 0H1.83333C0.82 0 0 0.82 0 1.83333V12.1667C0 13.18 0.82 14 1.83333 14H9.22352C8.63686 13.2 8.14183 12.0763 8.14183 11.0163C8.14183 8.3496 10.1667 6.66 12.8334 6.66C12.8867 6.66 12.9467 6.66 13 6.66667V1.83333C13 0.82 12.18 0 11.1667 0ZM2.66667 2.66667H6.33335C6.70002 2.66667 7.00002 2.96667 7.00002 3.33333C7.00002 3.7 6.70002 4 6.33335 4H2.66667C2.3 4 2 3.7 2 3.33333C2 2.96667 2.3 2.66667 2.66667 2.66667ZM7.00002 9.33333H2.66667C2.3 9.33333 2 9.03333 2 8.66667C2 8.3 2.3 8 2.66667 8H7.00002C7.36669 8 7.66669 8.3 7.66669 8.66667C7.66669 9.03333 7.36669 9.33333 7.00002 9.33333ZM8.33335 6.66667H2.66667C2.3 6.66667 2 6.36667 2 6C2 5.63333 2.3 5.33333 2.66667 5.33333H8.33335C8.70002 5.33333 9.00002 5.63333 9.00002 6C9.00002 6.36667 8.70002 6.66667 8.33335 6.66667Z" fill="#451DA0"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29443 10.9067C9.29443 12.7047 10.7571 14.1674 12.5551 14.1674C13.2302 14.1674 13.858 13.9612 14.3788 13.6085L15.9978 15.2276C16.119 15.3487 16.278 15.4096 16.437 15.4096C16.596 15.4096 16.755 15.3487 16.8761 15.2276C17.1189 14.9847 17.1189 14.5922 16.8761 14.3494L15.257 12.7303C15.6097 12.2095 15.8158 11.5817 15.8158 10.9067C15.8158 9.10865 14.3532 7.646 12.5551 7.646C10.7571 7.646 9.29443 9.10865 9.29443 10.9067ZM14.0222 12.2917C14.3639 11.93 14.5736 11.4424 14.5736 10.9067C14.5736 9.79371 13.6681 8.88817 12.5551 8.88817C11.4421 8.88817 10.5366 9.79371 10.5366 10.9067C10.5366 12.0197 11.4421 12.9252 12.5551 12.9252C13.0908 12.9252 13.5784 12.7154 13.9402 12.3737C13.9524 12.359 13.9655 12.3447 13.9793 12.3308C13.9931 12.317 14.0075 12.304 14.0222 12.2917Z" fill="#451DA0"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="16" height="16" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="ml-[10px] text-13 leading-[16.5px] tracking-[-0.5px]"><a href="{{  route('list-ung-vien') }}">Tìm ứng viên mới</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>