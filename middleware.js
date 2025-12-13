import { NextResponse } from "next/server";

// You can define your own protected routes logic if needed
const isProtectedRoute = (req) => {
  const protectedRoutes = ["/dashboard", "/onboarding"];
  return protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));
};

export default function middleware(req) {
  // Placeholder for custom auth logic
  // Example: if user is not authenticated, redirect to /login
  // const isAuthenticated = checkAuth(req);
  // if (!isAuthenticated && isProtectedRoute(req)) {
  //   return NextResponse.redirect(new URL('/login', req.url));
  // }

  return NextResponse.next();
}

// Middleware config
export const config = {
  matcher: [
    // Match all routes except static files and Next internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API and TRPC
    '/(api|trpc)(.*)',
  ],
};

