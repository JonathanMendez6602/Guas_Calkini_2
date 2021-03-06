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
        if($request['doc_tarjcirculacion']==""){
          $data['doc_tarjcirculacion'] = "";
          $data['doc_tarjcirculacion_n'] = "";
        }else{
          $data['doc_tarjcirculacion'] = $request['doc_tarjcirculacion'];
          $data['doc_tarjcirculacion_n'] = $request['doc_tarjcirculacion_n'];
        }

        if($request['doc_cartaporte']==""){
          $data['doc_cartaporte'] = "";
          $data['doc_cartaporte_n'] = "";
        }else{
          $data['doc_cartaporte'] = $request['doc_cartaporte'];
          $data['doc_cartaporte_n'] = $request['doc_cartaporte_n'];
        }

        if($request['doc_polizaseguro']==""){
          $data['doc_polizaseguro'] = "";
          $data['doc_polizaseguro_n'] = "";
        }else{
          $data['doc_polizaseguro'] = $request['doc_polizaseguro'];
          $data['doc_polizaseguro_n'] = $request['doc_polizaseguro_n'];
        }

        if($request['doc_factura']==""){
          $data['doc_factura'] = "";
          $data['doc_factura_n'] = "";
        }else{
          $data['doc_factura'] = $request['doc_factura'];
          $data['doc_factura_n'] = $request['doc_factura_n'];
        }

        if($request['doc_consecion']==""){
          $data['doc_consecion'] = "";
          $data['doc_consecion_n'] = "";
        }else{
          $data['doc_consecion'] = $request['doc_consecion'];
          $data['doc_consecion_n'] = $request['doc_consecion_n'];
        }

        if($request['doc_inclusion']==""){
          $data['doc_inclusion'] = "";
          $data['doc_inclusion_n'] = "";
        }else{
          $data['doc_inclusion'] = $request['doc_inclusion'];
          $data['doc_inclusion_n'] = $request['doc_inclusion_n'];
        }

        if($request['doc_permiso_fisicomec']==""){
          $data['doc_permiso_fisicomec'] = "";
          $data['doc_permiso_fisicomec_n'] = "";
        }else{
          $data['doc_permiso_fisicomec'] = $request['doc_permiso_fisicomec'];
          $data['doc_permiso_fisicomec_n'] = $request['doc_permiso_fisicomec_n'];
        }
        
        if($request['doc_anticontaminantes']==""){
          $data['doc_anticontaminantes'] = "";
          $data['doc_anticontaminantes_n'] = "";
        }else{
          $data['doc_anticontaminantes'] = $request['doc_anticontaminantes'];
          $data['doc_anticontaminantes_n'] = $request['doc_anticontaminantes_n'];
        }
        $data['estado'] = "Circulando";
        $data['sucursal'] = $request['sucursal'];
        $data['branch_office_id']=1;
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
        
        if($request['doc_tarjcirculacion']==""){
          $data['doc_tarjcirculacion'] = "";
          $data['doc_tarjcirculacion_n'] = "";
        }else{
          $data['doc_tarjcirculacion'] = $request['doc_tarjcirculacion'];
          $data['doc_tarjcirculacion_n'] = $request['doc_tarjcirculacion_n'];
        }

        if($request['doc_cartaporte']==""){
          $data['doc_cartaporte'] = "";
          $data['doc_cartaporte_n'] = "";
        }else{
          $data['doc_cartaporte'] = $request['doc_cartaporte'];
          $data['doc_cartaporte_n'] = $request['doc_cartaporte_n'];
        }

        if($request['doc_polizaseguro']==""){
          $data['doc_polizaseguro'] = "";
          $data['doc_polizaseguro_n'] = "";
        }else{
          $data['doc_polizaseguro'] = $request['doc_polizaseguro'];
          $data['doc_polizaseguro_n'] = $request['doc_polizaseguro_n'];
        }

        if($request['doc_factura']==""){
          $data['doc_factura'] = "";
          $data['doc_factura_n'] = "";
        }else{
          $data['doc_factura'] = $request['doc_factura'];
          $data['doc_factura_n'] = $request['doc_factura_n'];
        }

        if($request['doc_consecion']==""){
          $data['doc_consecion'] = "";
          $data['doc_consecion_n'] = "";
        }else{
          $data['doc_consecion'] = $request['doc_consecion'];
          $data['doc_consecion_n'] = $request['doc_consecion_n'];
        }

        if($request['doc_inclusion']==""){
          $data['doc_inclusion'] = "";
          $data['doc_inclusion_n'] = "";
        }else{
          $data['doc_inclusion'] = $request['doc_inclusion'];
          $data['doc_inclusion_n'] = $request['doc_inclusion_n'];
        }

        if($request['doc_permiso_fisicomec']==""){
          $data['doc_permiso_fisicomec'] = "";
          $data['doc_permiso_fisicomec_n'] = "";
        }else{
          $data['doc_permiso_fisicomec'] = $request['doc_permiso_fisicomec'];
          $data['doc_permiso_fisicomec_n'] = $request['doc_permiso_fisicomec_n'];
        }
        
        if($request['doc_anticontaminantes']==""){
          $data['doc_anticontaminantes'] = "";
          $data['doc_anticontaminantes_n'] = "";
        }else{
          $data['doc_anticontaminantes'] = $request['doc_anticontaminantes'];
          $data['doc_anticontaminantes_n'] = $request['doc_anticontaminantes_n'];
        }
        
        $data['sucursal'] = $request['sucursal'];
        
        Grua::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }

      public function getbaja($id){
        $data2['estado'] = "Baja";
        Grua::find($id)->update($data2);
        $data = Grua::find($id);
        return response()->json($data, 200);
      }
      public function baja($id){
       
        $data['estado'] = "Baja";
        
        Grua::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }

}
