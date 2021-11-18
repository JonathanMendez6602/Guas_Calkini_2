<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Corralon;
use App\Models\Vehicle;
use Log;

class CorralonController extends Controller
{

  public function getAll()
  {

    $data = Corralon::get();
    return response()->json($data, 200);
  }

  public function create(Request $request)
  {
    $data['fecha_entrada'] = $request['fecha_entrada'];
    $data['pension_c'] = $request['pension_c'];
    $data['dias_pension'] = 0;
    $data['status_entrega'] = "No Entregado";
    
    $data['fecha_entrega'] = '0000-01-01';

    $data['otro_asunto'] = $request['otro_asunto'];
    $data['id_vehiculo'] = $request['id_vehiculo'];
    $data_1['corralon']=1;
    $data['sucursal'] = $request['sucursal'];
    $data['branch_office_id']=1;
    Vehicle::find($data['id_vehiculo'])-> update($data_1);
    Corralon::create($data);
    return response()->json([
      'message' => "Successfully created",
      'success' => true
    ], 200);

  }




  public function delete($id)
  {
    $data = Corralon::find($id);
    $data_1['corralon']=0;
    Vehiculo::find($data['id_vehiculo'])-> update($data_1);
    $res = Corralon::find($id)->delete();
    return response()->json([
      'message' => "Successfully deleted",
      'success' => true
    ], 200);
  }

  public function get($id)
  {
    $data = Corralon::find($id);
    return response()->json($data, 200);
  }

  public function update(Request $request, $id)
  {
    $data['fecha_entrada'] = $request['fecha_entrada'];
    $data['pension_c'] = $request['pension_c'];
    if ($data['pension_c']=='Si'){
      $dias = (strtotime( $request['fecha_entrada'])-strtotime($request['fecha_entrega']))/86400;
      $dias = abs($dias);
      $dias=floor($dias);
      $data['dias_pension'] = $dias;
    }else{
      $data['dias_pension']=0;
    }
    $data['status_entrega'] = "Entregado";
    $data['fecha_entrega'] = $request['fecha_entrega'];
    $data['otro_asunto'] = $request['otro_asunto'];
    $data['id_vehiculo'] = $request['id_vehiculo'];
    Corralon::find($id)->update($data);
    return response()->json([
      'message' => "Successfully updated",
      'success' => true
    ], 200);
  }
}
