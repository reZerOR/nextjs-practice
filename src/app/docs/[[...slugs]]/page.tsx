export default function Docs({ params }: { params: { slugs: string[] } }) {
  console.log(params.slugs);
  if (params.slugs?.length === 2) {
    return (
      <div className="flex min-h-screen items-center text-7xl font-bold justify-center">
        <h1>
          Viewing docs for feature{params.slugs[0]} and concept{params.slugs[1]}
        </h1>
      </div>
    );
  } else if (params.slugs?.length === 1) {
    return (
      <div className="flex min-h-screen items-center text-7xl font-bold justify-center">
        <h1>Viewing docs for feature {params.slugs[0]}</h1>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen items-center text-7xl font-bold justify-center">
      <h1>Docs Home page</h1>
    </div>
  );
}
