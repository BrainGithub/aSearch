"use client";

import { useState, FormEvent } from 'react';

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState('google');
  const [googleQuery, setGoogleQuery] = useState('');
  const [perplexityQuery, setPerplexityQuery] = useState('');
  const [searchUrl, setSearchUrl] = useState('');

  const handleSearch = (event: FormEvent<HTMLFormElement>, searchType: 'google' | 'perplexity') => {
    event.preventDefault();
    const query = searchType === 'google' ? googleQuery : perplexityQuery;
    if (query.trim() !== '') {
      const url = searchType === 'google'
        ? `https://www.google.com/search?igu=1&q=${encodeURIComponent(query)}`
        : `https://www.perplexity.ai/?q=${encodeURIComponent(query)}`;
      setSearchUrl(url);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 ${activeTab === 'google' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('google')}
        >
          Google
        </button>
        <button
          className={`flex-1 py-2 ${activeTab === 'perplexity' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('perplexity')}
        >
          Perplexity
        </button>
      </div>

      {activeTab === 'google' && (
        <form onSubmit={(e) => handleSearch(e, 'google')} className="flex items-center bg-white rounded-full shadow-md p-2 mb-3">
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ml-3">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            <path d="M1 1h22v22H1z" fill="none"/>
          </svg>
          <input
            type="text"
            placeholder="Search Google"
            className="ml-3 flex-grow outline-none bg-transparent"
            value={googleQuery}
            onChange={(e) => setGoogleQuery(e.target.value)}
          />
          <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full">Search</button>
        </form>
      )}

      {activeTab === 'perplexity' && (
        <form onSubmit={(e) => handleSearch(e, 'perplexity')} className="flex items-center bg-white rounded-full shadow-md p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-3">
            <path d="M19.5 12.5V12C19.5 8.41 16.59 5.5 13 5.5C9.41 5.5 6.5 8.41 6.5 12C6.5 15.59 9.41 18.5 13 18.5H17.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 15.5L19.5 12L16 8.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search Perplexity"
            className="ml-3 flex-grow outline-none bg-transparent"
            value={perplexityQuery}
            onChange={(e) => setPerplexityQuery(e.target.value)}
          />
          <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full">Search</button>
        </form>
      )}

      {searchUrl && (
        <div className="mt-4 h-[600px] w-full">
          <iframe
            src={searchUrl}
            className="w-full h-full border-none"
            title="Search Results"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
      )}
    </div>
  );
}
