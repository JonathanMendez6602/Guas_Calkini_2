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
            $table->string('doc_lic_fed');
            $table->date('fecha_lic_fed');
            $table->bigInteger('num_lic_fed');
            $table->string('doc_lic_est');
            $table->date('fecha_lic_est');
            $table->bigInteger('num_lic_est');
            $table->string('doc_ine');
            $table->string('doc_curp');
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
