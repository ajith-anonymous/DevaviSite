import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import { sendLeadNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store contact in database
      const contact = await storage.createContact(validatedData);
      
      // Send email notification (non-blocking — failure does not affect visitor response)
      sendLeadNotification(contact).catch((err) => {
        console.error("📧 Failed to send lead notification email:", err);
      });
      
      res.json({ 
        success: true, 
        message: "Thank you! We'll get back to you within 24 hours.",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Please check your form data",
          errors: error.issues
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again or email us directly."
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
