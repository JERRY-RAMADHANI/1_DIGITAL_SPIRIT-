import axios from "axios";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const fetcher = async (url) => {
	const res = await axios.get(url);
	return res.data;
};

const useGet = (url) => {
	const { data, error, isLoading, isError, isValidating } = useSWR(url, fetcher, {
		suspense: true,
		refreshInterval: 5000
	});
	return {
		data,
		error,
		isLoading,
		isError,
		isValidating
	};
};

const fetcherPost = async (url, formData) => {
	const response = await axios.post(url, formData);
	return response.data;
};

const usePost = (url) => {
	const { trigger } = useSWRMutation(url, fetcherPost);

	const post = async (formData) => {
		try {
			await trigger(formData, true);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return post;
};

export { useGet, usePost };
