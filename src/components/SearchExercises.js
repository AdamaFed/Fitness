import React, {useState, useEffect} from 'react';
import {Box, Stack, Button , Typography,TextField} from '@mui/material';

import {exerciseOptions, fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search , setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([])


  //fetch Data for the categories (comes first)
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , exerciseOptions);

      setBodyParts([ ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])
   
  //fetch data for the search results (second)
  const handleSearch = async () => {
    if (search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

      const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search) 
      || exercise.target.toLowerCase().includes(search)  
      || exercise.equipment.toLowerCase().includes(search) 
      || exercise.bodyPart.toLowerCase().includes(search)
      );
      //bring search input to empty string and setExercises becomes = searchedExercises
      setSearch("");
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems = "center" mt="37px" justifyContent = "center" p="20px">
        <Typography fontWeight = {700} 
          sx= {{
          fontSize: 
          {lg:"44px", xs:"30px"}
          }} 
          mb ="50px" 
          textAlign= "center"
          >Nur Die Besten Übungen <br/>Für Dich</Typography>
        <Box position= "relative" mb="72px">
          <TextField
         sx = {{
          input:{
            fontweight: "700" ,
            border: "none" , 
            borderRadius: "4px"
          },
          width: {lg: "700px", xs:"350px"},
          backgroundColor: "#fff",
          borderRadius: "60px"
        }}  
      height= "76px" 
      value={search} 
      onChange = { (e) => setSearch(e.target.value.toLowerCase())}
      placeholder ="Übungen finden" 
      type = "text"
        />
        <Button className = "search-btn"
            sx = {{bgcolor: "#FF2625",
                    color: "#fff",
                    textTransform: "none",
                    width:{lg:"175px" , xs:"80px"},
                    fontSize: {lg: "20px", xs: "14px"},
                    height: "56px",
                    }}
            onClick ={handleSearch}
        >
          Suchen
        </Button>
        </Box>
        <Box sx={{position: "relative", width:"100%", p: "20px"}}>
                    <HorizontalScrollbar data={bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart} isBodyParts />
        </Box>
    </Stack>
  )
}

export default SearchExercises
