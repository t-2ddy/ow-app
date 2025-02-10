import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HeroPage = () => {
  const { name } = useParams();
  const [heroTips, setHeroTips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use environment variable or adjust as needed
  const heroTipsApi = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/hero-tips/hero';

  useEffect(() => {
    const fetchHeroTips = async () => {
      try {
        setIsLoading(true);
        
        // URL encode the hero name to handle special characters
        const encodedName = encodeURIComponent(name);
        const fullUrl = `${heroTipsApi}/${encodedName}`;
        
        console.log('Fetching URL:', fullUrl); // Debug logging

        const response = await fetch(fullUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add any necessary headers like CORS or authentication
            // 'Authorization': `Bearer ${yourToken}`,
          }
        });
        
        console.log('Response status:', response.status); // Debug logging

        if (!response.ok) {
          // Try to get more error details
          const errorText = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }
        
        const data = await response.json();
        console.log('Fetched data:', data); // Debug logging
        
        setHeroTips(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    if (name) {
      fetchHeroTips();
    }
  }, [name, heroTipsApi]);

  if (isLoading) {
    return <div className="text-center mt-8">Loading hero tips...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-8">
        <p>Error fetching hero tips:</p>
        <p>{error}</p>
        <p>Please check your backend server and network connection.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Hero Tips for {name}</h1>
      
      {heroTips.length === 0 ? (
        <p className="text-gray-600">No tips available for this hero.</p>
      ) : (
        <div className="space-y-4">
          {heroTips.map((tip) => (
            <div 
              key={tip.id} 
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <h2 className="text-xl font-semibold mb-2">Tip {tip.id}</h2>
              <p>{tip.tip}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroPage;