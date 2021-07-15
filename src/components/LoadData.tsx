import { Error } from './Error';
import { Loading } from './Loading';

interface LoadDataProps {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
}

export function LoadData({
  isError,
  isLoading,
  children,
}: LoadDataProps): JSX.Element {
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return <>{children}</>;
}
