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
            @if(!empty($user->cv))
            <a href="{{ asset($user->cv) }}" download="">tải cv xuống</a>

            @endif
        </td>
       
       
    </tr>
    @endforeach
@endif