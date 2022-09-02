import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

// type INavbarProps = {
//   children: ReactNode;
// };

export default function Navbar() {
  const router = useRouter();
  // eslint-disable-next-line no-console
  console.log(router.asPath);

  // const [mounted, setMounted] = useState(false);
  // Hooks
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <div className="mx-auto max-w-6xl px-12 py-16 md:py-16 ">
      <div
        className="flex items-center justify-between  md:flex-row"
        id="navbar"
      >
        <div className="hidden space-x-8 text-2xl md:block">
          <Link href="/locations">
            <a
              className={`text-base  ${
                router.asPath === '/locations'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-500 dark:text-blue-500 '
              }`}
            >
              Bars{' '}
              {router.asPath === '/locations' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/locations">
            <a
              className={`text-base  ${
                router.asPath === '/locations'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-600 dark:text-blue-600'
              }`}
            >
              Parks
              {router.asPath === '/locations' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/locations">
            <a
              className={`text-base  ${
                router.asPath === '/experience'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-600 dark:text-blue-600'
              }`}
            >
              Cultural{' '}
              {router.asPath === '/experience' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className=" inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>

          <Link href="/locations">
            <a
              className={`text-base  ${
                router.asPath === '/experience'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-600 dark:text-blue-600'
              }`}
            >
              Cafes{' '}
              {router.asPath === '/experience' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className=" inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>

          {/* Dark mode button */}
          {/* <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="h-10 w-10 rounded p-3 focus:outline-none"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-4 w-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button> */}
        </div>
      </div>

      {/* Routes of the navbar */}
      {/* <div className=" block space-x-8 md:hidden">
        <Link href="/">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            Bars
          </a>
        </Link>
        <Link href="/">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            Cafes
          </a>
        </Link>
        <Link href="/">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            Parks
          </a>
        </Link>
        <Link
          href="/"
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          Cultural
        </Link>
      </div> */}
    </div>
  );
}
