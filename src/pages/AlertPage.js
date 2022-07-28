import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const AlertPage = () => {
  return (
    <>
      <div className="col-12">
        <h2 className="text-center mb-5 f25 text-primary">Alert UI</h2>
      </div>

      <div className="card cui2 w-100">
        <div className="cbody">

          <div className="alert alert-success alertui1">Alert 1: This is alert messsage. <code className="ms-auto">alert alert-success alertui1</code></div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {'<div className="alert alert-success alertui1">This is alert messsage. </div>'}
          </SyntaxHighlighter>
          <hr />

          <div className="alert alert-success alertuis">Alert 1: This is alert messsage. <code className="ms-auto">alert alert-success alertuis</code></div>
          <div className="alert alert-success alertui2 alertb">Alert 1: This is alert messsage. <code className="ms-auto">alert alert-success alertui2 alertb</code></div>
          <div className="alert alert-success alertui3 alertrc">Alert 1: This is alert messsage. <code className="ms-auto">alert alert-success alertui3 alertrc</code></div>
          <div className="alert alert-success alertui3 alertrcs">Alert 1: This is alert messsage. <code className="ms-auto">alert alert-success alertui3 alertrcs</code></div>

          <div className="alert alert-success dismissible alertrcs fade show">
            <h4 className="alert-heading">Well done!</h4>
            <p><strong>Holy guacamole!</strong> You should check in on some of those fields below. <code className="mb_10">alertui3 alertrcs</code></p>
            <div className="text-center"><a href="#" className="btn btn-primary btnui3">Button</a></div>
            <button type="button" className="close btn-close fixed_top_right" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        
          <div className="alert alert-success alertrcs dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below. <code className="mb_10">alertui3 dismissible close</code>
            <button type="button" className="close btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        
        </div>
      </div>
   </>
  )
}
