<?php

use Illuminate\Database\Seeder;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = App\User::where('is_admin', true)->first();
        factory(App\NewsEntry::class, 250)->create([
            'user_id' => $user->id
        ]);
    }
}