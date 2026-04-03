import Link from 'next/link';
import { BarclaysLogo } from '@/components/common/barclays-logo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          <CardHeader className="items-center text-center">
            <BarclaysLogo className="h-16 w-16 text-primary" />
            <CardTitle className="text-2xl font-bold">Log in</CardTitle>
            <CardDescription>to your Barclays online banking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="membership-number">Membership number</Label>
              <Input
                id="membership-number"
                placeholder="12345678"
                defaultValue="12345678"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                defaultValue="password"
                readOnly
              />
            </div>
            <div className="text-sm">
              <Link href="#" className="font-medium text-primary hover:underline">
                Forgot your details?
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button asChild className="w-full" size="lg">
              <Link href="/dashboard">Log in</Link>
            </Button>
          </CardFooter>
        </Card>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          This is a simulated application for demonstration purposes.
        </p>
      </div>
    </main>
  );
}
