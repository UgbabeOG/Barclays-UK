'use server';
/**
 * @fileOverview An AI banking assistant flow that responds to user queries about mock accounts and transactions.
 *
 * - aiBankingAssistantQuery - A function that handles user queries for the AI banking assistant.
 * - AIBankingAssistantQueryInput - The input type for the aiBankingAssistantQuery function.
 * - AIBankingAssistantQueryOutput - The return type for the aiBankingAssistantQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIBankingAssistantQueryInputSchema = z.object({
  query: z.string().describe('The user\'s question to the AI banking assistant.'),
  accountBalancesJson: z.string().describe('A JSON string representing the mock account balances for Douglas Henshall.'),
  transactionHistoryJson: z.string().describe('A JSON string representing the mock transaction history for Douglas Henshall.'),
});
export type AIBankingAssistantQueryInput = z.infer<typeof AIBankingAssistantQueryInputSchema>;

const AIBankingAssistantQueryOutputSchema = z.object({
  response: z.string().describe('The AI banking assistant\'s response to the user query.'),
});
export type AIBankingAssistantQueryOutput = z.infer<typeof AIBankingAssistantQueryOutputSchema>;

export async function aiBankingAssistantQuery(input: AIBankingAssistantQueryInput): Promise<AIBankingAssistantQueryOutput> {
  return aiBankingAssistantQueryFlow(input);
}

const aiBankingAssistantQueryPrompt = ai.definePrompt({
  name: 'aiBankingAssistantQueryPrompt',
  input: {schema: AIBankingAssistantQueryInputSchema},
  output: {schema: AIBankingAssistantQueryOutputSchema},
  prompt: `You are a helpful and professional AI banking assistant for Barclays UK.
The current user is Douglas Henshall. His available balance is approximately £6,000,000.
You have access to the following mock banking data to answer questions:

--- Account Balances ---
{{{accountBalancesJson}}}

--- Transaction History ---
{{{transactionHistoryJson}}}

Please answer the following query from Douglas Henshall based on the provided information, offering guidance on mock transactions or account details. If you cannot find the information in the provided data, politely state that you cannot assist with that specific query.

Query: {{{query}}}`,
});

const aiBankingAssistantQueryFlow = ai.defineFlow(
  {
    name: 'aiBankingAssistantQueryFlow',
    inputSchema: AIBankingAssistantQueryInputSchema,
    outputSchema: AIBankingAssistantQueryOutputSchema,
  },
  async (input) => {
    const {output} = await aiBankingAssistantQueryPrompt(input);
    if (!output) {
      throw new Error('AI banking assistant failed to generate a response.');
    }
    return output;
  }
);
