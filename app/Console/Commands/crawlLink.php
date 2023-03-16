<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Http\Controllers\crawlController;

class crawlLink extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'crawl:link';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'crawlLink job';

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

        $crawl->changeGroupJob();
    }
}
