"use client"

import * as React from "react"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Check, 
  MapPin,
  Scissors
} from "lucide-react"
import { Card } from "@/components/ui/card"

// --- Mock Data ---

const serviceCategories = [
  {
    id: "hair",
    label: "Hair Services",
    services: [
      { id: "men-haircut", name: "Men’s Haircut & Style", price: 40, duration: "30 min" },
      { id: "women-haircut", name: "Women’s Haircut & Style", price: 65, duration: "45 min" },
      { id: "single-process", name: "Single Process", price: 80, duration: "60 min" },
      { id: "full-foil", name: "Full Foil", price: 150, duration: "90 min" },
      { id: "blowdry", name: "Blow-dry Style", price: 45, duration: "45 min" },
    ],
  },
  {
    id: "beauty",
    label: "Beauty Services",
    services: [
      { id: "glow-facial", name: "Farmhouse Fresh Glow Facial", price: 95, duration: "60 min" },
      { id: "brow-wax", name: "Brow wax", price: 20, duration: "15 min" },
      { id: "lash-lift", name: "Lash Lift", price: 70, duration: "45 min" },
      { id: "full-face-makeup", name: "Full Face Makeup", price: 100, duration: "60 min" },
    ],
  },
  {
    id: "nails",
    label: "Nail Services",
    services: [
      { id: "classic-mani", name: "Classic Manicure", price: 28, duration: "45 min" },
      { id: "no-chip-mani", name: "No Chip Manicure", price: 54, duration: "60 min" },
      { id: "classic-pedi", name: "Classic Pedicure", price: 56, duration: "60 min" },
    ],
  },
]

const staffMembers = [
  { id: "any", name: "Any Professional", role: "Available Staff" },
  { id: "sarah", name: "Sarah Jenkins", role: "Senior Stylist" },
  { id: "mike", name: "Mike Ross", role: "Barber" },
  { id: "jessica", name: "Jessica Pearson", role: "Colorist" },
]

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM"
]

// --- Component ---

