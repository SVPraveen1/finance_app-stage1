# Personal Finance Tracker - Stage 1

A simple web application for tracking personal finances with basic transaction management and visualization.


## Features

- **Transaction Management**
  - Add new transactions with amount, date, and description
  - Edit existing transactions
  - Delete transactions with confirmation
  - Form validation for all inputs

- **Transaction List**
  - Chronological list of all transactions
  - Clear display of transaction details
  - Loading states and error handling

- **Data Visualization**
  - Monthly expenses bar chart
  - Daily breakdown of spending
  - Interactive tooltips with detailed information

- **Data Persistence**
  - MongoDB integration for data storage
  - Data remains between page reloads

## Tech Stack

- **Frontend**
  - Next.js 
  - React 
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components
  - Recharts for data visualization

- **Backend**
  - Next.js API routes
  - MongoDB for data storage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SVPraveen1/finance_app-stage1
   cd finance-tracker-stage1

2. Install dependencies:

    ```shellscript
    npm install
    ```


3. Create a `.env.local` file in the root directory with your MongoDB connection string:

    ```plaintext
    MONGODB_URI=your_mongodb_connection_string
    ```


4. Run the development server:

    ```shellscript
    npm run dev
    ```


5. Open [http://localhost:3000](http://localhost:3000) in your browser.


## Usage Guide

### Adding a Transaction

1. Navigate to the "Transactions" tab
2. Fill in the amount, date, and description in the form
3. Click "Add Transaction"
4. The new transaction will appear in the transaction list


### Editing a Transaction

1. Find the transaction you want to edit in the list
2. Click the edit (pencil) icon
3. Modify the details in the form
4. Click "Save Changes"


### Deleting a Transaction

1. Find the transaction you want to delete in the list
2. Click the delete (trash) icon
3. Confirm the deletion in the dialog


### Viewing Monthly Expenses

1. Navigate to the "Monthly Chart" tab
2. The chart displays your daily expenses for the current month
3. Hover over bars to see detailed information


## Project Structure

```plaintext
finance-tracker-stage1/
├── app/
│   ├── api/
│   │   └── transactions/
│   │       ├── [id]/
│   │       │   └── route.ts
│   │       └── route.ts
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   ├── transaction-form.tsx
│   ├── transaction-list.tsx
│   ├── transaction-edit-form.tsx
│   └── expenses-chart.tsx
├── lib/
│   ├── mongodb.ts
│   ├── types.ts
│   └── utils.ts
└── public/
```

## API Endpoints

### Transactions

- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create a new transaction
- `PUT /api/transactions/[id]` - Update a transaction
- `DELETE /api/transactions/[id]` - Delete a transaction


## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add the `MONGODB_URI` environment variable in the Vercel project settings
4. Deploy the project


## Customization

### Styling

- The application uses Tailwind CSS for styling
- Modify the styles in the component files to change the appearance


### Chart Customization

- Edit the `expenses-chart.tsx` file to customize the chart appearance
- Modify the colors, labels, and tooltips as needed


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [MongoDB](https://www.mongodb.com/)
