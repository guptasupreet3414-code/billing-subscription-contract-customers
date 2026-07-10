function decodeBasicCredentials(encodedValue) {
  try {
    return atob(encodedValue);
  } catch {
    return null;
  }
}

function safeEqual(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  let difference = 0;

  for (let index = 0; index < actual.length; index += 1) {
    difference |= actual.charCodeAt(index) ^ expected.charCodeAt(index);
  }

  return difference === 0;
}

export default function middleware(request) {
  const expectedUsername = process.env.SITE_USERNAME;
  const expectedPassword = process.env.SITE_PASSWORD;

  // Prevent accidental public access when variables are missing.
  if (!expectedUsername || !expectedPassword) {
    return new Response("Authentication is not configured.", {
      status: 500,
      headers: {
        "Cache-Control": "private, no-store",
      },
    });
  }

  const authorization = request.headers.get("authorization");

  if (authorization?.startsWith("Basic ")) {
    const encodedCredentials = authorization.slice(6);
    const suppliedCredentials =
      decodeBasicCredentials(encodedCredentials);

    const expectedCredentials =
      `${expectedUsername}:${expectedPassword}`;

    if (
      suppliedCredentials &&
      safeEqual(suppliedCredentials, expectedCredentials)
    ) {
      // Returning nothing allows the normal request to continue.
      return;
    }
  }

  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate":
        'Basic realm="Private prototype", charset="UTF-8"',
      "Cache-Control": "private, no-store",
    },
  });
}

export const config = {
  matcher: ["/(.*)"],
};
