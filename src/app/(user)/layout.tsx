import UserHeaderWrapper from "@/common/Header/UserHeaderWrapper";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UserHeaderWrapper />
      <div>{children}</div>
    </>
  );
}
