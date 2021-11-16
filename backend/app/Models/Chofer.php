<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chofer extends Model
{
    use HasFactory;
    protected $table = "chofer";

    protected $fillable = [
        'nombre',
        'apellido_m',
        'apellido_p',
        'edad',
        'doc_lic_fed',
        'fecha_lic_fed',
        'num_lic_fed',
        'doc_lic_est',
        'fecha_lic_est',
        'num_lic_est',
        'doc_ine',
        'doc_curp',
        'estado'
    ];
}
