import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
	console.log(data);
	return (
		<div className="relative flex flex-col justify-center items-center h-screen max-w-[700px] w-full m-auto p-4 text-white z-10">
			<div className="bg-black/50 w-full p-20">
				<h1 className="text-4xl text-center pb-6">{data.name}</h1>
				<div className="relative flex justify-between pt-12">
					<div className="flex flex-col items-center">
						<Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="/" width="100" height="100" />
						<p className="text-2xl">{data.weather[0].main}</p>
					</div>
					<p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
				</div>

				<div className="bg-black/50 relative p-10 rounded-md mt-20">
					<div className="flex flex-row justify-between text-center">
						<div>
							<p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
							<p className="text-xl">Feels Like</p>
						</div>
						<div>
							<p className="font-bold text-2xl">{data.main.humidity}%</p>
							<p className="text-xl">Humidity</p>
						</div>
						<div>
							<p className="font-bold text-2xl">{(data.wind.speed * 1.6093440006147).toFixed(0)} KPH</p>
							<p className="text-xl">Winds</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
