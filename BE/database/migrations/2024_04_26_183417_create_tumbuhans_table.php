<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tumbuhans', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sektors_id');
            $table->string('Name');
            $table->string('Spesies');
            $table->string('Foto');
            $table->integer('Konsumsi_Kompos');
            $table->string('Deskripsi_Tumbuhan');
            $table->foreign('sektors_id')->references('id')->on('sektors')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tumbuhans');
    }
};
