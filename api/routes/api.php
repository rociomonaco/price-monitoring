<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Support\Facades\Route;


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);

    Route::prefix('products')->group(function () {
        Route::controller(ProductController::class)->group(function () {
            Route::get('get', 'getAllProducts');
            Route::post('create', 'createProduct');
            Route::put('{id}/update', 'updateProduct')->where('id', '[0-9]+');
            Route::get('{id}/get', 'getProduct')->where('id', '[0-9]+');
            Route::delete('{id}/delete', 'deleteProduct')->where('id', '[0-9]+');
        });
    });
});