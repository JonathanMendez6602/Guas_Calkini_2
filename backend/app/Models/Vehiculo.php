<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    use HasFactory;

    protected $table = "vehiculo";

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
      'sucursal'
    ];
}
