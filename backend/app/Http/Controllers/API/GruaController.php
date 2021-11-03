<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Grua;
use Log;

class GruaController extends Controller
{
    //
    public function getAll(){
        $data = Grua::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['marca'] = $request['marca'];
        $data['modelo'] = $request['modelo'];
        $data['num_serie'] = $request['num_serie'];
        $data['placas'] = $request['placas'];
        $data['anio'] = $request['anio'];
        $data['num_motor'] = $request['num_motor'];
        $data['tipo_est_o_fed'] = $request['tipo_est_o_fed'];
        $data['doc_tarjcirculacion'] = $request['doc_tarjcirculacion'];
        $data['doc_cartaporte'] = $request['doc_cartaporte'];
        $data['doc_polizaseguro'] = $request['doc_polizaseguro'];
        $data['doc_factura'] = $request['doc_factura'];
        $data['doc_consecion'] = $request['doc_consecion'];
        $data['doc_inclusion'] = $request['doc_inclusion'];
        $data['doc_permiso_fisicomec'] = $request['doc_permiso_fisicomec'];
        $data['doc_anticontaminantes'] = $request['doc_anticontaminantes'];
        Grua::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

  
      public function delete($id){
        $res = Grua::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Grua::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['marca'] = $request['marca'];
        $data['modelo'] = $request['modelo'];
        $data['num_serie'] = $request['num_serie'];
        $data['placas'] = $request['placas'];
        $data['anio'] = $request['anio'];
        $data['num_motor'] = $request['num_motor'];
        $data['tipo_est_o_fed'] = $request['tipo_est_o_fed'];
        $data['doc_tarjcirculacion'] = $request['doc_tarjcirculacion'];
        $data['doc_cartaporte'] = $request['doc_cartaporte'];
        $data['doc_polizaseguro'] = $request['doc_polizaseguro'];
        $data['doc_factura'] = $request['doc_factura'];
        $data['doc_consecion'] = $request['doc_consecion'];
        $data['doc_inclusion'] = $request['doc_inclusion'];
        $data['doc_permiso_fisicomec'] = $request['doc_permiso_fisicomec'];
        $data['doc_anticontaminantes'] = $request['doc_anticontaminantes'];
        Grua::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
