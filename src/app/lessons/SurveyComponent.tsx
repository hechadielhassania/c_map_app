"use client";

import React from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import 'survey-core/modern.min.css';

interface SurveyComponentProps {
  lessonData: any; 
}

const SurveyComponent: React.FC<SurveyComponentProps> = ({ lessonData }) => {
  const survey = new Model(lessonData);

  return (
    <div className="container mx-auto rounded-lg shadow-md p-6">
      <Survey model={survey} />
    </div>
  );
};

export default SurveyComponent;
