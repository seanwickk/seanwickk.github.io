import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <Link href="/about">Go to About</Link>
      </nav>
    </div>
  );
}
