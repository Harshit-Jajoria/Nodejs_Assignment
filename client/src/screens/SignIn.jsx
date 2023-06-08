import { AddCircleOutline, EditOutlined } from '@mui/icons-material';
import { Typography, Paper, TextField, Button, Avatar } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .length(10, 'Phone number must be exactly 10 digits')
    .required('Required'),
  password: yup.string().required('required'),
});

const initialValuesLogin = {
  phoneNumber: '',
  password: '',
};
const Signin = () => {
  const styles = {
    back: {
      height: '100vh',
      width: '100wh',
      backgroundColor: 'lightblue',
      display: 'flex', // Added to center the Paper
      justifyContent: 'center', // Added to center the Paper
      alignItems: 'center', // Added to center the Paper
    },
    paper: {
      padding: '20px',
      width: '600px',
      marginTop: '-5%',
      // margin: 'auto',
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
    initialValues: initialValuesLogin,
    validationSchema: loginSchema,
    onSubmit: async (values, onSubmitProps) => {
      // const loggedInResponse = await fetch('http://localhost:5000/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // });
      const url = process.env.REACT_APP_BACKEND_URL;
      console.log(`${url}/auth/login`);

      try {
        const loggedInResponse = await axios.post(`${url}/auth/login`, values, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const loggedIn = await loggedInResponse.data;
        console.log(loggedIn);

        onSubmitProps.resetForm();
        // console.log(loggedIn);
        toast.success('Logged in successfully', {
          position: 'top-center',
          pauseOnHover: true,
        });
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      } catch (error) {
        toast.error(error.response.data.msg, {
          position: 'top-center',
        });
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
          <Typography variant="h3">Sign In</Typography>
          <Typography variant="h6" sx={{ m: 1 }}>
            Enter your details to sign in
          </Typography>
        </Box>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <div style={styles.nameContainer}></div>
          <TextField
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            name="email"
            error={Boolean(touched.email) && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            variant="outlined"
            style={styles.textField}
            autoComplete="new-email"
            placeholder="Enter Email Address"
            InputLabelProps={{ shrink: true }}
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
            placeholder="Enter Password"
            InputLabelProps={{ shrink: true }} // ye is liye lagaya kyo ki label aur autocomplete ki value overlap kar rhi thi
          />

          <Button variant="contained" type="submit" style={styles.submitButton}>
            Sign In
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
            navigate('/signup');
          }}
        >
          Don't have an account , Create here{' '}
        </Typography>
        {/* <Link to='/signup'>Don't have an account , Create here</Link> */}
      </Paper>
      <ToastContainer />
    </div>
  );
};

export default Signin;
