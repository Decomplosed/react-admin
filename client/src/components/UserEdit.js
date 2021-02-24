import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const UserEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput />
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
