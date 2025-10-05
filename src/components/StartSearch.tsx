import { Search  } from 'lucide-react';

export default function StartSearch() {
    return (
        <div className='startSearch'>
            <div className="iconWrapper">
            <Search size={50} color="white" />
            </div>
            <p>
                Start Your Movie Journey
            </p>
            <p>
                Search for any movie to get detailed information, ratings, cast, and more.
            </p>
            <p>
                    Powered by OMDb API • Over 280,000 movies available
            </p>
        </div>
    );
}