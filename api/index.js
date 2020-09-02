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

  }
  catch(err){
    return res.send(renderError(err.message, err.secondaryMessage));
  }
}
