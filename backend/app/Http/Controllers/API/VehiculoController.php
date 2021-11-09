<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Requestfilefile;
use Illuminate\Http\UploadedFileSplFileInfo;
use Symfony\Component\HttpFoundation\File;

use App\Models\Vehiculo;
use App\Models\Corralon;
use App\Models\Sucursal;
use Log;
use SebastianBergmann\Environment\Console;

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

    $data['modelo'] = $request['modelo'];
    $data['marca'] = $request['marca'];
    if($request['foto_vehiculo']==""){
      $data['foto_vehiculo'] = "";
    }else{
      $data['foto_vehiculo']=$request['foto_vehiculo'];
    }
    $data['color'] = $request['color'];
    $data['placas'] = $request['placas'];
    if($request['inventario']==""){
      $data['inventario'] = "";
    }else{
      $data['inventario'] = $request['inventario'];
    }
    if($request['foto_inventario']==""){
      $data['foto_inventario'] = "";
    }else{
      $data['foto_inventario'] = $request['foto_inventario'];
    }
    if($request['llaves']==1){
      $data['llaves']="si";
    }else{
      $data['llaves']="no";
    }
    $data['tipo_servicio'] = $request['tipo_servicio'];
    $data['lugar_siniestro'] = $request['lugar_siniestro'];
    if($request['descripcion']==""){
      $data['descripcion'] = "";
    }else{
      $data['descripcion'] = $request['descripcion'];
    }
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
    if($request['foto_vehiculo']==""){
      $data['foto_vehiculo'] = "";
    }else{
      $data['foto_vehiculo'] = $request['foto_vehiculo'];
    }
    $data['color'] = $request['color'];
    $data['placas'] = $request['placas'];
    if($request['inventario']==""){
      $data['inventario'] = "";
    }else{
      $data['inventario'] = $request['inventario'];
    }
    if($request['foto_inventario']==""){
      $data['foto_inventario'] = "";
    }else{
      $data['foto_inventario'] = $request['foto_inventario'];
    }
    if($request['llaves']==1){
      $data['llaves']="si";
    }else{
      $data['llaves']="no";
    }
    $data['tipo_servicio'] = $request['tipo_servicio'];
    $data['lugar_siniestro'] = $request['lugar_siniestro'];
    if($request['descripcion']==""){
      $data['descripcion'] = "";
    }else{
      $data['descripcion'] = $request['descripcion'];
    }
    $data['nombre'] = $request['nombre'];
    $data['sucursal'] = $request['sucursal'];
    Vehiculo::find($id)->update($data);
    return response()->json([
      'message' => "Successfully updated",
      'success' => true
    ], 200);
  }
}
