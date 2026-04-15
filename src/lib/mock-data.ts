import placeholderData from './placeholder-images.json';

export type Account = {
  id: string;
  name: string;
  type: 'Current' | 'Savings';
  accountNumber: string;
  sortCode: string;
  balance: number;
};

export type Transaction = {
  id: string;
  accountId: string;
  date: string;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
};

export type Payee = {
  id: string;
  name: string;
  accountNumber: string;
  sortCode: string;
};

const avatarImage = placeholderData.placeholderImages[0];

export const user = {
  name: 'Douglas Henshall',
  avatarUrl: avatarImage.imageUrl,
  avatarHint: avatarImage.imageHint,
  avatarFallback: 'DH',
};

export const accounts: Account[] = [
  {
    id: 'acc_1',
    name: 'Personal Account',
    type: 'Current',
    accountNumber: '****6789',
    sortCode: '20-20-20',
    balance: 5948301.24,
  },
  {
    id: 'acc_2',
    name: 'Rainy Day Saver',
    type: 'Savings',
    accountNumber: '****1234',
    sortCode: '20-20-21',
    balance: 52145.67,
  },
];

export const transactions: Transaction[] = [
  { id: 'txn_2', accountId: 'acc_1', date: '2024-07-29', description: 'Salary - ACME Corp', amount: 7500.00, type: 'credit' },
  { id: 'txn_1', accountId: 'acc_1', date: '2024-07-29', description: 'Tesco', amount: -45.67, type: 'debit' },
  { id: 'txn_3', accountId: 'acc_1', date: '2024-07-28', description: 'Shell', amount: -60.00, type: 'debit' },
  { id: 'txn_4', accountId: 'acc_1', date: '2024-07-28', description: 'Amazon.co.uk', amount: -129.99, type: 'debit' },
  { id: 'txn_5', accountId: 'acc_1', date: '2024-07-27', description: 'Transfer to Savings', amount: -1000.00, type: 'debit' },
  { id: 'txn_11', accountId: 'acc_2', date: '2024-07-27', description: 'Transfer from Personal', amount: 1000.00, type: 'credit' },
  { id: 'txn_6', accountId: 'acc_1', date: '2024-07-26', description: 'Netflix', amount: -10.99, type: 'debit' },
  { id: 'txn_7', accountId: 'acc_1', date: '2024-07-25', description: 'Pret A Manger', amount: -8.50, type: 'debit' },
  { id: 'txn_8', accountId: 'acc_1', date: '2024-07-24', description: 'Gym Membership', amount: -40.00, type: 'debit' },
  { id: 'txn_9', accountId: 'acc_1', date: '2024-07-22', description: 'John Lewis', amount: -250.75, type: 'debit' },
  { id: 'txn_10', accountId: 'acc_1', date: '2024-07-20', description: 'Trainline', amount: -88.20, type: 'debit' },
  { id: 'txn_16', accountId: 'acc_1', date: '2024-07-18', description: 'Rent Payment', amount: -2500.00, type: 'debit' },
  { id: 'txn_17', accountId: 'acc_1', date: '2024-07-15', description: 'Dinner with friends', amount: -120.50, type: 'debit' },
  { id: 'txn_18', accountId: 'acc_1', date: '2024-07-12', description: 'Spotify', amount: -9.99, type: 'debit' },

  { id: 'txn_12', accountId: 'acc_2', date: '2024-06-30', description: 'Interest', amount: 25.45, type: 'credit' },
  { id: 'txn_13', accountId: 'acc_2', date: '2024-06-25', description: 'Transfer from Personal', amount: 500.00, type: 'credit' },
  { id: 'txn_14', accountId: 'acc_2', date: '2024-05-31', description: 'Interest', amount: 22.10, type: 'credit' },
  { id: 'txn_15', accountId: 'acc_2', date: '2024-05-25', description: 'Transfer from Personal', amount: 500.00, type: 'credit' },
];


export const payees: Payee[] = [
    { id: 'payee_1', name: 'Jane Smith', accountNumber: '****5678', sortCode: '11-22-33' },
    { id: 'payee_2', name: 'Utility Bill', accountNumber: '****9012', sortCode: '44-55-66' },
    { id: 'payee_3', name: 'Credit Card', accountNumber: '****3456', sortCode: '77-88-99' },
];
