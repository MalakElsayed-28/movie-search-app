import { Film } from 'lucide-react';

interface SearchInputProps {
    query: string;
    setQuery: (value: string) => void;
    onSearch: () => void;
}

export default function SearchInput({ query, setQuery, onSearch }: SearchInputProps) {

    return (

        <div className="searchBox">
            <input
                className="searchInput"
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <div style={{alignItems:"end", display:"flex", paddingRight:"10px", cursor:"pointer"}} onClick={onSearch}>
            <Film size={30} color= "#a42af5"/>
            </div>
        </div>

    );
}