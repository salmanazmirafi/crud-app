import React from "react";

const CreatePost = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header pb-0">
                <h4 className="animated fadeInUp">Create Product</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp">Product Name</label>
                    <input
                      r
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp">Product Code</label>
                    <input
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Image</label>
                    <input
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Unit Price</label>
                    <input
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Qty</label>
                    <input
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Total Price</label>
                    <input
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-4  p-2">
                    <button className="btn btn-primary  animated fadeInUp w-100">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
