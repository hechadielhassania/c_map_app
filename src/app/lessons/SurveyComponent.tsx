"use client";

import React from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import 'survey-core/modern.min.css';

interface SurveyComponentProps {
  surveyJson: any;
}

const SurveyComponent: React.FC<SurveyComponentProps> = ({ surveyJson }) => {
  const survey = new Model(surveyJson);

  return <Survey model={survey} />;
};

export default SurveyComponent;
