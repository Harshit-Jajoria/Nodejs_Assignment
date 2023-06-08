import { AddCircleOutline, EditOutlined } from '@mui/icons-material';
import { Typography, Paper, TextField, Button, Avatar } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../constants';

const registerSchema = yup.object().shape({
  name: yup.string().min(2).max(25).required('required'),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .length(10, 'Phone number must be exactly 10 digits')
    .required('Required'),
  password: yup.string().min(6).required('required'),
  confirmPassword: yup
    .string()
    .min(6)
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('required'),
});

const initialValuesRegister = {
  name: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};
const Signup = () => {
  const styles = {
    paper: {
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    nameContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    nameField: {
      width: '48%',
      margin: '10px 0',
    },
    textField: {
      margin: '10px 0',
      width: '100%',
    },
    formControl: {
      margin: '10px 0',
      width: '100%',
    },
    submitButton: {
      width: '100%',
      margin: '20px 0',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    back: {
      margin: -10,
      backgroundColor: 'lightblue',
    },
  };
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValuesRegister,
    validationSchema: registerSchema,
    onSubmit: async (values, onSubmitProps) => {
      // console.log(values);

      let formData = new FormData();

      for (let value in values) {
        if (value !== 'confirmPassword') formData.append(value, values[value]);
      }

      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }

      try {
        // const url = process.env.REACT_APP_BACKEND_URL;
        
        const savedUser = await axios.post(`${BACKEND_URL}/add-user`, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(savedUser.data);
        onSubmitProps.resetForm();

        toast.success('Account Created Successfully', {
          position: 'top-center',
          pauseOnHover: true,
        });
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div style={styles.back}>
      <Paper elevation={10} style={styles.paper}>
        <Box style={styles.box}>
          <Avatar sx={{ backgroundColor: 'lightgreen' }}>
            <AddCircleOutline />
          </Avatar>
          <Typography variant="h3">Sign up</Typography>
          <Typography variant="h6" sx={{ m: 1 }}>
            Enter your details to sign up
          </Typography>
        </Box>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <TextField
            label=" Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            name="name"
            error={Boolean(touched.name) && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            variant="outlined"
            style={styles.textField}
          />

          <TextField
            label="Phone Number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phoneNumber}
            name="phoneNumber"
            error={Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
            variant="outlined"
            style={styles.textField}
            autoComplete="new-password"
          />

          <TextField
            label="Password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            name="password"
            error={Boolean(touched.password) && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            variant="outlined"
            type="password"
            style={styles.textField}
            autoComplete="new-password"
          />
          <TextField
            label="Confirm Password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.confirmPassword}
            name="confirmPassword"
            error={
              Boolean(touched.confirmPassword) &&
              Boolean(errors.confirmPassword)
            }
            helperText={touched.confirmPassword && errors.confirmPassword}
            variant="outlined"
            type="password"
            style={styles.textField}
            autoComplete="new-password"
          />
          <Button variant="contained" type="submit" style={styles.submitButton}>
            Sign Up
          </Button>
        </form>
        <Typography
          variant="h6"
          sx={{
            color: '#4665e0',
            textDecoration: 'underline',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          Already have an account , Sign here{' '}
        </Typography>
      </Paper>
      <ToastContainer />
    </div>
  );
};

export default Signup;
