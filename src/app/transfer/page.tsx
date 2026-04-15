"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { accounts, payees } from "@/lib/mock-data";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

const transferSchema = z.object({
  fromAccountId: z.string().min(1, "Please select an account to transfer from."),
  toPayeeId: z.string().min(1, "Please select a recipient."),
  amount: z.coerce
    .number()
    .positive("Amount must be positive.")
    .max(100000, "For transfers over £100,000, please contact support."),
  reference: z.string().max(50, "Reference is too long.").optional(),
});

type TransferFormValues = z.infer<typeof transferSchema>;

export default function TransferPage() {
  const [dialogState, setDialogState] = useState({
    open: false,
    title: "",
    description: "",
  });

  const form = useForm<TransferFormValues>({
    resolver: zodResolver(transferSchema),
    defaultValues: {
      fromAccountId: "",
      toPayeeId: "",
      amount: 0,
      reference: "",
    },
  });

  function onSubmit(values: TransferFormValues) {
    console.log("Mock transfer failed:", values);
    setDialogState({
      open: true,
      title: "Transfer Failed",
      description: "post no debit on account due to court proceedings",
    });
  }

  return (
    <DashboardLayout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Make a Payment</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Fund Transfer</CardTitle>
          <CardDescription>
            Send money to your saved payees securely.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fromAccountId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account to pay from" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {accounts.map((account) => (
                          <SelectItem key={account.id} value={account.id}>
                            {account.name} - {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(account.balance)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="toPayeeId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a recipient" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {payees.map((payee) => (
                          <SelectItem key={payee.id} value={payee.id}>
                            {payee.name} - {payee.sortCode} / {payee.accountNumber}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount (£)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="reference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reference</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., invoice, rent" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Send Payment</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <AlertDialog open={dialogState.open} onOpenChange={(open) => setDialogState({ ...dialogState, open })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogState.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {dialogState.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setDialogState({ ...dialogState, open: false })}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </DashboardLayout>
  );
}
