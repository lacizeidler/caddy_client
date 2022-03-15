import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react/cjs/react.development"
import { getCourses, getPostById } from "../posts/post_manager"
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';

export const EditPost = () => {
    const { postId } = useParams()
    const history = useHistory()
    const [courses, modifyCourses] = useState([])
    const [post, modifyPost] = useState({
        content: "",
        image_url: "",
        course_id: 0
    })

    useEffect(
        () => {
            getPostById(postId)
                .then(modifyPost)
        },
        []
    )

    useEffect(
        () => {
            getCourses()
                .then(modifyCourses)
        },
        []
    )

    const changePostState = (domEvent) => {
        const copy = { ...post }
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        modifyPost(copy)
    }

    const UpdatedPost = (evt) => {
        evt.preventDefault()
        const updatedPost = {
            content: post.content,
            image_url: post.image_url,
            course: post.course_id
        }
        fetch(`http://localhost:8000/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            },
            body: JSON.stringify(updatedPost)
        })
            .then(
                () => {
                    history.push(`/`)
                }
            )
    }

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="exampleText">
                        Golf Course
                    </Label>
                    <Input
                        className="mb-3"
                        type="select"
                        name="course_id"
                        value={post.course_id}
                        onChange={changePostState}
                    >
                        {
                            courses.map(course => {
                                return <option key={course.id} value={course.id}>
                                    {course.name}
                                </option>
                            })
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">
                        Content
                    </Label>
                    <Input
                        id="exampleText"
                        name="content"
                        type="textarea"
                        value={post.content}
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
                        value={post.image_url}
                        onChange={changePostState}
                    />
                </FormGroup>
                <Button
                    onClick={
                        (evt) => {
                            UpdatedPost(evt)
                        }
                    }
                >
                    Submit
                </Button>
            </Form>
        </>
    )
}