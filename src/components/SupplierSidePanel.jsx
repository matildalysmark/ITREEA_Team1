{/*

import React from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  FileText, 
  Download 
} from "lucide-react";

export default function SupplierSidePanel() {
  const timelineEvents = [
    {
      date: "02 OCT",
      title: "ISO 14001 evidence verified",
      subtitle: "Validated by Marcus Chen",
    },
    {
      date: "28 SEP",
      title: "Q3 performance data received",
      subtitle: "Automated intake · SAP Ariba",
    },
    {
      date: "17 SEP",
      title: "Facility capacity updated",
      subtitle: "Luleå smelter · +12,000 t/yr",
    },
  ];

  const certifications = [
    { name: "ISO 14001", validity: "Valid to Mar 2028", status: "success" },
    { name: "ISO 9001", validity: "Valid to Jan 2027", status: "success" },
    { name: "ASI Performance", validity: "Valid to Dec 2026", status: "warning" },
    { name: "ISO 45001", validity: "Valid to Sep 2027", status: "success" },
  ];

  const documents = [
    { name: "Master supply agreement.pdf", meta: "Contract · 2.4 MB" },
    { name: "2026 ESG evidence pack.zip", meta: "Evidence · 18.2 MB" },
    { name: "Q3 performance review.pdf", meta: "Performance · 1.8 MB" },
  ];

  return (
    <aside className="supplier-right-sidebar">
      {/* 1. Timeline Card */}
      <div className="dashboard-panel-card sidebar-widget">
        <div className="widget-header-row">
          <div>
            <h3 className="panel-title">Timeline</h3>
            <span className="panel-caption">Recent supplier activity</span>
          </div>
          <button className="widget-action-link">
            <span>View all</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="timeline-list">
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {idx !== timelineEvents.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{event.date}</span>
                <h4 className="timeline-title">{event.title}</h4>
                <p className="timeline-subtitle">{event.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Certifications Card */}
      <div className="dashboard-panel-card sidebar-widget">
        <div className="widget-header-row">
          <div>
            <h3 className="panel-title">Certifications</h3>
            <span className="panel-caption">4 active · 1 renewal due</span>
          </div>
        </div>

        <div className="cert-list">
          {certifications.map((cert) => (
            <div key={cert.name} className="cert-item">
              <div className={`cert-icon-box ${cert.status === "warning" ? "icon-warning" : "icon-success"}`}>
                {cert.status === "warning" ? <Award size={18} /> : <ShieldCheck size={18} />}
              </div>
              <div className="cert-details">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-validity">{cert.validity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Documents Card */}
      <div className="dashboard-panel-card sidebar-widget">
        <div className="widget-header-row">
          <div>
            <h3 className="panel-title">Documents</h3>
            <span className="panel-caption">18 files</span>
          </div>
          <button className="widget-action-link">
            <span>Open library</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="doc-list">
          {documents.map((doc) => (
            <div key={doc.name} className="doc-item">
              <div className="doc-icon-box">
                <FileText size={17} />
              </div>
              <div className="doc-details">
                <span className="doc-name">{doc.name}</span>
                <span className="doc-meta">{doc.meta}</span>
              </div>
              <button className="doc-download-btn" aria-label="Download document">
                <Download size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

*/}