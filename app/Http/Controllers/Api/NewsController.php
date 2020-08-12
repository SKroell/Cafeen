<?php

namespace App\Http\Controllers\Api;

use App\NewsEntry;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\NewsEntryRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request)
    {
        if ($request->user()->is_admin) {
            return NewsEntry::loadAll();
        }
        return NewsEntry::loadAllMine($request->user()->id);
    }

    /**
     * get all published articles
     *
     * @return mixed
     */
    public function publishedNewsEntries()
    {
        return NewsEntry::loadAllPublished();
    }

    /**
     * Get single published article
     *
     * @param $slug
     * @return mixed
     */
    public function publishedNewsEntry($slug)
    {
        return NewsEntry::loadPublished($slug);
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
     * @param NewsEntryRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(NewsEntryRequest $request)
    {
        $user = $request->user();

        $article = new NewsEntry($request->validated());
        $article->slug = Str::slug($request->get('title'));

        $user->articles()->save($article);

        return response()->json($article, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (!$request->user()->is_admin) {
            return NewsEntry::mine($request->user()->id)->findOrFail($id);
        }

        return NewsEntry::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param NewsEntryRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(NewsEntryRequest $request, $id)
    {
        $article = NewsEntry::findOrFail($id);

        $data = $request->validated();
        $data['slug'] = Str::slug($data['title']);
        $article->update($data);

        return response()->json($article, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $article = NewsEntry::findOrFail($id);

        $article->delete();

        return response([], 200);
    }
}