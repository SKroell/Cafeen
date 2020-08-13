<?php

namespace App\Http\Controllers\Api;

use App\InfoPage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\InfoPageRequest;

class PageController extends Controller
{

    /**
     * Get single page
     *
     * @param $slug
     * @return mixed
     */
    public function publishedPage($slug)
    {
        return InfoPage::loadPublished($slug);
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
     * @param InfoPageRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(InfoPageRequest $request)
    {
        $user = $request->user();

        $page = new InfoPage($request->validated());
        $page->slug = Str::slug($request->get('title'));

        $user->pages()->save($page);

        return response()->json($page, 201);
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
        return InfoPage::findOrFail($id);
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
     * @param InfoPageRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(InfoPageRequest $request, $id)
    {
        $article = InfoPage::findOrFail($id);

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
        $article = InfoPage::findOrFail($id);

        $article->delete();

        return response([], 200);
    }
}