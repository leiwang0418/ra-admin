interface useSearchProps {

};

const useSearch = (props: useSearchProps) => {
	// const {} = props;

	return {
		getRootProps: (other : object = {}) => ({
			"aria-owns": "=======asd",
			role: 'search input',
			...other
		})};

};

export default useSearch;