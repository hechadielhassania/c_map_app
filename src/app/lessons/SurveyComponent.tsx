"use client";

import React from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import 'survey-core/modern.min.css';
import surveyJson from './survey.json'; 

const SurveyComponent: React.FC = () => {
  const survey = new Model(surveyJson);

  return (
    <div className="container mx-auto rounded-lg shadow-md">
      <Survey model={survey} />
    </div>
  );
};

export default SurveyComponent;
