<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $table = "vehicles";

    protected $fillable = [
      'marca',
      'modelo',
      'foto_vehiculo',
      'color',
      'placas',
      'inventario',
      'foto_inventario',
      'llaves',
      'tipo_servicio',
      'lugar_siniestro',
      'descripcion',
      'nombre',
      'sucursal',
      'corralon',
      'branch_office_id'
    ];

    public function branch_office()
    {
        return $this->hasOne(Branch_Office::class);
    }
}
