export const getAccessToken = () => {
  return typeof window !== "undefined"
    ? localStorage.getItem("accessToken")
    : null;
};

export const getRefreshToken = () => {
  return typeof window !== "undefined"
    ? localStorage.getItem("refreshToken")
    : null;
};

export const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    localStorage.setItem("accessToken", data.accessToken);
    return data.accessToken;
  } catch {
    return null;
  }
};
