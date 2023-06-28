<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInfo extends Model
{
    use HasFactory;
    protected $table = 'personal_info_table';
    protected $fillable = ['User_id','Age','Gender','Nationality','First_Language','Second_Language','Country', 'State', 'City','Updated_at'];
}
