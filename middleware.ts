// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  try {
    const url = new URL(req.url);

    // … votre logique …

    return NextResponse.next();
  } catch (err) {
    // Ces logs apparaîtront dans les "Edge Function logs"
    console.error('Middleware error:', err);
    // Retourner une réponse claire évite un 500 opaque
    return new NextResponse('Middleware failed', { status: 500 });
  }
}

export const config = {
  // Limitez la surface pendant le debug
  matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'],
};
