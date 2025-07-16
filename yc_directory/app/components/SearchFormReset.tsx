import Link from "next/link";

export default function SearchFormReset() {
    const reset = () => {
         const form = document.querySelector('form.search-form') as HTMLFormElement | null;
         if(form) form.reset();                               
    }
return (
    <button type="reset" onClick={reset}>
    <Link href="/" className="search-btn text-white">
    Reset <x className="size-5" /></Link>
    </button>
    
)
}