import React from 'react';
import SurveyComponent from './SurveyComponent'; // Adjust the path as necessary
import surveyJson from './survey.json'; // Adjust the path as necessary

const LessonPage: React.FC = () => {
  return (
    <div>
      <SurveyComponent surveyJson={surveyJson} />
    </div>
  );
};

export default LessonPage;
