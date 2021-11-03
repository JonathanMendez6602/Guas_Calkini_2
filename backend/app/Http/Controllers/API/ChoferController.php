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
        $data['doc_lic_fed'] = $request['doc_lic_fed'];
        $data['fecha_lic_fed'] = $request['fecha_lic_fed'];
        $data['num_lic_fed'] = $request['num_lic_fed'];
        $data['doc_lic_est'] = $request['doc_lic_est'];
        $data['fecha_lic_est'] = $request['fecha_lic_est'];
        $data['num_lic_est'] = $request['num_lic_est'];
        $data['doc_ine'] = $request['doc_ine'];
        $data['doc_curp'] = $request['doc_curp'];
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
        $data['doc_lic_fed'] = $request['doc_lic_fed'];
        $data['fecha_lic_fed'] = $request['fecha_lic_fed'];
        $data['num_lic_fed'] = $request['num_lic_fed'];
        $data['doc_lic_est'] = $request['doc_lic_est'];
        $data['fecha_lic_est'] = $request['fecha_lic_est'];
        $data['num_lic_est'] = $request['num_lic_est'];
        $data['doc_ine'] = $request['doc_ine'];
        $data['doc_curp'] = $request['doc_curp'];
        Chofer::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}