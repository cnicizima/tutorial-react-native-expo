import { create } from "zustand";

export const useUsersStore = create((set) => ({
  users: [],
  userToEditId: null,
  setUsers: (users) => set({ users }),
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  deleteUser: (id) => set((state) => ({ users: state.users.filter((user) => user.id !== id) })),
  updateUser: (userUpdated) => set((state) => ({ users: state.users.map((user) => (user.id === userUpdated.id ? userUpdated : user)) })),
  setUserToEditId: (id) => set({ userToEditId: id }),
}));

// set((state)) pega o estado atual do array de usuarios
// set({ users: users }) atualiza o estado do array de usuarios
 
//setUsers e addUser : duas funçoes para atualizar o estado do array de usuarios

