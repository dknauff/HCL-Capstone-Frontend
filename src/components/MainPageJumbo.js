const MainPageJumbo = () => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
      <div className="jumbotron">
        <h2 className="display-2">Hi-5</h2>
        <p className="lead">Your one-stop-shop for musical instruments</p>
        <hr className="my-6" />
        <p>
          {" "}
          Looking to create your own musical masterpiece? You've come to the
          right place!
        </p>
        <button className="btn btn-primary btn-lg" role="button">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default MainPageJumbo;
