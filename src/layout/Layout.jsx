import 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Outlet, Link, Navigate } from 'react-router-dom'

export function Layout() {
  return <div className='app-layout'>
    <header className='app-header'>
      <div className='header-content'>
        <h1>Python Daily  Challenge</h1>
        <nav>
          <SignedIn>
            <Link to='/'>Daily</Link>
            <Link to='/history'>History</Link>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>

    <main className='app-main'>
      <SignedOut>
        <Navigate to='/sign-in' replace />
      </SignedOut>
      <SignedIn>
        <Outlet />
      </SignedIn>
    </main>
  </div>
}
