
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            NextGen AI Tutors
          </span>
        </Link>

        {!isMobile ? (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Subjects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {subjects.map((subject) => (
                      <ListItem
                        key={subject.title}
                        title={subject.title}
                        href={subject.href}
                      >
                        {subject.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about-us"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/courses"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Courses
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/teachers"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Teachers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>How It Works</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <ListItem title="AI-Powered Learning" href="/how-it-works">
                      Discover how our AI adapts to your learning style and pace
                    </ListItem>
                    <ListItem title="Personalized Experience" href="/how-it-works">
                      We create custom learning paths based on your needs
                    </ListItem>
                    <ListItem title="Progress Tracking" href="/how-it-works">
                      Monitor your growth with detailed analytics and reports
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/pricing"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/contact-us"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : null}

        <div className="flex items-center space-x-4">
          {!isMobile ? (
            <>
              <Button variant="ghost" className="hidden md:inline-flex">
                Log in
              </Button>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
              >
                Get Started
              </Button>
            </>
          ) : (
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[80vh]">
                <DrawerHeader className="flex justify-end">
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="px-4 py-2 flex flex-col space-y-4">
                  <Link 
                    to="/" 
                    className="text-lg font-medium hover:text-purple-600 transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about-us" 
                    className="text-lg font-medium hover:text-purple-600 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/subjects/mathematics" 
                    className="text-lg font-medium hover:text-purple-600 transition-colors"
                  >
                    Subjects
                  </Link>
                  <Link 
                    to="/courses" 
                    className="text-lg font-medium hover:text-purple-600 transition-colors"
                  >
                    Courses
                  </Link>
                  <Link 
                    to="/teachers" 
                    className="text-lg font-medium hover:text-purple-600 transition-colors"
                  >
                    Teachers
                  </Link>
                  <Link 
                    to="/how-it-works" 
                    className="text-lg font-medium hover:text-purple-600 transition-colors"
                  >
                    How It Works
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="text-lg font-medium hover:text-purple-600 transition-colors"
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/contact-us" 
                    className="text-lg font-medium hover:text-purple-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <div className="pt-4 flex flex-col space-y-2">
                    <Button variant="outline">Log in</Button>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
                      Get Started
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const subjects = [
  {
    title: "Mathematics",
    description: "From algebra to calculus, master mathematical concepts",
    href: "/subjects/mathematics",
  },
  {
    title: "Languages",
    description: "Learn English, Spanish, French, and more",
    href: "/subjects/languages",
  },
  {
    title: "Sciences",
    description: "Physics, Chemistry, and Biology made simple",
    href: "/subjects/sciences",
  },
  {
    title: "Computer Science",
    description: "Programming, web development, and more",
    href: "/subjects/computer-science",
  },
];

export default Header;
