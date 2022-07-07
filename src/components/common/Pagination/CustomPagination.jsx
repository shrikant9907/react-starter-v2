import React, {Component} from 'react'
import Pagination from "react-js-pagination";

class CustomPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }
 
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.props.onPaginationChange && this.props.onPaginationChange(pageNumber) 
  }
 
  render() {

    const data = this.props.data; 
    
    return (
     <div className="pagination-ui pui_center">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={data ? data.length : 0}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default CustomPagination;