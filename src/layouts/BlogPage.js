import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BreadcrumbBar } from '../components/common/Breadcrumb';
import PostCard from '../components/common/Cards/PostCard';
import { fetchPosts } from '../_actions/blogAction';

const BlogPage = (props) => {

  const dispatch = useDispatch()
  const blogPosts = useSelector(state => state.BLOG.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <>
      <h1 className='text-center py_40 m-0 text-uppercase bg-dark text-white'>Blog</h1>
      <BreadcrumbBar data={[{ to: '/blog', label: 'Blog' }]} />
      <section className="common-section-ui pti_60">
        <div className="container">
          <div className="row">
            {
              blogPosts.slice(0, 6).map((post) => {
                return <div key={post.id} className="col-12 col-md-6 col-lg-4">
                  <PostCard data={
                    {
                      id: post.id,
                      title: post.title,
                      text: post.body,
                      imgSrc: 'https://via.placeholder.com/400x200',
                      imgAlt: post.title,
                      author: 'Shrikant',
                      date: '23 Jul 2022',
                    }
                  } />
                </div>
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage;