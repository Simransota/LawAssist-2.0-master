import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Calendar, MapPin, Mail, Phone, Linkedin, Globe } from "lucide-react"

export default function LawyerProfile() {
  return (
    <div className="container mx-auto py-36 px-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex flex-col md:flex-row items-center gap-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Raj Patel" />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <CardTitle className="text-3xl font-bold">Raj Patel, Advocate</CardTitle>
            <CardDescription className="text-xl">Senior Advocate, Legal Consultant</CardDescription>
            <div className="flex items-center justify-center md:justify-start mt-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Mumbai, Maharashtra</span>         
            </div>
            <div className="py-5">
                <Button className="w-full md:w-auto ">Edit</Button>
            </div>
          </div>
        
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Professional Credentials</h2>
            <p><strong>Years of Experience:</strong> 20+</p>
            <p><strong>Education:</strong> L.L.B., National Law School of India University; B.A., St. Xavier's College, Mumbai</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Corporate Law</Badge>
              <Badge variant="secondary">Criminal Law</Badge>
              <Badge variant="secondary">Constitutional Law</Badge>
            </div>
            <p><strong>Bar Admissions:</strong> Bar Council of India, Maharashtra & Goa Bar Council</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Professional Background</h2>
            <p>Raj Patel is a seasoned advocate with a focus on corporate, criminal, and constitutional law. With over 20 years of legal practice, he has represented clients in high-profile cases and has been a legal consultant for major corporations across India.</p>
            <h3 className="text-xl font-semibold">Practice Areas</h3>
            <ul className="list-disc list-inside">
              <li>Corporate Law</li>
              <li>Criminal Defense</li>
              <li>Constitutional Law</li>
            </ul>
            <p><strong>Languages:</strong> English, Hindi, Marathi, Gujarati</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Ratings and Reviews</h2>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">4.8</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">(89 reviews)</span>
            </div>
            <p><strong>Response Rate:</strong> 96%</p>
            <p><strong>Success Rate:</strong> 90%</p>
          </section>

          {/* <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Availability and Booking</h2>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Available for consultations: Mon-Fri, 10AM-6PM</span>
            </div>
            <p className="text-sm text-gray-600">Free 15-minute initial consultation for new clients</p>
          </section> */}

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Accolades and Awards</h2>
            <ul className="list-disc list-inside">
              <li>Top Lawyers in India, Corporate Law, 2019-2023</li>
              <li>India's Leading Constitutional Lawyers, 2021</li>
              <li>Bar Council of Maharashtra, Executive Member</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Client Testimonials</h2>
            <Card className="bg-gray-50">
              <CardContent className="pt-4">
                <p className="italic text-gray-600">"Raj Patel's deep understanding of corporate law helped our company navigate a complex legal issue with ease. His attention to detail and thorough preparation were instrumental in securing a favorable outcome."</p>
                <p className="text-right mt-2 text-gray-600">- Anjali R., Corporate Client</p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <div className="space-y-1">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>raj.patel@lawfirm.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>(022) 1234-5678</span>
              </div>
              <p>456 Law Avenue, Fort, Mumbai, Maharashtra 400001</p>
            </div>
          </section>

          <section className="flex space-x-4">
            <Button variant="outline" className="flex items-center">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Website
            </Button>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
