<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Property;
use App\countries;
use App\states;
use App\cities;
use App\images;
use App\environmental_features;
use App\basic_features;
use App\internal_features;
use App\external_features;
use App\property_external_features;
use App\property_internal_features;
use App\property_environmental_features;
use App\property_basic_features;
use App\miscellaneous_features;



class PropertyController extends Controller
{
  public function view(){
    $view = Property::all()->pluck('property_description');
    echo "<option>-Select Status</option>";
    foreach($view as $views){
      echo "<option>$views</option>";
    }
  }


  public function getCountry(){
    $view = countries::all();
    $ifeatures = internal_features::all();
    $enfeatures = environmental_features::all();
    $exfeatures = external_features::all();
    $mfeatures = miscellaneous_features::all();
    $bfeatures = basic_features::all();
    return view('addProperty', compact('view', 'ifeatures','enfeatures','exfeatures','mfeatures','bfeatures'));
  }


  public function getState($country_id){
    $query = states::select('name', 'id')->where('country_id', $country_id)->get();
    echo  "<option value=''>-select state-</option>";
    foreach($query as $states){
      echo "<option value='$states->id'>$states->name</option>";
    }





  }

  public function getLga($state_id){
    $query = cities::select('name', 'id')->where('state_id', $state_id)->get();
    echo  "<option value=''>-select lga-</option>";
    foreach($query as $lga){
      echo "<option value='$lga->id'>$lga->name</option>";
    }
  }

  public function addProperty(Request $request){
    //changes were made from here
    $Cntval = request('country');
    $counte = countries::find($Cntval);
    //latest changes made here
    $ran = rand(00000,99999);
    $property = "property";
    $property_hash_id = $property.$ran;
    //changes end here


    $Sttval = request('state');
    $statee = states::find($Sttval);


    $Citval = request('city');
    $citiee = cities::find($Citval);
    //to here



    Property::create([
      "property_title"=> request('property_title'),
      "property_description"=> request('property_description'),
      "user_id"=> "banji",
      "hash_id"=> $property_hash_id,
      "country"=> $counte->name, //changes made
      "state"=> $statee->name, //changes made
      "city"=> $citiee->name,//changes made
      "address"=> request('address'),
      "amount"=> request('amount'),
      "publish_status"=> request('publish_status'),
      "property_status"=> request('property_status'),
      "place"=> request('place'),
      "contract_type"=> request('contract_type'),
      "type_of_property"=> request('type_of_property'),
      "unit_of_measurement"=> request('unit_of_measurement'),
      "capacity"=> request('capacity'),
      "quantity"=> request('quantity'),
      "typeOfitem"=> request('typeOfitem'),
      "measurement"=> request('measurement'),
      "to_duration"=> request('to_duration'),
      "from_duration"=> request('from_duration'),
      "sh_accomodation_capacity"=> request('sh_accomodation_capacity'),
      "sh_type_of_bedspace"=> request('sh_type_of_bedspace'),
      "sh_bedspace_capacity"=> request('sh_bedspace_capacity'),
      "sh_guest_breakfast"=> request('sh_guest_breakfast'),
      "sh_caution_fee"=> request('sh_caution_fee'),
      "sh_caution_fee_amount"=> request('sh_caution_fee_amount'),
      "sh_sleep_over"=> request('sh_sleep_over'),
      "sh_comeback_time"=> request('sh_comeback_time'),
      "sh_available_bathroom"=> request('sh_available_bathroom'),
      "sh_available_toilet"=> request('sh_available_toilet'),
      "sh_available_kitchen"=> request('sh_available_kitchen'),
      "sh_compensation_plan"=> request('sh_compensation_plan'),
      "sh_compensation_plan_amount"=> request('sh_compensation_plan_amount'),
      "tf_height"=> request('tf_height'),
      "tf_diameter"=> request('tf_diameter'),
      "tf_loading_gantry"=> request('tf_loading_gantry'),
      "facilities_offered"=> request('facilities_offered'),
      "tf_liter_storage"=> request('tf_liter_storage'),
      "tf_liter_storage"=> request('tf_liter_storage')
    ]);

    $ext_feature = request('external_features');
    foreach ( $ext_feature as $feature){
      property_external_features::create([
        'property_id'=> $property_hash_id,
        'feature'=> $feature
      ]);
    }
    $int_feature = request('internal_features');
    foreach ( $int_feature as $feature){
      property_internal_features::create([
        'property_id'=> $property_hash_id,
        'feature'=> $feature
      ]);
    }

    $env_feature = request('environmental_features');
    foreach ( $env_feature as $feature){
      property_environmental_features::create([
        'property_id'=> $property_hash_id,
        'feature'=> $feature
      ]);
    }
    $bas_feature = request('basic_features');
    foreach ( $bas_feature as $feature){
      property_basic_features::create([
        'property_id'=> $property_hash_id,
        'feature'=> $feature
      ]);
    }




if ($request->hasFile('image')) {
    $files = $request->file('image');
    $des = request('description');
    $combined_val = array_combine ($des, $files);
    foreach($combined_val  as $dess => $file){
        $filename = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $picture = date('His').$filename;
        $file->move('images', $picture);

        images::create([
        'image_path' => $picture,
        'image_description' => $dess,
        'hash_id' => $property_hash_id
        ]);

    }
}





    return redirect('/');
  }

}
