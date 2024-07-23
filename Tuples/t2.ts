
type StaffAccount = [number, string, string];

const staff: StaffAccount[] = [
  [0, "Ali", "Accountant"],
  [1, "Umer", "Manager"],
  [2, "Hadi", "HR"],
];

type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[0], 300, 300, 300],
];

const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];