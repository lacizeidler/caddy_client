import React from "react"
import { Route } from "react-router-dom"
import { PostForm } from "./posts/post_form"
import { PostList } from "./posts/post_list"
import { FinalScoreForm } from "./scores/final_score_form"
import { ProfilePage } from "./profile/profile_page"

export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/">
                    <PostList />
            </Route>
            <Route exact path="/new/post">
                    <PostForm />
            </Route>
            <Route exact path="/new/final_score">
                    <FinalScoreForm />
            </Route>
            <Route exact path="/profile">
                    <ProfilePage/>
            </Route>
        </main>
    </>
}
