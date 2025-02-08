const Page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;

  return <div>{id}</div>;
};

export default Page;
