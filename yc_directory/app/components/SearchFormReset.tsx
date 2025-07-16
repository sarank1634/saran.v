'use client';

import { useRouter } from 'next/navigation';
import { X } from 'lucide-react'; // Using Lucide X icon

export default function SearchFormReset() {
  const router = useRouter();

  const reset = () => {
    const form = document.querySelector('form.search-form') as HTMLFormElement | null;
    if (form) form.reset();

    // Optional: redirect to clear query param in URL
    router.push('/');
  };

  return (
    <button type="button" onClick={reset} className="search-btn text-white">
      Reset <X className="size-5 ml-1" />
    </button>
  );
}
