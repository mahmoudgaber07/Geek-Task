import React,{ useState } from 'react'
import { Typography,Button } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DynamicFeed } from '@mui/icons-material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export const Filter = () => {
    const [hCare, sethCare] = useState('');
    const [mCap, setmCap] = useState('');
    const [risk, setrisk] = useState('');
    return (
        <>
            <Typography variant='h3' align='center' sx={{ fontFamily: 'Inter' }}>Filter</Typography>
            <FormControl fullWidth sx={{
                paddingY: '10px', "& label.Mui-focused": {
                    color: "white"
                },
                "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                        borderColor: "white"
                    }
                }
            }} variant="outlined">
                <InputLabel id="healthCare" sx={{ color: 'white', fontFamily: 'Poppins', '&.Mui-focused': { color: 'white' } }}>
                    <DynamicFeed sx={{ paddingX: 1 }} />
                    Health Care
                </InputLabel>
                <Select
                    labelId="healthCare"
                    id="healthCare-select"
                    value={hCare}
                    onChange={(e) => sethCare(e.target.value)}
                    label="healthCare"
                    inputProps={{ sx: { color: 'white', '&.Mui-focused': { color: 'white' } } }}
                    sx={{
                        '& .MuiSelect-root': {
                            color: 'white',
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                }
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                        },
                    }}
                >
                    {['Test 1', 'Test 2'].map((item, index) => (
                        <MenuItem key={index} value={index} sx={{ fontFamily: 'Poppins' }}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{
                paddingY: '10px', "& label.Mui-focused": {
                    color: "white"
                },
                "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                        borderColor: "white"
                    }
                }
            }} variant="outlined">
                <InputLabel id="marketCap" sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}>
                    <DynamicFeed sx={{ paddingX: 1 }} />
                    Market Cap
                </InputLabel>
                <Select
                    labelId="marketCap"
                    id="marketCap-select"
                    value={mCap}
                    onChange={(e) => setmCap(e.target.value)}
                    label="marketCap"
                    inputProps={{ sx: { color: 'white' } }}
                    sx={{
                        '& .MuiSelect-root': {
                            color: 'white',
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                        },
                    }}
                >
                    {['Test 1', 'Test 2'].map((item, index) => (
                        <MenuItem key={index} value={index}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{
                paddingY: '10px', "& label.Mui-focused": {
                    color: "white"
                },
                "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                        borderColor: "white"
                    }
                }
            }} variant="outlined">
                <InputLabel id="risk" sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}>
                    <DynamicFeed sx={{ paddingX: 1 }} />
                    Risk
                </InputLabel>
                <Select
                    labelId="risk"
                    id="risk-select"
                    value={risk}
                    onChange={(e) => setrisk(e.target.value)}
                    label="risk"
                    inputProps={{ sx: { color: 'white' } }}
                    sx={{
                        '& .MuiSelect-root': {
                            color: 'white',
                        },
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                        },
                    }}
                >
                    {['Test 1', 'Test 2'].map((item, index) => (
                        <MenuItem key={index} value={index}>
                            <TaskAltIcon sx={{ padding: '0 10px' }} /> {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="contained" fullWidth sx={{ borderRadius: 20, paddingY: 2, paddingX: 3, backgroundColor: '#554DB7', color: '#fff' , fontFamily: 'Poppins'}}>
                Apply Filter
            </Button>
        </>
    )
}
