<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Http\Controllers\crawlController;

class run extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'list:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $crawl = new crawlController();

        $crawl->crawl_employer();
    }
}
