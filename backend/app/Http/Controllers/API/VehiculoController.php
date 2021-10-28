<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Vehiculo;
use App\Models\Corralon;
use App\Models\Sucursal;
use Log;

class VehiculoController extends Controller
{
  //
  public function getAll()
  {

    $data = Vehiculo::get();
    return response()->json($data, 200);
  }

  public function getAllSucursal(){
    $data = Sucursal::get();
    return response()->json($data, 200);
  }

  public function getAllCorralon()
  {
    $data = Vehiculo::where('corralon', 0)->get();
    return response()->json($data, 200);
  }

  public function create(Request $request)
  {
    if(($request['modelo']=="")){
      $data['modelo'] = "";
    }else{
      $data['modelo'] = $request['modelo'];
    }
    $data['marca'] = $request['marca'];
    $data['foto_vehiculo'] = $request['foto_vehiculo'];
    $data['color'] = $request['color'];
    $data['placas'] = $request['placas'];
    $data['inventario'] = $request['inventario'];
    $data['foto_inventario'] = $request['foto_inventario'];
    $data['llaves'] = $request['llaves'];
    $data['tipo_servicio'] = $request['tipo_servicio'];
    $data['lugar_siniestro'] = $request['lugar_siniestro'];
    $data['descripcion'] = $request['descripcion'];
    $data['nombre'] = $request['nombre'];
    $data['sucursal'] = $request['sucursal'];
    $data['corralon'] = 0;

    Vehiculo::create($data);
    return response()->json([
      'message' => "Successfully created",
      'success' => true
    ], 200);
  }


  public function delete($id)
  {
    $res = Vehiculo::find($id)->delete();
    return response()->json([
      'message' => "Successfully deleted",
      'success' => true
    ], 200);
  }

  public function get($id)
  {
    $data = Vehiculo::find($id);
    return response()->json($data, 200);
  }

  public function update(Request $request, $id)
  {
    $data['modelo'] = $request['modelo'];
    $data['marca'] = $request['marca'];
    $data['foto_vehiculo'] = $request['foto_vehiculo'];
    $data['color'] = $request['color'];
    $data['placas'] = $request['placas'];
    $data['inventario'] = $request['inventario'];
    $data['foto_inventario'] = $request['foto_inventario'];
    $data['llaves'] = $request['llaves'];
    $data['id'] = $request['id'];
    $data['tipo_servicio'] = $request['tipo_servicio'];
    $data['lugar_siniestro'] = $request['lugar_siniestro'];
    $data['descripcion'] = $request['descripcion'];
    $data['nombre'] = $request['nombre'];
    $data['sucursal'] = $request['sucursal'];
    Vehiculo::find($id)->update($data);
    return response()->json([
      'message' => "Successfully updated",
      'success' => true
    ], 200);
  }
}
