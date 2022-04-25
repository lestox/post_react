import {LocalBlogPost} from "../Interface/LocalBlogPost";
import axios from "axios";


export default function usePostBlog() {
    return (token: string, blog: LocalBlogPost) => {
        return axios({
            url : 'http://localhost:2345/post-blog.php',
            method: 'post',
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: new URLSearchParams({
                title: blog.title,
                content: blog.content
            })
        })
            .then(res => res.data)
    }
}