'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    const formData = new FormData();
    event.preventDefault();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    try {
      const response = await axios.post('http://localhost:3030/users', 
        formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      console.log(response.data);
      if (response.status === 200) {
        router.push('/');
        alert('Sign up successful');
      } else {
        alert('Sign up failed');
      }
    } catch (error) {
      alert('Sign up failed');
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  onChange={(event) => setUsername(event.target.value)}
                  id="username"
                  type="text"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input onChange={(event) => setPassword(event.target.value)} id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
