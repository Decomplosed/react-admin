import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
