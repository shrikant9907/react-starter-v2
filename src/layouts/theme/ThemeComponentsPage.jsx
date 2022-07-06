import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Checkbox from '../../components/common/Form/CheckBox/CheckBox';
// import CurrencyField from '../../components/common/Form/CurrencyField'; // Not supported in 18 
import DatePickerField from '../../components/common/Form/DatePickerField';
import EmailField from '../../components/common/Form/EmailField';
import InputField from '../../components/common/Form/InputField';
import RadioButton from '../../components/common/Form/Radio/RadioButton';
import SelectField from '../../components/common/Form/SelectField';
import TextAreaField from '../../components/common/Form/TextAreaField';
import TimePickerField from '../../components/common/Form/TimePickerField';
import BasicTable from '../../components/common/Table/BasicTable';

const ThemeComponentsPage = (props) => {

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
      <div className='py-3'>
        <h1 className='mb-2 text-center'>Components</h1>

        <div className='container'>
   
            <div className="w-100 mb-5">
              <h4>Input Field</h4>
              <InputField value="Code Matra" placeholder="Enter a value" label="Input Label" />
            </div>

            <div className="w-100 mb-5">
              <h4>Email Field</h4>
              <EmailField required={true} value="" placeholder="Enter a email" label="Email Label" />
            </div>

            <div className="w-100 mb-5">
              <h4>Date Picker Field</h4>
              <DatePickerField defaultValue="today" label="Date Picker Label" />
            </div>
            
            <div className="w-100 mb-5">
              <h4>Time Picker Field</h4>
              <TimePickerField label="Time Picker Label" />
            </div>

            <div className="w-100 mb-5">
              <h4>Select Field</h4>
              <SelectField options={options} label="Select Options Label" />
            </div>

            <div className="w-100 mb-5">
              <h4>Checkbox</h4>
              <Checkbox label="Check Box" />
            </div>

            <div className="w-100 mb-5">
              <h4>Radio Button</h4>
              <RadioButton label="Radio Box" />
            </div>

            <div className="w-100 mb-5">
              <h4>Text Area Field</h4>
              <TextAreaField value="Code Matra Test" placeholder="Enter a value" label="Text Area Label" />
            </div>

            <div className="w-100 mb-5">
              <h4>Basic Table</h4>
              <BasicTable
                heading="Heading"
                head = {["Col1", "Col2", "Col3"]}
                data = {[["val1", "val2", "val3"], ["val1", "val2", "val3"]]}
              />
            </div>
      
        </div>

      </div>
    </>
  )
}

export default ThemeComponentsPage;