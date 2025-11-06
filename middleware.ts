// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware Next.js générique
 * - Redirige automatiquement vers /fr ou /en selon la langue du navigateur
 * - Ignore les assets internes (_next, api, favicon, etc.)
 * - Gère proprement les erreurs pour éviter les 500/404
 */

export function middleware(req: NextRequest) {
  try {
    const { nextUrl } = req;
    const { pathname } = nextUrl;

    // Ignore les chemins internes (assets, API, etc.)
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/static') ||
      pathname.startsWith('/favicon') ||
      pathname.startsWith('/robots.txt') ||
      pathname.startsWith('/sitemap.xml')
    ) {
      return NextResponse.next();
    }

    // Si déjà dans /fr ou /en → on laisse passer
    if (pathname.startsWith('/fr') || pathname.startsWith('/en')) {
      return NextResponse.next();
    }

    // Détection de langue (par défaut fr)
    const lang = req.headers
      .get('accept-language')
      ?.split(',')[0]
      .startsWith('en')
      ? 'en'
      : 'fr';

    // Redirection propre (pas de boucle)
    const url = req.nextUrl.clone();
    url.pathname = `/${lang}${pathname}`;
    return NextResponse.redirect(url);

  } catch (err) {
    console.error('Middleware error:', err);
    return new NextResponse('Erreur middleware', { status: 500 });
  }
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'],
};

