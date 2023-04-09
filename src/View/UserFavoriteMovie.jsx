import { PageWrapper } from "./PageWrapper";

export const UserFavoriteMovie = () => {
  return (
    <PageWrapper>
      <div className="page-single">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="user-information">
                <div className="user-img">
                  <a href="#">
                    <img src="images/uploads/user-img.png" alt="" />
                    <br></br>
                  </a>
                  <a href="#" className="redbtn">
                    Change avatar
                  </a>
                </div>
                <div className="user-fav">
                  <p>Account Details</p>
                  <ul>
                    <li>
                      <a href="userprofile.html">Profile</a>
                    </li>
                    <li className="active">
                      <a href="userfavoritelist.html">Favorite movies</a>
                    </li>
                    <li>
                      <a href="userrate.html">Rated movies</a>
                    </li>
                  </ul>
                </div>
                <div className="user-fav">
                  <p>Others</p>
                  <ul>
                    <li>
                      <a href="#">Change password</a>
                    </li>
                    <li>
                      <a href="#">Log out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="topbar-filter user">
                <p>
                  Found <span>1,608 movies</span> in total
                </p>
                <label>Sort by:</label>
                <select>
                  <option value="range">-- Choose option --</option>
                  <option value="saab">-- Choose option 2--</option>
                </select>
                <a href="userfavoritelist.html" className="list">
                  <i className="ion-ios-list-outline "></i>
                </a>
                <a href="userfavoritegrid.html" className="grid">
                  <i className="ion-grid active"></i>
                </a>
              </div>
              <div className="flex-wrap-movielist grid-fav">
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv1.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">oblivion</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>8.1</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv2.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">into the wild</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.8</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item3.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">Die hard</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>

                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item4.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">The walk</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv3.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">blade runner </a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.3</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv4.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">Mulholland pride</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.2</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv5.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">skyfall: evil of boss</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.0</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item1.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">Interstellar</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item2.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">The revenant</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-it10.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">harry potter</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-it11.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">guardians galaxy</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-it12.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">the godfather</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item6.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">blue velvet</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item7.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">gravity</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item8.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">southpaw</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-it9.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">jurassic park</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item9.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">the forest</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item10.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">spectre</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item11.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">strager things</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
                <div className="movie-item-style-2 movie-item-style-1 style-3">
                  <img src="images/uploads/mv-item12.jpg" alt="" />
                  <div className="hvr-inner">
                    <a href="moviesingle.html">
                      {" "}
                      Read more <i className="ion-android-arrow-dropright"></i>{" "}
                    </a>
                  </div>
                  <div className="mv-item-infor">
                    <h6>
                      <a href="moviesingle.html">la la land</a>
                    </h6>
                    <p className="rate">
                      <i className="ion-android-star"></i>
                      <span>7.4</span> /10
                    </p>
                  </div>
                </div>
              </div>
              <div className="topbar-filter">
                <label>Movies per page:</label>
                <select>
                  <option value="range">20 Movies</option>
                  <option value="saab">10 Movies</option>
                </select>

                <div className="pagination2">
                  <span>Page 1 of 2:</span>
                  <a className="active" href="#">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">...</a>
                  <a href="#">78</a>
                  <a href="#">79</a>
                  <a href="#">
                    <i className="ion-arrow-right-b"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
