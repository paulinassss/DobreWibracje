import React,  { useEffect, useState } from "react";
import './Reviews.css';
import { useLoadScript } from "@react-google-maps/api";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const libraries = ["places"];
const link = 'https://www.google.com/search?sca_esv=0843bae45ef7a677&sca_upv=1&hl=pl&tbm=lcl&sxsrf=ACQVn08N5IDK2ylQnutovcgnk86-u2Wj2A:1714565617828&q=Dobre%20Wibracje%20-%20Gabinet%20Neurologopedyczny%20-%20Ma%C5%82gorzata%20Kindlik%20Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NzOztDQ3MjEzMLWwNDexMDIx3MDI-IrR3SU_qShVITwzqSgxOStVQVfBPTEpMy-1RMEvtbQoPyc_Pb8gNaUyuSqvEijnm3i0KT2_qCqxJFHBOzMvJSczW8G_IDMvM3URK7VMAgCm6QH1rgAAAA&rldimm=7669972460589748241&sa=X&ved=0CAkQ5foLahcKEwjAg77VtuyFAxUAAAAAHQAAAAAQBQ&biw=2560&bih=1353&dpr=1#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSURqc3BfWXpnRRAB';

function Reviews() {
	const [reviews, setReviews]= useState([]);
	const [rating, setRating]= useState([]);
	const [number, setNumber]= useState([]);
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: "AIzaSyBikQnc5NVbGGjZSVD26kn-uj-02-jrpds",
		libraries,
	});

	useEffect(() => {
		if (isLoaded && !loadError) {
			const mapDiv = document.createElement("div"); 
			mapDiv.style.display = "none";
			document.body.appendChild(mapDiv);

			const service = new google.maps.places.PlacesService(mapDiv); 
			service.getDetails(
				{
					// TO GET PLACE ID VISIT: https://developers.google.com/maps/documentation/places/web-service/place-id
					placeId: "ChIJeW6Cg1NXIkcRERB7zlA3cWo", // THIS IS PLACE ID OF 'TOUR EIFFEL' IN PARIS, FRANCE, PUT YOUR PLACE ID OF THE PLACE TO FETCH REVIEWS
					fields: ["reviews", "user_ratings_total", "rating"],
				},

				(place, status) => {
					if (status === google.maps.places.PlacesServiceStatus.OK) {
						setReviews(place.reviews); // UPDATING STATE WITH REVIEWS RECEIVED
						setRating(place.rating);
						setNumber(place.user_ratings_total);
					}
				}
			);

			return () => {
				document.body.removeChild(mapDiv); // CLEANUP BY REMOVING DIV ELEMENT
			};
		}
	}, [isLoaded, loadError]);

	return (
		<section className="reviews-wrapper">
			 <div className="paddings innerWidth r-container">
				<div className="flexHead">
					<div className="flexColStart">
						<div className="heading">Poznaj opinie naszych klientów</div>
						<div className="flexStart">
							<img src='g.svg' alt='google logo'/>
							<div className="rating">
								<Box
									sx={{
										width: 200,
										display: 'flex',
										alignItems: 'center',
									}}
									>
									<Rating
										value={rating}
										readOnly
										precision={0.1}
										emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
									/>
								</Box>
								<div className="secondaryText num">{number} opinii</div>
							</div>
						</div>
					</div>
					
					<div>
						<a href={link} target="_blank"><button className="addReviewBtn">Dodaj opinię</button></a>
					</div>
				    
				</div>
				<Swiper {...sliderSettings}>
					<SliderButtons/>
					{
						reviews?.map((review, i) => (
							<SwiperSlide key={i}>
								<div className="flexColStart r-card">
									<div className="flexStart">
										<img src={review.profile_photo_url} alt="picture" />
										<div>
											<span className="name">{review.author_name}</span>
											<p className="secondaryText">{review.relative_time_description}</p>
										</div>
									</div>
									<Box
										sx={{
											width: 200,
											display: 'flex',
											alignItems: 'center',
										}}
										>
										<Rating
											name="text-feedback"
											value={review.rating}
											readOnly
											precision={0.5}
											emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
										/>
									</Box>
									<span>{review.text}</span>
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
			 </div>
		</section>
		
	);
}

export default Reviews;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
		<div className="r-buttons">
            <button className="prevBtn" onClick={()=> swiper.slidePrev()}><ArrowBackIosNewIcon/></button>
            <button className="nextBtn" onClick={()=> swiper.slideNext()}><ArrowForwardIosIcon/></button>
		</div>
    )
}