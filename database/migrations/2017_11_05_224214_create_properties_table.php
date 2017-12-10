<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->increments('id');
            $table->string('property_title')->nullable();
            $table->string('hash_id');
            $table->string('user_id')->nullable();
            $table->string('property_description')->nullable();
            $table->string('country')->nullable();
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->string('address')->nullable();
            $table->string('property_status')->nullable();
            $table->string('type_of_property')->nullable();
            $table->string('contract_type')->nullable();
            $table->string('amount')->nullable();
            $table->string('publish_status')->nullable();
            $table->string('place')->nullable();
            $table->string('quantity')->nullable();
            $table->string('typeOfitem')->nullable();
            $table->string('unit_of_measurement')->nullable();
            $table->string('measurement')->nullable();
            $table->string('capacity')->nullable();
            $table->string('tenor')->nullable();
            $table->string('tenor_day')->nullable();
            $table->string('tenor_month')->nullable();
            $table->string('tenor_year')->nullable();
            $table->string('payment_tenor')->nullable();
            $table->string('cost_per_measurement')->nullable();
            $table->string('cost_measurement')->nullable();
            $table->string('development_period')->nullable();
            $table->string('bank_statement')->nullable();
            $table->string('proof_of_income')->nullable();
            $table->string('acceptable_valid_identification')->nullable();
            $table->string('initial_deposit')->nullable();
            $table->string('monthly_installment_payment')->nullable();
            $table->string('type_of_foreclosure')->nullable();
            $table->string('facilities_offered')->nullable();
            $table->string('to_duration')->nullable();
            $table->string('from_duration')->nullable();
            $table->string('sh_accomodation_capacity')->nullable();
            $table->string('sh_type_of_bedspace')->nullable();
            $table->string('sh_bedspace_capacity')->nullable();
            $table->string('sh_guest_breakfast')->nullable();
            $table->string('sh_caution_fee')->nullable();
            $table->string('sh_caution_fee_amount')->nullable();
            $table->string('sh_sleep_over')->nullable();
            $table->string('sh_comeback_time')->nullable();
            $table->string('sh_available_bathroom')->nullable();
            $table->string('sh_available_toilet')->nullable();
            $table->string('sh_available_kitchen')->nullable();
            $table->string('sh_compensation_plan')->nullable();
            $table->string('sh_compensation_plan_amount')->nullable();
            $table->string('tf_height')->nullable();
            $table->string('tf_diameter')->nullable();
            $table->string('tf_loading_gantry')->nullable();
            $table->string('tf_liter_storage')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