export default function BookingMangomint() {
  const [step, setStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedStaff, setSelectedStaff] = useState<string>("any")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Helper to find service details
  const getServiceDetails = (id: string) => {
    for (const cat of serviceCategories) {
      const service = cat.services.find(s => s.id === id)
      if (service) return service
    }
    return null
  }

  const toggleService = (id: string) => {
    setSelectedServices(prev => {
      if (prev.includes(id)) {
        return prev.filter(s => s !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleNext = () => {
    setStep(prev => prev + 1)
  }

  const handleBack = () => {
    setStep(prev => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const totalPrice = selectedServices.reduce((sum, id) => {
    const service = getServiceDetails(id)
    return sum + (service?.price || 0)
  }, 0)

  const totalDuration = selectedServices.reduce((sum, id) => {
    const service = getServiceDetails(id)
    const minutes = parseInt(service?.duration || "0")
    return sum + minutes
  }, 0)

  // Render Steps
  
  const renderServicesStep = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Select Services</h2>
        <p className="text-gray-500 text-sm mt-1">Choose one or more services for your visit</p>
      </div>
      
      <div className="space-y-4">
        {serviceCategories.map(category => (
          <div key={category.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 font-medium text-gray-700 text-sm uppercase tracking-wide">
              {category.label}
            </div>
            <div className="divide-y divide-gray-100">
              {category.services.map(service => {
                const isSelected = selectedServices.includes(service.id)
                return (
                  <div 
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={cn(
                      "flex items-center justify-between p-4 cursor-pointer transition-colors hover:bg-gray-50",
                      isSelected && "bg-primary/5"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                        isSelected ? "bg-primary border-primary text-white" : "border-gray-300 bg-white"
                      )}>
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.duration}</div>
                      </div>
                    </div>
                    <div className="font-medium text-gray-900">${service.price}</div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderStaffStep = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Select Professional</h2>
        <p className="text-gray-500 text-sm mt-1">Who would you like to book with?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {staffMembers.map(staff => {
          const isSelected = selectedStaff === staff.id
          return (
            <div
              key={staff.id}
              onClick={() => setSelectedStaff(staff.id)}
              className={cn(
                "relative flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200",
                isSelected 
                  ? "border-primary bg-primary/5 shadow-md" 
                  : "border-gray-200 bg-white hover:border-primary/30 hover:shadow-sm"
              )}
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{staff.name}</div>
                <div className="text-xs text-gray-500">{staff.role}</div>
              </div>
              {isSelected && (
                <div className="absolute top-4 right-4 text-primary">
                  <Check className="w-5 h-5" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderTimeStep = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Select Time</h2>
        <p className="text-gray-500 text-sm mt-1">Choose a date and time for your appointment</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-auto mx-auto">
          <div className="border rounded-xl p-4 bg-white shadow-sm inline-block w-full sm:w-auto">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date() || date.getDay() === 1}
              className="rounded-md border-0"
            />
          </div>
        </div>

        <div className="w-full flex-1">
          <div className="text-sm font-medium text-gray-700 mb-3">
            Available Slots for {date?.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[320px] overflow-y-auto pr-2">
            {timeSlots.map(slot => {
              const isSelected = selectedTime === slot
              return (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={cn(
                    "py-2 px-3 text-sm rounded-lg border font-medium transition-all",
                    isSelected
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary"
                  )}
                >
                  {slot}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )

  const renderDetailsStep = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Your Details</h2>
        <p className="text-gray-500 text-sm mt-1">Please provide your contact information</p>
      </div>

      <form id="booking-form" onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName" 
              required 
              value={formData.firstName}
              onChange={e => setFormData({...formData, firstName: e.target.value})}
              className="bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName" 
              required 
              value={formData.lastName}
              onChange={e => setFormData({...formData, lastName: e.target.value})}
              className="bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            required 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel" 
            required 
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
            className="bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Appointment Notes (Optional)</Label>
          <Input 
            id="notes" 
            value={formData.notes}
            onChange={e => setFormData({...formData, notes: e.target.value})}
            className="bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>
      </form>
    </div>
  )

  const renderSummary = () => {
    if (selectedServices.length === 0) return null
    
    return (
      <div className="hidden lg:block w-[320px] shrink-0 space-y-6">
        <Card className="p-6 sticky top-6 border-none shadow-lg bg-gray-900 text-white">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-4">Booking Summary</h3>
          
          <div className="space-y-4">
            {selectedServices.length > 0 ? (
              <div className="space-y-3">
                {selectedServices.map(id => {
                  const s = getServiceDetails(id)
                  return (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="text-gray-300">{s?.name}</span>
                      <span className="font-medium">${s?.price}</span>
                    </div>
                  )
                })}
                <div className="border-t border-gray-800 pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="text-xs text-gray-400 text-right">
                  ~ {totalDuration} mins
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm italic">No services selected</p>
            )}

            {step > 1 && (
              <div className="pt-4 border-t border-gray-800 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <User className="w-4 h-4" />
                  <span>{staffMembers.find(s => s.id === selectedStaff)?.name}</span>
                </div>
                {step > 2 && date && selectedTime && (
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <CalendarIcon className="w-4 h-4" />
                    <span>
                      {date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} at {selectedTime}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>
    )
  }

  // Main Render

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center p-6 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
          <Check className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Thank you {formData.firstName}. Your appointment has been successfully scheduled. We've sent a confirmation email to {formData.email}.
        </p>
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => window.location.reload()}>Book Another</Button>
          <Button onClick={() => window.location.href = "/"}>Return Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Main Flow */}
        <div className="flex-1">
          {/* Progress Bar (Mobile/Desktop) */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2 text-sm font-medium text-gray-500">
              <span className={step >= 1 ? "text-primary" : ""}>Services</span>
              <span className={step >= 2 ? "text-primary" : ""}>Staff</span>
              <span className={step >= 3 ? "text-primary" : ""}>Time</span>
              <span className={step >= 4 ? "text-primary" : ""}>Details</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-in-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          <Card className="p-6 md:p-8 min-h-[500px] border-none shadow-lg flex flex-col relative">
            {/* Back Button */}
            {step > 1 && (
              <button 
                onClick={handleBack}
                className="absolute top-6 left-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <div className="flex-1 py-4">
              {step === 1 && renderServicesStep()}
              {step === 2 && renderStaffStep()}
              {step === 3 && renderTimeStep()}
              {step === 4 && renderDetailsStep()}
            </div>

            {/* Footer Actions */}
            <div className="mt-8 pt-6 border-t flex justify-end items-center gap-4">
              {step < 4 ? (
                <Button 
                  onClick={handleNext} 
                  disabled={
                    (step === 1 && selectedServices.length === 0) ||
                    (step === 3 && !selectedTime)
                  }
                  className="w-full md:w-auto px-8 rounded-full"
                >
                  Continue <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  onClick={(e) => handleSubmit(e as any)} 
                  disabled={isSubmitting || !formData.firstName || !formData.phone}
                  className="w-full md:w-auto px-8 rounded-full"
                >
                  {isSubmitting ? "Confirming..." : "Confirm Booking"}
                </Button>
              )}
            </div>
          </Card>
        </div>

        {/* Desktop Summary Sidebar */}
        {renderSummary()}
        
      </div>
      
      {/* Mobile Summary (Floating Bottom) */}
      {selectedServices.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500">{selectedServices.length} services selected</div>
            <div className="font-bold text-lg text-primary">${totalPrice}</div>
          </div>
          {step < 4 ? (
             <Button 
             onClick={handleNext} 
             disabled={
               (step === 1 && selectedServices.length === 0) ||
               (step === 3 && !selectedTime)
             }
             size="sm"
             className="rounded-full"
           >
             Next
           </Button>
          ) : (
            <Button 
              onClick={(e) => handleSubmit(e as any)}
              disabled={isSubmitting || !formData.firstName || !formData.phone}
              size="sm"
              className="rounded-full"
            >
              Book
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

