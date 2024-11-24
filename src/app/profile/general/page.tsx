"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChromeIcon as Google } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ProfilePage() {
  const [username, setUsername] = useState("johndoe")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [deleteConfirmation, setDeleteConfirmation] = useState("")

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleDeleteConfirmationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteConfirmation(event.target.value)
  }

  const handleSaveUsername = () => {
    // Implement save username logic here
    console.log("Saving username:", username)
  }

  const handleDeleteAccount = () => {
    // Implement delete account logic here
    console.log("Deleting account")
    setIsDeleteDialogOpen(false)
    setDeleteConfirmation("")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      
      <Card>
        <CardContent className="flex items-center space-x-4 py-4">
          <Google className="h-6 w-6 text-blue-500" />
          <div className="flex-grow">
            <p className="text-sm font-semibold">Google Account</p>
            <p className="text-sm text-muted-foreground">johndoe@gmail.com</p>
          </div>
          <Button variant="outline" size="sm" disabled className="opacity-50 cursor-not-allowed">
            Connected
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">ID</CardTitle>
          <CardDescription>Your unique identifier</CardDescription>
        </CardHeader>
        <CardContent>
          <Input id="id" value="12345" disabled />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Username</CardTitle>
          <CardDescription>Your display name on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveUsername}>Save Username</Button>
        </CardFooter>
      </Card>

      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Delete Account</CardTitle>
          <CardDescription>
            Permanently remove your Personal Account and all of its contents from our platform. This action is irreversible, so please continue with caution.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Label htmlFor="delete-confirmation" className="text-sm font-medium">
                  Type "delete my account" to confirm:
                </Label>
                <Input
                  id="delete-confirmation"
                  value={deleteConfirmation}
                  onChange={handleDeleteConfirmationChange}
                  className="mt-2"
                  placeholder="delete my account"
                />
              </div>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setIsDeleteDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleDeleteAccount}
                  disabled={deleteConfirmation !== "delete my account"}
                >
                  Delete Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  )
}

