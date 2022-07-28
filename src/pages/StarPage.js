import React from 'react'

const StarIconPage = () => {
  return (
    <div>
      <section class="py_30 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-12"><h2 class="text-center mb-5">Star Icons</h2></div>

            <div class="card cui2 w-100">
              <div class="cbody">

                {/*Default Iocns */}
                <div class="codebefore relative">
                  <span class="copycode">Copy Code</span>
                </div>
                <div class="copythis">
                  <div class="star_rating">
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>


                <hr />
                {/*Selected Icons */}
                <div class="codebefore relative">
                  <span class="copycode">Copy Code</span>
                </div>
                <div class="copythis">
                  <div class="star_rating">
                    <i class="fa-star fas"></i>
                    <i class="far fa-star selected fas"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>

              </div>
            </div>

          </div>
          {/*Row End */}
        </div>
      </section>

    </div>
  )
}

export default StarIconPage