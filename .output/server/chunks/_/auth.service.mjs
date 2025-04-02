import { U as User } from './User.mjs';
import jwt from 'jsonwebtoken';

class AuthService {
  async login(email, password) {
    try {
      console.log("email", email);
      console.log("password", password);
      const user = await User.findByEmail(email);
      if (!user) {
        throw new Error("Email ho\u1EB7c m\u1EADt kh\u1EA9u kh\xF4ng ch\xEDnh x\xE1c");
      }
      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        throw new Error("Email ho\u1EB7c m\u1EADt kh\u1EA9u kh\xF4ng ch\xEDnh x\xE1c");
      }
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "24h" }
      );
      const { password: _, ...userWithoutPassword } = user.toObject();
      return {
        user: userWithoutPassword,
        token
      };
    } catch (error) {
      throw new Error(error.message || "C\xF3 l\u1ED7i x\u1EA3y ra trong qu\xE1 tr\xECnh \u0111\u0103ng nh\u1EADp");
    }
  }
  async register(email, password) {
    try {
      const existingUser = await User.findByEmail(email);
      if (existingUser) {
        throw new Error("Email \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng");
      }
      const user = await User.create({
        email: email.toLowerCase(),
        password
      });
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "24h" }
      );
      const { password: _, ...userWithoutPassword } = user.toObject();
      return {
        user: userWithoutPassword,
        token
      };
    } catch (error) {
      throw new Error(error.message || "C\xF3 l\u1ED7i x\u1EA3y ra trong qu\xE1 tr\xECnh \u0111\u0103ng k\xFD");
    }
  }
}
const authService = new AuthService();

export { authService as a };
//# sourceMappingURL=auth.service.mjs.map
