import nextAuth from 'next-auth'
import { option } from './option'
const handler = nextAuth(option)

export { handler as GET, handler as POST }
