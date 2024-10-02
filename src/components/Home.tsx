import { useSession, signIn, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import ColorButton from '@/lib/ColorButton';

export default function Home() {
  const { data: session } = useSession();
  const pathName = usePathname();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Application</h1>

      {session ? (
        <div className="mb-4 text-center">
          {session.user?.image && (
            <img
              src={session.user.image}
              alt="Profile Picture"
              className="w-24 h-24 rounded-full mb-2"
            />
          )}
          <h2 className="text-xl font-semibold">
            Hello, {session.user?.name}!
          </h2>
          <p className="text-gray-600">Email: {session.user?.email}</p>
        </div>
      ) : (
        <p className="mb-4">Please sign in to see your information.</p>
      )}

      <ul className="flex space-x-4">
        {session ? (
          <li>
            <ColorButton text="Sign out" onClick={() => signOut()} />
          </li>
        ) : (
          <li>
            <ColorButton
              text="Sign in with Google"
              onClick={() => signIn('google')}
            />
          </li>
        )}

        {session ? (
          <li>
            <ColorButton text="Sign out" onClick={() => signOut()} />
          </li>
        ) : (
          <li>
            <ColorButton
              text="Sign in with Kakao"
              onClick={() => signIn('kakao')}
            />
          </li>
        )}

        {session ? (
          <li>
            <ColorButton text="Sign out" onClick={() => signOut()} />
          </li>
        ) : (
          <li>
            <ColorButton
              text="Sign in with Naver"
              onClick={() => signIn('naver')}
            />
          </li>
        )}

        {session ? (
          <li>
            <ColorButton text="Sign out" onClick={() => signOut()} />
          </li>
        ) : (
          <li>
            <ColorButton
              text="Sign in with Facebook"
              onClick={() => signIn('facebook')}
            />
          </li>
        )}
      </ul>
    </div>
  );
}
