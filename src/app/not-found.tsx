import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="eyebrow text-primary">Error 404</p>

        <h1 className="type-title mt-5 text-foreground">Page not found.</h1>

        <p className="type-lead mx-auto mt-6 max-w-[34rem] text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link href="/" className="btn btn-lg btn-primary mt-9">
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
