import React from 'react';
import Button from '../../../components/common/Button/Button';
import Checkbox from '../../../components/common/Form/CheckBox/CheckBox';
import DatePickerField from '../../../components/common/Form/DatePickerField';
import EmailField from '../../../components/common/Form/EmailField';
import InputField from '../../../components/common/Form/InputField';
import RadioButton from '../../../components/common/Form/Radio/RadioButton';
import SelectField from '../../../components/common/Form/SelectField';
import TextAreaField from '../../../components/common/Form/TextAreaField';
import TimePickerField from '../../../components/common/Form/TimePickerField';
import BasicTable from '../../../components/common/Table/BasicTable';

const ThemeFormComponents = (props) => {

  const options = [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    }
  ];

  return (
    <>

      <div className="w-100 mb-5">
        <Button label="Sample" />
      </div>

      <div className="w-100 mb-5">
        <InputField value="Code Matra" placeholder="Enter a value" label="Input Label" />
      </div>

      <div className="w-100 mb-5">
        <EmailField required={true} value="" placeholder="Enter a email" label="Email Label" />
      </div>

      <div className="w-100 mb-5">
        <DatePickerField defaultValue="today" label="Date Picker Label" />
      </div>

      <div className="w-100 mb-5">
        <TimePickerField label="Time Picker Label" />
      </div>

      <div className="w-100 mb-5">
        <SelectField options={options} label="Select Options Label" />
      </div>

      <div className="w-100 mb-5">
        <Checkbox label="Check Box" />
      </div>

      <div className="w-100 mb-5">
        <RadioButton label="Radio Box" />
      </div>

      <div className="w-100 mb-5">
        <TextAreaField value="Code Matra Test" placeholder="Enter a value" label="Text Area Label" />
      </div>

      <div className="w-100 mb-5">
        <BasicTable
          heading="Heading"
          head={["Col1", "Col2", "Col3"]}
          data={[["val1", "val2", "val3"], ["val1", "val2", "val3"]]}
        />
      </div>

    </>
  )
}

export default ThemeFormComponents;