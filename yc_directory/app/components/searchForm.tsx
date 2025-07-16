import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";
import Link from "next/link";


export default function SearchForm( {query}: {query?: string}) {
    return (
        <form action="/" className="search-form">
            <input 
            defaultValue={query}
            name="query"
            className="search-input"
            placeholder="Search startups" />

            <div className="flex  gap-2">
                { query && <SearchFormReset /> }
  
            <button type="submit" className="search-btn">
                 <Search className="size-5" /></button>
    </div>
        </form>
    )
}