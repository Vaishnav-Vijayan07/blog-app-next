import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const AboutPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Jane Smith",
      role: "Founder & Editor-in-Chief",
      bio: "Jane has over 10 years of experience in digital publishing and content strategy. She founded BlogMaster with the vision of creating a platform that combines quality content with exceptional user experience.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "jane@example.com",
      },
    },
    {
      name: "John Doe",
      role: "Lead Developer",
      bio: "John is a full-stack developer with expertise in React and modern web technologies. He ensures that BlogMaster stays at the cutting edge of web development practices.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "john@example.com",
      },
    },
    {
      name: "Emily Chen",
      role: "Content Strategist",
      bio: "Emily specializes in SEO and content strategy. She works closely with our writers to ensure all content is optimized for search engines while maintaining high editorial standards.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "emily@example.com",
      },
    },
    {
      name: "Michael Johnson",
      role: "UX Designer",
      bio: "Michael brings his passion for user-centered design to create intuitive and engaging experiences for BlogMaster readers. He constantly works on improving the site's usability and visual appeal.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "michael@example.com",
      },
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          About BlogMaster
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're a team of passionate writers, developers, and designers
          dedicated to bringing you the best content on web development, design,
          and technology.
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              Founded in 2020, BlogMaster began as a small project with a big
              vision: to create a platform where quality content meets
              exceptional user experience. We noticed that many blogs were
              either visually appealing but lacked substance, or content-rich
              but difficult to navigate.
            </p>
            <p className="text-lg mb-4">
              Our team set out to bridge this gap by building a blog platform
              that prioritizes both content quality and user experience. We
              believe that valuable information should be accessible, engaging,
              and presented in a way that respects the reader's time and
              attention.
            </p>
          </div>
          <div>
            <p className="text-lg mb-4">
              Today, BlogMaster has grown into a trusted resource for thousands
              of readers seeking insights on web development, design,
              technology, and business. Our articles are crafted by experts in
              their fields and undergo rigorous editorial review to ensure
              accuracy and relevance.
            </p>
            <p className="text-lg">
              As we continue to grow, our commitment remains the same: to
              provide our readers with content that informs, inspires, and helps
              them succeed in their professional journeys.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-16" />

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
              <p className="text-muted-foreground">
                We believe in substance over quantity. Every article we publish
                is thoroughly researched, well-written, and provides genuine
                value to our readers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">User Experience</h3>
              <p className="text-muted-foreground">
                We're committed to creating a seamless, enjoyable reading
                experience across all devices, with clean design and intuitive
                navigation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">
                Continuous Improvement
              </h3>
              <p className="text-muted-foreground">
                We constantly seek feedback and use it to improve our content,
                design, and functionality to better serve our community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-16" />

      {/* Team section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <CardContent className="pt-6 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <p className="text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5 text-gray-600 hover:text-gray-900" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
