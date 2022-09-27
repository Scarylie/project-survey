/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable indent */
// eslint-disable-next-line quotes
import React, { useState } from 'react';

import Intro from './Intro';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import Summary from './Summary';

const Form = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [radioButton, setRadioButton] = useState('');
  const [adjective, setAdjective] = useState('');
  const [animal, setAnimal] = useState('');
  const [exclamation, setExclamation] = useState('');
  const [adjectiveSecond, setAdjectiveSecond] = useState('');
  const [creature, setCreature] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRadioButtonChange = (event) => {
    setRadioButton(event.target.value);
  };

  const handleAdjectiveChange = (event) => {
    setAdjective(event.target.value);
  };
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };
  const handleExclamationChange = (event) => {
    setExclamation(event.target.value);
  };
  const handleAdjectiveSecondChange = (event) => {
    setAdjectiveSecond(event.target.value);
  };
  const handleCreatureChange = (event) => {
    setCreature(event.target.value);
  };

  return (
    <div>
      {step === 1 && <Intro handleStepIncrease={handleStepIncrease} />}
      {step === 2 && (
        <QuestionOne
          handleStepIncrease={handleStepIncrease}
          name={name}
          handleNameChange={handleNameChange}
          radioButton={radioButton}
          handleRadioButtonChange={handleRadioButtonChange}
        />
      )}
      {step === 3 && (
        <QuestionTwo
          handleStepIncrease={handleStepIncrease}
          adjective={adjective}
          handleAdjectiveChange={handleAdjectiveChange}
          animal={animal}
          handleAnimalChange={handleAnimalChange}
          exclamation={exclamation}
          handleExclamationChange={handleExclamationChange}
          adjectiveSecond={adjectiveSecond}
          handleAdjectiveSecondChange={handleAdjectiveSecondChange}
          creature={creature}
          handleCreatureChange={handleCreatureChange}
        />
      )}
      {step === 4 && <QuestionThree handleStepIncrease={handleStepIncrease} />}
      {step === 5 && (
        <Summary
          name={name}
          radioButton={radioButton}
          adjective={adjective}
          animal={animal}
          exclamation={exclamation}
          adjectiveSecond={adjectiveSecond}
          creature={creature}
        />
      )}
    </div>
  );
};

export default Form;
