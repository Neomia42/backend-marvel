const queries = (params, defaultLimit = 100) => {
  let query = `&limit=${params.limit || defaultLimit}`;
  let skip;
  if (params.name) query += `&name=${params.name}`;
  if (params.title) query += `&title=${params.title}`;
  if (params.pages) {
    skip = (params.pages - 1) * (params.limit || defaultLimit);
    query += `&skip=${skip}`;
  }
  if (params.page) {
    skip = (params.page - 1) * (params.limit || defaultLimit);
    query += `&skip=${skip}`;
  }
  return query;
};
module.exports = queries;
