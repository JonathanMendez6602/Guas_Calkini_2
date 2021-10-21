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
