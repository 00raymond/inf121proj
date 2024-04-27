import {useState} from "react";

export default function Search() {
    const [search, setSearch] = useState("");

    return (
        <div className={""}>
            <input
                className={"text-gray-800 w-96 p-2 rounded-xl border-[1px] border-slate-500"}
                type="text"
                placeholder="Search for toys and games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}