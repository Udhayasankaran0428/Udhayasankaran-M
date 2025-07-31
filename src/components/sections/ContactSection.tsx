import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedButton from "../AnimatedButton";
import { useToast } from "@/hooks/use-toast";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";

// Define social link type
interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Udhayasankaran0428",
    icon: <FaGithub size={20} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/udhayasankaran282004/",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/P4Ii5MwA98/",
    icon: <SiLeetcode size={20} />,
  },
  {
    name: "Email",
    url: "mailto:udhayasankaran04@gmail.com",
    icon: <FaEnvelope size={20} />,
  },
];
const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInView, setIsInView] = useState(true); // Optional: Set this via IntersectionObserver if needed

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_282004",      // Service ID
        "template_197076",     // Template ID
        templateParams,
        "-TR0ldQ_O5-Unc6ay"    // Public Key
      );

      toast({
        title: "Message Sent! ✨",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send ❌",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-12">
      <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 glass p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg h-15 resize-none bg-black text-white placeholder-white"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg h-15 resize-none bg-black text-white placeholder-white"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
  name="message"
  placeholder="Your Message"
  required
  className="w-full p-3 border rounded-lg h-15 resize-none bg-black text-white placeholder-white"
  value={formData.message}
  onChange={handleChange}
/>

          <AnimatedButton
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </AnimatedButton>
        </form>

        {/* Contact Info & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-secondary">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">📧</div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">udhayasankaran04@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center">📱</div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91 9042587122</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">📍</div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-accent">Follow Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="/Udhay%27s%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <AnimatedButton variant="secondary" size="lg" className="w-full">
                📄 View Resume
              </AnimatedButton>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;