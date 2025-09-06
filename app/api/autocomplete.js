export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");

  if (!text) {
    return new Response(JSON.stringify({ error: "Missing query text" }), {
      status: 400,
    });
  }

  try {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
        text
      )}&apiKey=59905bf1b7e14b7d83a7825ad63ae722`
    );
    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch suggestions" }), {
      status: 500,
    });
  }
}
