@if(!empty($data_user))
    @foreach($data_user as $user)

    <tr>
       
        <td >
           {{ $user->name}}
        </td>
        <td>

            <a href="{{ Route('viewCvEmployer', $user->id)   }}" target="_blank">Xem cv</a>
            
        </td>
        <td>
            <a href="{{ asset($user->cv) }}" download="">tải cv xuống</a>
        </td>
       
       
    </tr>
    @endforeach
@else
    <td colspan="9" class="cb-text-center">

        <p><strong> Không có vị trí nào trong thư mục này.</strong></p>
    </td>
@endif