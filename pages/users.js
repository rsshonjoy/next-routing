import User from "../components/user";

// ! http://localhost:3000/users

const UserList = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <User user={user} />
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
