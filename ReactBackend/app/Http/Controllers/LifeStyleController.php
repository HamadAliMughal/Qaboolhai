<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LifeStyle;

class LifeStyleController extends Controller
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
        $id = LifeStyle::where('User_id', '=', $request->user_id)->get();
        if($id->isEmpty())
        {
            LifeStyle::create([
                'User_id'=>$request->user_id,
                 'Martial_Status'=>$request->marStatus,
                'Religion'=>$request->religion,
                'Children'=>$request->childern,
                'Siblings'=>$request->siblings,
                'Living_Status'=>$request->livingStatus,
                'Willing_to_move'=>$request->wilingtomove,
                'Smoker'=>$request->smoker,
                'Wealth'=>$request->wealth
            ]); 
            return response()->json('Successfully Added Living Style');
        }
        else
        {
            LifeStyle::where('User_id',$request->user_id)->update([
                'Martial_Status'=>$request->marStatus,
                'Religion'=>$request->religion,
                'Children'=>$request->childern,
                'Siblings'=>$request->siblings,
                'Living_Status'=>$request->livingStatus,
                'Willing_to_move'=>$request->wilingtomove,
                'Smoker'=>$request->smoker,
                'Wealth'=>$request->wealth
            ]);  
            return response()->json('Successfully Updated Living Style');
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
        $results = LifeStyle::where('User_id', '=', $id)->get();
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
