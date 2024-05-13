import React, {useContext} from 'react'
import MyContext from './StepJoint';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {step} from "@material-tailwind/react";

function StepModifier(){

    const {stepJoint, setStepJoint, stepHand, setStepHand, handleChangeStepJoint, handleChangeStepHand} = useContext(MyContext)



    return (
        <>
            <div>
                <div className="mb-4 text-center font-bold">
                    Parameters
                </div>
                <Box sx={{width: 260, height: 50}}>
                    <Typography id="slider" gutterBottom>
                        Step Joint
                    </Typography>
                    <div className="flex flex-row">
                        <div className="w-20 font-bold">
                            {stepJoint.toFixed(2)}
                        </div>
                        <div className="w-60">
                            <Slider
                                value={stepJoint}
                                onChange={handleChangeStepJoint}
                                aria-labelledby="slider"
                                valueLabelDisplay="auto"
                                min={1}
                                max={20}
                                step={0.01}
                                color="error"
                            />
                        </div>
                        </div>
                </Box>
                <div className="mt-4">
                    <Box sx={{width: 260, height: 50}}>
                        <Typography id="slider" gutterBottom>
                            Step Hand
                        </Typography>
                        <div className="flex flex-row">
                            <div className="w-20 font-bold">
                                {stepHand.toFixed(3)}
                            </div>
                            <div className="w-60">
                                <Slider
                                    value={stepHand}
                                    onChange={handleChangeStepHand}
                                    aria-labelledby="slider"
                                    valueLabelDisplay="auto"
                                    min={0.01}
                                    max={2.00}
                                    step={0.001}
                                    color="error"
                                />
                            </div>
                            </div>
                    </Box>
                </div>


            </div>
        </>
)
}

export default StepModifier
