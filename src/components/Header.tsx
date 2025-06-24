'use client'

import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsLarge } from "@/hooks/use-large";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const isLarge = useIsLarge();

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-background border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <Image src={"/logo.png"} alt="logo" width={20} height={20} className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-bold bg-gradient-to-r dark:from-navy-200 from-navy-500 dark:to-navy-400 to-navy-900 bg-clip-text text-transparent">
            NextGen AI Tutors
          </span>
        </Link>

        {!isLarge ? (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
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
                    href="/teachers"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Teachers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blog"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about-us"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact-us"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/packages"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Packages
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : null}

        <div className="flex items-center space-x-4">
          {!isLarge ? (
            <>
              <ModeToggle />
              <Button 
                variant="ghost" 
                className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900"
              >
                Log in
              </Button>
              <Button 
                className="bg-white text-navy-600 border border-navy-600 hover:bg-navy-50"
              >
                Sign Up
              </Button>
            </>
          ) : (
            <Drawer>
              <ModeToggle />
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[80vh]">
                <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
                <DrawerDescription className="sr-only">
                  Site Navigation and User actions with authentication options
                </DrawerDescription>
                <DrawerHeader className="flex justify-end">
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="px-4 py-2 flex flex-col space-y-4">
                  <Link 
                    href="/" 
                    className="text-lg font-medium hover:text-navy-600 transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/subjects/mathematics" 
                    className="text-lg font-medium hover:text-navy-600 transition-colors"
                  >
                    Subjects
                  </Link>
                  <Link 
                    href="/teachers" 
                    className="text-lg font-medium hover:text-navy-600 transition-colors"
                  >
                    Teachers
                  </Link>
                  <Link 
                    href="/blog" 
                    className="text-lg font-medium hover:text-navy-600 transition-colors"
                  >
                    Blog
                  </Link>
                  <Link 
                    href="/about-us" 
                    className="text-lg font-medium hover:text-navy-600 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/contact-us" 
                    className="text-lg font-medium hover:text-navy-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/packages" 
                    className="text-lg font-medium hover:text-navy-600 transition-colors"
                  >
                    Packages
                  </Link>
                  <div className="pt-4 flex flex-col space-y-2">
                    <Button 
                      className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900"
                    >
                      Log in
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-navy-600 text-navy-600 hover:bg-navy-50"
                    >
                      Sign Up
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
    title: "Coding and AI",
    description: "Programming, web development, and artificial intelligence",
    href: "/subjects/computer-science",
  },
];

export default Header;
