import { getCurrentTimeAndRandomHash } from "@/utils/timehash";

export async function GET(request: Request) {
  const data = {
    message: "Hello, Next.js!",
    timehas: getCurrentTimeAndRandomHash(),
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
