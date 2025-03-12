import TransactionList from "@/components/transaction-list"
import TransactionForm from "@/components/transaction-form"
import ExpensesChart from "@/components/expenses-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Personal Finance Visualizer - Stage 1</h1>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="chart">Monthly Chart</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-8">
          <TransactionForm />
          <TransactionList />
        </TabsContent>

        <TabsContent value="chart">
          <ExpensesChart />
        </TabsContent>
      </Tabs>
    </main>
  )
}

