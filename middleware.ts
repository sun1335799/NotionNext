import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 严丝合缝的过滤规则，只让页面请求进入，排除所有静态资源
export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico|.*\\..*|sign-in|auth).*)']
}

export function middleware(request: NextRequest) {
  // 仅仅是放行，不做任何额外动作
  return NextResponse.next()
}
