import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createPost, getCourses } from "./post_manager"
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';
import { CourseForm } from "../courses/course_form";

export const PostForm = () => {
    const history = useHistory()
    const [courses, setCourses] = useState([])
    const [currentPost, setCurrentPost] = useState({
        date: "",
        content: "",
        image_url: "",
        course_id: 0
    })

    useEffect(() => {
        getCourses()
            .then(setCourses)
    }, [])

    const changePostState = (domEvent) => {
        const copy = { ...currentPost }
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        setCurrentPost(copy)
    }

    return (
        <>
        <h2 style={{ "margin": "2%" }}>New Post</h2>
            <Form style={{ "border": "grey solid 1px", "margin": "2%", "padding": "2%" }}>
                <FormGroup>
                    <Label for="exampleText">
                        Golf Course
                    </Label>
                    <Input
                        className="mb-3"
                        type="select"
                        name="course_id"
                        value={currentPost.course_id}
                        onChange={changePostState}
                    >
                        <option value={0}>Select a golf course ...</option>
                        {
                            courses.map(course => {
                                return <option key={course.id} value={course.id}>
                                    {course.name}
                                </option>
                            })
                        }
                    </Input>
                    <Button
                        color="success"
                        onClick={
                            () => {
                                history.push("/new/course")
                            }
                        }
                    >
                        New Course
                    </Button>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">
                        Content
                    </Label>
                    <Input
                        style={{"height": "200px"}}
                        id="exampleText"
                        name="content"
                        type="textarea"
                        placeholder="Isn't golf awesome?!"
                        value={currentPost.content}
                        onChange={changePostState}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">
                        Photo
                    </Label>
                    <Input
                        id="exampleFile"
                        name="image_url"
                        type="url"
                        placeholder="Image Url"
                        value={currentPost.image_url}
                        onChange={changePostState}
                    />
                </FormGroup>
                <Button
                    color="success"
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const post = {
                            date: new Date().toISOString().slice(0, 10),
                            content: currentPost.content,
                            image_url: currentPost.image_url,
                            course_id: parseInt(currentPost.course_id)
                        }

                        // Send POST request to your API
                        createPost(post)
                            .then(() => history.push("/"))
                    }}
                >
                    Submit
                </Button>
            </Form>
        </>
    )
}