import React from "react";

export default function Main() {
  return (
    <>
      <div className="album">
        <h1 className="text-center mt-5">Album example</h1>
        <p className="text-center p-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          voluptas vel <br /> deleniti eligendi nobis harum deserunt maxime!
          Dolorem suscipit numquam <br /> maiores nobis, maxime eius. Voluptas
          quam deleniti magnam nihil ut?
        </p>
        <div className="container text-center">
          <button type="button" className="btn btn-primary">
            Primary Button
          </button>
          <button type="button" className="btn btn-dark">
            Secondary Button
          </button>
        </div>
      </div>

      <div className="row mt-5 ps-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
          {" "}
          <div className="card">
            <img
              className="card-img-top"
              src="hyper2_02_1280.jpg"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
          {" "}
          <div className="card">
            <img
              className="card-img-top"
              src="hyper2_02_1280.jpg"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
          {" "}
          <div className="card">
            <img
              className="card-img-top"
              src="hyper2_02_1280.jpg"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
