<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    private $tasks;

    public function __construct()
    {
        $this->tasks = [
            (object)[
                'id'=>1,
                'name'=> 'Develop Final Project',
                'detail'=>'Kanban project using PHP and laravel',
                'due_date'=>'3032-04-30',
                'status'=>'not_started',
            ],
            (object)[
                'id'=>2,
                'name'=> 'Launch Final Project',
                'detail'=>'Kanban project using JS and laravel',
                'due_date'=>'2032-04-30',
                'status'=>'not_started',
            ],
            (object)[
                'id'=>3,
                'name'=> 'Final Project',
                'detail'=>'Kanban project using PHP and laravel',
                'due_date'=>'3032-04-30',
                'status'=>'not_started',
            ],
            ];
    }
    //
    public function index(){
        $pageTitle = 'Task List';
        $tasks = $this->tasks;
        return view('tasks.index', [
            'pageTitle'=>$pageTitle,
            'tasks' => $tasks]);
    }
}
