<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    use HasFactory;
    protected $table = "vehiculo";

    protected $fillable = [
      'tipo_servicio',
      'lugar_siniestro',
      'descripcion'
    ];
}
