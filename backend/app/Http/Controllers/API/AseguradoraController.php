<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Aseguradora;
use Log;

class AseguradoraController extends Controller
{
    //
    public function getAll(){
        $data = Aseguradora::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['nombre_aseguradora'] = $request['nombre_aseguradora'];
        Aseguradora::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

  
      public function delete($id){
        $res = Aseguradora::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Aseguradora::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['nombre_aseguradora'] = $request['nombre_aseguradora'];
        Aseguradora::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
