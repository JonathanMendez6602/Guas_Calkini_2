<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Branch_Office;
use Log;

class SucursalController extends Controller
{
    //
    public function getAll(){
        $data = Branch_Office::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['sucursal'] = $request['sucursal'];
        Branch_Office::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

  
      public function delete($id){
        $res = Branch_Office::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Branch_Office::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['sucursal'] = $request['sucursal'];
        Branch_Office::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
