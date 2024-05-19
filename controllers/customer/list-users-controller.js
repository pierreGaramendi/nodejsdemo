const { headers } = require("../../config/config");

function ListUsersController({ getUsersFS }) {
  return async function handle(httpRequest) {
    const { id } = httpRequest.params;
    const products = await getUsersFS(id);
    return {
      headers,
      statusCode: 200,
      body: {
        data: products,
      },
    };
  };
}

module.exports = ListUsersController;
