import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';

const MaterialEditirForm = ({ onSubmit }) => {
  const onSubmitFormik = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  let userSchema = Yup.object({
    title: Yup.string().min(4).required(),
    link: Yup.string().required(),
  });

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
      initialValues={{ title: '', link: '' }}
      validationSchema={userSchema}
      onSubmit={onSubmitFormik}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>Name</label>
          <Field type="text" name="title" />
          <FormError name="title" />
          <label>Link</label>
          <Field type="url" name="link" />
          <FormError name="link" />
          <button type="submit" disabled={isSubmitting}>
            Add materials
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MaterialEditirForm;
