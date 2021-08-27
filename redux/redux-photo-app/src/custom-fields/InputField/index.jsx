import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disable: false,
};

function InputField(props) {
  const { form, field, type, label, placeholder, disable } = props;
  console.log(form, field);
  const { name, value, onChange, onBlur } = field;
  return (
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disable={disable}
        />
      </FormGroup>
  );
}

export default InputField;
