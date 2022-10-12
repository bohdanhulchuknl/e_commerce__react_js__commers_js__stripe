import React, { useState} from "react";

import {
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";

import FormInput from "./FormInput";

const AddressForm = () => {
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState([])
  const methods = useForm();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={() => console.log("submit")}>
          <Grid container spacing={3}>
            <FormInput required={true} name="firstName" label="First name" />
            <FormInput required={true} name="lastName" label="Last name" />
            <FormInput required={true} name="address1" label="Address" />
            <FormInput required={true} name="email" label="Email" />
            <FormInput required={true} name="city" label="City" />
            <FormInput required={true} name="zip" label="ZIP / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
