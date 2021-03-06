<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCorralonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('corralon', function (Blueprint $table) {
            $table->id();
            $table->date('fecha_entrada');
            $table->string('pension_c');
            $table->bigInteger('dias_pension');
            $table->string('status_entrega');
            $table->date('fecha_entrega');
            $table->string('otro_asunto');
            $table->bigInteger('id_vehiculo');
            $table->string('tipo_vehiculo');
            $table->bigInteger('costo_total');
            $table->string('sucursal');
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
        Schema::dropIfExists('corralon');
    }
}
