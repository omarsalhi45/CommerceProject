import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label }) {

  return (
    <Grid item xs={12} sm={6}>
      <TextField label={label} required fullWidth />
    </Grid>
  );
}

export default FormInput;