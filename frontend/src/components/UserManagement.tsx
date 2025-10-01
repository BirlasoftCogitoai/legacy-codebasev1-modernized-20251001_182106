import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
    loadUsers();
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
```

---