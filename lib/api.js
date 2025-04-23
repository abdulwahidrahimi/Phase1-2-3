export function fetchUserData(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: `User ${id}`, role: 'student' }), 500);
  });
}
