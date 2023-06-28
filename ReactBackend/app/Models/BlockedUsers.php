<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlockedUsers extends Model
{
    use HasFactory;
    protected $table = 'blocked_user_table';
    protected $primaryKey = ['User_id','blocked_user_id'];
    protected $fillable = ['User_id','blocked_user_id','blocked_on'];
}
