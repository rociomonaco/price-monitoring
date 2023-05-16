<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ], [
            'name.required' => 'El nombre es requerido',
            'email.required' => 'El email es requerido y debe contener su formato correctamente',
            'password.required' => 'La contraseña es requerida'
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response($user, Response::HTTP_CREATED);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate(
            [
                'email' => 'required|email',
                'password' => 'required',
            ],
            [
                'email.required' => 'El email es requerido y debe contener su formato correctamente',
                'password.required' => 'La contraseña es requerida'
            ]
        );

        if(Auth::attempt($credentials)){
            $user = Auth::user();
            $token = $user->createToken('token')->plainTextToken;
            $cookie = cookie('token_auth', $token, 60 * 24);
            return response(["token_auth" =>$token], Response::HTTP_OK)->withCookie($cookie);
        }else{
            return response(["message"=>"Credenciales inválidas"], Response::HTTP_UNAUTHORIZED);
        }

        
    }
}
