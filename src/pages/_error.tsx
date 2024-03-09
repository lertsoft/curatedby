import { useEffect } from 'react';

export default function ERROR({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // log the error message
    // eslint-disable-next-line no-console
    console.error(error);
    return () => {
      reset();
    };
  }, [error, reset]);

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
