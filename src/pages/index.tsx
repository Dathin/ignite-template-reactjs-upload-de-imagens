import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { LoadData } from '../components/LoadData';

interface ImagesResponse {
  data: {
    title: string;
    description: string;
    url: string;
    ts: number;
    id: string;
  }[];
  after: string;
}

export default function Home(): JSX.Element {
  async function fetchImages({ pageParam = 0 }): Promise<ImagesResponse> {
    const { data } = await api.get<ImagesResponse>(`images?after=${pageParam}`);
    return data;
  }
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('images', fetchImages, {
    getNextPageParam: res => res.after,
  });

  const formattedData = useMemo(
    () => data?.pages.flatMap(({ data: pageData }) => pageData),
    [data]
  );

  return (
    <>
      <Header />
      <LoadData isLoading={isLoading} isError={isError}>
        <Box maxW={1120} px={20} mx="auto" my={20}>
          <CardList cards={formattedData} />
          {hasNextPage && `hoje tem`}
          {hasNextPage && (
            <Button onClick={() => fetchNextPage()}>
              {isFetchingNextPage ? `Carregando...` : `Carregar mais`}
            </Button>
          )}
        </Box>
      </LoadData>
    </>
  );
}
