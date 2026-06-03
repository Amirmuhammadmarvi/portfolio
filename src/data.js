export const data = {
  name: { first: 'Amir Mohammad', last: 'Marwi' },
  title: 'AI Automation Engineer',
  tagline: 'AI Agents · Automation · Security',
  summary: 'Engineer who builds practical AI-powered automation. I work across Python, LLM APIs, and tool-calling AI agents, backed by a strong foundation in networking, Linux, and security. I turn ideas into working systems — most recently an autonomous AI agent that triages security data from end to end.',
  location: 'Messina, Italy',
  email: 'amirmuhammadmarvi@gmail.com',
  phone: '+39 351 653 9693',
  github: 'https://github.com/amirmuhammadmarvi',
  linkedin: 'https://linkedin.com/in/amir-mohammad-marwi',

  stats: [
    { value: '3', label: 'Projects Built' },
    { value: 'AI', label: 'Agents & Tooling' },
    { value: '1+', label: 'Years Experience' },
    { value: '3', label: 'Languages Spoken' },
  ],

  skills: [
    {
      category: 'AI & Automation',
      icon: '🤖',
      color: 'var(--accent)',
      items: ['LLM APIs (OpenAI-compatible)', 'AI Agents', 'Tool / Function Calling', 'Prompt Engineering', 'REST APIs & Webhooks', 'Workflow Automation', 'JSON', 'Python'],
    },
    {
      category: 'Programming',
      icon: '💻',
      color: 'var(--accent2)',
      items: ['Python', 'JavaScript', 'C', 'Bash / Shell', 'Linux CLI', 'Git', 'requests'],
    },
    {
      category: 'Security',
      icon: '🛡',
      color: 'var(--accent3)',
      items: ['Vulnerability Assessment', 'Penetration Testing', 'Burp Suite', 'OWASP Top 10', 'XSS / SQLi', 'Firewall Hardening', 'CVE Analysis', 'PortSwigger Academy'],
    },
    {
      category: 'Networking',
      icon: '🌐',
      color: 'var(--accent)',
      items: ['MikroTik RouterOS', 'Cisco Switching', 'TCP/IP', 'VLANs', 'Routing', 'Load Balancing', 'Failover', 'VoIP / SIP'],
    },
    {
      category: 'Tools & Systems',
      icon: '🔧',
      color: 'var(--accent2)',
      items: ['Nmap', 'Nikto', 'Wireshark', 'Netcat', 'UFW', 'VMware ESXi', 'Windows Server', 'Linux Admin'],
    },
    {
      category: 'Learning',
      icon: '📚',
      color: 'var(--accent3)',
      items: ['LangChain', 'n8n', 'LangGraph', 'RAG / Vector Databases'],
    },
  ],

  projects: [
    {
      id: '01',
      name: 'AI Security Triage Agent',
      short: 'An autonomous AI agent that triages vulnerability scans using LLM tool-calling and auto-generates remediation reports.',
      description: 'A Python AI agent that takes raw vulnerability scan findings, looks up CVE context, scores risk, and produces a prioritized remediation report — driven by an LLM that autonomously decides which tools to call.',
      highlights: [
        'Real tool-calling agent loop (perceive → decide → act) — the pattern behind LangChain and CrewAI, implemented from scratch',
        'Integrates an OpenAI-compatible LLM API with custom tools: CVE lookup and deterministic risk scoring',
        'Engineered prompt instructions and JSON tool schemas so the agent selects tools autonomously',
        'Generates prioritized P1–P4 remediation reports in Markdown and JSON',
        'Provider-agnostic and offline-capable, with a clean modular architecture (agent, llm, tools, report, cli)',
      ],
      stack: ['Python', 'LLM Tool-Calling', 'OpenAI API', 'Prompt Engineering'],
      link: 'https://github.com/amirmuhammadmarvi/ai-security-triage-agent',
    },
    {
      id: '02',
      name: 'Web Vulnerability Scanner',
      short: 'CLI security tool for detecting XSS & SQLi vulnerabilities with automated JSON reporting.',
      description: 'A modular, CLI-based tool for detecting XSS and SQL Injection vulnerabilities by injecting payloads into URL parameters and analyzing HTTP responses.',
      highlights: [
        'Payload injection engine testing every URL parameter against 30+ real-world XSS and SQLi attack strings',
        'XSS detection via response reflection; SQLi via database error signature matching across MySQL, PostgreSQL, MSSQL, and Oracle',
        'Modular architecture across 4 independent components for easy extension with new vulnerability types',
        'Automatic JSON report generation with timestamps for audit trails',
        'Validated with Burp Suite Repeater to confirm vulnerability behavior and reduce false positives',
      ],
      stack: ['Python', 'requests', 'REST', 'Burp Suite'],
      link: 'https://github.com/amirmuhammadmarvi/web-vuln-scanner',
    },
    {
      id: '03',
      name: 'Network Security Lab',
      short: 'Controlled virtual lab simulating real-world attack and defense scenarios.',
      description: 'A controlled virtual lab using Metasploitable 2 as the intentionally vulnerable target and Ubuntu as the attacker machine — simulating real-world offensive and defensive operations.',
      highlights: [
        'Full network reconnaissance with Nmap — identified 23 open ports with OS fingerprinting',
        'Nikto scan uncovering 18 issues including exposed admin panels and outdated software',
        'Exploited CVE-2011-2523 (vsftpd 2.3.4 backdoor) gaining root shell in under 60 seconds',
        'HTTP traffic interception and analysis with Burp Suite',
        'Host-based firewall hardening with UFW default-deny policy',
      ],
      stack: ['VMware', 'Nmap', 'Nikto', 'Burp Suite', 'UFW', 'Netcat'],
      link: 'https://github.com/amirmuhammadmarvi/network-security-lab',
    },
  ],

  experience: [
    {
      role: 'Network Engineer',
      company: 'Sabanet',
      period: 'Jan 2025 – Dec 2025',
      location: 'Iran',
      bullets: [
        'Configured VLAN segmentation and policy-based routing across MikroTik and Cisco infrastructure, improving isolation, reliability, and high availability.',
        'Deployed and tuned VMware ESXi virtual machines and server infrastructure (RAID, iLO remote management) for 24/7 production availability.',
        'Scripted routine configuration and diagnostics with Bash, resolving complex Layer 2 / Layer 3 failures within strict service windows.',
        'Managed VoIP infrastructure including SIP trunk configuration, IVR setup, and call routing for uninterrupted business communications.',
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor's Degree in Data Analysis",
      school: 'University of Messina',
      location: 'Messina, Italy',
      period: 'Sep 2025 – Present',
      note: 'Focused on statistics, data interpretation, and analytical methods applied to technical and business problem-solving.',
    },
    {
      degree: 'High School Diploma — Database Development & Production',
      school: 'Seyyed Jalal-eddin Ashtiani',
      location: 'Mashhad, Iran',
      period: '2022 – 2025',
      note: 'Studied core concepts of database systems, programming fundamentals, and software development principles.',
    },
  ],

  certifications: [
    { icon: '🤖', name: 'AI Agents & Automation', sub: 'Building AI agents with LLM tool-calling and prompt engineering; currently learning LangChain, n8n, and RAG.' },
    { icon: '🏆', name: 'CEH — Certified Ethical Hacker', sub: 'Self-study · Covering penetration testing methodology, vulnerability analysis, and common attack techniques.' },
    { icon: '🔬', name: 'PortSwigger Web Security Academy', sub: 'Completed Web Cache Deception lab using Burp Suite in a hands-on environment.' },
    { icon: '🌐', name: 'MikroTik & Cisco Networking', sub: 'Practical experience from real-world configuration of routers and switches in production environments.' },
    { icon: '🐧', name: 'Linux Administration', sub: 'Hands-on experience with CLI, system administration tasks, and basic security hardening.' },
  ],

  languages: [
    { name: 'English', flag: '🇬🇧', level: 'IELTS 6.5 · Professional' },
    { name: 'Persian', flag: '🇮🇷', level: 'Native' },
    { name: 'Turkish', flag: '🇹🇷', level: 'Native' },
  ],
}
