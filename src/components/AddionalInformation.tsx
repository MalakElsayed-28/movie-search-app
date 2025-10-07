interface InfoProps {
    released: string;
    country: string;
    language:string;
    production:string;
}

export default function AdditionalInformation({released, country, language, production}:InfoProps){
    return(
        <div className="item span-3">
          <h3>Additional Information</h3>
          <div id="moreInfo">
            <div>
              <p>Released: {released}</p>
              <p>Language: {language}</p>
            </div>
            <div>
              <p>Country: {country}</p>
              <p>Production:{production}</p>
            </div>
          </div>
        </div>
    );
}  