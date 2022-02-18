<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'email|required|unique:users',
            'password' => 'required|min:8|confirmed'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => '',
                'errors' => $validator->errors()->getMessages(),
            ], 400);
        }

        $user =  User::firstOrCreate(['email' => $request->email], [
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        if (!$user) return response()->json([
            'message' => '',
            'errors' => 'Something went wrong!'
        ], 500);

        return response()->json([
            'message' => 'OK',
            'errors' => ''
        ], 200);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => '',
                'errors' => $validator->errors()->getMessages()
            ], 400);
        }

        if (auth()->attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => auth()->user(),
                'errors' => ''
            ], 200);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) return response()->json([
            'message' => '',
            'errors' => 'Email not found!'
        ], 400);

        return response()->json([
            'message' => '',
            'errors' => 'Email and password does not match'
        ], 400);
    }
}
