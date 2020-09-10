<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

use Illuminate\Support\Str;

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->phoneNumber,
        'about' => $faker->sentence(10),
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => Str::random(10),
    ];
});

$factory->define(App\NewsEntry::class, function (Faker\Generator $faker) {

    $title = $faker->sentence;

    return [
        'title' => $title,
        'slug' => Str::slug($title),
        'description' => $faker->sentence(15),
        'content' => implode(' ', $faker->paragraphs(2)),
        'published' => true,
        'published_at' => \Carbon\Carbon::now(),
    ];
});

$factory->define(App\InfoPage::class, function (Faker\Generator $faker) {

    $title = $faker->sentence;

    return [
        'title' => $title,
        'slug' => Str::slug($title),
        'content' => implode(' ', $faker->paragraphs(2)),
        'published' => true,
        'last_edit_at' => \Carbon\Carbon::now(),
    ];
});
