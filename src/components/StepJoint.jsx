import React, { createContext, useState } from 'react';

const MyContext = createContext("");

export const StepJoint = ({ children }) => {
  const [stepJoint, setStepJoint] = useState(10.0);
  const [stepHand, setStepHand] = useState(5.0)

  const handleChangeStepJoint = (event, newStepJoint) => {
        setStepJoint(newStepJoint);
    };
  const handleChangeStepHand = (event, newStepHand) => {
        setStepHand(newStepHand);
    };

  return (
    <MyContext.Provider value={{ stepJoint, setStepJoint, stepHand, setStepHand, handleChangeStepJoint, handleChangeStepHand }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;