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
            $table->String('tipo_est_o_fed');
            $table->String('doc_tarjcirculacion_n');
            $table->longText('doc_tarjcirculacion');
            $table->String('doc_cartaporte_n');
            $table->longText('doc_cartaporte');
            $table->String('doc_polizaseguro_n');
            $table->longText('doc_polizaseguro');
            $table->String('doc_factura_n');
            $table->longText('doc_factura');
            $table->String('doc_consecion_n');
            $table->longText('doc_consecion');
            $table->String('doc_inclusion_n');
            $table->longText('doc_inclusion');
            $table->String('doc_permiso_fisicomec_n');
            $table->longText('doc_permiso_fisicomec');
            $table->String('doc_anticontaminantes_n');
            $table->longText('doc_anticontaminantes');
            $table->string('estado');
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
        Schema::dropIfExists('grua');
    }
}
