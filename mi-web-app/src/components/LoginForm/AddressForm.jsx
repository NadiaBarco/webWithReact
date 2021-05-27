import React,{useState}from 'react'
import {InputLabel, Select, MenuItem, Button,Grid ,Typography} from '@material-ui/core';
import {useForm, FormProvider} from 'react-hook-form';
import FormInput from './CustomTextField'

const AddressForm = () => {
    const [ShippingCountries, setShippingCountries] =useState([]);
    const [ShippingCountry, setShippingCountry] =useState('');
    const [ShippingSubdivisions, setShippingSubdivisions] =useState('[]');
    const [ShippingSubdivision, setShippingSubdivision] =useState([]);
    const [ShippingOptions, setShippingOptions] =useState([])
    const [ShippingOption, setShippingOption] =useState('')
    const methods =useForm();


    return (
        <div>
            <Typography variant ="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3} >
                        <FormInput required name='firstNmae' label='First name'/>
                        <FormInput required name='LastNmae' label='Last name'/>
                        <FormInput required name='address' label='Address'/>
                        <FormInput required name='email' label='Email'/>
                        <FormInput required name='city' label='City'/>
                        <FormInput required name='phoneNumber' label='Phone Number'/>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivisions</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>

                    </Grid>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm