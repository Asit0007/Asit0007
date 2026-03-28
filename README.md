<h1 align="center">Hey, I'm Asit Minz <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px"></h1>

<p align="center">
  <b>Infrastructure Engineer → DevOps | CI/CD · IaC · Cloud Automation · Containers</b><br>
  <sub>~4 years at Microland (Azure, VMware, hybrid infra) · Building real DevOps projects on the side · Open to freelance</sub>
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/asitminz/"><img src="https://img.shields.io/badge/LinkedIn-asitminz-0A66C2?style=flat&logo=linkedin&logoColor=white"/></a>
  <a href="/cdn-cgi/l/email-protection#bfdeccd6cbd2d6d1c58f8f88ffd8d2ded6d391dcd0d2"><img src="https://img.shields.io/badge/Email-asitminz007@gmail.com-EA4335?style=flat&logo=gmail&logoColor=white"/></a>
  <a href="https://github.com/Asit0007"><img src="https://komarev.com/ghpvc/?username=Asit0007&color=0A66C2&style=flat&label=Profile+Views"/></a>
</p>

---

## What I Do

I spend my days managing hybrid cloud environments (Azure, VMware, Windows/Linux) for enterprise clients at Microland. On nights and weekends I build DevOps projects end-to-end — from writing Go backends to provisioning AWS infra with Terraform to wiring up GitHub Actions pipelines — to close the gap between operations and engineering.

**Currently pursuing:** HashiCorp Certified Terraform Associate · Available for freelance DevOps/Cloud work

<p align="center">
  <img alt="Coding GIF" src="./images/code.gif" style="width: 100%; height: 40%;" />
</p>

---

## 🔧 Technical Stack

| Domain | Tools |
|---|---|
| **CI/CD & Automation** | GitHub Actions · GitLab CI · Ansible · Bash · PowerShell |
| **Infrastructure as Code** | Terraform (AWS · Azure · OCI) |
| **Containers** | Docker · Docker Compose |
| **Cloud** | Azure (AZ-104 ✓) · AWS (EC2 · IAM · CloudWatch · S3) · OCI · DigitalOcean |
| **OS & Systems** | Linux (RHEL · Ubuntu · Debian) · Windows Server 2016–2022 |
| **Virtualization** | VMware vSphere/ESXi · VDI (Horizon) · Golden Image Management |
| **Monitoring** | AWS CloudWatch · Prometheus · Grafana |
| **Scripting & Dev** | Python · Bash · Go · NGINX · Git |

---

## 🚀 Featured Projects

### [CloudPulse](https://github.com/Asit0007/CloudPulse) — Real-Time Cloud Monitoring Dashboard
> **Go · AWS · Docker · Terraform · GitHub Actions · Prometheus · Grafana**

A production-grade end-to-end DevOps project built from scratch — not a tutorial, not a follow-along.

- Go REST API backend integrating AWS CloudWatch, GitHub API, and HashiCorp Vault for secrets
- All AWS infrastructure (ECS Fargate, ECR, IAM roles, VPC, Security Groups) provisioned via Terraform — zero ClickOps
- GitHub Actions pipeline: build → push to ECR → redeploy ECS on every push to `main`
- Prometheus `/metrics` endpoint scraped by a local Grafana stack for observability beyond CloudWatch
- Enforced IAM least-privilege and environment-variable secret management throughout

---

### [Magento_DeployKit](https://github.com/Asit0007/Magento_DeployKit) — Automated Linux Server Bootstrap Toolkit
> **Bash · Linux · NGINX · PHP 8.2 · MySQL · Elasticsearch · Redis · Varnish**

7 sequential shell scripts that take a bare Debian 12 server to a fully operational Magento 2 stack — in one run.

- Designed a multi-layer caching topology: Varnish fronts HTTP on port 80, NGINX terminates SSL on 443, PHP-FPM runs in a dedicated pool — each concern cleanly separated
- Varnish full-page cache impact: **~97% reduction in data transferred** on warm cache (3.0 MB → 77.4 kB, 1.60s → 910ms on catalog search)
- Redis-backed sessions for atomicity across PHP-FPM restarts; 2 GB swap to prevent OOM kills during Composer/DI compilation
- Deployed live on DigitalOcean (2 vCPU / 4 GB / Bangalore) with HTTPS, Elasticsearch-powered search, and phpMyAdmin on a separate subdomain

---

### [QuantBot](https://github.com/Asit0007/QuantBot) — Automated Crypto Trading System
> **Python · SQLite · Streamlit · Docker · GitHub Actions · Oracle Cloud**

A personal algorithmic trading bot for BTC/USDT on Binance Futures, deployed to OCI Free Tier.

- Multi-gate signal engine (EMA crossover, RSI, volume, ATR volatility filter) running on 15-minute candles at 20× leverage
- Streamlit dashboard with live P&L tracking, RSI Radar tab, trade log, and heartbeat monitoring
- Fully containerised with Docker; CI/CD via GitHub Actions; secrets managed through environment variables
- Paper trading mode with the same code path as live — no separate test codebase

---

## 🏅 Certifications

- **Microsoft Certified: Azure Administrator Associate (AZ-104)** — Microsoft
- **HashiCorp Certified: Terraform Associate** — *In Progress*
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
JavaScript                 1 hr 38 mins          ███████░░░░░░░░░░░░░░░░░░   28.51 %
Bash                       1 hr 7 mins           █████░░░░░░░░░░░░░░░░░░░░   19.60 %
HCL                        38 mins               ██▓░░░░░░░░░░░░░░░░░░░░░░   11.30 %
Terraform                  28 mins               ██░░░░░░░░░░░░░░░░░░░░░░░   08.35 %
YAML                       26 mins               ██░░░░░░░░░░░░░░░░░░░░░░░   07.72 %
```

<!--END_SECTION:waka-->

---

## 📊 GitHub Stats

<p align="center">
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api?username=Asit0007&show_icons=true&theme=algolia&hide_border=true"/>
  <img height
