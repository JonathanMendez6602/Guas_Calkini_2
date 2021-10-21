<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Cliente;
use Log;

class ClienteController extends Controller
{
    //
    public function getAll(){
        $data = Cliente::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['nombre'] = $request['nombre'];
        Cliente::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

  
      public function delete($id){
        $res = Cliente::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Cliente::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['nombre'] = $request['nombre'];
        Cliente::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
