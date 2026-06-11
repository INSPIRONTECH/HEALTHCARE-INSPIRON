# HEALTHCARE INSPIRON

### Marketing Landing Page & Public Information Portal — Open Source Front-End

[![Website](https://img.shields.io/badge/healthcare.inspiron.tech-00D2FF?style=for-the-badge&logo=vercel&logoColor=white)](https://healthcare.inspiron.tech)
[![Stack](https://img.shields.io/badge/Stack-Next.js%2015%20%C2%B7%20React%2019%20%C2%B7%20TypeScript-0D9488?style=flat-square)](https://nextjs.org)
[![Deploy](https://img.shields.io/badge/Vercel-DEPLOYED-FFD700?style=flat-square&logo=vercel)](https://vercel.com)
[![Developer](https://img.shields.io/badge/by-INSPIRON%20TECH-FFD700?style=flat-square)](https://inspiron.tech)

> **"Your lab. Your doctors. Your data."**
>
> This is the public marketing site and documentation portal for **HEALTHCARE INSPIRON**, Bangladesh's first private-sector Laboratory Information System (LIS) connecting diagnostic labs directly to the DGHS Shared Health Record (SHR) via FHIR R4.

---

## Overview

This repository contains the front-end code for the public-facing marketing site located at [healthcare.inspiron.tech](https://healthcare.inspiron.tech). It serves as the primary informational landing page, showcasing:

- **Mindray BC-20 Interfacing** — Features and workflows of the auto-interfacing TCP bridge.
- **DGHS SHR Integration** — Explanation of the national healthcare data compliance.
- **Doctor Referral Commissions** — Dashboard details for referring practitioners.
- **Pricing & Tier structure** — Subscriptions for medical laboratories of all sizes.

The core LIS application (monorepo containing the private portal, TCP bridge, and database configuration) is proprietary and lives in a separate, secure vault (`HEALTHCARE-INSPIRON-CORE`).

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

---

## Local Development

To run the landing page locally:

```bash
# 1. Clone the repository
git clone https://github.com/INSPIRONTECH/HEALTHCARE-INSPIRON.git
cd HEALTHCARE-INSPIRON

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

---

## Developer & Licensing

Designed and built by **INSPIRON TECH** | Dhaka, Bangladesh.
- **Website**: [inspiron.tech](https://inspiron.tech)
- **Email**: [hello@inspiron.tech](mailto:hello@inspiron.tech)
- **WhatsApp**: [+880 1719-300849](https://wa.me/8801719300849)

This repository is licensed under the MIT License. See [LICENSE](LICENSE) (if present) for details. The commercial LIS platform itself remains fully proprietary under copyright of INSPIRON TECH.
