"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, User } from "lucide-react";

const GlobalOffices = () => {
  const [activeTab, setActiveTab] = useState("australia");

  const countries = [
    { id: "australia", name: "Australia", flag: "🇦🇺" },
    { id: "bangladesh", name: "Bangladesh", flag: "🇧🇩" },
    { id: "india", name: "India", flag: "🇮🇳" },
    { id: "nepal", name: "Nepal", flag: "🇳🇵" },
    { id: "sri-lanka", name: "Sri Lanka", flag: "🇱🇰" },
    { id: "bhutan", name: "Bhutan", flag: "🇧🇹" },
  ];

  const offices = {
    australia: [
      {
        city: "Sydney",
        address:
          "Level 14, 3 Parramatta Square, 153 Mcquarie Street, Parramatta NSW 2150",
        phone: "+61284886196",
        contactPerson: "Mr. Gagan Singh",
        email: "gagan@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=-33.825817,151.013054&z=13",
      },
    ],
    bangladesh: [
      {
        city: "Dhaka",
        address:
          "Ahmed Tower, 28 & 30 Kamal Ataturk Ave 6th Floor, Banani, Dhaka, 1213",
        phone: "02 9898 217",
        contactPerson: "Mr. Ameer Khan",
        email: "bangladesh@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=23.793864,90.404721&z=12",
      },
    ],
    india: [
      {
        city: "Ahmedabad",
        address:
          "3 Sripalnagar Society, Opp. Hotel Fortune Landmark Usmanpura, Ahmedabad 380013",
        phone: "+91 79 4904 1900 | +91 99 2583 3318",
        contactPerson: "Mrs. Sonali Mehta",
        email: "contact@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=23.048865,72.571253&z=11",
      },
      {
        city: "Vadodara",
        address:
          "202 OPAL 2, OPP. SBI, NEAR URMI CROSS ROAD, BPC AKOTA ROAD, Vadodara, Gujarat 390020",
        phone: "+91 80003 57634 | +91 9586973393",
        contactPerson: "Ms. Alpana Shah",
        email: "baroda@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=22.302066,73.172967&z=12",
      },
      {
        city: "Chandigarh",
        address:
          "SCO 443-444, 1ST FLOOR Adjacent To Nik Bakers, Sector-35/C, Chandigarh-160022",
        phone: "+91 98886 05958",
        contactPerson: "Mr. Rohit Sethi",
        email: "rohit@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=32.699584,74.858165&z=16",
      },
      {
        city: "Chennai",
        address:
          "Opp Quality Aruna Hotel, 37, Sterling Rd B-1, Seetha Nagar, Nungambakkam, Chennai-600034",
        phone: "+91 91766 07666",
        contactPerson: "Vaasantosh Venkatesan",
        email: "santosh@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=13.065294,80.242217&z=12",
      },
      {
        city: "Delhi",
        address: "7th Floor, Devika Towers, Nehru Place, New Delhi 110019",
        phone: "+91 9811006767",
        contactPerson: "Mr. Karan Singh",
        email: "karan@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=28.547513,77.252383&z=12",
      },
      {
        city: "Ambala",
        address:
          "SCO 19, 1st Floor, Above Noorah Showroom, Prem Nagar, Ambala City-134003, Haryana",
        phone: "+91 90532 11088",
        contactPerson: "Harmeet Singh",
        email: "Harmeet@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=30.368664,76.786534&z=12",
      },
      {
        city: "Karnal",
        address:
          "#1, Atal Park, Ram Mandir Marg, Sector-8, Urban Estate, Karnal-132001, Haryana",
        phone: "+91 9053300707",
        contactPerson: "Vandana Julka",
        email: "vandana@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=29.699995,77.010876&z=12",
      },
      {
        city: "Hyderabad",
        address:
          "Ground Floor, H No.8-2-580/1, Road No 8, Banjara Hills Hyderabad, Telangana 500034",
        phone: "+91 8885566103",
        contactPerson: "Ranjeeth Penchala",
        email: "hyderabad@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=17.417124,78.445271&z=12",
      },
      {
        city: "Jaipur",
        address: "Level 2, 4 Park Street, Sindhi Camp Jaipur, Rajasthan 302001",
        phone: "+91 7015962569",
        contactPerson: "Mr. Sahil Bishnoi",
        email: "jaipur@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=26.920369,75.795683&z=11",
      },
      {
        city: "Jammu",
        address: "House no 120A behind apsara theatre Gandhinagar jammu 180004",
        phone: "9622999770 | 9055000990",
        contactPerson: "Dr. Asif Chowdhary",
        email: "Jammu@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=32.699584,74.858165&z=11",
      },
      {
        city: "Navsari",
        address:
          "Shop no. 1-2, 1st Floor, Trident Lifestyle, Beside Vajpai Garden, Opp Parsi Hospital lane, Navsari, Gujarat-396445",
        phone: "+91 9930804884 | 9825160302",
        contactPerson: "Ms. Shikha N Gupta",
        email: "navsari@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=20.950754,72.936781&z=12",
      },
      {
        city: "Manipal",
        address:
          "F 9, Hotel Central Park, Udupi-Manipal Hwy, Laxmindra Nagar, Adjacent to Inox Cinemas, Udupi, Karnataka 576102",
        phone: "+91 7338643202 | +91 7338671303",
        contactPerson: "Priya K",
        email: "priyak@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=13.349164,74.782902&z=12",
      },
      {
        city: "Mumbai (Borivali)",
        address:
          "1113, Gold Crest Business Center, Lokmanya Tilak Nagar Rd, Maharashtra Nagar, Borivali West, Mumbai-400092",
        phone: "+91 9323890969",
        contactPerson: "Mr. Parag Mehta",
        email: "mumbai@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=19.229426,72.852356&z=12",
      },
      {
        city: "Mumbai (Andheri)",
        address: "315, MORYA ESTATE OPP. INFINITI MALL ANDHERI WEST, MUMBAI",
        phone: "+91 8793728728",
        contactPerson: "Arpita Singh",
        email: "ARPITA@PLANETEDUCATION.INFO",
        mapLink: "https://maps.google.com/maps?ll=19.141291,72.831931&z=19",
      },
      {
        city: "Noida",
        address:
          "316, Third Floor, Wave Silver Tower, Captain Vijyant Thapar Marg, D Block, Pocket D, Sector 18, Noida, UP 201301",
        phone: "+91 98182 81569 | +91 96500 22154",
        contactPerson: "Mr. Pankaj Gupta",
        email: "bmnoida@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=28.589628,77.258223&z=15",
      },
      {
        city: "Bhopal",
        address:
          "131/13 Zone 2 Maharana pratap nagar, Near TIME Coaching Bhopal",
        phone: "9826243535",
        contactPerson: "Mr. Gaurav Marken",
        email: "gaurav@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=23.226978,77.433384&z=22",
      },
      {
        city: "Vidhyanagar",
        address:
          "C/o, Success Overseas, Opp. Old water tank-VTC, Nr. Sardar Patel Statue, Vallabh Vidyanagar-388120, Gujarat",
        phone: "+91 99246 33556 | +91 7211104392",
        contactPerson: "Mr. Mayur Patel",
        email: "mayur@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=22.545546,72.927544&z=16",
      },
    ],
    nepal: [
      {
        city: "Kathmandu",
        address:
          "Level 2, Nepal Medical Association Building, Pradarshani Marg, Kathmandu 44600",
        phone: "+9779851134743",
        contactPerson: "David Shakya",
        email: "david@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=27.702003,85.319235&z=12",
      },
    ],
    "sri-lanka": [
      {
        city: "Colombo",
        address: "4, Saman Mawatha, Nawala Road, Nugegoda, Colombo",
        phone: "+94 77 3066660",
        contactPerson: "Mr. Suren Perera",
        email: "suren@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=6.927079,79.861244&z=12",
      },
    ],
    bhutan: [
      {
        city: "Thimphu",
        address:
          "Ground Floor, Bldg #14, Near Thai Temple, Phenday Lam, Thimphu",
        phone: "+975 2 3759689 | +975 17110503",
        contactPerson: "Chencho Tshering",
        email: "bhutan@planeteducation.info",
        mapLink: "https://maps.google.com/maps?ll=27.471586,89.638611&z=10",
      },
    ],
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
            <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              Global Presence
            </span>
            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Our Office Locations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Visit us at any of our offices across multiple countries. Our expert
            counselors are ready to guide you on your study abroad journey.
          </p>
        </div>

        {/* Country Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-12 bg-slate-100 p-1 h-auto gap-1">
            {countries.map((country) => (
              <TabsTrigger
                key={country.id}
                value={country.id}
                className="text-sm font-semibold py-3 data-[state=active]:bg-slate-900 data-[state=active]:text-white"
              >
                <span className="mr-2 text-lg">{country.flag}</span>
                <span className="hidden sm:inline">{country.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(offices).map((countryKey) => (
            <TabsContent key={countryKey} value={countryKey} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offices[countryKey].map((office, index) => (
                  <Card
                    key={index}
                    className="border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      {/* City Name */}
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {office.city}
                      </h3>

                      {/* Contact Details */}
                      <div className="space-y-4">
                        {/* Address */}
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {office.address}
                          </p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                          <a
                            href={`tel:${office.phone.split("|")[0].trim()}`}
                            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>

                        {/* Contact Person */}
                        <div className="flex items-start gap-3">
                          <User className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                          <p className="text-sm font-semibold text-slate-900">
                            {office.contactPerson}
                          </p>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-sm text-slate-600 hover:text-slate-900 transition-colors break-all"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>

                      {/* Map Link */}
                      <a
                        href={office.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 block w-full text-center py-3 border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-semibold text-sm transition-all duration-300 rounded"
                      >
                        View on Map
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default GlobalOffices;
