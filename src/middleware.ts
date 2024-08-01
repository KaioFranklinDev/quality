import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value
  if(!token){
    if(request.nextUrl.pathname === '/login'){
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if(request.nextUrl.pathname === '/login'){
    return NextResponse.redirect(new URL('/novas', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/negadas/:path*', '/aprovadas/:path*', '/novas/:path*', '/', '/login/:path*' ]
}