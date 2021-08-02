
export default async function (htmlRelativeUrl) {
	const htmlUrl = new URL(htmlRelativeUrl, import.meta.url.split('loadHTML.js')).href;
	const response = await fetch(htmlUrl);
	return await response.text();
}