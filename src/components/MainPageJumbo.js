const MainPageJumbo = () => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
      <div className="jumbotron">
        <h2 className="display-4">Shop Name</h2>
        <p className="lead">Your one-stop-shop music shop</p>
        <hr className="my-4" />
        <p>
          {" "}
          Looking for your next musical breakthrough? You've come to the right
          place!
        </p>
        <button className="btn btn-primary btn-lg" role="button">
          Shop By Category
        </button>
      </div>
    </div>
  );
};

export default MainPageJumbo;
