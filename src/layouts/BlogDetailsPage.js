import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BreadcrumbBar } from '../components/common/Breadcrumb';
import PostCard from '../components/common/Cards/PostCard';
import { fetchPost } from '../_actions/blogAction';

const BlogDetailsPage = (props) => {

  const dispatch = useDispatch()
  const post = useSelector(state => state.BLOG.post)
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id))
  }, [dispatch, id])

  return (
    <>
      <h1 className='text-center py_40 m-0 text-uppercase bg-dark text-white'>{post.title}</h1>
      <BreadcrumbBar data={[{ to: '/blog', label: 'Blog' }]} />
      <section className="common-section-ui pti_60">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-8">
              <PostCard className='card cui2'
                hideButton={true}
                imgClassName= 'card-img-top r_0 mb_20'
                data={
                  {
                    title: post.title,
                    text: post.body,
                    imgSrc: 'https://via.placeholder.com/1020x510',
                    imgAlt: post.title,
                    author: 'Shrikant',
                    date: '23 Jul 2022',
                  }
                } />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              Sidebar
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetailsPage;