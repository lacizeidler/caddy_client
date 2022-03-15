import React from "react"
import { Route } from "react-router-dom"
import { PostForm } from "./posts/post_form"
import { PostList } from "./posts/post_list"
import { FinalScoreForm } from "./scores/final_score_form"
import { ProfilePage } from "./profile/profile_page"
import { ScoresPage } from "./scores/scores_page"
import { ScoresList } from "./scores/scores_list"

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
            <Route exact path="/scores">
                    <ScoresList/>
            </Route>
            <Route exact path="/scores/new">
                    <ScoresPage/>
            </Route>
        </main>
    </>
}
