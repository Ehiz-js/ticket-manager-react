// src/hooks/useLocalStorageState.js
import { useState, useEffect } from "react";

export function useLocalStorageState(initialValue, key) {
	const [value, setValue] = useState(() => {
		const stored = localStorage.getItem(key);

		// If something is stored, return it. Otherwise use initialValue.
		return stored ? JSON.parse(stored) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
}
