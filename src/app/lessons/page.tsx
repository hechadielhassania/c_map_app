"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Lesson {
  id: string;
  title: string;
  description: string;
  logo: string;
}

const LessonsPage = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    // Fetch all lesson files dynamically
    const fetchLessons = async () => {
      const lessonFiles = [
        '/data/lesson1.json',
        '/data/lesson2.json',
        '/data/lesson3.json'
      ];
      
      const lessons = await Promise.all(
        lessonFiles.map(async (file) => {
          const response = await fetch(file);
          return response.json();
        })
      );
      setLessons(lessons);
    };

    fetchLessons();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {lessons.map((lesson) => (
          <Link href={`/lessons/${lesson.id}`} key={lesson.id}
             className="card p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={lesson.logo} alt={lesson.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h2 className="text-2xl font-semibold mb-2">{lesson.title}</h2>
              <p className="text-gray-600">{lesson.description}</p>
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LessonsPage;
