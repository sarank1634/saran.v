import Link from "next/link";
export default function Users( {params} : {params: {id: string}}) {
    const {id} = params;
    return (
        <div>
            <h1>users Details page</h1>
            <h1 className="text-2xl font-bold">
                User profile: {id};
            </h1>
        </div>
    );
}

// use params to get users id which users clicked
// declare params type