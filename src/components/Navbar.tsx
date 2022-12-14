import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

// type INavbarProps = {
//   children: ReactNode;
// };

// Secondary navbar seen only in the list pages
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
    <div className=" max-w-6xl px-12 pt-12 pb-0 sm:max-w-2xl md:pt-12 ">
      <div
        className="flex flex-wrap items-center justify-between text-center "
        id="navbar"
      >
        <div className=" space-x-6 text-2xl font-medium md:block">
          <Link href="/locations/bars">
            <a
              className={`text-base  ${
                router.asPath === '/locations/bars'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-500 dark:text-blue-500 '
              }`}
            >
              Bars{' '}
              {router.asPath === '/locations/bars' && (
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

          <Link href="/locations/parks">
            <a
              className={`text-base  ${
                router.asPath === '/locations/parks'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-600 dark:text-blue-600'
              }`}
            >
              Parks
              {router.asPath === '/locations/parks' && (
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

          <Link href="/locations/cafes">
            <a
              className={`text-base  ${
                router.asPath === '/locations/cafes'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-500 dark:text-blue-500 '
              }`}
            >
              Cafes{' '}
              {router.asPath === '/locations/cafes' && (
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

          <Link href="/locations/cultural">
            <a
              className={`text-base  ${
                router.asPath === '/locations/cultural'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-600 dark:text-blue-600'
              }`}
            >
              Cultural{' '}
              {router.asPath === '/locations/cultural' && (
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

          <Link href="/locations/clubs">
            <a
              className={`text-base  ${
                router.asPath === '/locations/clubs'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-600 dark:text-blue-600'
              }`}
            >
              Clubs{' '}
              {router.asPath === '/locations/clubs' && (
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

          <Link href="/locations/places">
            <a
              className={`text-base  ${
                router.asPath === '/locations/places'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-500 dark:text-blue-500 '
              }`}
            >
              Travel{' '}
              {router.asPath === '/locations/places' && (
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

          <Link href="/locations/restaurants">
            <a
              className={`text-base  ${
                router.asPath === '/locations/restaurants'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-500 dark:text-blue-500 '
              }`}
            >
              Restaurants{' '}
              {router.asPath === '/locations/restaurants' && (
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

          <Link href="/locations/japanese-restaurant">
            <a
              className={`text-base  ${
                router.asPath === '/locations/japanese-restaurant'
                  ? 'font-bold text-blue-700 dark:text-blue-700'
                  : 'font-normal text-blue-500 dark:text-blue-500 '
              }`}
            >
              Japanese Restaurants{' '}
              {router.asPath === '/locations/japanese-restaurant' && (
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
    </div>
  );
}
