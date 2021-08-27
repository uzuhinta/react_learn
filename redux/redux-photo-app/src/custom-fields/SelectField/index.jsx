import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

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

  const selectedOption = options.find((option) => option.value === value);

  const handleOnChange = (selectOption) => {
    const selectValue = selectOption ? selectOption.value : selectOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectValue,
      },
    };

    console.log(field);

    field.onChange(changeEvent);
  };
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
      />
    </FormGroup>
  );
}

export default SelectField;
