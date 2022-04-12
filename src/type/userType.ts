export type UserType = {
  _id?: string | undefined,
  username: string,
  password: string,
  email: string,
  role: number,
  image: {
    url: string
  },
}