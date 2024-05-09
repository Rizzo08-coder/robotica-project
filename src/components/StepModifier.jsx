import React, {useContext} from 'react'
import MyContext from './StepJoint';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function StepModifier(){

    const {stepJoint, setStepJoint, stepHand, setStepHand, handleChangeStepJoint, handleChangeStepHand} = useContext(MyContext)



    return (
        <>
            <div>
                <div className="mb-4 text-center font-bold">
                    Parameters
                </div>
                <Box sx={{ width: 200, height:50 }}>
                    <Typography id="slider" gutterBottom>
                        Step Joint
                    </Typography>
                    <Slider
                        value={stepJoint}
                        onChange={handleChangeStepJoint}
                        aria-labelledby="slider"
                        valueLabelDisplay="auto"
                        min={1}
                        max={20}
                        step={0.1}
                        color="error"
                    />
                </Box>
                <div className="mt-2">
                <Box sx={{ width: 200, height:50 }}>
                    <Typography id="slider" gutterBottom>
                        Step Hand
                    </Typography>
                    <Slider
                        value={stepHand}
                        onChange={handleChangeStepHand}
                        aria-labelledby="slider"
                        valueLabelDisplay="auto"
                        min={0.05}
                        max={2.00}
                        step={0.05}
                        color="error"
                    />
                </Box>
                </div>



            </div>
        </>
    )
}

export default StepModifier
