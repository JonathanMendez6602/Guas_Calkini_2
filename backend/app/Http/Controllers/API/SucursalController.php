<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Sucursal;
use Log;

class SucursalController extends Controller
{
    //
    public function getAll(){
        $data = Sucursal::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['sucursal'] = $request['sucursal'];
        Sucursal::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

      public function getAllSucursal(){
          $data = Sucursal::get();
          return response()->json($data,200);
      }
  
      public function delete($id){
        $res = Sucursal::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Sucursal::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['sucursal'] = $request['sucursal'];
        Sucursal::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
