var map = L.map("map").setView([27.49372, -31.02192], 2);
L.tileLayer(
  "https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=2hTOFLPdXApzq9gVeMKq",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        Titolo: "Digitization of urban planning procedures",
        Tipo: "GIS",
        Info: "<a href='urban-planning.html'>More info about the project</a>",
        Place: "Bobbio (PC)",
      },
      geometry: {
        type: "Point",
        coordinates: [9.386646416351239, 44.766409549701486],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Architecture for Smart City",
        Tipo: "Collaborative Mapping",
        Info: "<a href='architecture-for-smart-city.html'>More info about the project</a>",
        Place: "Piacenza (PC)",
      },
      geometry: {
        type: "Point",
        coordinates: [9.702981381013617, 45.046844058296053],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Mobile editing for the Piacenza road cadastre",
        Tipo: "GIS",
        Info: "<a href='catasto-strade.html' target='_blank'>More info about the project</a>",
        Place: "Piacenza (PC)",
      },
      geometry: {
        type: "Point",
        coordinates: [9.69019, 45.05261],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo:
          "Geo-tagged social media post patterns in the attendance of fair",
        Tipo: "GIS",
        Info: "<a href='expo2015-social-media-geodata.html'>More info about the project</a>",
        Place: "Milano",
      },
      geometry: {
        type: "Point",
        coordinates: [9.092491149904767, 45.52182212001324],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Dam Inspection - Diga di Nocelle",
        Tipo: "3D Inspections",
        Info: "<a href='dams.html'>More info about the project</a>",
        Place: "San Giovanni in Fiore (CS)",
      },
      geometry: {
        type: "Point",
        coordinates: [16.545566879100647, 39.24516091291531],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Dam Inspection - Diga di Poverella",
        Tipo: "3D Inspections",
        Info: "<a href='dams.html'>More info about the project</a>",
        Place: "Parenti (CS)",
      },
      geometry: {
        type: "Point",
        coordinates: [16.491047749937643, 39.178522673523048],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Bridge Inspection - Lugagnano Val d'Arda",
        Tipo: "3D Inspections",
        Info: "<a href='bridges.html'>More info about the project</a>",
        Place: "Lugagnano Val d'Arda (PC)",
      },
      geometry: {
        type: "Point",
        coordinates: [9.831730034511873, 44.819952627653393],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Bridge Inspection - Castell'Arquato",
        Tipo: "3D Inspections",
        Info: "<a href='bridges.html'>More info about the project</a>",
        Place: "Castell'Arquato (PC)",
      },
      geometry: {
        type: "Point",
        coordinates: [9.872823933605064, 44.852933546431977],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Bridge Inspection",
        Tipo: "3D Inspections",
        Info: "<a href='portfolio/index.html#bridges'>More info about the project</a>",
        Place: "Cortemaggiore (PC)",
      },
      geometry: {
        type: "Point",
        coordinates: [9.937719272289108, 44.994817141733499],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Collaborative mapping of slums",
        Tipo: "Collaborative Mapping",
        Info: "<a href='#Bogota'>More info about the project</a>",
        Place: "Bogotà and Soacha",
      },
      geometry: {
        type: "Point",
        coordinates: [-74.175827083958978, 4.57657253841696],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Bridge inspection",
        Tipo: "3D Inspections",
        Info: "<a href='#bridges'>More info about the project</a>",
        Place: "Carpaneto Piacentino (PC)",
      },
      geometry: {
        type: "Point",
        coordinates: [9.764709370733787, 44.920009843124618],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Bridge inspection",
        Tipo: "3D Inspections",
        Info: "<a href='#bridges'>More info about the project</a>",
        Place: "Lumezzane (BS)",
      },
      geometry: {
        type: "Point",
        coordinates: [10.306938, 45.647308],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo:
          "Natural disaster impact analysis parsing geo-tagged social media post",
        Tipo: "GIS",
        Info: "<a href='hurricane-social-media-geodata.html'>More info about the project</a>",
        Place: "Carolinas (US)",
      },
      geometry: {
        type: "Point",
        coordinates: [-77.91312, 34.22761],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Interactive maps for IlTermopolio",
        Tipo: "Spatial Data Vizualisation",
        Info: "<a href='#termopolio'>More info about the project</a>",
        Place: "Pisa",
      },
      geometry: {
        type: "Point",
        coordinates: [10.4029, 43.71412],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Castello Farnese",
        Tipo: "3D Inspections",
        Info: "<a href='cultural-heritage.html'>More info about the project</a>",
        Place: "Piacenza",
      },
      geometry: {
        type: "Point",
        coordinates: [9.67966, 45.05],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Galleria Ricci Oddi",
        Tipo: "3D Inspections",
        Info: "<a href='cultural-heritage.html'>More info about the project</a>",
        Place: "Piacenza",
      },
      geometry: {
        type: "Point",
        coordinates: [9.692063, 45.048372],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Bridge Inspection",
        Tipo: "3D Inspections",
        Info: "<a href='bridges.html'>More info about the project</a>",
        Place: "Sulzano (BS)",
      },
      geometry: {
        type: "Point",
        coordinates: [10.103372, 45.683735],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Bridge Inspection",
        Tipo: "3D Inspections",
        Info: "<a href='bridges.html'>More info about the project</a>",
        Place: "Sulzano (BS)",
      },
      geometry: {
        type: "Point",
        coordinates: [10.106617, 45.685579],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "Bridge Inspection",
        Tipo: "3D Inspections",
        Info: "<a href='bridges.html'>More info about the project</a>",
        Place: "Borno (BS)",
      },
      geometry: {
        type: "Point",
        coordinates: [10.208222, 45.949205],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "FOSS4G EU 2024",
        Tipo: "Conferences and Talks",
        Info: "<a href='#'>More info about the contribution</a>",
        Place: "Tartu (Estonia)",
      },
      geometry: {
        type: "Point",
        coordinates: [26.716245, 58.373414],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "XR & AI Summer School 2024",
        Tipo: "Conferences and Talks",
        Info: "<a href='#'>More info about the contribution</a>",
        Place: "Matera (Italia)",
      },
      geometry: {
        type: "Point",
        coordinates: [16.608292, 40.667405],
      },
    },
    {
      type: "Feature",
      properties: {
        Titolo: "EGU 2023-2024",
        Tipo: "Conferences and Talks",
        Info: "<a href='#'>More info about the contribution</a>",
        Place: "Vienna (Austria)",
      },
      geometry: {
        type: "Point",
        coordinates: [16.414368, 48.235328],
      },
    },
    {
        type: "Feature",
        properties: {
          Titolo: "ISPRS GeoSpatialWeek 2023",
          Tipo: "Conferences and Talks",
          Info: "<a href='#'>More info about the contribution</a>",
          Place: "Cairo (Egypt)",
        },
        geometry: {
          type: "Point",
          coordinates: [31.231980, 30.042895],
        },
      },
  ],
};

L.geoJSON(geojson, {
  pointToLayer: function (feature, latlng) {
    var tipo = feature.properties.Tipo;
    var markerColor = getMarkerColor(tipo); // Function to determine marker color based on type

    return L.circleMarker(latlng, {
      radius: 5,
      fillColor: markerColor,
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    });
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(
      "<b>" +
        feature.properties.Titolo +
        "</b>" +
        "</br>" +
        "<i>" +
        feature.properties.Tipo +
        "</i> - " +
        feature.properties.Place +
        "</br>" +
        feature.properties.Info
    );
  },
}).addTo(map);

// Function to determine marker color based on type
function getMarkerColor(tipo) {
  switch (tipo) {
    case "GIS":
      return "green";
    case "Collaborative Mapping":
      return "blue";
    case "3D Inspections":
      return "red";
    case "Spatial Data Vizualisation":
      return "orange";
    case "Conferences and Talks":
      return "purple";
    // Add more cases as needed
    default:
      return "gray"; // Default color
  }
}
