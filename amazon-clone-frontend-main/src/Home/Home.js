import React from "react";
import Product from "../Product/Product";
import ImageSlider from "../ImageSlider/ImageSlider";
import {ImageData} from "../ImageSlider/ImageData";
import "./Home.css";


function Home() {
	return (
		<div className="home">
			<div className="home-container">
				<ImageSlider slides={ImageData}/>
				<div className="home_row">
					<Product 
						id="12345"
						title="The lean startup" 
						price={499}
						image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
						rating={5}
					/>  
					<Product
						id="12346"
						title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life"
						price={2499}
						image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SY450_.jpg"
						rating={4}
					 /> 
				</div>
				<div className="home_row">
					<Product
						id="12347" 
						title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)"
						price={3999}
						image="https://images-na.ssl-images-amazon.com/images/I/614q7LEztiL._SX679_.jpg"
						rating={4}
					/>  
					<Product 
						id="12348"
						title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Gold (Latest Model)"
						price={116790}
						image="https://images-na.ssl-images-amazon.com/images/I/71vFKBpKakL._SX466_.jpg"
						rating={5}
					/> 
					<Product 
						id="12349"
						title="Amazon Brand - Solimo Delphi Three Seater Leatherette Recliner (Brown)"
						price={35049}
						image="https://images-na.ssl-images-amazon.com/images/I/71QB8%2BU%2BhXL._SX425_.jpg"
						rating={4}
					/>
				</div>
				<div className="home_row">
					<Product 
						id="12350"
						title="OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
						price={28999}
						image="https://images-na.ssl-images-amazon.com/images/I/81qtALn%2BGpL._SX679_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home;