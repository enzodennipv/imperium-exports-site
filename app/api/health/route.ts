// app/api/health/route.ts
import { NextResponse } from 'next/server';
export const runtime = 'nodejs'; // force Node pour éviter les limites Edge

export async function GET() {
  try {
    // Vérifie ici les env critiques si besoin (décommente et liste tes clés)
    // const must = ['API_URL', 'DB_URL'];
    // const miss = must.filter(k => !process.env[k]);
    // if (miss.length) throw new Error('Missing env: ' + miss.join(', '));

    return NextResponse.json({ ok: true, time: new Date().toISOString() });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? 'unknown' }, { status: 500 });
  }
}
