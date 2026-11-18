import { readCatalog } from "../../../lib/catalog";

export async function GET(request: Request) {
  const scenario =
    new URL(request.url).searchParams.get("scenario") ?? "success";
  const headers = { "Cache-Control": "no-store" };
  if (!["success", "empty", "error"].includes(scenario)) {
    return Response.json(
      { message: "Unknown scenario" },
      { status: 400, headers },
    );
  }
  if (scenario === "error") {
    return Response.json(
      { message: "Simulated service unavailable" },
      { status: 503, headers },
    );
  }
  return Response.json(scenario === "empty" ? [] : await readCatalog(), {
    headers,
  });
}
