import React from 'react';

const LearnPage = () => {
  const videos = [
    {
      title: 'How to Assist a Visually Impaired Person',
      url: 'https://www.youtube.com/watch?v=4d9o59kP-h4',
    },
    {
      title: 'How to Communicate with Deaf and Hard-of-Hearing People',
      url: 'https://www.youtube.com/watch?v=R8W4YwfqJYo',
    },
    {
      title: 'Wheelchair Assistance Basics',
      url: 'https://www.youtube.com/watch?v=MPUj8zPzTto',
    },
    {
      title: 'Helping People with Autism: Tips for Volunteers',
      url: 'https://www.youtube.com/watch?v=5fELjNzw9ak',
    },
    {
      title: 'How to Help Someone with a Speech Disability',
      url: 'https://www.youtube.com/watch?v=pJNOaFD3gbk',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 via-red-50 to-blue-100 min-h-screen flex flex-col">
      <header className="bg-red-800 text-white text-center py-6 px-4">
        <h1 className="text-3xl font-bold">Learn to Help</h1>
        <p className="mt-2 italic text-red-100">
          "Learning how to help is the first step to making a difference."
        </p>
      </header>

      <main className="flex-grow container mx-auto px-6 py-10 max-w-4xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Watch and Learn from These Videos:
        </h2>
        <div className="space-y-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-red-300 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {video.title}
              </h3>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-medium hover:underline"
              >
                Watch on YouTube ↗
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-red-600 text-red-100 py-6 mt-auto">
        <div className="container mx-auto px-6 text-center text-sm">
          © 2024 Sahayak. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LearnPage;
