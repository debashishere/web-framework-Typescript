import { User } from "./models/User";

const user = new User({ name: 'deba', age: 21 });
console.log(user.get('name'))