<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
    use HasFactory;
    protected $table = 'images_table';
    //protected $primaryKey = ['User_id','Image_path'];
    // protected function setKeysForSaveQuery(Builder $query)
    // {
    //     return $query->where('User_id', $this->getAttribute('User_id'))
    //         ->where('Image_path', $this->getAttribute('Image_path'));
    // }
    protected $fillable = ['User_id','Image_path','Image_status'];
}
