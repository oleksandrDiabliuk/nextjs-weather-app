/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		NEXT_PUBLIC_WEATHER_KEY: process.env.NEXT_PUBLIC_WEATHER_KEY,
	},
};

module.exports = {
	nextConfig,
	images: {
		domains: ["images.unsplash.com", "openweathermap.org"],
	},
};
