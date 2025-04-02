import { L as Loan } from './Loan.mjs';
import { U as User } from './User.mjs';

class LoanService {
  // Lấy danh sách khoản vay
  static async getLoans() {
    try {
      const loans = await Loan.find().populate("borrowerId", "name email");
      return loans;
    } catch (error) {
      throw new Error(`Error fetching loans: ${error.message}`);
    }
  }
  // Tạo khoản vay mới
  static async createLoan(data) {
    try {
      const borrower = await User.findById(data.borrowerId);
      if (!borrower) {
        throw new Error("Borrower not found");
      }
      const amountUSDT = Number((data.amountVND / 25e3).toFixed(2));
      const loan = new Loan({
        ...data,
        amountUSDT,
        status: "PENDING"
      });
      await loan.save();
      return await loan.populate("borrowerId", "name email");
    } catch (error) {
      throw new Error(`Error creating loan: ${error.message}`);
    }
  }
  // Cập nhật trạng thái khoản vay
  static async updateLoanStatus(id, status) {
    try {
      const loan = await Loan.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      if (!loan) {
        throw new Error("Loan not found");
      }
      return loan;
    } catch (error) {
      throw new Error(`Error updating loan status: ${error.message}`);
    }
  }
  // Lấy chi tiết khoản vay
  static async getLoanById(id) {
    try {
      const loan = await Loan.findById(id).populate("borrowerId", "name email");
      if (!loan) {
        throw new Error("Loan not found");
      }
      return loan;
    } catch (error) {
      throw new Error(`Error fetching loan: ${error.message}`);
    }
  }
  // Tính toán lãi suất và số tiền phải trả
  static calculateLoanPayment(loan) {
    const termMonths = {
      "3_MONTHS": 3,
      "6_MONTHS": 6,
      "1_YEAR": 12
    }[loan.term];
    if (!termMonths) {
      throw new Error("Invalid loan term");
    }
    const monthlyInterestRate = loan.interestRate / 100 / 12;
    const totalInterest = loan.amountVND * monthlyInterestRate * termMonths;
    return {
      principal: loan.amountVND,
      totalInterest,
      totalAmount: loan.amountVND + totalInterest,
      monthlyPayment: (loan.amountVND + totalInterest) / termMonths
    };
  }
  static async deleteLoan(id) {
    return await Loan.findByIdAndDelete(id);
  }
}

export { LoanService as L };
//# sourceMappingURL=loan.service.mjs.map
