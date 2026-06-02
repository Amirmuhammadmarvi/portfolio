export const data = {
  name: { first: 'Amir Mohammad', last: 'Marwi' },
  title: 'Junior Security Engineer',
  tagline: 'Security Enthusiast',
  summary: 'Security-minded engineer with hands-on experience in network infrastructure, system administration, and vulnerability assessment. Focused on identifying weaknesses before attackers do, automating security controls, and building systems that are reliable and resilient by design.',
  location: 'Messina, Italy',
  email: 'amirmuhammadmarvi@gmail.com',
  phone: '+39 351 653 9693',
  github: 'https://github.com/amirmuhammadmarvi',
  linkedin: 'https://linkedin.com/in/amir-mohammad-marwi',

  stats: [
    { value: '1+', label: 'Years Experience' },
    { value: '2', label: 'Security Projects' },
    { value: '23', label: 'Ports Mapped' },
    { value: '3', label: 'Languages Spoken' },
  ],

  skills: [
    {
      category: 'Security',
      icon: '🛡',
      color: 'var(--accent)',
      items: ['Vulnerability Assessment', 'Penetration Testing', 'Burp Suite', 'Payload Injection', 'Firewall Configuration', 'Network Hardening', 'XSS / SQLi', 'CVE Exploitation', 'PortSwigger Academy'],
    },
    {
      category: 'Networking',
      icon: '🌐',
      color: 'var(--accent2)',
      items: ['MikroTik RouterOS', 'Cisco Switching', 'VLANs', 'Policy-Based Routing', 'Load Balancing', 'Failover', 'STP', 'Subnetting', 'VoIP / SIP'],
    },
    {
      category: 'Tools',
      icon: '🔧',
      color: 'var(--accent3)',
      items: ['Nmap', 'Nikto', 'Burp Suite', 'Netcat', 'UFW', 'Wireshark', 'VMware ESXi', 'Metasploitable 2'],
    },
    {
      category: 'Programming',
      icon: '💻',
      color: 'var(--accent)',
      items: ['Python', 'JavaScript', 'C', 'Bash / Shell', 'Linux CLI', 'argparse', 'requests'],
    },
    {
      category: 'Systems',
      icon: '⚙',
      color: 'var(--accent2)',
      items: ['Linux Administration', 'Windows Server', 'VMware ESXi', 'RAID Configuration', 'iLO Management'],
    },
  ],

  projects: [
    {
      id: '01',
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
      stack: ['Python', 'argparse', 'requests', 'Burp Suite'],
      link: 'https://github.com/amirmuhammadmarvi',
    },
    {
      id: '02',
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
      link: 'https://github.com/amirmuhammadmarvi',
    },
  ],

  experience: [
    {
      role: 'Network Engineer',
      company: 'Sabanet',
      period: 'Jan 2025 – Dec 2025',
      location: 'Iran',
      bullets: [
        'Designed and deployed VLAN segmentation across MikroTik and Cisco infrastructure to improve network isolation and reduce lateral movement risk.',
        'Configured policy-based routing, load balancing, and failover systems to ensure high availability across critical network paths.',
        'Diagnosed and resolved Layer 2 and Layer 3 failures including STP conflicts and routing loops within required service windows.',
        'Deployed and optimized virtual machines in VMware ESXi environments with resource allocation and performance tuning.',
        'Managed VoIP infrastructure including SIP trunk configuration, IVR setup, and call routing.',
        'Assisted in server infrastructure setup including RAID configuration and iLO remote management for 24/7 availability.',
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
    { icon: '🏆', name: 'CEH — Certified Ethical Hacker', sub: 'Self-Study · Covering penetration testing methodology, vulnerability analysis, and common attack techniques.' },
    { icon: '🔬', name: 'PortSwigger Web Security Academy', sub: 'Completed Web Cache Deception lab using Burp Suite in a hands-on environment.' },
    { icon: '🌐', name: 'MikroTik & Cisco Networking', sub: 'Practical experience from real-world configuration of routers and switches in production environments.' },
    { icon: '🐧', name: 'Linux Administration', sub: 'Hands-on experience with CLI, system administration tasks, and basic security hardening.' },
    { icon: '🐍', name: 'Python & JavaScript', sub: 'Self-taught through practical projects including security tooling, scripting, and automation.' },
  ],

  languages: [
    { name: 'English', flag: '🇬🇧', level: 'IELTS 6.5 · Professional' },
    { name: 'Persian', flag: '🇮🇷', level: 'Native' },
    { name: 'Turkish', flag: '🇹🇷', level: 'Native' },
  ],
}
