<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PersonalInfo;

class PersonalInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id = PersonalInfo::where('User_id', '=', $request->user_id)->get();
        if($id->isEmpty())
        {
            PersonalInfo::create([
                'User_id'=>$request->user_id,
                 'Age'=>$request->age,
                'Gender'=>$request->gen,
                'Nationality'=>$request->nationality,
                'First_Language'=>$request->lang,
                'Second_Language'=>$request->slang,
                'Country'=>$request->country,
                'State'=>$request->stat,
                'City'=>$request->city
            ]); 
            return response()->json('Successfully Added Personal Information');
        }
        else
        {
            PersonalInfo::where('User_id',$request->user_id)->update([
                'Age'=>$request->age,
                'Gender'=>$request->gen,
                'Nationality'=>$request->nationality,
                'First_Language'=>$request->lang,
                'Second_Language'=>$request->slang,
                'Country'=>$request->country,
                'State'=>$request->stat,
                'City'=>$request->city
            ]);  
            return response()->json('Successfully Updated Personal Information');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $results = PersonalInfo::where('User_id', '=', $id)->get();
        return $results;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
            //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
