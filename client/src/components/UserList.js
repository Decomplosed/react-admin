import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';

const UserList = () => {
  return (
    <List {...props}>
      <Datagrid>
        <EditButton basePath='/users' />
      </Datagrid>
    </List>
  );
};

export default UserList;
