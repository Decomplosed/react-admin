import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostEdit = (props) => {
  return (
    <Create title='Create a Post...' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput source='body' multiline />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  );
};

export default PostEdit;
