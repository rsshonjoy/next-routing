// ! http://localhost:3000/users

const UserList = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
            </div>
          )
        })
      }
    </div>
  );
};

export default UserList;

// ? fetching data

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
