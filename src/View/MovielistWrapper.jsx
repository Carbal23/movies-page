export const MovieListWrapper = ({children})=>{
    return (
        <div className="page-single movie_list">
	<div className="container">
		<div className="row ipad-width2">
			<div className="col-md-8 col-sm-12 col-xs-12">
				<div className="topbar-filter">
					<p>Found <span>1,608 movies</span> in total</p>
					<label>Sort by:</label>
					<select>
						<option value="popularity">Popularity Descending</option>
						<option value="popularity">Popularity Ascending</option>
						<option value="rating">Rating Descending</option>
						<option value="rating">Rating Ascending</option>
						<option value="date">Release date Descending</option>
						<option value="date">Release date Ascending</option>
					</select>
					<a href="movielist.html" className="list"><i className="ion-ios-list-outline active"></i></a>
					<a  href="moviegrid.html" className="grid"><i className="ion-grid"></i></a>
				</div>
                {children}
			</div>
			<div className="col-md-4 col-sm-12 col-xs-12">
				<div className="sidebar">
					<div className="searh-form">
						<h4 className="sb-title">Search for movie</h4>
						<form className="form-style-1" action="#">
							<div className="row">
								<div className="col-md-12 form-it">
									<label>Movie name</label>
									<input type="text" placeholder="Enter keywords"/>
								</div>
								<div className="col-md-12 form-it">
									<label>Genres & Subgenres</label>
									<div className="group-ip">
										<select
											name="skills" multiple="" className="ui fluid dropdown">
											<option value="">Enter to filter genres</option>
											<option value="Action1">Action 1</option>
					                        <option value="Action2">Action 2</option>
					                        <option value="Action3">Action 3</option>
					                        <option value="Action4">Action 4</option>
					                        <option value="Action5">Action 5</option>
										</select>
									</div>
									
								</div>
								<div className="col-md-12 form-it">
									<label>Rating Range</label>
									
									 <select>
										<option value="range">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
										<option value="saab">-- Select the rating range below --</option>
									</select>
									
								</div>
								<div className="col-md-12 form-it">
									<label>Release Year</label>
									<div className="row">
										<div className="col-md-6">
											<select>
												<option value="range">From</option>
												<option value="number">10</option>
												<option value="number">20</option>
												<option value="number">30</option>
											</select>
										</div>
										<div className="col-md-6">
											<select>
												<option value="range">To</option>
												<option value="number">20</option>
												<option value="number">30</option>
												<option value="number">40</option>
											</select>
										</div>
									</div>
								</div>
								<div className="col-md-12 ">
									<input className="submit" type="submit" value="submit"/>
								</div>
							</div>
						</form>
					</div>
					<div className="ads">
						<img src="images/uploads/ads1.png" alt=""/>
					</div>
					<div className="sb-facebook sb-it">
						<h4 className="sb-title">Find us on Facebook</h4>
						<iframe src="#" data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftemplatespoint.net%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"  height="315"  ></iframe>
					</div>
					<div className="sb-twitter sb-it">
						<h4 className="sb-title">Tweet to us</h4>
						<div className="slick-tw">
							<div className="tweet item" id="">
							</div>
							<div className="tweet item" id="">
							</div>
						</div>							
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}