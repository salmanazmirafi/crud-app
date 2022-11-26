import React from "react";

const ListBar = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card list-card">
            <div className="card-header pb-0">
              <h4>Product List</h4>
            </div>
            <div className="card-body">
              <div className="table">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Product
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      Unit Price
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Qty
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Total Price
                    </th>
                    <th className="text-secondary opacity-7">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex  animated fadeInUp px-2 py-1">
                        <div>
                          <img
                            src="https://i.pinimg.com/236x/11/35/3c/11353c1e3b858a474f471e5f2f47bb9f.jpg"
                            className="avatar avatar-sm me-3"
                            alt="user1"
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">Jaket</h6>
                          <p className="text-xs text-secondary mb-0">001</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 className="mb-0 animated fadeInUp text-sm"> $38</h6>
                    </td>
                    <td>
                      <h6 className="mb-0 animated fadeInUp text-sm">
                        {" "}
                        Hi Quality
                      </h6>
                    </td>

                    <td>
                      <h6 className="mb-0 animated fadeInUp text-sm"> $40</h6>
                    </td>
                    <td>
                      <div
                        className="btn-group animated fadeInUp"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button className="btn btn-danger ">
                          <i className="fa fa-trash-alt" />
                        </button>
                        <button className="btn  btn-success ">
                          <i className="fa fa-edit" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBar;
