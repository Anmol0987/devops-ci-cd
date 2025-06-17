import { prismaClient } from "@repo/db/clients";

export default async function Home() {
  const user = await prismaClient.user.findFirst();

  return (
    <div>
      <h1>hey on front end</h1>
      {user?.username}
      {user?.password}
      <br />
      <div>hi there</div>
    </div>
  );
}
