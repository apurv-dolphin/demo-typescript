import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header
        filter={""}
        handleSearch={function (e: any): void {
          throw new Error("Function not implemented.");
        }}
      />
      <h1>This is a home page</h1>
    </>
  );
}
