<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Corralon;
use App\Models\Vehiculo;
use Log; 

class CorralonController extends Controller
{
    //
    public function getAll(){
        $data = Vehiculo::where('corralon','=','si')->get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
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
        $data['aseguradora'] = $request['aseguradora'];
        $data['nombre_aseguradora'] = $request['nombre_aseguradora'];
        $data['particular'] = $request['particular'];
        $data['nombre_particular'] = $request['nombre_particular'];
        $data['apellido_materno'] = $request['apellido_materno'];
        $data['apellido_paterno'] = $request['apellido_paterno'];
        $data['corralon'] = $request['corralon'];
        $data['fecha_entrada'] = $request['fecha_entrada'];
        $data['pension_c'] = $request['pension_c'];
        $data['dias_pension'] = $request['dias_pension'];
        $data['status_entrega'] = $request['status_entrega'];
        $data['fecha_entrega'] = $request['fecha_entrega'];
        $data['otro_asunto'] = $request['otro_asunto'];
        Vehiculo::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

      public function getAllCorralon(){
          $data = Vehiculo::get();
          return response()->json($data,200);
      }
  
      public function delete($id){
        $res = Vehiculo::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Vehiculo::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['modelo'] = $request['modelo'];
        $data['marca'] = $request['marca'];
        $data['foto_vehiculo'] = $request['foto_vehiculo'];
        $data['color'] = $request['color'];
        $data['placas'] = $request['placas'];
        $data['inventario'] = $request['inventario'];
        $data['foto_inventario'] = $request['foto_inventario'];
        $data['llaves'] = $request['llaves'];
        Vehiculo::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
