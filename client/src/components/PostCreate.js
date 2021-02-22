import React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostCreate = (props) => {
  return (
    <Create title='Create a Post...' {...props}>
      <TextInput source='title' />
      <TextInput source='body' multiline />
    </Create>
  );
};

export default PostCreate;
