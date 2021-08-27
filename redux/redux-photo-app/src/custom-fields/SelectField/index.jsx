import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disable: false,
  options: [],
};

function SelectField(props) {
  const { form, field, label, placeholder, disable, options } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;

  const showError = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.value === value);

  const handleOnChange = (selectOption) => {
    const selectValue = selectOption ? selectOption.value : selectOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectValue,
      },
    };

    field.onChange(changeEvent);
  };
  console.log('seclt', form);
  return (
    <FormGroup>
      {label && <Label for="categoryId">Category</Label>}
      <Select
        id={name}
        name={name}
        value={selectedOption}
        onChange={handleOnChange}
        onBlur={onBlur}
        placeholder={placeholder}
        options={options}
        className={showError ? 'is-invalid' : ''}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;
