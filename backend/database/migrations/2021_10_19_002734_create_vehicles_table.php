<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            //Vehiculo
            $table->string("modelo");
            $table->string("marca");
            $table->longText("foto_vehiculo");
            $table->string("color");
            $table->string("placas");
            $table->LongText("inventario");
            $table->longText("foto_inventario");
            $table->string("llaves");
            //Servicios
            $table->string('tipo_servicio');
            $table->string('lugar_siniestro');
            $table->string('descripcion');
            //Cliente
            $table->string('nombre');
            //Sucursal
            $table->string('sucursal');
            $table->boolean('corralon');
            $table->foreignId('branch_office_id')->constrined('branch_offices')->cascadaOnUpdate()->nullOnDelete();
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
        Schema::dropIfExists('vehicles');
    }
}
