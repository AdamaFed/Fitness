import React from 'react'
import{Box,Stack,Typography} from '@mui/material'
import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: "100px" , xs: "0"}}}>
      <Typography variant="h3" mb={5}>Übungen, die die gleiche Muskelgruppe trainieren</Typography>
      <Stack direction ="row" sx={{p:"2", position: "relative"}}>
       {targetMuscleExercises.length ? <HorizontalScrollbar  data ={targetMuscleExercises} />
       : <Loader />}
      </Stack>
      <Typography variant="h3" mb={5}>Übungen, die das gleiche Equipment benutzen</Typography>
      <Stack direction ="row" sx={{p:"2", position: "relative"}}>
       {equipmentExercises.length ? <HorizontalScrollbar  data ={equipmentExercises} />
       : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
