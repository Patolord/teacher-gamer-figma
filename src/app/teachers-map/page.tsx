"use client";

import { ArrowLeft, MapPin, Users, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

// GeoJSON URL for world map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Dummy teacher data with locations around the world
const teacherLocations = [
  {
    id: 1,
    name: "Sarah Mitchell",
    city: "New York",
    country: "USA",
    coordinates: [-74.006, 40.7128] as [number, number],
    specialty: "Elementary RPG Education",
    students: 120,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sarah",
  },
  {
    id: 2,
    name: "James Chen",
    city: "San Francisco",
    country: "USA",
    coordinates: [-122.4194, 37.7749] as [number, number],
    specialty: "High School Game-Based Learning",
    students: 85,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=James",
  },
  {
    id: 3,
    name: "Emma Watson",
    city: "London",
    country: "United Kingdom",
    coordinates: [-0.1276, 51.5074] as [number, number],
    specialty: "Middle School Narrative Learning",
    students: 95,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Emma",
  },
  {
    id: 4,
    name: "Hans Mueller",
    city: "Berlin",
    country: "Germany",
    coordinates: [13.405, 52.52] as [number, number],
    specialty: "Youth Workshop Facilitator",
    students: 65,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Hans",
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    city: "Tokyo",
    country: "Japan",
    coordinates: [139.6917, 35.6895] as [number, number],
    specialty: "Social-Emotional Learning",
    students: 110,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Yuki",
  },
  {
    id: 6,
    name: "Maria Silva",
    city: "São Paulo",
    country: "Brazil",
    coordinates: [-46.6333, -23.5505] as [number, number],
    specialty: "Creative Storytelling",
    students: 78,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Maria",
  },
  {
    id: 7,
    name: "Olga Petrov",
    city: "Moscow",
    country: "Russia",
    coordinates: [37.6173, 55.7558] as [number, number],
    specialty: "Critical Thinking Games",
    students: 92,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Olga",
  },
  {
    id: 8,
    name: "Ahmed Hassan",
    city: "Cairo",
    country: "Egypt",
    coordinates: [31.2357, 30.0444] as [number, number],
    specialty: "Mindfulness & Gaming",
    students: 45,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ahmed",
  },
  {
    id: 9,
    name: "Sophie Laurent",
    city: "Paris",
    country: "France",
    coordinates: [2.3522, 48.8566] as [number, number],
    specialty: "Collaborative Play",
    students: 88,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sophie",
  },
  {
    id: 10,
    name: "Raj Patel",
    city: "Mumbai",
    country: "India",
    coordinates: [72.8777, 19.076] as [number, number],
    specialty: "Empathy Building",
    students: 130,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Raj",
  },
  {
    id: 11,
    name: "Lisa Anderson",
    city: "Sydney",
    country: "Australia",
    coordinates: [151.2093, -33.8688] as [number, number],
    specialty: "Adventure-Based Learning",
    students: 72,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Lisa",
  },
  {
    id: 12,
    name: "Carlos Mendez",
    city: "Mexico City",
    country: "Mexico",
    coordinates: [-99.1332, 19.4326] as [number, number],
    specialty: "Cultural Storytelling",
    students: 68,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Carlos",
  },
];

type Teacher = (typeof teacherLocations)[number];

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export default function TeachersMapPage() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [hoveredTeacher, setHoveredTeacher] = useState<Teacher | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  const totalTeachers = teacherLocations.length;
  const totalStudents = teacherLocations.reduce((acc, t) => acc + t.students, 0);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.courses}')` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />

      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Title Section */}
        <div className="container mx-auto px-4 py-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Teacher Gamers
            <span className="block text-amber-400">Around the World</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover our global community of educators transforming learning through
            game-based experiences
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-amber-400 mb-1">
                <MapPin className="w-5 h-5" />
                <span className="text-3xl font-bold">{totalTeachers}</span>
              </div>
              <p className="text-white/60 text-sm">Teachers Worldwide</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-amber-400 mb-1">
                <Users className="w-5 h-5" />
                <span className="text-3xl font-bold">{totalStudents}+</span>
              </div>
              <p className="text-white/60 text-sm">Students Impacted</p>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 container mx-auto px-4 pb-8">
          <div className="relative h-[60vh] md:h-[65vh] bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 130,
                center: [0, 30],
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <ZoomableGroup>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#2A2A32"
                        stroke="#3A3A44"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#3A3A44", outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Teacher Markers */}
                {teacherLocations.map((teacher) => (
                  <Marker
                    key={teacher.id}
                    coordinates={teacher.coordinates}
                    onMouseEnter={() => setHoveredTeacher(teacher)}
                    onMouseLeave={() => setHoveredTeacher(null)}
                    onClick={() => setSelectedTeacher(teacher)}
                    style={{ cursor: "pointer" }}
                  >
                    <g transform="translate(-12, -24)">
                      {/* Pulse animation ring */}
                      <circle
                        cx="12"
                        cy="20"
                        r="8"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="2"
                        opacity="0.4"
                        className="animate-ping"
                        style={{ transformOrigin: "12px 20px" }}
                      />
                      {/* Main pin */}
                      <path
                        d="M12 0C7.58 0 4 3.58 4 8c0 5.5 8 16 8 16s8-10.5 8-16c0-4.42-3.58-8-8-8z"
                        fill={
                          hoveredTeacher?.id === teacher.id ||
                          selectedTeacher?.id === teacher.id
                            ? "#F59E0B"
                            : "#D97706"
                        }
                        stroke="#000"
                        strokeWidth="1"
                      />
                      {/* Inner circle */}
                      <circle cx="12" cy="8" r="3" fill="#FFF" />
                    </g>
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>

            {/* Hover Tooltip */}
            {hoveredTeacher && !selectedTeacher && (
              <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm rounded-lg p-3 border border-amber-400/30 pointer-events-none">
                <p className="text-amber-400 font-semibold">{hoveredTeacher.name}</p>
                <p className="text-white/70 text-sm">
                  {hoveredTeacher.city}, {hoveredTeacher.country}
                </p>
              </div>
            )}

            {/* Map Legend */}
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-white/70 text-xs">Teacher Location</span>
              </div>
              <p className="text-white/50 text-xs mt-1">Click marker for details</p>
            </div>
          </div>
        </div>

        {/* Selected Teacher Modal */}
        {selectedTeacher && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedTeacher(null)}
          >
            <div
              className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 max-w-md w-full border border-amber-400/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedTeacher(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400/50 bg-zinc-700">
                    <img
                      src={selectedTeacher.avatar}
                      alt={selectedTeacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 rounded-full p-2">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>

              {/* Teacher Info */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-1">
                  {selectedTeacher.name}
                </h2>
                <p className="text-amber-400 font-medium">
                  {selectedTeacher.city}, {selectedTeacher.country}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/50 text-sm mb-1">Specialty</p>
                  <p className="text-white font-medium">{selectedTeacher.specialty}</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/50 text-sm mb-1">Students Taught</p>
                  <p className="text-white font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    {selectedTeacher.students}+ students
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Button
                className="w-full mt-6 bg-amber-500 hover:bg-amber-400 text-black font-semibold"
                asChild
              >
                <Link href="/contact">Connect with {selectedTeacher.name.split(" ")[0]}</Link>
              </Button>
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="container mx-auto px-4 pb-8">
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 rounded-2xl p-8 border border-amber-400/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Want to Join Our Global Network?
            </h3>
            <p className="text-white/70 mb-6">
              Become a certified Teacher Gamer and transform education in your community
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold"
              asChild
            >
              <Link href="/home#courses-section">Explore Certification Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

