<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Catalogo;
use Log;

class CatalogoController extends Controller
{
    //
    public function getAll()
    {
        $data = Catalogo::get();
        return response()->json($data, 200);
    }

    public function create(Request $request)
    {
        $data['tipoVehiculo'] = $request['tipoVehiculo'];
        $data['costo'] = $request['costo'];
        Catalogo::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id)
    {
        $res = Catalogo::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function get($id)
    {
        $data = Catalogo::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data['tipoVehiculo'] = $request['tipoVehiculo'];
        $data['costo'] = $request['costo'];
        Catalogo::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}
