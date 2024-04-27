<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;

class ReportController extends Controller
{
public function sendMessage(Request $request)
{
    $validated = $request->validate([
        'sender_id' => 'required|exists:users,id',
        'message' => 'required|string',
    ]);

    $message = Report::create([
        'sender_id' => $validated['sender_id'],
        'message' => $validated['message'],
    ]);

    return response()->json($message);
}


    public function getChatHistory()
    {
        $report = report::orderBy('created_at', 'asc')->get();
    
        return response()->json($report);
    }
}

