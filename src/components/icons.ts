import {
  Apple,
  Bug,
  Combine,
  Droplet,
  Flower,
  Flower2,
  HeartHandshake,
  Leaf,
  MapPin,
  ScrollText,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Sprout,
  Sun,
  Trees,
  Users,
  Wheat,
  type LucideIcon,
} from 'lucide-react'

/**
 * Zuordnung von Icon-Namen (aus content.ts) zu lucide-Komponenten.
 * So bleiben Inhalte und Komponenten entkoppelt.
 */
const icons: Record<string, LucideIcon> = {
  Apple,
  Bug,
  Combine,
  Droplet,
  Flower,
  Flower2,
  HeartHandshake,
  Leaf,
  MapPin,
  ScrollText,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Sprout,
  Sun,
  Trees,
  Users,
  Wheat,
}

export function getIcon(name: string): LucideIcon {
  return icons[name] ?? Leaf
}
