export async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Response(`Failed to fetch: ${response.statusText}`, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }
  return response.json();
}
