import React, { useState } from 'react'
import FetchUrl from './FetchUrl'

function UserPosts() {

    const allPosts = FetchUrl("https://jsonplaceholder.typicode.com/posts")
    const twentyPosts = allPosts.data.filter((post: { id: number }) => post.id < 21)
    const posts = twentyPosts.map((post: { title: string }) => <h4>{post.title}</h4>)

    const [title, setTitle] = useState('')
    const [id, setId] = useState<number | string>('')
    const handleClick = (e: any) => {
        e.preventDefault()

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setTitle(data.title)
            })
            .catch(err => console.log(err))

        setId('')
    }

    return (
        <div className="center">
            <h1 className="title">User Posts</h1>
            <div className="divForm">
                <form onSubmit={handleClick}>
                    <input
                        type="text"
                        placeholder="Search post by ID"
                        onChange={(e: any) => setId(e.target.value)}
                        value={id}
                        className="inputForm"
                    ></input>
                </form>
            </div>
            {allPosts.isLoading ? <h4>Loading...</h4> : (title ? <h4>{title}</h4> : posts)}
        </div>
    )
}

export default UserPosts