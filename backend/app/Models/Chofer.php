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
        'doc_lic_fed_n',
        'fecha_lic_fed',
        'num_lic_fed',
        'doc_lic_est',
        'doc_lic_est_n',
        'fecha_lic_est',
        'num_lic_est',
        'doc_ine_n',
        'doc_ine',
        'doc_curp_n',
        'doc_curp',
        'estado',
        'sucursal',
        'branch_office_id'
    ];
    public function branch_office()
    {
        return $this->hasOne(Branch_Office::class);
    }
}
