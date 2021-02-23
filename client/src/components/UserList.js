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
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default UserList;
