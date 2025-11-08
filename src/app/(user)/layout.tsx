import { FooterWrapper } from "@/common/Footer/FooterWrapper";
import UserHeaderWrapper from "@/common/Header/UserHeaderWrapper";
import { AuthProvider } from "@/provider/AuthProvider";
import { cookies } from "next/headers";

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const c = await cookies();
  const refreshToken = c.get("refreshToken");

  return (
    <AuthProvider refreshToken={refreshToken?.value || ""}>
      <UserHeaderWrapper />
      <div>{children}</div>
      <FooterWrapper />
    </AuthProvider>
  );
}
