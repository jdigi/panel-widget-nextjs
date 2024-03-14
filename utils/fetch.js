export async function fetchPublic(
  endpoint,
  method = "GET",
  body = null,
  cache = true
) {
  const url = endpoint;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (body) options.body = JSON.stringify(body);
  if (!cache) {
    options.cache = "no-store";
    options.revalidate = 0;
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const error = {
      status: response.status,
      message: response.statusText,
    };
    throw error;
  } else {
    return response.json();
  }
}
