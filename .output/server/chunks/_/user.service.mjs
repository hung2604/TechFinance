import { U as User } from './User.mjs';
import bcrypt from 'bcrypt';

class UserService {
  async getUsers() {
    return await User.find({}, {
      password: 0
    });
  }
  async getUserById(id) {
    return await User.findById(id, {
      password: 0
    });
  }
  async createUser(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await User.create({
      ...data,
      password: hashedPassword
    });
  }
  async updateUser(id, data) {
    const updateData = { ...data };
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }
    return await User.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        select: "-password"
      }
    );
  }
  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
  async validateCredentials(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      return null;
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return null;
    }
    const { password: _, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  }
}
const userService = new UserService();

export { userService as u };
//# sourceMappingURL=user.service.mjs.map
