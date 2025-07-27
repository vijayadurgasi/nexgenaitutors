"use client";

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
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const isLarge = useIsLarge();
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-gray-200/50 dark:border-navy-700/50 shadow-sm">
      {!isMobile ? (
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-3xl font-bold bg-gradient-to-r dark:from-navy-200 from-navy-500 dark:to-navy-400 to-navy-900 bg-clip-text text-transparent">
                NextGenAI Tutors
              </span>
              <span className="text-sm font-medium bg-gradient-to-r dark:from-navy-200 from-navy-500 dark:to-navy-400 to-navy-900 bg-clip-text text-transparent">
                Empowering Young Minds with Smarter Learning
              </span>
            </div>
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
                    <ul className="grid w-[250px] gap-2 p-2 md:w-[300px] md:grid-cols-1 lg:w-[350px]">
                      {subjects.map((subject) => (
                        <ListItem
                          key={subject.title}
                          title={subject.title}
                          href={subject.href}
                        >
                          {subject.description}
                        </ListItem>
                      ))}
                      <li className="col-span-full">
                        <Link
                          href="/subjects"
                          className="block w-full text-center rounded-md bg-navy-700 px-2 py-1 text-sm font-medium text-white hover:bg-accent-dark"
                        >
                          All Subjects
                        </Link>
                      </li>
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
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900"
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-white text-navy-600 border border-navy-600 hover:bg-navy-50">
                    Sign Up
                  </Button>
                </Link>
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
                    <DrawerClose asChild>
                      <Link
                        href="/"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        {" "}
                        Home{" "}
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/subjects"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        Subjects
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/teachers"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        Teachers
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/blog"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        Blog
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/about-us"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        About Us
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/contact-us"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        Contact Us
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/packages"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        Packages
                      </Link>
                    </DrawerClose>
                    <div className="pt-4 flex flex-col space-y-2">
                      <DrawerClose asChild>
                        <Link href="/login">
                          <Button className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 w-full">
                            Log in
                          </Button>
                        </Link>
                      </DrawerClose>
                      <DrawerClose asChild>
                        <Link href="/signup">
                          <Button
                            variant="outline"
                            className="border-navy-600 text-navy-600 hover:bg-navy-50 w-full"
                          >
                            Sign Up
                          </Button>
                        </Link>
                      </DrawerClose>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            )}
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-3 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            {!isLarge ? (
              <>
                <ModeToggle />
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900"
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-white text-navy-600 border border-navy-600 hover:bg-navy-50">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <Drawer>
                <ModeToggle />
                <Link href="/" className="flex-col items-center space-x-2">
                  <div className="flex justify-center">
                    <Image
                      src={"/logo.png"}
                      alt="logo"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center leading-tight">
                    <span className="text-2xl font-bold bg-gradient-to-r dark:from-navy-200 from-navy-500 dark:to-navy-400 to-navy-900 bg-clip-text text-transparent text-center">
                      NextGenAI Tutors
                    </span>
                    <span className="text-sm font-medium bg-gradient-to-r dark:from-navy-200 from-navy-500 dark:to-navy-400 to-navy-900 bg-clip-text text-transparent text-center">
                      Empowering Young Minds with Smarter Learning
                    </span>
                  </div>
                </Link>
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
                    <DrawerClose asChild>
                      <Link
                        href="/"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        {" "}
                        Home{" "}
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/subjects"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        Subjects
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/teachers"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        Teachers
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/blog"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        Blog
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/about-us"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        About Us
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/contact-us"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        Contact Us
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        href="/packages"
                        className="text-lg font-medium hover:text-navy-600 transition-colors"
                      >
                        Packages
                      </Link>
                    </DrawerClose>
                    <div className="pt-4 flex flex-col space-y-2">
                      <DrawerClose asChild>
                        <Link href="/login">
                          <Button className="bg-gradient-to-r from-navy-600 to-navy-800 text-white hover:from-navy-700 hover:to-navy-900 w-full">
                            Log in
                          </Button>
                        </Link>
                      </DrawerClose>
                      <DrawerClose asChild>
                        <Link href="/signup">
                          <Button
                            variant="outline"
                            className="border-navy-600 text-navy-600 hover:bg-navy-50 w-full"
                          >
                            Sign Up
                          </Button>
                        </Link>
                      </DrawerClose>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href}
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
      </Link>
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
