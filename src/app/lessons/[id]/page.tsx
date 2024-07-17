'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import SurveyComponent from '../SurveyComponent';

const LessonsPage: React.FC = () => {
  const { id } = useParams() as { id: string };
  const [lessonData, setLessonData] = useState<any>(null); 

  useEffect(() => {
    if (id) {
      // Fetch the lesson data dynamically based on the ID
      fetch(`/data/lesson${id}.json`)
        .then((response) => response.json())
        .then((data) => setLessonData(data))
        .catch((error) => console.error('Error loading lesson data:', error));
    }
  }, [id]);

  if (!lessonData) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SurveyComponent lessonData={lessonData} />
    </div>
  );
};

export default LessonsPage;
