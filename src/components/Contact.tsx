import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.firstName+" "+formData.lastName,
          email: formData.email,
          message: formData.message,
          phone : formData.phone
        }),
      });

      toast.success("message sent successfully");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "There was an error processing your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-8">Let's work together</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Input
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Email address"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Input
                placeholder="Phone number"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
            </div>

            <Textarea
              placeholder="Type your message here..."
              rows={5}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              required
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-400 hover:bg-green-500 text-black font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">📞</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-white font-semibold">(+91) 81783 08335</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">✉️</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white font-semibold">at448429@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">📍</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Address</p>
              <p className="text-white font-semibold">
                IIT Ropar, Rupnagar, Punjab, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
