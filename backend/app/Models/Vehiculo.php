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
      'aseguradora',
      'nombre_aseguradora',
      'particular',
      'nombre_particular',
      'apellido_materno',
      'apellido_paterno',
      'corralon',
      'fecha_entrada',
      'pension_c',
      'dias_pension',
      'status_entrega',
      'fecha_entrega',
      'otro_asunto'

    ];
}
