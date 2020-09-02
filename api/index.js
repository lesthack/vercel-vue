const axios = require("axios");

function request(data, headers) {
  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers,
    data,
  });
}

export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "image/svg+xml");

  try{
    res.send(`
<svg version="1.1" id="Layer_1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 176 176"
	 enable-background="new 0 0 176 176" xml:space="preserve">
<metadata>
	<sfw  xmlns="&ns_sfw;">
		<slices></slices>
		<sliceSourceBounds  bottomLeftOrigin="true" height="176" width="176" x="8" y="-184"></sliceSourceBounds>
	</sfw>
</metadata>
<g id="XMLID_167_">
	<circle id="XMLID_791_" fill="#FF0000" cx="88" cy="88" r="88"/>
	<path id="XMLID_42_" fill="#FFFFFF" d="M88,46c23.1,0,42,18.8,42,42s-18.8,42-42,42s-42-18.8-42-42S64.9,46,88,46 M88,42
		c-25.4,0-46,20.6-46,46s20.6,46,46,46s46-20.6,46-46S113.4,42,88,42L88,42z"/>
	<polygon id="XMLID_274_" fill="#FFFFFF" points="72,111 111,87 72,65 	"/>
</g>
</svg>      
    `);
  }
  catch(err){
    return res.send(renderError(err.message, err.secondaryMessage));
  }
}
