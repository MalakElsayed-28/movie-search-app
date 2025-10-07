import { Film } from 'lucide-react';

interface SearchInputProps {
    query: string;
    setQuery: (value: string) => void;
}

export default function SearchInput({ query, setQuery }: SearchInputProps) {

    return (

        <div className="searchBox">
            <input
                className="searchInput"
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <div >
                <Film size={30} color= "#a42af5"/>
            </div>
        </div>

    );
}