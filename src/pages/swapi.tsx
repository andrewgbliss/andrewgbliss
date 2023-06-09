import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useState, useMemo } from "react";

type SwapiResponse = {
  count: number;
  next: string;
  prev: string;
  results: Array<Person>;
};

type Person = {
  name: string;
  height: string;
  birth_year: string;
};

const Swapi = () => {
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching } = useQuery<SwapiResponse>(
    ["people", page],
    () =>
      fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) =>
        res.json()
      ),
    { keepPreviousData: true }
  );

  const pageCount = useMemo(() => {
    if (!data?.count) return 1;
    return Math.ceil(data?.count / 10);
  }, [data?.count]);

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error ...</div>;

  return (
    <div className="flex flex-col items-center gap-2 font-mono">
      <div className="h-32" />
      <h1 className="text-2xl">Swapi People</h1>
      <h5>Page: {page}</h5>
      <div className="shadow-xl">
        <table className="tbl">
          <thead className="tbl-head">
            <tr>
              <th className="tbl-cell w-64">Name</th>
              <th className="tbl-cell w-32">Height</th>
              <th className="tbl-cell w-32">Birthyear</th>
            </tr>
          </thead>
          <tbody>
            {data?.results.map((person) => {
              return (
                <tr key={person.name}>
                  <td className="tbl-cell">{person.name}</td>
                  <td className="tbl-cell">{person.height}</td>
                  <td className="tbl-cell">{person.birth_year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="border" />
        <div className="flex justify-between p-2">
          <button
            className="btn btn-primary"
            onClick={() => setPage(page - 1)}
            disabled={page === 1 || isFetching}
          >
            Prev
          </button>
          {isFetching ? <div>Loading...</div> : ""}
          <button
            className="btn btn-primary"
            onClick={() => setPage(page + 1)}
            disabled={page === pageCount || isFetching}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const queryClient = new QueryClient();

export default function SwapiPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Swapi />
    </QueryClientProvider>
  );
}
