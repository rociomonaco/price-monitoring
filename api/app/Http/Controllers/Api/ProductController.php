<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;


class ProductController extends Controller
{
    public function createProduct(Request $request){
       $request->validate([
        'name' => 'required',
        'sku' => 'required',
        'pvp' => 'required',
        'search_terms' => 'required',
       ]);

       $user_id = auth()->user()->id;

       $product = new Product();
       $product->user_id = $user_id;
       $product->name = $request->name;
       $product->sku = $request->sku;
       $product->pvp = $request->pvp;
       $product->out_pvp = $request->out_pvp;
       $product->description = $request->description;
       $product->search_terms = collect($request->search_terms)->toJson();
       $product->required_words = collect($request->required_words)->toJson();
       $product->words_to_exclude = collect($request->words_to_exclude)->toJson();
       
       if($product->save()){
           return response($product, Response::HTTP_CREATED);
       }
        return response(Response::HTTP_INTERNAL_SERVER_ERROR);
       

    }

    public function updateProduct($id, Request $request){
        
    }

    public function getProduct($id){
        
    }
    public function deleteProduct($id){
        
    }

    public function getAllProducts(){
        $user_id = auth()->user()->id;

        $products = Product::where('user_id', $user_id)->get();
        if(!$products){
            return response(['message' => 'Hubo un error en al traer el listado'],  Response::HTTP_NOT_FOUND);
        }
        
        return response(['data' => $products], Response::HTTP_OK);
        
    }
}
