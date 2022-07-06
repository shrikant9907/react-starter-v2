import { Component } from 'react';
import PhotoGallery from '../../components/gallery/photoGallery'; 

export default class Gallery extends Component {
  render() {
    return (
      <>
        <div className="page-title">Gallery</div>
        <PhotoGallery />
      </>
    )
  } 
}
