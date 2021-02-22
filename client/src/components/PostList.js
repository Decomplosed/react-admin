import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField></TextField>
      </Datagrid>
    </List>
  );
};

export default PostList;
