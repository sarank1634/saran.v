
import SearchForm from "../components/searchForm";

export default async function Home( {searchParams}:{
  searchParams: Promise<{query: string}> 
}) {
  const query =  (await searchParams).query;
  return (
    <>
     <div className="bg-pink-500 text-white-center py-10 px-10">
            <h1 className="heading">Pitch your Startup, <b /> Connect with Enterpreneurs</h1>


            <p className="sub-heading !max-w-3xl ">
                Submit Ideas, vist on Pitches, and Get Noiced in virtuall
            </p>
            <SearchForm query={query}/>
      </div>
    
    </>
    
  )
}