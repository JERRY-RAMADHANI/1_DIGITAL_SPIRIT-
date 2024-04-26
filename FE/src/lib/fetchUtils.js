// const BASE_URL = "http://127.0.0.1:8000/api/auth";
// /login, /register, /logout"

const options = {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	}
};

export const fetchAuth = async (type, body) => {
	let url = BASE_URL;

	switch (type) {
		case "LOGIN":
			url += `/login`;
			break;
		case "REGISTER":
			url += `/register`;
			break;
		case "LOGOUT":
			url += `/logout`;
			break;
		default:
			throw new Error(`Error, Unknown Type: ${type}`);
	}

	try {
		const response = await fetch(url, { ...options, body: JSON.stringify(body) });

		if (!response.ok) throw new Error(`Response Status ${response.status}`);

		return response;
	} catch (error) {
		throw error;
	}
};
