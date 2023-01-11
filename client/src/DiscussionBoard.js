import React, { useState } from 'react';

function DiscussionBoard({user, posts, addPost}) {

    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [postCategory, setPostCategory] = useState('')

    function clearForm() {
        setPostTitle('')
        setPostBody('')
        setPostCategory('')
    }

    function addPostTitle(e) {
        setPostTitle(e.target.value)
    }
    function addPostBody(e) {
        setPostBody(e.target.value)
    }
    function addPostCategory(e) {
        setPostCategory(e.target.value)
    }

    function submitNewPost(e) {
        e.preventDefault()
        const newPost = {
            title: postTitle,
            body: postBody,
            category: postCategory,
            user_id: user.id,
            likes: 0
        }
        addPost(newPost)
        clearForm()
    }

    const postArray = posts.map((post) => {
        return(
            <div className='posts'>
                <h6 className='post_header'>Title: {post.title}</h6>
                <h6 className='post_header'>Category: {post.category}</h6>
                <h6 className='post_header'>User: {post.user.username}</h6>
                <h5 className='post-content'>{post.body}</h5>
            </div>
        )
    })


    return(
        <div className="discussion_board">
            <div className='post_container'>
                {postArray}
            </div>
            <div className='new_post_form'>
                <form onSubmit={submitNewPost}>
                    <h2>New Discussion Post</h2>
                    <input type='text' onChange={addPostTitle} value={postTitle} placeholder="Please Enter Post Title"></input>
                    <br></br>
                    <input type='text' onChange={addPostBody} value={postBody} placeholder="Enter Post Content"></input>
                    <br></br>
                    <input type='text' onChange={addPostCategory} value={postCategory} placeholder="Enter Post Category"></input>
                    <br></br>
                    <input type='Submit' value="Submit Post"></input>
                </form>
            </div>
        </div>
    )
}

export default DiscussionBoard;