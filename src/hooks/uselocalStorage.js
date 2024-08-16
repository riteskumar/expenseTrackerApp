import React, { useEffect, useState } from "react";

export function uselocalStorage(key, intialData) {
	const [data, setData] = useState(intialData);

	useEffect(()=>{
		const existingData = JSON.parse(localStorage.getItem(key))
		existingData ? setData(existingData) : localStorage.setItem(key, JSON.stringify(intialData));;
	} ,[])
	
	const updateLocalStorage = (newData) => {
		if(typeof newData === 'function'){
			localStorage.setItem(key, JSON.stringify(newData(data)));
		}
		else{
			localStorage.setItem(key, JSON.stringify(newData));
		}
		setData(newData);
	};
	return [data, updateLocalStorage];
}
