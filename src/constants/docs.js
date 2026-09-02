export const PRODUCT_DOCS = {
  "BOOM-OX": "Boom Ox Literature 4.pdf",
  "BOOM-OX LIQ": "Boom Ox Literature 4.pdf",
  "BOOM OX MACHINE": "Boom Ox Literature 4.pdf",
  "GOLD MAXX": "Revised_Gold MAXX_A4 Leaflet.pdf",
  "HEPATOSHIELD": "Hepatoshield_A4_Leaflet.pdf",
  "G-PROGAIN X": "G-ProGainX_A4 Leaflet.pdf",
  "AZURRO SANI-X": "Azurro SaniX.pdf",
  "BETAIN": null,
  "YAASHGUARD": "YaashGUARD_A4 Leaflet.pdf",
  "E-ENSURE": null,
  "VIRUTRAP": null,
  "PROTEOLICH": null,
};

export const handleDownload = (productName) => {
  const doc = PRODUCT_DOCS[productName.toUpperCase()];
  if (doc) {
    window.open(`/Docs/${doc}`, '_blank');
  } else {
    alert("Document will be updated soon!");
  }
};
