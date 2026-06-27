/**
 * Einmal-Skript zur Aufbereitung der Original-Imkereifotos fuer das Web.
 * Skaliert auf eine vertretbare Groesse und komprimiert als JPEG.
 *
 * Quelle: feste Upload-Pfade (koennen via SRC_DIR ueberschrieben werden).
 * Ziel:   src/assets/ (Inhaltsbilder) und public/ (Open-Graph-Bild).
 *
 * Aufruf: npm run optimize-images
 */
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { mkdir, access } from 'node:fs/promises'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const SRC_DIR =
  process.env.SRC_DIR ||
  '/root/.claude/uploads/8af61324-9cc6-5596-9609-787da012bbd9'

const assetsDir = join(root, 'src', 'assets')
const publicDir = join(root, 'public')

// Quelldatei -> Zieldatei, maximale laengste Kante, Qualitaet
const jobs = [
  { src: '263aba60-IMG_3115.jpeg', out: join(assetsDir, 'honeycomb-frame.jpg'), max: 1800, q: 80 },
  { src: '431d29b7-IMG_2891.jpeg', out: join(assetsDir, 'bees-on-comb.jpg'), max: 1800, q: 80 },
  { src: 'cfa350ba-IMG_2827.jpeg', out: join(assetsDir, 'honey-filtering.jpg'), max: 1800, q: 80 },
  { src: '263aba60-IMG_3115.jpeg', out: join(publicDir, 'og-image.jpg'), max: 1200, q: 78 },
]

async function run() {
  await mkdir(assetsDir, { recursive: true })
  await mkdir(publicDir, { recursive: true })

  for (const job of jobs) {
    const srcPath = join(SRC_DIR, job.src)
    try {
      await access(srcPath)
    } catch {
      console.error(`! Quelldatei fehlt, uebersprungen: ${srcPath}`)
      continue
    }

    await sharp(srcPath)
      .rotate() // EXIF-Orientierung anwenden
      .resize({ width: job.max, height: job.max, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: job.q, mozjpeg: true })
      .toFile(job.out)

    const meta = await sharp(job.out).metadata()
    console.log(`✓ ${job.out}  ${meta.width}x${meta.height}`)
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
