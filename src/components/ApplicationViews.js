import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/post_list"

export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/">
                    <PostList />
            </Route>
        </main>
    </>
}
