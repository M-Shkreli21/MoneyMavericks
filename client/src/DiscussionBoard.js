import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function DiscussionBoard({ user, posts, addPost }) {

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
        return (
            <div className='posts'>
                <Grid>
                    <Card>
                        <CardContent>
                            <Typography sx={{fontWeight: 'bold'}}>Title: {post.title}</Typography>
                            <Typography sx={{fontStyle: 'italic'}}>Category: {post.category}</Typography>
                            <Typography sx={{fontStyle: 'italic'}}>User: {post.user.username}</Typography>
                            <br></br>
                            <Typography>{post.body}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        )
    })


    return (
        <div>
            <h1>Discussion Board</h1>
            <div>
                {postArray}
            </div>
            <div className='new_post_form'>
                <form onSubmit={submitNewPost}>
                    <h2>New Discussion Post</h2>
                    <Box sx={{border: '1px'}}>
                    <TextField type='text' fullWidth onChange={addPostTitle} value={postTitle} placeholder="Please Enter Post Title"/>
                    <br></br>
                    <TextField type='text' fullWidth onChange={addPostCategory} value={postCategory} placeholder="Enter Post Category"/>
                    <br></br>
                    <Box sx={{width: 100, maxWidth: '100%'}}>
                    <TextField multiline maxRows={4} fullwidth sx={{ width: 1475, height: 150}} onChange={addPostBody} value={postBody} placeholder="Enter Post Content"/>
                    </Box>
                    <br></br>
                    <Button sx={{ m: 0.5, p: 1, backgroundColor: "none", borderColor: 'white' }} variant='outlined' type="submit">Add New Post</Button>
                    </Box>
                </form>
            </div>
        </div>
    )
}

export default DiscussionBoard;