

"use client";

import React from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import 'survey-core/modern.min.css';
import lesson1 from './data/lesson2.json'; 

const SurveyComponent: React.FC = () => {
  const survey = new Model(lesson1);

  return (
    <>
      <Survey model={survey} />
    </>
  );
};

export default SurveyComponent;

