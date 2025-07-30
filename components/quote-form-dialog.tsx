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

    const { firstName, lastName, email, phone, spaceType, width, length, message } = formData

    const subject = encodeURIComponent(`${t.freeConsultation} Request from ${firstName} ${lastName}`)
    const body = encodeURIComponent(`
${t.firstName}: ${firstName}
${t.lastName}: ${lastName}
${t.email}: ${email}
${t.phone}: ${phone}
${t.spaceType}: ${spaceType}
${t.width}: ${width} ${t.dimensionsUnit}
${t.length}: ${length} ${t.dimensionsUnit}
${t.message}:
${message}
    `)

    // Replace 'your-email@example.com' with the actual recipient email address
    const mailtoLink = `mailto:info@villamobilidesign.com?subject=${subject}&body=${body}`

    window.location.href = mailtoLink
    setIsSubmitted(true)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-4 md:p-6 mx-4 max-w-[95vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900">{t.freeConsultation}</DialogTitle>
          <DialogDescription className="text-gray-600 text-sm md:text-base">{t.consultationDesc}</DialogDescription>
        </DialogHeader>
        {isSubmitted ? (
          <div className="text-center py-6 md:py-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">{t.quoteSuccessTitle}</h3>
            <p className="text-gray-700 text-sm md:text-base">{t.quoteSuccessMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 md:gap-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm md:text-base">
                  {t.firstName}
                </Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm md:text-base">
                  {t.lastName}
                </Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-sm md:text-base">
                {t.email}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm md:text-base">
                {t.phone}
              </Label>
              <Input
                id="phone"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="spaceType" className="text-sm md:text-base">
                {t.spaceType}
              </Label>
              <Input
                id="spaceType"
                placeholder={t.spaceTypePlaceholder}
                value={formData.spaceType}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="width" className="text-sm md:text-base">
                  {t.width} ({t.dimensionsUnit})
                </Label>
                <Input
                  id="width"
                  type="number"
                  placeholder="e.g., 10"
                  value={formData.width}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="length" className="text-sm md:text-base">
                  {t.length} ({t.dimensionsUnit})
                </Label>
                <Input
                  id="length"
                  type="number"
                  placeholder="e.g., 15"
                  value={formData.length}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-sm md:text-base">
                {t.message}
              </Label>
              <Textarea
                id="message"
                placeholder={t.messagePlaceholder}
                className="min-h-[80px] md:min-h-[100px] mt-1"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-bronze-600 hover:bg-bronze-700 text-black font-semibold text-sm md:text-base py-3"
            >
              {t.submitRequest}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
