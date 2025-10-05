import {Film } from 'lucide-react';

export default function Header(){
    return (
        <div className="header">
          <h1><Film size={50} color="#a42af5"/> Discover Movies</h1>
          <p>
            Search thousands of movies and Discover amazing films
          </p>
        </div>
    );
}