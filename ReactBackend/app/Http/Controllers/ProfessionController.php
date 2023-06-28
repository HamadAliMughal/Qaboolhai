<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profession;

class ProfessionController extends Controller
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
        $id = Profession::where('User_id', '=', $request->user_id)->get();
        if($id->isEmpty())
        {
            Profession::create([
                'User_id'=>$request->user_id,
                 'Education'=>$request->education,
                'Profession'=>$request->profession,
                'Aim'=>$request->aim,
            ]); 
            return response()->json('Successfully Added Education');
        }
        else
        {
            Profession::where('User_id',$request->user_id)->update([
                'Education'=>$request->education,
                'Profession'=>$request->profession,
                'Aim'=>$request->aim,
            ]);  
            return response()->json('Successfully Updated Education');
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
        // return $id;
        $results = Profession::where('User_id', '=', $id)->get();
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
