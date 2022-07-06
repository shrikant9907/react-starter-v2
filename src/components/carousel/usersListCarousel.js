import React, { Component } from 'react';
import Carousel from './Carousel'; 
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Api from '../../_services/Api';
const api = new Api();

export default class UsersListCarousel extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      usersData: '',
      usersLoading: false
    }
  }

  componentDidMount() {
    this.setUsersData();
  }

  setUsersData() {
    this.setState({usersLoading: true});
    let usersData = api.getData('users/', false);
    usersData.then(
        (res) => {
          if (res.status === 200) {
            this.setState({usersData: res.data});
          } else {
            console.log('error in fetching user records.');
          }
          this.setState({usersLoading: false});
        }
    ).catch(
        (err) => {
          console.log('err', err);
          this.setState({usersLoading: false});
        }
    );
  }  

  render() {
    const { usersData, usersLoading } = this.state;
    return (
        <>
          <Carousel type="userlist" heading="Users Listing" hicon={faStar} items={usersData} loading={usersLoading} /> 
        </>
    )
  }
}
