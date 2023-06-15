import Image from "next/image";
import React from "react";
import spinner from "../public/puff.svg";

const Spinner = () => {
	return (
		<div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-20">
			<Image className="w-[200px] m-auto block z-20" src={spinner} alt="loading.." />
		</div>
	);
};

export default Spinner;
