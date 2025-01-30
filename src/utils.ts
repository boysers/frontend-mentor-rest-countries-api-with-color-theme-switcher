export function handleError(error: unknown): Response {
  if (error instanceof Response) {
    return error.clone();
  }

  return new Response(
    `An unexpected error occured: ${(error as Error).message || "Unknown error"}`,
    { status: 500, statusText: "Internal Server Error" }
  );
}

export function noop(funcName: string) {
  return function () {
    throw new Error(`${funcName} called outside of provider.`);
  };
}
