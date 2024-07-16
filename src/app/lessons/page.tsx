import React from 'react';
import dynamic from 'next/dynamic';

const SurveyComponent = dynamic(() => import('./SurveyComponent'), {
  ssr: false
});

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SurveyComponent />
    </div>
  );
};

export default Page;
