async function downloadFile(dir) {
	let response = await fetch(dir);
		
	
	// read response stream as text
	let text_data = await response.text();

	return text_data;
}
export default downloadFile;