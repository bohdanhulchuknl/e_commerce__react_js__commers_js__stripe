import React from "react";

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
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
