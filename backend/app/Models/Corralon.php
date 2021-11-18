<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Corralon extends Model
{
    use HasFactory;

    protected $table = "corralon";

    protected $fillable = [
      'fecha_entrada',
      'pension_c',
      'dias_pension',
      'status_entrega',
      'fecha_entrega',
      'otro_asunto',
      'id_vehiculo',
      'sucursal',
      'branch_office_id'
    ];
    public function branch_office()
    {
        return $this->hasOne(Branch_Office::class);
    }
}
