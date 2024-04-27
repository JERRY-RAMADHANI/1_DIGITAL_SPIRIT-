<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;

class ReportController extends Controller
{
public function sendMessage(Request $request)
{
    $validated = $request->validate([
        'message' => 'required|string',
        'title' => 'required|string',
    ]);

    $message = Report::create([
        'user_id' => auth()->user()->id,
        'message' => $validated['message'],
        'title' => $validated['title'],
    ]);

    return response()->json($message);
}


    public function getChatHistory()
    {
        $report = report::orderBy('created_at', 'asc')->get();
    
        return response()->json($report);
    }
}

