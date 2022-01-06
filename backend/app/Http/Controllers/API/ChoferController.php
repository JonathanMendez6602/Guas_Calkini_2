<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Chofer;
use Log;

class ChoferController extends Controller
{
    //
    public function getAll(){
        $data = Chofer::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['nombre'] = $request['nombre'];
        $data['apellido_m'] = $request['apellido_m'];
        $data['apellido_p'] = $request['apellido_p'];
        $data['edad'] = $request['edad'];
        
        if($request['doc_lic_fed']==""){
          $data['doc_lic_fed'] = "";
          $data['doc_lic_fed_n'] = "";
        }else{
          $data['doc_lic_fed_n'] =$request['doc_lic_fed_n'];
          $data['doc_lic_fed'] = $request['doc_lic_fed'];
        }
        $data['fecha_lic_fed'] = $request['fecha_lic_fed'];
        $data['num_lic_fed'] = $request['num_lic_fed'];
        if($request['doc_lic_est']==""){
          $data['doc_lic_est_n'] = "";
          $data['doc_lic_est'] = "";
        }else{
          $data['doc_lic_est_n']= $request['doc_lic_est_n'];
          $data['doc_lic_est'] = $request['doc_lic_est'];
        }
        $data['fecha_lic_est'] = $request['fecha_lic_est'];
        $data['num_lic_est'] = $request['num_lic_est'];
        if($request['doc_ine']==""){
          $data['doc_ine_n'] = "";
          $data['doc_ine'] = "";
        }else{
          $data['doc_ine_n']=$request['doc_ine_n'];
          $data['doc_ine'] = $request['doc_ine'];
        }
        if($request['doc_curp']==""){
          $data['doc_curp_n'] = ""; 
          $data['doc_curp'] = "";
        }else{
          $data['doc_curp_n']=$request['doc_curp_n'];
          $data['doc_curp'] = $request['doc_curp'];
        }
        $data['sucursal'] = $request['sucursal'];
        $data['estado'] = "Laborando";
        $data['branch_office_id']=1;
        Chofer::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Chofer::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Chofer::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['nombre'] = $request['nombre'];
        $data['apellido_m'] = $request['apellido_m'];
        $data['apellido_p'] = $request['apellido_p'];
        $data['edad'] = $request['edad'];
        if($request['doc_lic_fed']==""){
          $data['doc_lic_fed'] = "";
        }else{
          $data['doc_lic_fed'] = $request['doc_lic_fed'];
        }
        $data['fecha_lic_fed'] = $request['fecha_lic_fed'];
        $data['num_lic_fed'] = $request['num_lic_fed'];
        if($request['doc_lic_est']==""){
          $data['doc_lic_est'] = "";
        }else{
          $data['doc_lic_est'] = $request['doc_lic_est'];
        }
        $data['fecha_lic_est'] = $request['fecha_lic_est'];
        $data['num_lic_est'] = $request['num_lic_est'];
        if($request['doc_ine']==""){
          $data['doc_ine'] = "";
        }else{
          $data['doc_ine'] = $request['doc_ine'];
        }
        if($request['doc_curp']==""){
          $data['doc_curp'] = "";
        }else{
          $data['doc_curp'] = $request['doc_curp'];
        }

        $data['sucursal'] = $request['sucursal'];

        Chofer::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }


      public function getbaja($id){
        $data2['estado'] = "Baja";
        Chofer::find($id)->update($data2);
        $data = Chofer::find($id);
        return response()->json($data, 200);
      }
      public function baja($id){
       
        $data['estado'] = "Baja";
        
        Chofer::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
