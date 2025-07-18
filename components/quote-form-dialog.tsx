"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface QuoteFormDialogProps {
  isOpen: boolean
  onClose: () => void
  translations: {
    freeConsultation: string
    consultationDesc: string
    firstName: string
    lastName: string
    email: string
    phone: string
    spaceType: string
    spaceTypePlaceholder: string
    width: string
    length: string
    dimensionsUnit: string
    message: string
    messagePlaceholder: string
    submitRequest: string
    quoteSuccessTitle: string
    quoteSuccessMessage: string
  }
}

export function QuoteFormDialog({ isOpen, onClose, translations: t }: QuoteFormDialogProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    spaceType: "",
    width: "",
    length: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Quote Request Submitted:", formData)
    setIsSubmitted(true)
    // Optionally, reset form after submission
    // setFormData({ firstName: "", lastName: "", email: "", phone: "", spaceType: "", width: "", length: "", message: "" });
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900">{t.freeConsultation}</DialogTitle>
          <DialogDescription className="text-gray-600">{t.consultationDesc}</DialogDescription>
        </DialogHeader>
        {isSubmitted ? (
          <div className="text-center py-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.quoteSuccessTitle}</h3>
            <p className="text-gray-700">{t.quoteSuccessMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">{t.firstName}</Label>
                <Input id="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="lastName">{t.lastName}</Label>
                <Input id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div>
              <Label htmlFor="email">{t.email}</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">{t.phone}</Label>
              <Input id="phone" placeholder="+1 (555) 123-4567" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="spaceType">{t.spaceType}</Label>
              <Input
                id="spaceType"
                placeholder={t.spaceTypePlaceholder}
                value={formData.spaceType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="width">
                  {t.width} ({t.dimensionsUnit})
                </Label>
                <Input
                  id="width"
                  type="number"
                  placeholder="e.g., 10"
                  value={formData.width}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="length">
                  {t.length} ({t.dimensionsUnit})
                </Label>
                <Input
                  id="length"
                  type="number"
                  placeholder="e.g., 15"
                  value={formData.length}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message">{t.message}</Label>
              <Textarea
                id="message"
                placeholder={t.messagePlaceholder}
                className="min-h-[100px]"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full bg-bronze-600 hover:bg-bronze-700 text-black font-semibold">
              {t.submitRequest}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
