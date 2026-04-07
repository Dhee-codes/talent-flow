export type User = {
  first_name: string
  last_name: string
  email: string
}

export type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  login: (user: User) => void
  logout: () => void
}