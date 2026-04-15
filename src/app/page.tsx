import Link from 'next/link';
import { BarclaysLogo } from '@/components/common/barclays-logo';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Smartphone, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <BarclaysLogo className="h-8 w-8 text-primary" />
          <span className="sr-only">Barclays</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button asChild>
            <Link href="/login">Log In</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secure, Simple, and Smart Banking
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Experience the future of banking with Barclays. Manage your finances with ease and security.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/login">
                      Access Your Account
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://picsum.photos/seed/finance/600/400"
                width={600}
                height={400}
                alt="A person using a laptop for online banking"
                data-ai-hint="finance technology"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need, Nothing You Don't</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our banking platform provides all the essential features in a clean, intuitive interface.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1 text-center">
                <ShieldCheck className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Bank-Grade Security</h3>
                <p className="text-muted-foreground">
                  Your data is protected with the latest security standards.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <Smartphone className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-xl font-bold">Mobile First</h3>
                <p className="text-muted-foreground">
                  Access your accounts anytime, anywhere, on any device.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <TrendingUp className="h-12 w-12 mx-auto text-primary" />
                <h3 className="text-xl font-bold">AI-Powered Insights</h3>
                <p className="text-muted-foreground">
                  Get smart insights into your spending with our AI assistant.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Barclays PLC. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
