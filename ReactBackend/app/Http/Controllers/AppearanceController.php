<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appearance;

class AppearanceController extends Controller
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
        $id = Appearance::where('User_id', '=', $request->user_id)->get();
        if($id->isEmpty())
        {
            Appearance::create([
                'User_id'=>$request->user_id,
                 'Eye_color'=>$request->eyecolor,
                'Hair_color'=>$request->haircolor,
                'Height'=>$request->height,
                'BodyType'=>$request->bodytype
            ]); 
            return response()->json('Successfully Added Appearance');
        }
        else
        {
            Appearance::where('User_id',$request->user_id)->update([
                'Eye_color'=>$request->eyecolor,
                'Hair_color'=>$request->haircolor,
                'Height'=>$request->height,
                'BodyType'=>$request->bodytype
            ]);  
            return response()->json('Successfully Updated Appearance');
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
        $results = Appearance::where('User_id', '=', $id)->get();
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
