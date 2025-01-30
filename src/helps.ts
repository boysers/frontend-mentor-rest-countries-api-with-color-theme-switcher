export async function fetchData<T = unknown>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    const errorBody = JSON.stringify(await response.json(), null, 2);
    throw new Response(errorBody, {
      status: response.status,
      statusText: response.statusText,
    });
  }

  return response.json() as Promise<T>;
}
