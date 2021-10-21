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
            //Aseguradora
            $table->string('aseguradora');
            $table->string('nombre_aseguradora');
            //Particular
            $table->string('particular');
            $table->string('nombre_particular');
            $table->string('apellido_materno');
            $table->string('apellido_paterno');
            //Corralon:
            $table->string('corralon');
            $table->date('fecha_entrada');
            $table->string('pension_c');
            $table->bigInteger('dias_pension');
            $table->string('status_entrega');
            $table->date('fecha_entrega');
            $table->string('otro_asunto');
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
