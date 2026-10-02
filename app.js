import express from "express";
import cors from "cors";

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "*",
    })
);

const cards = [
  {
    icon: "fa-solid fa-cloud-arrow-up",
    title: "Cloud Sync",
    description:
      "Real-time synchronization across all your devices. Work from anywhere.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Security First",
    description: "Enterprise-grade encryption, 2FA, and automated backups.",
  },
  {
    icon: "fa-solid fa-bolt-lightning",
    title: "Lightning Fast",
    description:
      "Optimized edge network for sub-second response times globally.",
  },
  {
    icon: "fa-solid fa-chart-pie",
    title: "Analytics",
    description: "Deep insights with customizable dashboards and reports.",
  },
  {
    icon: "fa-solid fa-users",
    title: "Team Collaboration",
    description:
      "Invite team members, share workspaces, and comment in real time.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "24/7 Support",
    description: "Priority support with an average response time of 2 minutes.",
  },
];
const testimonials = [
  {
    icon: "fa-solid fa-quote-left",
    text: `"Nexify transformed our workflow. The grid system is so clean and the icons make everything pop. Highly recommended!"`,
    userIcon: "fa-solid fa-circle-user",
    name: "Sarah Chen",
    role: "Product Manager",
  },
  {
    icon: "fa-solid fa-quote-left",
    text: `"The simplicity is brilliant. No position tricks, just pure grid and beautiful Font Awesome icons. Our team loves it."`,
    userIcon: "fa-solid fa-circle-user",
    name: "Marcus Rivera",
    role: "Lead Developer",
  },
  {
    icon: "fa-solid fa-quote-left",
    text: `"Best landing page experience I've built. The card grid auto auto auto works perfectly on every device."`,
    userIcon: "fa-solid fa-circle-user",
    name: "Olivia Kim",
    role: "Startup Founder",
  },
];
app.get("/get-data", (req, res) => {
   return res.status(200).json({
        testimonials,
       cards
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
