
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

export default async function Home( {searchParams}:{
  searchParams: Promise<{query: string}> 
}) {
  const query =  (await searchParams).query;
 
  const posts  = [{ _createAt: new Date(),
    views: 55,
    author: { _id:1, name: "alan"},
    _id: 1,
    description: "This is a test post",
    category: "Robots",
    title: "Robotics",
  }
  ]

  return (
    <>
     <div className="bg-pink-500 text-white-center py-8 px-10">
          <section className="flex-center bg-black py-1 ">
            <h1 className="heading text-white text-center text-5xl md:text-6xl pb-6">Pitch your Startup,<br /> Connect with <br />Enterpreneurs</h1>
            </section>
            <p className="sub-heading text-white mt-5 !max-w-3xl ">
                Submit Ideas, vote on Pitches, and Get Noticed in virtual Competitions
            </p>
            <SearchForm query={query}/>
      </div> 
  
      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Search results for ${query}`: `All Startups`}
        </p>
        {/* cmd=shif */}

      <ul className="mt-7 card_gird">
        {posts && posts.length> 0 ? (
          posts.map((post : StartupCardType, index: number) => (
            <StartupCard key={post._id || index} post={post} />
          ))
        ) : (
          <li>No posts found</li>
        )}
        </ul>
      </section>
    
    </>
    
  )
}