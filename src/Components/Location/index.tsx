import React, { useEffect, useState } from "react";
import './style.css'

interface LocationData {
  city: string | null;
  state: string | null;
}

  const Location: React.FC = () => {
  const [locationData, setLocationData] = useState<LocationData>({
    city: null,
    state: null
  });

  useEffect(() => {
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`);
        const data = await response.json();

        
        let state = data.principalSubdivision || "Não foi possível determinar o estado.";
        
        
        const stateAbbreviations: { [key: string]: string } = {
          "Acre": "AC",
          "Alagoas": "AL",
          "Amapá": "AP",
          "Amazonas": "AM",
          "Bahia": "BA",
          "Ceará": "CE",
          "Distrito Federal": "DF",
          "Espírito Santo": "ES",
          "Goiás": "GO",
          "Maranhão": "MA",
          "Mato Grosso": "MT",
          "Mato Grosso do Sul": "MS",
          "Minas Gerais": "MG",
          "Pará": "PA",
          "Paraíba": "PB",
          "Paraná": "PR",
          "Pernambuco": "PE",
          "Piauí": "PI",
          "Rio de Janeiro": "RJ",
          "Rio Grande do Norte": "RN",
          "Rio Grande do Sul": "RS",
          "Rondônia": "RO",
          "Roraima": "RR",
          "Santa Catarina": "SC",
          "São Paulo": "SP",
          "Sergipe": "SE",
          "Tocantins": "TO"
        };

        if (state in stateAbbreviations) {
          state = stateAbbreviations[state];
        }

        setLocationData({
          city: data.locality || "Não conseguimos determinar sua cidade",
          state: state
        });
      }, () => {
        setLocationData({
          city: "ops, não foi possível obter sua localização",
          state: null
        });
      });
    } else {
      setLocationData({
        city: "Seu navegador não suporta está função.",
        state: null
      });
    }
  }, []);

  return (
    <div className="city">
      <p>{locationData.city}</p>
      <p>, {locationData.state}</p>
    </div>
  );
};

export default Location;
