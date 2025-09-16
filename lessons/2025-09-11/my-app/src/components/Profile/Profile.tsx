import "./profile.css"

function Profile() {

  return (
    <>
      <div className="card-profile">
        <div className="card-details">
          <h1>Rico Paum</h1>
          <h3>Huvid/Hobid</h3>
          <ul>
            <li>Programmeerimine</li>
            <li>Videomängud</li>
            <li>Kino/Seriaalid</li>
            <li>Tehnoloogia</li>
            <li>Mototehnika</li>
            <li>Militaartarbe robotid</li>
          </ul>
        </div>
        <div className="card-contact">
          <h3>Võta minuga ühendust:</h3>
          <div id="contact-form">
            <input id="email-form" type="text" placeholder="Sisesta oma email"/>
            <input id="text-form" type="text" placeholder="Kirjuta oma sõnum siia"/>
          </div>
          <button id="button-send" style={{backgroundColor: "darkgreen", fontSize: "medium"}}>Saada!</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
