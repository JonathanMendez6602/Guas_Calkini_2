<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChoferTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chofer', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellido_m');
            $table->string('apellido_p');
            $table->bigInteger('edad');
            $table->String('doc_lic_fed_n');
            $table->longText('doc_lic_fed');
            $table->date('fecha_lic_fed');
            $table->bigInteger('num_lic_fed');
            $table->String('doc_lic_est_n');
            $table->longText('doc_lic_est');
            $table->date('fecha_lic_est');
            $table->bigInteger('num_lic_est');
            $table->String('doc_ine_n');
            $table->longText('doc_ine');
            $table->String('doc_curp_n');
            $table->longText('doc_curp');
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
        Schema::dropIfExists('chofer');
    }
}
