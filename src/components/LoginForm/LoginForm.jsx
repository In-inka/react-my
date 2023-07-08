import { Formik, Field, ErrorMessage } from 'formik';
import { FormAvt } from './loginForm.styled.jsx';
import * as yup from 'yup';
import Notiflix from 'notiflix';

const initialValues = {
  login: ' ',
  password: '',
};

let userSchema = yup.object({
  login: yup.string().required(),
  password: yup.string().min(4).max(8).required(),
});

const LoginForm = () => {
  const onSubmitAvtrz = (values, actions) => {
    actions.resetForm();
    console.log(values);
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => Notiflix.Notify.failure(message)}
      />
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitAvtrz}
      validationSchema={userSchema}
    >
      <FormAvt autoComplete="off">
        <label>Login</label>
        <Field type="text" name="login" />
        <ErrorMessage component={'div'} name="login" />

        <label>Password</label>
        <Field type="password" name="password" />
        <FormError name="password" />

        <button type="submit">Submit</button>
      </FormAvt>
    </Formik>
  );
};

export default LoginForm;
