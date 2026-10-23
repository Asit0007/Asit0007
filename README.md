<h1 align="center">Hey, I'm Asit Minz <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px"></h1>

<p align="center">
  <b>Builder-explainer of AI systems, from an operator's chair.</b><br>
  <sub>Production experience, not tutorials · 4+ yrs running hybrid infra at Microland (Windows/Linux, VMware, Azure) → now building AI systems solo, in public</sub>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/asitminz/"><img src="https://img.shields.io/badge/LinkedIn-asitminz-0A66C2?style=flat&logo=linkedin&logoColor=white"/></a>
  <a href="mailto:asitminz007@gmail.com"><img src="https://img.shields.io/badge/Email-asitminz007@gmail.com-EA4335?style=flat&logo=gmail&logoColor=white"/></a>
  <a href="https://blogs.asitminz.com"><img src="https://img.shields.io/badge/Blog-blogs.asitminz.com-c84b11?style=flat&logo=rss&logoColor=white"/></a>
  <a href="https://asitminz.com"><img src="https://img.shields.io/badge/Portfolio-asitminz.com-0f0f0e?style=flat&logo=vercel&logoColor=white"/></a>
  <img src="https://asit0007.vercel.app/api/badge" alt="Profile Views" />
</p>

<img src="https://asit0007.vercel.app/api/tracker" width="1" height="1" alt="" />

---

## What I Do

I spend my days as a System Administrator at Microland, keeping a hybrid enterprise estate running — 2,000+ Windows and Linux servers, VMware, a slice of Azure — through L2/L3 on-call, monthly patch cycles and DR drills: the unglamorous end of the field where you learn what things actually do when they break. On nights and weekends I point that same operator's discipline at AI systems: building them solo, under hard constraints, and writing down what actually happens when they run — cost, latency, failure modes, what breaks. [Read the build logs →](https://blogs.asitminz.com)

**Currently pursuing:** HashiCorp Certified Terraform Associate · Available for freelance DevOps/Cloud work

<p align="center">
  <img alt="Coding GIF" src="./images/code.gif" style="width: 100%; height: 40%;" />
</p>

---

## 🔧 Technical Stack

| Domain | Tools |
|---|---|
| **AI Systems** | Multi-provider LLM chains (Gemini · Groq · OpenRouter · Mistral and other OpenAI-compatible free tiers, ranked by model intelligence) · Cloudflare Workers AI (FLUX) · Hugging Face Spaces · Node/Express · TypeScript · Python · SQLite job orchestration |
| **CI/CD & Automation** | GitHub Actions · Bash · PowerShell · launchd |
| **Infrastructure as Code** | Terraform (AWS · OCI) · cloud-init |
| **Containers** | Docker (multi-stage builds) · Docker Compose |
| **Cloud** | Azure (AZ-104 ✓) · AWS (EC2 · IAM · CloudWatch · S3) · OCI · DigitalOcean |
| **OS & Systems** | Linux (RHEL · CentOS · Ubuntu · Debian) · Windows Server 2016–2022 · Active Directory |
| **Virtualization** | VMware vSphere |
| **Monitoring** | AWS CloudWatch (incl. CloudWatch Agent) · Azure Monitor · Telegram alerting |
| **Scripting & Dev** | Python · Bash · PowerShell · Go · TypeScript · NGINX · Git |

---

## 🚀 Featured Projects

**AI systems**

### [ContentPipe](https://github.com/Asit0007/ContentPipe) — News Story → Video Brief
> **Node · Express · Vite/React · TypeScript · Multi-provider LLM chain · Cloudflare Workers AI · Hugging Face Spaces**

Turns a news story and its source links into a production-ready video brief: researched dossier, narrative plan, scene-by-scene script, image and image-to-video prompts, narration direction, citations.

- Text generation walks a chain of free models ranked by intelligence across several providers — no single vendor's free-tier quota stops the pipeline
- Strict mode for automated callers: quota/overload returns a real 429/503 + `Retry-After`, never silently degraded content
- An interrupted run resumes from an on-disk checkpoint on the identical retry — no wasted quota
- Research refuses sources it cannot decode, separates a page's stated date from the date it was read, archives the exact source text and reports how many key facts are genuinely cited; every fetched URL is SSRF-checked on each redirect hop

---

### [CyberPipe](https://github.com/Asit0007/CyberPipe) — Durable Orchestrator: Brief → Video Edit
> **Python · SQLite (WAL) · Telegram · launchd · TypeScript media CLI**

Runs ContentPipe, then a media stage, as one unattended job instead of a chain of one-shot script calls.

- SQLite-backed job state machine with a 60-second scheduler — a crash or an exhausted free quota resumes exactly where it stopped
- Telegram approval gates at the stills, narration and final-cut stages, with approve / regenerate / redo-just-these-scenes — no generated script or media advances without a human decision
- Pauses when the free video-generation quota runs out and resumes when it is expected back, without spending a retry attempt
- The media stage (a private TypeScript CLI) produces stills, two-voice narration loudness-matched to -16 LUFS and an FCPXML timeline that opens in DaVinci Resolve, under a hard $0 spend guard that refuses unknown or paid providers

