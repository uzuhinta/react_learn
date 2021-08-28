import { PHOTO_CATEGORY_OPTIONS } from 'constants/globals';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';

PhotoForm.propTypes = {
  initialValue: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  isAddMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
  onSubmit: null,
  initialValue: {},
  isAddMode: false,
};
function PhotoForm(props) {
  const { initialValue, isAddMode } = props;
  console.log({ initialValue });

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is require'),
    categoryId: Yup.number().required('This field is require').nullable(),
    photo: Yup.string().required('This field is required'),
  });

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { isSubmitting } = formikProps;
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Your title"
            />
            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />
            <FormGroup>
              <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                {isSubmitting && <Spinner children="" size="sm" />}
                {isAddMode ? 'Add to album' : 'Update photo'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
