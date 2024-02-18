import { IFormStructure } from './form.interface';

export const formConfig: IFormStructure[] = [
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    value: '',
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Name is required',
      },
      {
        name: "pattern",
        validator: "^[a-zA-Z]+$",
        message: "Accept only text"
      },
    ],
  },
  {
    type: 'textarea',
    label: 'Description',
    name: 'description',
    value: '',
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Description is required',
      },
      {
        name: "pattern",
        validator: "^[a-zA-Z]+$",
        message: "Accept only text"
      },
    ],
  },
  {
    type: 'number',
    label: 'Age',
    name: 'age',
    value: '',
    validations: [],
  },
  {
    type: 'radio',
    label: 'Gender',
    name: 'gender',
    value: true,
    options: [
      { label: 'Male', value: true },
      { label: 'Female', value: false },
    ],
    validations: [],
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country',
    value: 1,
    options: [
      { label: 'India', value: 1 },
      { label: 'USA', value: 2 },
      { label: 'Canada', value: 3 },
    ],
    validations: [
      {
        name: 'required',
        validator: 'required',
        // reg_ex:"/^[a-zA-Z\\-\\']+$/",
        message: 'Address is required',
      },
    ],
  },
];