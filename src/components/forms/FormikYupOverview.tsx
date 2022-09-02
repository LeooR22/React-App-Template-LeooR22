import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Min 2 characters")
    .max(50, "Max 50 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Min 2 characters")
    .max(50, "Max 50 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
});

export const FormikYupOverview = () => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (valuesToSubmit) => {
      console.log(valuesToSubmit);
    },
    validationSchema,
  });

  return (
    <Box sx={{ mt: 2, mb: 3 }}>
      <form onSubmit={handleSubmit} noValidate>
        <Typography color="textPrimary" variant="h4" align="center">
          Form with Formik + Yup
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              label="First Name"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              label="Last Name"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              label="Email"
              variant="filled"
              fullWidth
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              label="Password"
              variant="filled"
              fullWidth
              type="password"
            />
          </Grid>
          <Button
            sx={{ mt: 4 }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};
