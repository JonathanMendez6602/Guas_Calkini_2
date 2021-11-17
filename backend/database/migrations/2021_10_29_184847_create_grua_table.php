<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGruaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grua', function (Blueprint $table) {
            $table->id();
            $table->string('marca');
            $table->string('modelo');
            $table->bigInteger('num_serie');
            $table->string('placas');
            $table->bigInteger('anio');
            $table->bigInteger('num_motor');
            $table->string('tipo_est_o_fed');
            $table->string('doc_tarjcirculacion');
            $table->string('doc_cartaporte');
            $table->string('doc_polizaseguro');
            $table->string('doc_factura');
            $table->string('doc_consecion');
            $table->string('doc_inclusion');
            $table->string('doc_permiso_fisicomec');
            $table->string('doc_anticontaminantes');
            $table->string('estado');
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
        Schema::dropIfExists('grua');
    }
}
