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
        Schema::create('sektors', function (Blueprint $table) {
            $table->id();
            $table->string('Nama');
            $table->string('Lokasi');
            $table->string('Deskripsi');
            $table->integer('Total_konsumsi_Kompos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sektors');
    }
};
