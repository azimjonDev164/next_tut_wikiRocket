import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UserPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => (
        <div>
          <p key={user.id}>
            <Link key={user.id} href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </p>
          <br />
        </div>
      ))}
    </section>
  );
  return content;
}
