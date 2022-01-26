import React from 'react';
import { Button, Grid, Typography, InputLabel, Select, MenuItem } from '@material-ui/core'
import {  useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';

const AddressForm = () => {
  const methods = useForm();

  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}> 
            <FormInput name='firstname' label='First Name' required/>
            <FormInput name='lastname' label='Last Name' required/>
            <FormInput name='address1' label='Address' required/>
            <FormInput name='email' label='Email' required/>
            <FormInput name='city' label='City' required/>
            <FormInput name='zipcode' label='Zip Code/Postal Code' required/>
          </Grid>
        </form>
      </FormProvider>
    
    </>
  );
};

export default AddressForm;
