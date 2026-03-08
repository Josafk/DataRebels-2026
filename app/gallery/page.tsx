import { Gallery6 } from "@/components/ui/gallery6";

const demoData = {
  heading: "Featured Projects",
  demoUrl: "#",
  items: [
    {
      id: "item-1",
      title: "Build Modern UIs",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
    },
    {
      id: "item-2",
      title: "Design System Components",
      summary:
        "Explore our library of customizable components built with shadcn/ui and Tailwind CSS.",
      url: "#",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
    },
    {
      id: "item-3",
      title: "Responsive Layouts",
      summary:
        "Build websites that look great on any device with our responsive design patterns.",
      url: "#",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
    },
    {
      id: "item-4",
      title: "Developer Experience",
      summary:
        "Streamline your workflow with our developer-friendly tools and documentation.",
      url: "#",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600",
    },
    {
      id: "item-5",
      title: "Performance First",
      summary:
        "Create fast, optimized websites using our performance-focused components.",
      url: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    },
  ],
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Gallery6 {...demoData} />
    </div>
  );
}
