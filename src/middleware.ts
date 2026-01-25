import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value

  const { pathname } = request.nextUrl

  if (pathname.startsWith('/tasks') && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/tasks', request.url))
  }

  if ((pathname === '/register') && token) {
    return NextResponse.redirect(new URL('/tasks', request.url))
  }

  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/tasks', request.url))
  }

  if (pathname === '/' && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next() 
}

export const config = {
  matcher: [
    '/tasks/:path*',
    '/login',
    '/register',
    '/',
  ],
}