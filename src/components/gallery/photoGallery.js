import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';  
import Api from '../../_services/Api';
const api = new Api();

export default class PhotoGallery extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      galleryData: '',
      loading: false
    }
  }

  componentDidMount() {
    this.setUsersData();
  }

  setUsersData() {
    this.setState({loading: true});
    let galleryData = api.getData('photos/', false);
    galleryData.then(
        (res) => {
          if (res.status === 200 && res.data) {
            this.setState({galleryData: res.data.slice(0, 12)});
          } else {
            console.log('error in fetching user records.');
          }
          this.setState({loading: false});
        }
    ).catch(
        (err) => {
          console.log('err', err);
          this.setState({loading: false});
        }
    );
  }  

  render() {
    const { galleryData, loading } = this.state;
    return (
        <>
          <div className="photo-gallery">
            <Row className="form-row">
              {
                galleryData ? 
                galleryData.map((item, i) => {
                  return (
                    <Col xs={12} sm={6} md={3} xl={2}>
                      <Card key={item.id}>
                        <div className="card-img-box">
                          <Card.Img variant="top" src={item.thumbnailUrl} />
                        </div>
                        <Card.Body>
                          <Card.Text>{item.title}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                }) 
              : 
                loading ? 'Loading ...' : 'Items not found.'
              }
            </Row>
          </div>
        </>
    )
  }
}
