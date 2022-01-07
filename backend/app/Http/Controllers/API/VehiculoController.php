<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Requestfilefile;
use Illuminate\Http\UploadedFileSplFileInfo;
use Iluminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File;
use Symfony\Component\HttpFoundation\Response; 
//use App\Http\Controllers\API\FPDF;

use App\Models\Vehicle;
use App\Models\Corralon;
use App\Models\Branch_Office;
use Log;
use SebastianBergmann\Environment\Console;

class VehiculoController extends Controller
{
  //
  public function getAll()
  {

    $data = Vehicle::get();
    return response()->json($data, 200);
  }

  public function getAllSucursal(){
    $data = Branch_Office::get();
    return response()->json($data, 200);
  }

  public function getAllCorralon()
  {
    $data = Vehicle::where('corralon', 0)->get();
    return response()->json($data, 200);
  }

  public function ObtenerPDF(){
    require('fpdf/fpdf.php');
    $consulta= Vehicle::where('sucursal', 'Hopelchen')->get();
    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial','B',16);
    $pdf->Cell(40,10,'¡Hola, Mundo!');
    $pdf->Output();
return response()->json($consulta, 200);
  }

  public function create(Request $request)
  {
    $data['modelo'] = $request['modelo'];
    $data['marca'] = $request['marca'];
    if($request['foto_vehiculo']==""){
      $data['foto_vehiculo']="";
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
      $data['foto_inventario']="";
    }else{
      $data['foto_inventario']=$request['foto_inventario'];
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
    $data['branch_office_id']=1;

    Vehicle::create($data);
    return response()->json([
      'message' => "Successfully created",
      'success' => true
    ], 200);
  }


  public function delete($id)
  {
    $res = Vehicle::find($id)->delete();
    return response()->json([
      'message' => "Successfully deleted",
      'success' => true
    ], 200);
  }

  public function get($id)
  {
    $data = Vehicle::find($id);
    return response()->json($data, 200);
  }

  public function getAseguradoraNombre($aseguradora, $nombre)
  {
    if($aseguradora == 'todos' && $nombre == 'todos'){
      $data = Vehicle::get();
    }else{
      if($aseguradora == 'todos' && $nombre != 'todos'){
        $data = Vehicle::where('nombre', $nombre)->get();
      }else{
        if($aseguradora != 'todos' && $nombre == 'todos'){
          $data = Vehicle::where('aseguradora', $aseguradora)->get();
        }else{
          $data = Vehicle::where('nombre', $nombre && 'aseguradora', $aseguradora)->get();
        }
      }
    }
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
    Vehicle::find($id)->update($data);
    return response()->json([
      'message' => "Successfully updated",
      'success' => true
    ], 200);
  }
}
