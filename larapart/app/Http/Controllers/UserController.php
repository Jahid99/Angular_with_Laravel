<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class UserController extends Controller
{
  //saving profile to database
  public function addUser(Request $request){

      $user = new User;
      $user->name = $request->Input('name');
      $user->blood_group = $request->Input('blood_group');
      $user->address = $request->Input('address');
      $user->age = $request->Input('age');
      $user->photo = $request->Input('photo');
      $user->save();
      $response = array('response'=>'user ADDED!', 'success'=>true);
      return $response;

  }

  public function getAllUsers(){

       $users = User::orderBy('id', 'desc')->get();
       return response()->json($users);
   }

   public function deleteUser($id) {
       User::where('id', $id)->delete();
       $response = array('response'=>'user deleted!','success'=>true);
       return $response;
   }

   public function selectUser($id){
        $user = User::where('id',$id)->get();
        return response()->json($user);
    }

    public function updateUser(Request $request){

        //find item
        $id = $request->Input('id');

        User::where('id', '=', $id)->update(array(
            'name' => $request->Input('name'),
            'blood_group' => $request->Input('blood_group'),
            'address' => $request->Input('address'),
            'age' => $request->Input('age'),
            'photo' => $request->Input('photo')
        ));

        $response = array('response'=>'profile updated!', 'success'=>true);
        return $response;
    }

}
