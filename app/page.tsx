"use client";

import { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  Heart,
  Phone,
  MessageCircle,
  Filter,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Settings,
  Fuel,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import Image from "next/image";

export default function YallaMotorClone() {
  const [createAlert, setCreateAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAd, setShowAd] = useState(true);
  const [adFixed, setAdFixed] = useState(false);
  const [adWidth, setAdWidth] = useState(320); // Default width
  const [adLeft, setAdLeft] = useState(0); // Ad left position


  
const [marginRight, setMarginRight] = useState("0");

useEffect(() => {
  const handleResize = () => {
    const isLargeScreen = window.innerWidth >= 1024; // Tailwind's 'lg' breakpoint
    setMarginRight(showAd && isLargeScreen ? `${adWidth + 16}px` : "0");
  };

  window.addEventListener("resize", handleResize);
  handleResize(); // Run once

  return () => window.removeEventListener("resize", handleResize);
}, [showAd, adWidth]);

  useEffect(() => {
    const handleScroll = () => {
      const createAlertElement = document.querySelector("[data-create-alert]")as HTMLElement | null;
      const popularBrandsElement = document.querySelector(
        "[data-popular-brands]"
      )as HTMLElement | null;

      if (!createAlertElement || !popularBrandsElement) return;

      // Get the width and position of create alert element
      const alertWidth =  createAlertElement.offsetWidth;
      const alertLeft = createAlertElement.offsetLeft;

      setAdWidth(alertWidth);
      setAdLeft(alertLeft);

      const scrollY = window.scrollY;
      const createAlertBottom =
        createAlertElement.offsetTop + createAlertElement.offsetHeight;
      const popularBrandsTop = popularBrandsElement.offsetTop;

      // Show ad and make it fixed when scrolled past create alert
      if (scrollY >= createAlertBottom) {
        setAdFixed(true);
        setShowAd(true);
      } else {
        setAdFixed(false);
        setShowAd(true);
      }

      // Hide ad when Popular brands section is reached
      if (scrollY >= popularBrandsTop - window.innerHeight) {
        setShowAd(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Also handle resize
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const carListings = [
    {
      id: 1,
      featured: true,
      image: "/placeholder.svg?height=200&width=300",
      price: "136,999",
      dealType: "Great Deal",
      dealColor: "green",
      title: "Used BMW X6 xDrive40i 2021",
      description:
        "BMW X6 Xdrive40i 2021 AWD | AGMC Warranty & Full Service History | GCC Specs BMW X6 Xdrive40i 2021 AWD - Blue Car BMW X6 Xdr...",
      location: "Dubai",
      mileage: "179,000",
      year: "2021",
      transmission: "Automatic",
      fuel: "Petrol",
      specs: "GCC Specs",
      images: 10,
      badges: ["Can be exported", "Urgent"],
    },
    {
      id: 2,
      featured: true,
      image: "/placeholder.svg?height=200&width=300",
      price: "208,999",
      dealType: "Fair Deal",
      dealColor: "orange",
      title: "Used Mercedes-Benz C-Class C 200 2024",
      description:
        "Mercedes Benz C 200 Premium 2024 | Brand New Condition | Under Warranty & Service Contract Mercedes Benz C 200 2024 Car Detail:- Make:...",
      location: "Dubai",
      mileage: "10,031",
      year: "2024",
      transmission: "Automatic",
      fuel: "Petrol",
      specs: "GCC Specs",
      images: 10,
      badges: ["Can be exported", "Urgent"],
    },
    {
      id: 3,
      featured: false,
      image: "/placeholder.svg?height=200&width=300",
      price: "95,500",
      dealType: "Great Deal",
      dealColor: "green",
      title: "Used Toyota Camry 2020",
      description:
        "Toyota Camry 2020 in excellent condition with full service history. Well maintained vehicle with low mileage...",
      location: "Abu Dhabi",
      mileage: "45,000",
      year: "2020",
      transmission: "Automatic",
      fuel: "Petrol",
      specs: "GCC Specs",
      images: 8,
      badges: ["Can be exported"],
    },
    {
      id: 4,
      featured: true,
      image: "/placeholder.svg?height=200&width=300",
      price: "155,000",
      dealType: "Fair Deal",
      dealColor: "orange",
      title: "Used Audi Q5 2022",
      description:
        "Audi Q5 2022 Quattro with premium package. Excellent condition with warranty coverage remaining...",
      location: "Sharjah",
      mileage: "25,000",
      year: "2022",
      transmission: "Automatic",
      fuel: "Petrol",
      specs: "GCC Specs",
      images: 12,
      badges: ["Can be exported", "Urgent"],
    },
    {
      id: 5,
      featured: false,
      image: "/placeholder.svg?height=200&width=300",
      price: "75,000",
      dealType: "Great Deal",
      dealColor: "green",
      title: "Used Honda Accord 2019",
      description:
        "Honda Accord 2019 with excellent fuel economy and reliability. Perfect for daily commuting...",
      location: "Dubai",
      mileage: "65,000",
      year: "2019",
      transmission: "CVT",
      fuel: "Petrol",
      specs: "GCC Specs",
      images: 6,
      badges: ["Can be exported"],
    },
    {
      id: 6,
      featured: true,
      image: "/placeholder.svg?height=200&width=300",
      price: "320,000",
      dealType: "Fair Deal",
      dealColor: "orange",
      title: "Used Porsche Macan 2023",
      description:
        "Porsche Macan 2023 S with sport package. Like new condition with full warranty coverage...",
      location: "Dubai",
      mileage: "8,500",
      year: "2023",
      transmission: "Automatic",
      fuel: "Petrol",
      specs: "GCC Specs",
      images: 15,
      badges: ["Can be exported", "Urgent"],
    },
  ];

  const trustedCars = [
    {
      id: 1,
      image: "/placeholder.svg?height=120&width=160",
      name: "BMW X5",
      price: "185,000",
      location: "Dubai",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=120&width=160",
      name: "Mercedes C-Class",
      price: "95,000",
      location: "Abu Dhabi",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=120&width=160",
      name: "Audi Q7",
      price: "220,000",
      location: "Sharjah",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=120&width=160",
      name: "Toyota Camry",
      price: "75,000",
      location: "Dubai",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=120&width=160",
      name: "Honda Accord",
      price: "65,000",
      location: "Ajman",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=120&width=160",
      name: "Nissan Altima",
      price: "55,000",
      location: "Dubai",
    },
    {
      id: 7,
      image: "/placeholder.svg?height=120&width=160",
      name: "Lexus RX",
      price: "195,000",
      location: "Dubai",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=120&width=160",
      name: "Infiniti Q50",
      price: "125,000",
      location: "Sharjah",
    },
    {
      id: 9,
      image: "/placeholder.svg?height=120&width=160",
      name: "Cadillac XT5",
      price: "165,000",
      location: "Abu Dhabi",
    },
  ];

  const services = [
    {
      id: 1,
      image: "/placeholder.svg?height=80&width=80",
      title: "CAR INSPECTION",
      description: "Get a car inspected by our team experts",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=80&width=80",
      title: "CAR VALUATION",
      description: "Get accurate market value for your car",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=80&width=80",
      title: "CAR FINANCING",
      description: "Easy financing options for your dream car",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=80&width=80",
      title: "CAR INSURANCE",
      description: "Comprehensive insurance coverage",
    },
  ];

  const popularBrands = [
    { id: 1, image: "/placeholder.svg?height=60&width=60", name: "BMW" },
    {
      id: 2,
      image: "/placeholder.svg?height=60&width=60",
      name: "Mercedes-Benz",
    },
    { id: 3, image: "/placeholder.svg?height=60&width=60", name: "Audi" },
    { id: 4, image: "/placeholder.svg?height=60&width=60", name: "Toyota" },
    { id: 5, image: "/placeholder.svg?height=60&width=60", name: "Honda" },
    { id: 6, image: "/placeholder.svg?height=60&width=60", name: "Nissan" },
    { id: 7, image: "/placeholder.svg?height=60&width=60", name: "Hyundai" },
    { id: 8, image: "/placeholder.svg?height=60&width=60", name: "Ford" },
  ];

  const searchCategories = {
    "Used Cars": [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Ajman",
      "Ras Al Khaimah",
      "Fujairah",
    ],
    "Used cars by budget": [
      "Under 50,000 AED",
      "50,000 - 100,000 AED",
      "100,000 - 200,000 AED",
      "Above 200,000 AED",
    ],
    "Used cars Body Shape": [
      "Sedan",
      "SUV",
      "Hatchback",
      "Coupe",
      "Convertible",
      "Pickup",
    ],
    "Mileage range": [
      "0 - 50,000 km",
      "50,000 - 100,000 km",
      "100,000 - 150,000 km",
      "Above 150,000 km",
    ],
    "By year": [
      "2020-2024",
      "2015-2019",
      "2010-2014",
      "2005-2009",
      "2000-2004",
    ],
    "Used chinese cars": ["BYD", "Geely", "Chery", "Great Wall", "MG", "Haval"],
    "Popular used cars brands": [
      "BMW",
      "Mercedes-Benz",
      "Audi",
      "Toyota",
      "Honda",
      "Nissan",
      "Hyundai",
      "Ford",
    ],
  };

  const renderCarCard = (car: any) => (
    <Card
      key={car.id}
      className="overflow-hidden mb-8 shadow-lg rounded-2xl border"
    >
      <CardContent className="p-0">
        <div className="relative flex flex-col lg:flex-row">
          {/* Car Image Section */}
          <div className="relative w-full lg:w-80 h-60 lg:h-60 p-2">
            {car.featured && (
              <Badge className="absolute top-3 left-3 bg-pink-600 text-white z-10 rounded-md">
                FEATURED
              </Badge>
            )}
            <Image
              src={car.image || "/placeholder.svg"}
              alt={car.title}
              className="w-full h-full object-cover rounded-md "
              width={100}
              height={100}
            />
          </div>

          {/* Car Details */}
          <div className="flex-1 p-4 sm:p-6 bg-white ">
            <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl font-bold text-[#124d99]">
                    AED {car.price}
                  </span>
                  <Badge
                    className={`${
                      car.dealColor === "green"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    } font-semibold text-md`}
                  >
                    {car.dealType}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {car.title}
                </h3>
                <p className="text-gray-600 text-md mt-1 line-clamp-2">
                  {car.description}
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col gap-2 w-full sm:w-auto sm:min-w-[10rem]">
                <Button className="bg-[#124d99] hover:bg-blue-700 text-white flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Show Number</span>
                </Button>
                <Button className="bg-[#25d342] hover:bg-green-600 text-white flex items-center justify-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>

            {/* Specs Rows */}
            <div className="space-y-2 text-lg text-black font-semibold">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{car.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>🛣️</span>
                  <span>{car.mileage}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{car.year}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-1">
                  <Settings className="w-4 h-4" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Fuel className="w-4 h-4" />
                  <span>{car.fuel}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Tag className="w-4 h-4" />
                  <span>{car.specs}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 text-black w-80">
          <div className="flex items-center justify-between text-md">
            <div className="flex items-center space-x-1 text-white bg-[#0000007a] p-2 rounded-md">
              <span>📷</span>
              <span>{car.images} photos</span>
            </div>
            <Button
  variant="ghost"
  size="sm"
  className="group text-gray-500 hover:bg-white p-2 bg-white rounded-full"
  style={{
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  }}
>
  <Heart
    className="w-4 h-4 transition-all duration-200 group-hover:fill-red-600 group-hover:stroke-red-600"
    fill="none"
    stroke="currentColor"
  />
</Button>
          </div>
        </div>
        <hr className="mt-[5px] mx-2" />
        <div className="flex justify-between  p-2">
          <div className="flex items-center flex-wrap gap-2 mt-2 ">
            {car.badges.map((badge: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className={`text-sm ${
                  badge === "Urgent"
                    ? "bg-[#F0F0F0] text-black hover:bg-[#F0F0F0]"
                    : "bg-[#497285] text-white hover:bg-[#497285]"
                } rounded-sm`}
              >
                {badge}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-center bg-gray-100 w-40 rounded-md  p-2">
            <div className="flex items-center space-x-2">
              <Checkbox id={`compare-${car.id}`} />
              <label
                htmlFor={`compare-${car.id}`}
                className="text-sm text-gray-800 font-semibold cursor-pointer"
              >
                Compare
              </label>
            </div>
          </div>
        </div>

        <hr className="mt-[5px] mx-2" />
        <p className="text-md mt-2 leading-snug p-2">
          Have a similar{" "}
          <span className="">
            {car.title.split(" ")[1]} {car.title.split(" ")[2]}
          </span>{" "}
          to sell in <span className="">{car.location}</span>?{" "}
          <a href="#" className="underline font-medium text-blue-600">
            Sell it yourself !{" "}
          </a>
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Country */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#124d99] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">YM</span>
                </div>
                <span className="text-xl font-bold text-[#124d99]">
                  YallaMotor
                </span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <span className="text-2xl">🇦🇪</span>
                <span>UAE</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-sm text-gray-600 hidden sm:block">
                العربية
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-[#124d99] relative"
              >
                Offers
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 mx-0 rounded-none my-[-10px]">
                  New
                </Badge>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#124d99]">
                New
              </a>
              <a href="#" className="text-gray-700 hover:text-[#124d99]">
                Used
              </a>
              <a href="#" className="text-gray-700 hover:text-[#124d99]">
                Electric
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#124d99] relative"
              >
                Chinese
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-none my-[-10px]">
                  New
                </Badge>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#124d99]">
                Blog
              </a>
              <a href="#" className="text-gray-700 hover:text-[#124d99]">
                Services
              </a>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button className="bg-[#25d342] hover:bg-green-600 text-white text-sm px-3 py-2">
                Sell My Car
              </Button>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <a href="#" className="text-[#124d99] hover:underline">
            Home
          </a>
          <span>{">"}</span>
          <a href="#" className="text-[#124d99] hover:underline">
            Used Cars
          </a>
          <span>{">"}</span>
          <span>34827 Used cars for sale in UAE</span>
        </div>
      </div>

      {/* Search Filters */}
      <div className="w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                <SelectItem value="sharjah">Sharjah</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input placeholder="Select car make/brand" className="pl-10" />
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input placeholder="Select Model" className="pl-10" />
            </div>

            <Button className="bg-[#124d99] hover:bg-blue-700 text-white">
              Search
            </Button>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-50000">0 - 50,000 AED</SelectItem>
                <SelectItem value="50000-100000">
                  50,000 - 100,000 AED
                </SelectItem>
                <SelectItem value="100000-200000">
                  100,000 - 200,000 AED
                </SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Year Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2020-2024">2020 - 2024</SelectItem>
                <SelectItem value="2015-2019">2015 - 2019</SelectItem>
                <SelectItem value="2010-2014">2010 - 2014</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Mileage Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-50000">0 - 50,000 km</SelectItem>
                <SelectItem value="50000-100000">
                  50,000 - 100,000 km
                </SelectItem>
                <SelectItem value="100000-200000">
                  100,000 - 200,000 km
                </SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Body Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="hatchback">Hatchback</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              className="flex items-center space-x-2 bg-transparent"
            >
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">More Filters</span>
            </Button>

            <Button variant="ghost" className="text-[#124d99]">
              Clear All
            </Button>
          </div>
        </div>
      </div>

      <div className="w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start justify-between bg-gray-100 p-4 rounded-lg mb-6 gap-4">
          <div className="text-sm text-gray-600">
            <strong className="text-3xl text-black">
              34827 Used cars for sale in UAE{" "}
            </strong>
            <br />
            <p className="mt-[15px] text-xl">
              34827 used cars for sale found. Check{" "}
              <Link className="text-blue-700" href="#">
                Certified Pre-owned
              </Link>
              ,{" "}
              <Link className="text-blue-700" href="#">
                New
              </Link>
              , and{" "}
              <Link className="text-blue-700" href="#">
                Used cars
              </Link>{" "}
              on YallaMotor.
            </p>
            <br />
            <br />
            Showing <strong>1 - 12</strong> of <strong>34,827</strong> Used Cars
          </div>

          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div className="flex items-center space-x-2 text-sm">
              <span>Sort:</span>
              <Select defaultValue="price-low-high">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low-high">
                    Price Low {">"} High
                  </SelectItem>
                  <SelectItem value="price-high-low">
                    Price High {">"} Low
                  </SelectItem>
                  <SelectItem value="year-new-old">
                    Year New {">"} Old
                  </SelectItem>
                  <SelectItem value="mileage-low-high">
                    Mileage Low {">"} High
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div
              className="bg-white p-3 rounded-lg border-t-4 border-[#124d99] w-full sm:w-auto"
              data-create-alert
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-lg text-sm">Create Alert</span>
                <Switch
                  checked={createAlert}
                  onCheckedChange={setCreateAlert}
                />
              </div>
              <p className="text-md text-gray-600">
                Would you like to receive similar cars by email?
              </p>
            </div>
          </div>
        </div>

        {/* Google Ad Simulation - Sticky behavior with alignment */}
        {showAd && (
          <div
            className={`${
              adFixed ? "fixed" : "absolute"
            } bg-white border shadow-lg z-40 hidden lg:block rounded-lg mx-3.5 `}
            style={{
              top: adFixed ? "0" : "auto",
              right: `20px`,
              height: "100vh",
              width: `${adWidth}px`,
            }}
          >
            <div className="p-4 h-full flex flex-col">
              <div className="text-xs text-gray-500 mb-2">Advertisement</div>
              <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📱</div>
                  <div className="text-sm font-medium">Google Ad Space</div>
                  <div className="text-xs">Aligned with Create Alert</div>
                  <div className="text-xs mt-2">Sticky Ad Simulation</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Container - Width constrained and with right margin for ad */}
        <div
          className="max-w-6xl "
          style={{ marginRight }}
        >
          {/* First 3 Car Listings */}
          <div className="mb-8">
            {carListings.slice(0, 3).map(renderCarCard)}
          </div>

          {/* Trusted Cars Section */}
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6 mb-8 relative">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
              Trusted Cars
            </h2>
            <h4 className="text-xl text-gray-400 text-center mb-6">
              To Ensure you Buy with Confidence
            </h4>

            {/* Left Arrow */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#124d99] border-[#124d99] bg-white z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Right Arrow */}
            <Button
              variant="outline"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#124d99] border-[#124d99] bg-white z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-8">
              {trustedCars.slice(0, 3).map((car) => (
                <Card key={car.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <Image
                    width={100}
                    height={100}
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                    <h3 className="font-semibold mb-1">{car.name}</h3>
                    <p className="text-lg font-bold text-[#124d99] mb-1">
                      AED {car.price}
                    </p>
                    <p className="text-sm text-gray-600">{car.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Three Car Cards after Trusted Cars */}
          <div className="mb-8">
            {carListings.slice(0, 3).map(renderCarCard)}
          </div>




          <div className="relative overflow-hidden bg-gray-200 rounded-2xl p-10 mb-12 shadow-md border border-gray-200">
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#124d99] opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4 leading-tight">
            Do you want to sell your car for <span className="text-[#124d99]">FREE ?</span> 
            </h2>
            <p className="text-gray-700 text-center mb-10 max-w-xl mx-auto text-base">
            We have everything that makes it easier for you to sell your car on our platform quickly

            </p>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1">
                <Image
                width={100}
                height={100}
                  src="/placeholder.svg?height=300&width=400"
                  alt="Sell your car"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    "Sell your car 100% free on YallaMotor",
                    "200+ Cars Sold Daily",
                    "115,000+ Happy Sellers",
                    "500,000+ Monthly Buyers",
                  ].map((text, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 animate-fade-in"
                    >
                      <div className="flex-shrink-0 w-6 h-6 text-green-600">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-800 text-lg">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Button className="bg-[#25d342] hover:bg-green-600 text-white px-10 py-4 text-md rounded-lg shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg">
                SELL YOUR CAR FOR FREE
              </Button>
            </div>
          </div>


          {/* Second 3 Car Listings */}
          <div className="mb-8">
            {carListings.slice(3, 6).map(renderCarCard)}
          </div>

          {/* YallaMotor Services Section */}
          <div
            className="py-8 mb-8 rounded-lg"
            style={{ backgroundColor: "#676767" }}
          >
            <div className="px-6">
              <h2 className="text-2xl font-bold mb-6 text-center text-white">
                YallaMotor Services
              </h2>
              <h2 className="text-xl mb-6 text-center text-white">
              Everything you need to make your car buying journey hassle free
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Card key={service.id} className="bg-white">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <Image
                      width={100}
                      height={100}
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {service.description}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-[#124d99] border-[#124d99] bg-transparent"
                        >
                          Explore More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Last Car Listing */}
          <div className="mb-8">
            {renderCarCard(carListings[0])}
            {renderCarCard(carListings[1])}
            {renderCarCard(carListings[2])}
          </div>

          {/* Pagination */}
          <div className="bg-transparent p-6 mb-8">
            <div className="rounded-lg p-6 bg-transparent">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center space-x-1 bg-white border rounded-lg p-2">
                  <Button
                    variant="outline"
                    className="bg-[#124d99] hover:bg-blue-700 text-white border-[#124d99] px-3 py-2 border-0"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-[#124d99] hover:bg-blue-700 text-white border-[#124d99] px-3 py-2 border-0"
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-100 px-3 py-2 bg-transparent border-0"
                  >
                    2
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-100 px-3 py-2 bg-transparent border-0"
                  >
                    3
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-100 px-3 py-2 bg-transparent border-0"
                  >
                    4
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-100 px-3 py-2 bg-transparent border-0"
                  >
                    5
                  </Button>
                  <span className="text-gray-500 px-2">…</span>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-100 px-3 py-2 bg-transparent border-0"
                  >
                    2598
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-[#124d99] hover:bg-blue-700 text-white border-[#124d99] px-3 py-2 border-0"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-sm text-gray-600">
                  1 - 12 of 34,827 Used Cars
                </div>
              </div>
            </div>
          </div>

          {/* People also search for Section */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              People also search for
            </h2>
            <div className="space-y-6">
              {Object.entries(searchCategories).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-[#124d99] hover:border-blue-300"
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular brands in UAE Section */}
          <div className="bg-white rounded-lg p-6 mb-8" >
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Popular brands in UAE - Prices, Specs & Features
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
              {popularBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex flex-col items-center p-6 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <Image
                  width={100}
                  height={100}
                    src={brand.image || "/placeholder.svg"}
                    alt={brand.name}
                    className="w-16 h-16 object-contain mb-3"
                  />
                  <span className="text-base font-medium text-center">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                variant="outline"
                className="text-[#124d99] border-[#124d99] bg-transparent"
              >
                Show More
              </Button>
            </div>
          </div>

          {/* Footer */}
        </div>
      </div>

      {/* Footer - Full width */}
      <footer className="bg-gray-800 text-white py-12 mt-16 w-full" data-popular-brands>
        <div className="w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#124d99] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">YM</span>
                </div>
                <span className="text-xl font-bold text-blue-400">
                  YallaMotor
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                Your trusted partner for buying and selling cars in the UAE.
                Find the best deals on used cars.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Used Cars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    New Cars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Car Financing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Car Insurance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Car Inspection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Car Valuation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sell Your Car
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📞 +971 4 123 4567</li>
                <li>✉️ info@yallamotor.com</li>
                <li>📍 Dubai, UAE</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 YallaMotor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
