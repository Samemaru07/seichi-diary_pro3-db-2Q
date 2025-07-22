<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB as FacadesDB;
use Illuminate\Support\Facades\Hash;

class AdminLoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            "username" => "required|string",
            "password" => "required|string"
        ]);

        $user = FacadesDB::table("admin")->where("username", $request->username)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            $request->session()->put("admin_logged_in", true);
            return redirect()->intended('/admin/dashboard');
        }

        return back()->withErrors(provider: [
            "login" => "ユーザー名またはパスワードが違います"
        ]);
    }
}
?>
