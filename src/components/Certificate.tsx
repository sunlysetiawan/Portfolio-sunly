import { useState } from "react";
import { Eye } from "lucide-react";
import { ExternalLink } from "lucide-react";

const Certificate = () => {
  const [openCert, setOpenCert] = useState<string | null>(null);

  const certificates = [
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      provider: "Cisco",
      badge: "/Cisco/SRE/sre.png",
      file: "/Cisco/SRE/sre-1.png",
      link: "https://www.credly.com/badges/a54316b8-783a-4b88-98ad-ea540abc9a1d/public_url",
      date: "Jan 2024",
    },
    {
      title: "CCNA: Introduction to Networks",
      provider: "Cisco",
      badge: "/Cisco/Networking/networking.png",
      file: "/Cisco/Networking/networking-1.png",
      link: "https://www.credly.com/badges/6564a330-9a38-45da-8254-598b98a3b69e/public_url",
      date: "Jan 2024",
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      provider: "Amazon Web Services",
      badge: "/AWS/cloud-foundations.png",
      file: "/AWS/Cloud_Foundations-1.png",
      link: "https://www.credly.com/badges/711d542f-fcba-4873-ac18-a3220180c7fa/public_url",
      date: "Jan 2024",
    },
    {
      title: "Network Security",
      provider: "Cisco",
      badge: "/Cisco/NWS/nws.png",
      file: "/Cisco/NWS/nws-1.png",
      link: "https://www.credly.com/badges/5c7883ba-d180-4cf6-b069-bc9a69e5e6a7/public_url",
      date: "May 2024",
    },
    {
      title: "AWS Academy Graduate - Cloud Architecting",
      provider: "Amazon Web Services",
      badge: "/AWS/cloud-architecting.png",
      file: "/AWS/Cloud_Architecting-1.png",
      link: "https://www.credly.com/badges/47e8ac30-3765-4c35-a6db-714896f21e35/public_url",
      date: "Apr 2025",
    },
    {
      title: "AWS Academy Graduate - Cloud Developing",
      provider: "Amazon Web Services",
      badge: "/AWS/cloud-developing.png",
      file: "/AWS/Cloud_Developing-1.png",
      link: "https://www.credly.com/badges/139dce8a-0d5e-41ca-883c-caa8aa81b1bb/public_url",
      date: "Aug 2025",
    },
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      provider: "Cisco",
      badge: "Cisco/Enterprise/ena.png",
      file: "/Cisco/Enterprise/ena-1.png",
      link: "https://www.credly.com/badges/1a1ca857-e71a-4938-b911-db3db228d4e3/public_url",
      date: "Sep 2025",
    },
  ];

  // Convert month-year string into a sortable date
  const parseDate = (dateStr: string) => {
    const [month, year] = dateStr.split(" ");
    return new Date(`${month} 1, ${year}`);
  };

  // Sort certificates by newest first date
  const sortedCertificates = [...certificates].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );

  return (
    <section id="certificates" className="certificates">
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>
      <div className="certificate-list grid gap-4">
        {sortedCertificates.map((cert, index) => (
          <div
            key={index}
            className="certificate-card relative border p-4 rounded-lg shadow"
          >
            <div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenCert(cert.file);
                }}
                title="Preview Certificate"
              >
                <Eye className="w-5 h-5" />
              </a>
            </div>

            {cert.badge && (
              <img
                src={cert.badge}
                alt={`${cert.provider} badge`}
                className="badge-img w-16 h-16 mb-2"
              />
            )}

            <div className="certificate-info">
              <div className="certificate-title">
                <h3 className="">{cert.title}</h3>
              </div>

              <p className="">by {cert.provider}</p>
              <p className="">Issued: {cert.date}</p>
            </div>

            <div className="certificate-buttons mt-2">
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-cert"
                >
                  View Certificate
                  <ExternalLink className="" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {openCert && (
        <div
          className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setOpenCert(null)}
        >
          <div
            className="modal-content bg-white p-4 rounded-lg shadow-lg"
            style={{ width: "600px", maxHeight: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn mb-2 text-gray-600 hover:text-red-600"
              onClick={() => setOpenCert(null)}
            >
              ✕
            </button>

            <img
              src={openCert}
              alt="Certificate"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "500px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
