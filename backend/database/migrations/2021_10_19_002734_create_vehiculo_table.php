<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiculoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehiculo', function (Blueprint $table) {
            $table->id();
            //Vehiculo
            $table->string("modelo");
            $table->string("marca");
            $table->string("foto_vehiculo");
            $table->string("color");
            $table->string("placas");
            $table->string("inventario");
            $table->string("foto_inventario");
            $table->string("llaves");
            //Servicios
            $table->string('tipo_servicio');
            $table->string('lugar_siniestro');
            $table->string('descripcion');
            //Cliente
            $table->string('nombre');
            //Sucursal
            $table->string('sucursal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehiculo');
    }
}