---

**Operator track record**

### [CloudPulse](https://github.com/Asit0007/CloudPulse) — Real-Time Cloud Monitoring Dashboard
> **Go · AWS · Docker · Terraform · GitHub Actions · HashiCorp Vault**

An end-to-end DevOps project built from scratch — not a tutorial, not a follow-along. *(AWS infrastructure decommissioned Aug 2026; code and Terraform remain in the repo.)*

- Go REST API querying CloudWatch (AWS SDK v2, `AWS/EC2` and `CWAgent` namespaces) and the GitHub API, serving the static frontend from the same binary
- AWS environment provisioned with Terraform: EC2 instance, security group, IAM role, policy and instance profile, `user_data` bootstrap
- GitHub Actions pipeline: build → push to Docker Hub → redeploy over SSH with a post-deploy image prune
- GitHub token fetched at boot from HashiCorp Vault (KV v2, policy-scoped token); no long-lived AWS access keys on the host — credentials come from the EC2 instance profile
- Fails closed at startup if Vault or the GitHub client can't initialise, rather than running in a degraded state

---

### Magento_DeployKit — Linux Server Bootstrap Scripts
> **Bash · Debian 12 · NGINX · PHP-FPM · MySQL · Elasticsearch · Varnish**

A set of ordered Bash scripts that bring up a nine-service Magento 2 stack on a single Debian 12 host — a reference build for dev/staging, not a production one-shot installer.

- NGINX as an SSL-terminating reverse proxy with a PHP-FPM upstream; Varnish full-page cache on HTTP
- Measured page weight dropping from 3.0 MB cold to 77.4 kB warm (~97%) across the Varnish, NGINX and PHP-FPM stack
- MySQL privilege separation (application and read-only users) and a dedicated PHP-FPM pool
- Wrote a full engineering reference cataloguing the project's own known defects

---

### [QuantBot](https://github.com/Asit0007/QuantBot) — Automated Crypto Trading System
> **Python · Docker Compose · Dash/Plotly · Terraform (OCI) · GitHub Actions · Cloudflare Tunnel**

A personal algorithmic trading bot for BTC/USDT on Binance Futures, paper-trading on an Oracle Cloud ARM instance with a [live dashboard](https://quantbot.asitminz.com).

- Signal: RSI divergence + MACD cross + volume spike on 15-minute candles, 5× isolated margin, validated across ~20 backtests spanning 6.9 years of bull, bear and chop
- Four-service Docker Compose stack from one multi-stage Dockerfile; flat files on a named volume instead of a database, by design
- Public HTTPS with zero inbound ports via Cloudflare Tunnel; Dash dashboard bound to localhost behind NGINX
- Six Terraform resources provision the OCI network and ARM instance in one apply; six-stage GitHub Actions deploy with an open-position safety gate
- Paper mode runs the same code path as live; a go-live gate requires 20+ paper trades within 20% of backtested expectancy before real capital

---

## 🏅 Certifications

- **Microsoft Certified: Azure Administrator Associate (AZ-104)** — Microsoft
- **HashiCorp Certified: Terraform Associate** — *In Progress*
- Generative AI Mastermind — Outskill
- Ansible for the Absolute Beginner — Hands-On DevOps (Udemy)
- AWS Node Runner — High-Availability AWS Server Provisioning (Binance Academy)
- Postman Essential Training (LinkedIn Learning)

---

## 💼 Open to Freelance

Looking for DevOps and Cloud engineering gigs — infrastructure automation, CI/CD pipelines, cloud migrations, IaC setup, Linux server provisioning.

📩 **[asitminz007@gmail.com](mailto:asitminz007@gmail.com)** · **[Book a call on LinkedIn](https://www.linkedin.com/in/asitminz/)**

---

## ⏱️ This Week I Spent My Time On

<!--START_SECTION:waka-->

```txt
Markdown   1 hr 37 mins          ████████████▒░░░░░░░░░░░░   49.72 %
Other      1 hr 17 mins          █████████▓░░░░░░░░░░░░░░░   39.29 %
Bash       13 mins               █▓░░░░░░░░░░░░░░░░░░░░░░░   06.93 %
Text       7 mins                █░░░░░░░░░░░░░░░░░░░░░░░░   03.58 %
Makefile   0 secs                ░░░░░░░░░░░░░░░░░░░░░░░░░   00.23 %
```

<!--END_SECTION:waka-->

---

## 📊 GitHub Stats

<p align="center">
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api?username=Asit0007&show_icons=true&theme=algolia&hide_border=true&hide=issues,contribs"/>
</p>

<p align="center">
  <!--REPO_STATS:START-->
  <img alt="Stars across my repos" src="https://img.shields.io/badge/stars-2-00aeff?labelColor=050f2c&color=00aeff&style=flat-square&logo=github&logoColor=00aeff"/>
  <img alt="Forks of my repos by others" src="https://img.shields.io/badge/forks%20by%20others-2-00aeff?labelColor=050f2c&color=00aeff&style=flat-square&logo=git&logoColor=00aeff"/>
  <!--REPO_STATS:END-->
</p>
