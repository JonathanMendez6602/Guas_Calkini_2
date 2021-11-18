<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grua extends Model
{
    use HasFactory;

    protected $table = "grua";

    protected $fillable = [
        'marca',
        'modelo',
        'num_serie',
        'placas',
        'anio',
        'num_motor',
        'tipo_est_o_fed',
        'doc_tarjcirculacion',
        'doc_cartaporte',
        'doc_polizaseguro',
        'doc_factura',
        'doc_consecion',
        'doc_inclusion',
        'doc_permiso_fisicomec',
        'doc_anticontaminantes',
        'estado',
        'sucursal',
        'branch_office_id'
    ];
    public function branch_office()
    {
        return $this->hasOne(Branch_Office::class);
    }
}
