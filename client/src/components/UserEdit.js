import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const UserEdit = () => {
  return (
    <Edit title='Edit User'>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
