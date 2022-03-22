import React from "react"
import { Route } from "react-router-dom"
import { PostForm } from "./posts/post_form"
import { PostList } from "./posts/post_list"
import { FinalScoreForm } from "./scores/final_score_form"
import { ProfilePage } from "./profile/profile_page"
import { ScoresPage } from "./scores/scores_page"
import { ScoresList } from "./scores/scores_list"
import { EditPost } from "./profile/edit_post"
import { CommentList } from "./comments/comment_list"
import { CourseForm } from "./courses/course_form"
import { SharedFinalScoreList } from "./scores/shared_final_score"
import { SharedHoleByHoleList } from "./scores/shared_table_score"

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
            <Route exact path="/posts/edit/:postId(\d+)">
                    <EditPost/>
            </Route>
            <Route exact path="/posts/comments/:postId(\d+)">
                    <CommentList/>
            </Route>
            <Route exact path="/new/course">
                    <CourseForm/>
            </Route>
            <Route exact path="/shared/final_score">
                    <SharedFinalScoreList/>
            </Route>
            <Route exact path="/shared/table_score">
                    <SharedHoleByHoleList/>
            </Route>
        </main>
    </>
}
